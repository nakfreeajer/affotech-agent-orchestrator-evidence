import { evaluateAutomaticDispatchHost } from './automatic-dispatch-host.js';

export const RUNNER_EVENTS = Object.freeze([
  'ITERATION_IDLE', 'GOVERNANCE_DENIED', 'LEASE_REQUIRED', 'LEASE_ACQUIRED', 'LEASE_DENIED',
  'LEASE_RECONCILIATION_REQUIRED', 'DELIVERY_SENT', 'DELIVERY_AMBIGUOUS', 'ARCHITECT_TRIGGER_SENT',
  'ARCHITECT_TRIGGER_AMBIGUOUS', 'WAITING_WORKER_RESULT', 'WAITING_ARCHITECT', 'CONTROL_SUPPRESSED',
  'RECONCILIATION_REQUIRED', 'CIRCUIT_OPEN', 'HOST_STOPPED'
]);
const REQUIRED_PORTS = Object.freeze(['readDurableSnapshot', 'acquireMutationLease', 'reconcileMutationLease', 'releaseMutationLease', 'sendWorkerDelivery', 'sendArchitectTrigger', 'publishHostEvent', 'waitForNextPoll']);
const clone = (x) => x === undefined ? undefined : JSON.parse(JSON.stringify(x));
const object = (x) => x !== null && typeof x === 'object' && !Array.isArray(x);
const freeze = (x) => { if (Array.isArray(x)) x.forEach(freeze); else if (object(x)) Object.values(x).forEach(freeze); return object(x) || Array.isArray(x) ? Object.freeze(x) : x; };
const status = (x) => x?.status ?? x?.outcome ?? x?.state ?? null;
const validIdentity = (input) => typeof input?.hostInstanceId === 'string' && /^HOST-INSTANCE-[A-Za-z0-9._:-]+$/.test(input.hostInstanceId) && typeof input?.hostGenerationId === 'string' && /^HOST-GEN-[A-Za-z0-9._:-]+$/.test(input.hostGenerationId) && typeof input?.projectId === 'string' && input.workerRole === 'executor' && Number.isInteger(input.nowMs);
const portCheck = (ports) => {
  if (!object(ports)) return { valid: false, reason: 'PORTS_REQUIRED' };
  const missing = REQUIRED_PORTS.filter((name) => typeof ports[name] !== 'function');
  return missing.length ? { valid: false, reason: 'PORT_REQUIRED', missing } : { valid: true };
};
const eventFor = (result, eventType, extra = {}) => ({ eventId: result.eventId ?? `${result.hostGenerationId}-${result.dispatchId ?? 'NONE'}-${eventType}`, eventType, sourceRef: result.sourceRef ?? 'INJECTED_DURABLE_SNAPSHOT', hostInstanceId: result.hostInstanceId, hostGenerationId: result.hostGenerationId, projectId: result.projectId, hostState: result.hostState, nextAction: result.nextAction, dispatchId: result.dispatchId, messageId: result.messageId, deliveryId: result.deliveryId, workerResultId: result.workerResultId, architectTriggerId: result.architectTriggerId, mutationAuthorized: false, retryAuthorized: false, reconciliationRequired: result.reconciliationRequired === true, ...extra });
const frozen = (x) => freeze(clone(x));
const baseResult = (input, overrides = {}) => frozen({ hostInstanceId: input.hostInstanceId, hostGenerationId: input.hostGenerationId, projectId: input.projectId, hostState: 'RUNNER_IDLE', nextAction: 'NONE', mutationAuthorized: false, retryAuthorized: false, reconciliationRequired: false, leaseReconciliationRequired: false, transportCalls: 0, leaseAcquireCalls: 0, leaseReconcileCalls: 0, leaseReleaseCalls: 0, failure: false, ...overrides });

export function validatePersistentHostPorts(ports) { return frozen(portCheck(ports)); }

async function publish(ports, result, eventType, extra) {
  try { await ports.publishHostEvent(eventFor(result, eventType, extra)); return false; } catch { return true; }
}

