import crypto from 'node:crypto';
import { evaluatePreDispatch } from '../governance/pre-dispatch-validator.js';
import { evaluateMutationLeaseUse } from '../governance/mutation-lease.js';

export const HOST_STATES = Object.freeze([
  'HOST_IDLE', 'HOST_GOVERNANCE_DENIED', 'HOST_MUTATION_LEASE_REQUIRED',
  'HOST_DELIVERY_READY', 'HOST_WAITING_WORKER_RESULT', 'HOST_WORKER_RESULT_READY',
  'HOST_ARCHITECT_TRIGGER_READY', 'HOST_WAITING_ARCHITECT',
  'HOST_RECONCILIATION_REQUIRED', 'HOST_CONTROL_SUPPRESSED', 'HOST_CIRCUIT_OPEN'
]);

const clone = (value) => value === undefined ? undefined : JSON.parse(JSON.stringify(value));
const object = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
const freeze = (value) => {
  if (Array.isArray(value)) value.forEach(freeze);
  else if (object(value)) Object.values(value).forEach(freeze);
  return object(value) || Array.isArray(value) ? Object.freeze(value) : value;
};
const first = (...values) => values.find((value) => value !== undefined && value !== null);
const states = (control = {}) => [control.state, control.missionState, control.circuitState, ...(control.suppressions ?? [])];
const controlState = (control = {}) => {
  const values = states(control);
  if (values.some((x) => x === 'CIRCUIT_OPEN' || x === 'OPEN')) return 'CIRCUIT_OPEN';
  if (values.includes('RECONCILIATION_REQUIRED')) return 'RECONCILIATION_REQUIRED';
  if (values.some((x) => ['PAUSED_BY_RONY', 'PAUSED_BY_HUMAN', 'STOP', 'ABORT_CURRENT_WORKER'].includes(x))) return values.find((x) => ['PAUSED_BY_RONY', 'PAUSED_BY_HUMAN', 'STOP', 'ABORT_CURRENT_WORKER'].includes(x));
  return null;
};
const lineageMatch = (record, dispatch, deliveryId) => object(record) && record.dispatchId === dispatch.dispatchId && record.messageId === dispatch.messageId && (deliveryId === undefined || record.deliveryId === deliveryId);
const currentDeliveryMatch = (delivery, dispatch) => {
  if (!object(delivery)) return false;
  if (delivery.dispatchId !== undefined || delivery.messageId !== undefined) return lineageMatch(delivery, dispatch);
  return dispatch.freshDeliveryId === undefined || delivery.deliveryId === dispatch.freshDeliveryId;
};
const currentWorkerRecord = (record, dispatch, delivery) => delivery && lineageMatch(record, dispatch, delivery.deliveryId) && record.workerRole !== undefined ? record.workerRole === dispatch.targetRole : Boolean(delivery && lineageMatch(record, dispatch, delivery.deliveryId));
const currentReconciliationMatch = (record, dispatch, delivery) => delivery && lineageMatch(record, dispatch, delivery.deliveryId);
const deliveryState = (delivery) => first(delivery?.resolvedTransportState, delivery?.state, delivery?.status, delivery?.outcome);
const leaseResult = ({ lease, projectId, worker, dispatch, scope, envelope, nowMs, competingLeases }) => {
  if (!lease) return { authorized: false, classification: 'MUTATION_LEASE_REQUIRED' };
  return evaluateMutationLeaseUse({ lease, expectedProjectId: projectId, expectedHolder: { registrationId: worker.registrationId, workerRole: worker.role }, expectedMessageId: dispatch.messageId, expectedDispatchId: dispatch.dispatchId, expectedMilestoneId: dispatch.milestoneId, requestedResourceScope: scope, requestedMutationEnvelopeSha256: envelope, nowMs, competingLeases });
};
const scopeHash = (scope) => crypto.createHash('sha256').update(JSON.stringify([...scope].sort()), 'utf8').digest('hex');
const requiredLease = ({ actionKind, projectId, worker, dispatch, scope, envelope, target }) => Object.freeze({
  actionKind, projectId, holder: { registrationId: worker?.registrationId ?? null, workerRole: worker?.role ?? 'executor' },
  messageId: dispatch.messageId, dispatchId: dispatch.dispatchId, milestoneId: dispatch.milestoneId,
  resourceScope: [...scope], resourceScopeSha256: scopeHash(scope), mutationEnvelopeSha256: envelope,
  target: target ? { ...target } : null
});