function lifecycleInput(input, snapshot, decision) {
  const source = object(snapshot?.lifecycleInput) ? snapshot.lifecycleInput : object(snapshot?.hostInput) ? snapshot.hostInput : snapshot;
  return { ...(source ?? {}), projectId: input.projectId, workerRole: input.workerRole, nowMs: input.nowMs, hostInstanceId: input.hostInstanceId, hostGenerationId: input.hostGenerationId, ...(decision?.requiredLease?.actionKind === 'ARCHITECT_TRIGGER' ? { architectMutationLease: snapshot?.architectMutationLease ?? snapshot?.mutationLease } : { workerMutationLease: snapshot?.workerMutationLease ?? snapshot?.mutationLease }) };
}

async function releaseLease(ports, request, safe) {
  if (!safe) return { attempted: false, ambiguous: false };
  try {
    const response = await ports.releaseMutationLease(request);
    const s = status(response);
    if (s === 'RELEASED' || s === 'CONFIRMED' || response?.released === true) return { attempted: true, ambiguous: false };
    return { attempted: true, ambiguous: true };
  } catch { return { attempted: true, ambiguous: true }; }
}

export async function runPersistentHostIteration(input = {}) {
  const ports = input.ports;
  if (!validIdentity(input)) return baseResult(input, { hostState: 'RUNNER_GOVERNANCE_DENIED', nextAction: 'STOP', failure: true, reasonCode: 'HOST_IDENTITY_INVALID' });
  const checked = portCheck(ports);
  if (!checked.valid) return baseResult(input, { hostState: 'RUNNER_GOVERNANCE_DENIED', nextAction: 'STOP', failure: true, reasonCode: checked.reason, missingPorts: checked.missing });
  if (input.inFlight === true) return baseResult(input, { hostState: 'RUNNER_SINGLE_FLIGHT_BLOCKED', nextAction: 'WAIT_FOR_IN_FLIGHT_ACTION', reasonCode: 'SINGLE_FLIGHT_MUTATION_IN_PROGRESS' });
  if (input.leaseReconciliationRequired === true) return baseResult(input, { hostState: 'RUNNER_RECONCILIATION_REQUIRED', nextAction: 'RECONCILE_MUTATION_LEASE', reconciliationRequired: true, leaseReconciliationRequired: true, reasonCode: 'LEASE_RELEASE_RECONCILIATION_REQUIRED' });
  let snapshot;
  try { snapshot = await ports.readDurableSnapshot(); } catch { return baseResult(input, { hostState: 'RUNNER_RECONCILIATION_REQUIRED', nextAction: 'RECONCILE_DURABLE_SNAPSHOT', reconciliationRequired: true, failure: true, reasonCode: 'DURABLE_SNAPSHOT_READ_FAILED' }); }
  let decision;
  try { decision = evaluateAutomaticDispatchHost(lifecycleInput(input, snapshot)); } catch { return baseResult(input, { hostState: 'RUNNER_RECONCILIATION_REQUIRED', nextAction: 'RECONCILE_DURABLE_SNAPSHOT', reconciliationRequired: true, failure: true, reasonCode: 'LIFECYCLE_EVALUATION_FAILED' }); }
  let result = { ...decision, hostInstanceId: input.hostInstanceId, hostGenerationId: input.hostGenerationId, projectId: input.projectId, sourceRef: snapshot?.sourceRef ?? snapshot?.ref ?? null, snapshotRead: true, transportCalls: 0, leaseAcquireCalls: 0, leaseReconcileCalls: 0, leaseReleaseCalls: 0, mutationAuthorized: false, retryAuthorized: false, failure: false };
  if (decision.hostState === 'HOST_IDLE') { await publish(ports, result, 'ITERATION_IDLE'); return frozen(result); }
  if (decision.hostState === 'HOST_CONTROL_SUPPRESSED' || decision.hostState === 'HOST_CIRCUIT_OPEN') { await publish(ports, result, decision.hostState === 'HOST_CIRCUIT_OPEN' ? 'CIRCUIT_OPEN' : 'CONTROL_SUPPRESSED'); return frozen(result); }
  if (decision.hostState === 'HOST_GOVERNANCE_DENIED') { await publish(ports, result, 'GOVERNANCE_DENIED'); return frozen(result); }
  if (decision.hostState === 'HOST_WAITING_WORKER_RESULT') { await publish(ports, result, 'WAITING_WORKER_RESULT'); return frozen(result); }
  if (decision.hostState === 'HOST_WAITING_ARCHITECT') { await publish(ports, result, 'WAITING_ARCHITECT'); return frozen(result); }
  if (decision.hostState === 'HOST_RECONCILIATION_REQUIRED') { await publish(ports, result, 'RECONCILIATION_REQUIRED'); return frozen(result); }

  let lease = snapshot?.workerMutationLease ?? snapshot?.architectMutationLease ?? snapshot?.mutationLease;
  if (decision.hostState === 'HOST_MUTATION_LEASE_REQUIRED') {
    result.leaseAcquireCalls = 1;
    await publish(ports, result, 'LEASE_REQUIRED', { requiredLease: decision.requiredLease });
    let acquired;
    try { acquired = await ports.acquireMutationLease({ ...clone(decision.requiredLease), requiredLease: clone(decision.requiredLease), hostInstanceId: input.hostInstanceId, hostGenerationId: input.hostGenerationId, sourceRef: snapshot?.sourceRef ?? snapshot?.ref ?? null, nowMs: input.nowMs }); } catch { acquired = { status: 'AMBIGUOUS' }; }
    const acquiredState = status(acquired);
    if (acquiredState === 'AMBIGUOUS' || acquiredState === 'UNKNOWN' || acquiredState === null) {
      result.leaseReconcileCalls = 1; await publish(ports, result, 'LEASE_RECONCILIATION_REQUIRED');
      try { acquired = await ports.reconcileMutationLease({ ...clone(decision.requiredLease), hostInstanceId: input.hostInstanceId, hostGenerationId: input.hostGenerationId }); } catch { acquired = { status: 'AMBIGUOUS' }; }
      result.leaseReconcileCalls = 1;
      if (!['ACQUIRED', 'AUTHORIZED', 'ACTIVE'].includes(status(acquired))) return frozen({ ...result, hostState: 'RUNNER_RECONCILIATION_REQUIRED', nextAction: 'RECONCILE_MUTATION_LEASE', reconciliationRequired: true, reasonCode: 'LEASE_ACQUISITION_AMBIGUOUS' });
    } else if (!['ACQUIRED', 'AUTHORIZED', 'ACTIVE'].includes(acquiredState)) { await publish(ports, result, 'LEASE_DENIED'); return frozen({ ...result, hostState: 'RUNNER_MUTATION_LEASE_DENIED', nextAction: 'WAIT_FOR_LEASE_RECONCILIATION', reasonCode: 'LEASE_DENIED' }); }
    lease = acquired.lease ?? acquired.record ?? acquired.mutationLease;
    await publish(ports, result, 'LEASE_ACQUIRED');
    const nextInput = lifecycleInput(input, { ...snapshot, mutationLease: lease, workerMutationLease: decision.requiredLease.actionKind === 'WORKER_DELIVERY' ? lease : undefined, architectMutationLease: decision.requiredLease.actionKind === 'ARCHITECT_TRIGGER' ? lease : undefined }, decision);
    decision = evaluateAutomaticDispatchHost(nextInput);
    result = { ...result, ...decision, hostInstanceId: input.hostInstanceId, hostGenerationId: input.hostGenerationId, projectId: input.projectId, sourceRef: snapshot?.sourceRef ?? snapshot?.ref ?? null, leaseAcquireCalls: 1, leaseReconcileCalls: result.leaseReconcileCalls };
    if (!['HOST_DELIVERY_READY', 'HOST_ARCHITECT_TRIGGER_READY'].includes(decision.hostState)) return frozen({ ...result, hostState: 'RUNNER_MUTATION_LEASE_DENIED', nextAction: 'WAIT_FOR_LEASE_RECONCILIATION', reasonCode: 'LEASE_REVALIDATION_FAILED' });
  }
  if (!['HOST_DELIVERY_READY', 'HOST_ARCHITECT_TRIGGER_READY'].includes(decision.hostState)) return frozen({ ...result, hostState: 'RUNNER_RECONCILIATION_REQUIRED', nextAction: 'STOP', reconciliationRequired: true, failure: true, reasonCode: 'UNEXPECTED_LIFECYCLE_STATE' });
  const architect = decision.hostState === 'HOST_ARCHITECT_TRIGGER_READY';
  let transport;
  try { result.transportCalls = 1; transport = await (architect ? ports.sendArchitectTrigger : ports.sendWorkerDelivery)({ hostInstanceId: input.hostInstanceId, hostGenerationId: input.hostGenerationId, projectId: input.projectId, decision: clone(decision), lease: clone(lease), snapshot: clone(snapshot) }); } catch { transport = { status: 'AMBIGUOUS', durableRecorded: false }; }
  const transportState = status(transport);
  const knownSent = transportState === 'SENT' && (transport?.durableResult === true || transport?.durableRecorded === true || transport?.resultId !== undefined || transport?.deliveryId !== undefined || transport?.triggerId !== undefined);
  const ambiguous = transportState === 'AMBIGUOUS' || !['SENT', 'FAILED_BEFORE_SEND'].includes(transportState) || !knownSent && transportState === 'SENT';
  const safeRelease = !ambiguous || transport?.durableRecorded === true;
  const released = await releaseLease(ports, { lease: clone(lease), hostInstanceId: input.hostInstanceId, hostGenerationId: input.hostGenerationId, sourceRef: snapshot?.sourceRef ?? snapshot?.ref ?? null, nowMs: input.nowMs, decision: clone(decision) }, safeRelease);
  const common = { ...result, transportCalls: 1, leaseReleaseCalls: released.attempted ? 1 : 0, leaseReconciliationRequired: released.ambiguous, reconciliationRequired: ambiguous || released.ambiguous, mutationAuthorized: false, retryAuthorized: false };
  if (ambiguous) { await publish(ports, common, architect ? 'ARCHITECT_TRIGGER_AMBIGUOUS' : 'DELIVERY_AMBIGUOUS'); return frozen({ ...common, hostState: 'RUNNER_RECONCILIATION_REQUIRED', nextAction: 'RECONCILE_TRANSPORT', reasonCode: 'TRANSPORT_AMBIGUOUS' }); }
  if (transportState === 'FAILED_BEFORE_SEND') { await publish(ports, common, 'RECONCILIATION_REQUIRED'); return frozen({ ...common, hostState: 'RUNNER_IDLE', nextAction: 'WAIT_FOR_NEXT_ITERATION', reasonCode: 'FAILED_BEFORE_SEND' }); }
  await publish(ports, common, architect ? 'ARCHITECT_TRIGGER_SENT' : 'DELIVERY_SENT');
  return frozen({ ...common, hostState: architect ? 'HOST_WAITING_ARCHITECT' : 'HOST_WAITING_WORKER_RESULT', nextAction: architect ? 'WAIT_FOR_ARCHITECT' : 'READ_DURABLE_WORKER_RESULT', reasonCode: 'TRANSPORT_SENT' });
}

export async function runPersistentHost(input = {}) {
  const threshold = Number.isInteger(input.failureThreshold) && input.failureThreshold > 0 ? input.failureThreshold : 3;
  const results = [];
  let failures = 0;
  let iterations = 0;
  while (!input.signal?.aborted && (input.maxIterations === undefined || iterations < input.maxIterations)) {
    const result = await runPersistentHostIteration(input);
    results.push(result); iterations += 1; failures = result.failure ? failures + 1 : 0;
    if (failures >= threshold) { const circuit = frozen({ ...result, hostState: 'RUNNER_CIRCUIT_OPEN', nextAction: 'STOP_UNTIL_FRESH_AUTHORITY', reasonCode: 'CONSECUTIVE_FAILURE_THRESHOLD_REACHED', failure: true }); await publish(input.ports, circuit, 'CIRCUIT_OPEN'); return frozen({ state: 'RUNNER_CIRCUIT_OPEN', iterations, results }); }
    if (input.signal?.aborted) break;
    if (input.maxIterations !== undefined && iterations >= input.maxIterations) break;
    try { await input.ports.waitForNextPoll(input.pollDelayMs ?? 0, input.signal); } catch { failures += 1; if (failures >= threshold) break; }
  }
  const stopped = frozen({ state: 'HOST_STOPPED', iterations, results });
  if (input.ports?.publishHostEvent) await input.ports.publishHostEvent({ eventType: 'HOST_STOPPED', hostInstanceId: input.hostInstanceId, hostGenerationId: input.hostGenerationId, projectId: input.projectId, mutationAuthorized: false, retryAuthorized: false, reconciliationRequired: false });
  return stopped;
}

export function createPersistentHostRunner(input = {}) {
  return Object.freeze({ runIteration: (extra = {}) => runPersistentHostIteration({ ...input, ...extra }), run: (extra = {}) => runPersistentHost({ ...input, ...extra }) });
}