function decision(input, overrides = {}) {
  const dispatch = input.currentDispatch ?? input.dispatch ?? null;
  const delivery = input.delivery ?? null;
  const result = input.workerResult ?? null;
  const trigger = input.architectTrigger ?? null;
  const base = {
    hostState: 'HOST_IDLE', nextAction: 'NONE', projectId: input.projectId ?? input.governanceContext?.expectedProjectId ?? null,
    messageId: dispatch?.messageId ?? null, dispatchId: dispatch?.dispatchId ?? null,
    deliveryId: delivery?.deliveryId ?? null, workerResultId: result?.resultId ?? result?.workerResultId ?? null,
    architectTriggerId: trigger?.triggerId ?? null, governanceState: null, governanceReason: null,
    mutationLeaseState: 'NOT_REQUIRED', mutationLeaseReason: null, deliveryEligible: false,
    architectTriggerEligible: false, mutationAuthorized: false, retryAuthorized: false,
    reconciliationRequired: false, duplicateSuppressed: false, requiredLease: null, reasonCode: 'NO_UNCONSUMED_DISPATCH', ...overrides
  };
  return freeze(clone(base));
}

export function evaluateAutomaticDispatchHost(input = {}) {
  const dispatch = input.currentDispatch ?? input.dispatch;
  if (!dispatch) return decision(input);
  const delivery = currentDeliveryMatch(input.delivery, dispatch) ? input.delivery : null;
  const workerResult = currentWorkerRecord(input.workerResult, dispatch, delivery) ? input.workerResult : null;
  const reconciliation = currentReconciliationMatch(input.reconciliation, dispatch, delivery) ? input.reconciliation : null;
  input = { ...input, delivery, workerResult, reconciliation };
  const control = controlState(input.control ?? input.controlState ?? {});
  if (control === 'CIRCUIT_OPEN') return decision(input, { hostState: 'HOST_CIRCUIT_OPEN', nextAction: 'WAIT_FOR_CIRCUIT_RESET', reasonCode: 'CIRCUIT_OPEN' });
  if (control === 'RECONCILIATION_REQUIRED') return decision(input, { hostState: 'HOST_RECONCILIATION_REQUIRED', nextAction: 'RECONCILE_DURABLE_EVIDENCE', reconciliationRequired: true, reasonCode: 'CONTROL_RECONCILIATION_REQUIRED' });
  if (control) return decision(input, { hostState: 'HOST_CONTROL_SUPPRESSED', nextAction: 'WAIT_FOR_CONTROL_CLEAR', reasonCode: 'CONTROL_SUPPRESSED' });

  const dState = deliveryState(input.delivery);
  const consumed = input.dispatchConsumed === true || input.consumed === true || (input.consumedDispatchIds ?? []).includes(dispatch.dispatchId) || dispatch.consumed === true || ['CONSUMED', 'TERMINAL'].includes(dispatch.dispatchState);
  if (dState === 'AMBIGUOUS' || dState === 'INCONCLUSIVE') return decision(input, { hostState: 'HOST_RECONCILIATION_REQUIRED', nextAction: 'RECONCILE_WORKER_DELIVERY', reconciliationRequired: true, duplicateSuppressed: true, reasonCode: 'AMBIGUOUS_WORKER_DELIVERY' });
  if (consumed) return decision(input, { duplicateSuppressed: true, reasonCode: 'DISPATCH_ALREADY_CONSUMED' });

  if (dState === 'SENT') {
    const matching = lineageMatch(input.workerResult, dispatch, input.delivery?.deliveryId) && input.workerResult?.consumed !== true;
    if (!matching) return decision(input, { hostState: 'HOST_WAITING_WORKER_RESULT', nextAction: 'READ_DURABLE_WORKER_RESULT', duplicateSuppressed: true, reasonCode: 'WORKER_RESULT_REQUIRED' });
    if (input.advanceToArchitect !== true) return decision(input, { hostState: 'HOST_WORKER_RESULT_READY', nextAction: 'EVALUATE_ARCHITECT_TRIGGER', workerResultId: input.workerResult.resultId ?? input.workerResult.workerResultId ?? null, duplicateSuppressed: true, reasonCode: 'WORKER_RESULT_READY' });
    const triggerState = deliveryState(input.architectTrigger);
    if (triggerState === 'AMBIGUOUS' || triggerState === 'INCONCLUSIVE') return decision(input, { hostState: 'HOST_RECONCILIATION_REQUIRED', nextAction: 'RECONCILE_ARCHITECT_TRIGGER', workerResultId: input.workerResult.resultId ?? input.workerResult.workerResultId ?? null, reconciliationRequired: true, duplicateSuppressed: true, reasonCode: 'AMBIGUOUS_ARCHITECT_TRIGGER' });
    if (triggerState === 'SENT') return decision(input, { hostState: 'HOST_WAITING_ARCHITECT', nextAction: 'WAIT_FOR_ARCHITECT', workerResultId: input.workerResult.resultId ?? input.workerResult.workerResultId ?? null, duplicateSuppressed: true, reasonCode: 'ARCHITECT_TRIGGER_SENT' });
    const safety = input.architectSafetyContractAccepted === true || input.architectSafetyContract?.accepted === true;
    if (!safety) return decision(input, { hostState: 'HOST_GOVERNANCE_DENIED', nextAction: 'STOP', governanceState: 'ARCHITECT_SAFETY_CONTRACT_REQUIRED', governanceReason: 'ARCHITECT_SAFETY_CONTRACT_REQUIRED', workerResultId: input.workerResult.resultId ?? input.workerResult.workerResultId ?? null, reasonCode: 'ARCHITECT_SAFETY_CONTRACT_REQUIRED' });
    const lease = leaseResult({ lease: input.architectMutationLease ?? input.mutationLease, projectId: input.projectId, worker: input.worker ?? {}, dispatch, scope: input.architectLeaseScope ?? ['architect-doorbell'], envelope: dispatch.expectedMutationEnvelopeSha256, nowMs: input.nowMs, competingLeases: input.competingLeases });
    if (!lease.authorized) return decision(input, { hostState: 'HOST_MUTATION_LEASE_REQUIRED', nextAction: 'OBTAIN_ARCHITECT_MUTATION_LEASE', mutationLeaseState: lease.classification, mutationLeaseReason: lease.reasonCodes?.[0] ?? lease.classification, workerResultId: input.workerResult.resultId ?? input.workerResult.workerResultId ?? null, duplicateSuppressed: true, requiredLease: requiredLease({ actionKind: 'ARCHITECT_TRIGGER', projectId: input.projectId, worker: input.worker, dispatch, scope: input.architectLeaseScope ?? ['architect-doorbell'], envelope: dispatch.expectedMutationEnvelopeSha256, target: input.architectTarget }), reasonCode: 'ARCHITECT_MUTATION_LEASE_REQUIRED' });
    return decision(input, { hostState: 'HOST_ARCHITECT_TRIGGER_READY', nextAction: 'PREPARE_ARCHITECT_TRIGGER_INTENT', architectTriggerEligible: true, mutationLeaseState: 'AUTHORIZED', mutationLeaseReason: null, workerResultId: input.workerResult.resultId ?? input.workerResult.workerResultId ?? null, duplicateSuppressed: true, reasonCode: 'ARCHITECT_TRIGGER_READY' });
  }

  const context = { ...(input.governanceContext ?? {}) };
  const policy = { ...(context.operationPolicy ?? {}), mutationLeaseRequired: false, mutating: false };
  const governance = evaluatePreDispatch({ ...context, expectedProjectId: input.projectId ?? context.expectedProjectId, expectedMessageId: dispatch.messageId, expectedDispatchId: dispatch.dispatchId, expectedMilestoneId: dispatch.milestoneId, expectedTargetRole: dispatch.targetRole, dispatch, operationPolicy: policy });
  if (!governance.eligible) return decision(input, { hostState: 'HOST_GOVERNANCE_DENIED', nextAction: 'STOP', governanceState: governance.classification, governanceReason: governance.reasonCodes?.[0] ?? governance.classification, reasonCode: governance.reasonCodes?.[0] ?? governance.classification });
  const worker = input.worker ?? {};
  const lease = leaseResult({ lease: input.workerMutationLease ?? input.mutationLease, projectId: input.projectId ?? context.expectedProjectId, worker, dispatch, scope: input.workerLeaseScope ?? ['worker-delivery'], envelope: dispatch.expectedMutationEnvelopeSha256, nowMs: input.nowMs, competingLeases: input.competingLeases });
  if (!lease.authorized) return decision(input, { hostState: 'HOST_MUTATION_LEASE_REQUIRED', nextAction: 'OBTAIN_WORKER_MUTATION_LEASE', governanceState: governance.classification, mutationLeaseState: lease.classification, mutationLeaseReason: lease.reasonCodes?.[0] ?? lease.classification, requiredLease: requiredLease({ actionKind: 'WORKER_DELIVERY', projectId: input.projectId ?? context.expectedProjectId, worker, dispatch, scope: input.workerLeaseScope ?? ['worker-delivery'], envelope: dispatch.expectedMutationEnvelopeSha256, target: input.workerTarget }), reasonCode: 'WORKER_MUTATION_LEASE_REQUIRED' });
  return decision(input, { hostState: 'HOST_DELIVERY_READY', nextAction: 'PREPARE_WORKER_DELIVERY_INTENT', governanceState: governance.classification, mutationLeaseState: 'AUTHORIZED', deliveryEligible: true, reasonCode: 'WORKER_DELIVERY_READY' });
}

export const automaticDispatchHost = Object.freeze({ evaluateAutomaticDispatchHost, HOST_STATES });
