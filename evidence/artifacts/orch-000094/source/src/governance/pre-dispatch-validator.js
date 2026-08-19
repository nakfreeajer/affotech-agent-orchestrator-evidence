import { evaluateHumanAuthorityUse } from './human-authority.js';
import { evaluateMutationLeaseUse } from './mutation-lease.js';
import { validateProjectProfile } from '../project/project-profile.js';

export const PRE_DISPATCH_CLASSIFICATIONS = Object.freeze({
  ELIGIBLE: 'PRE_DISPATCH_ELIGIBLE', INVALID: 'PRE_DISPATCH_INVALID', PROJECT_MISMATCH: 'PRE_DISPATCH_PROJECT_MISMATCH',
  PROTOCOL_MISMATCH: 'PRE_DISPATCH_PROTOCOL_MISMATCH', DISPATCH_IDENTITY_MISMATCH: 'PRE_DISPATCH_DISPATCH_IDENTITY_MISMATCH',
  WORKER_IDENTITY_MISMATCH: 'PRE_DISPATCH_WORKER_IDENTITY_MISMATCH', WORKER_INACTIVE: 'PRE_DISPATCH_WORKER_INACTIVE',
  CONTROL_SUPPRESSED: 'PRE_DISPATCH_CONTROL_SUPPRESSED', BASELINE_MISMATCH: 'PRE_DISPATCH_BASELINE_MISMATCH',
  MUTATION_ENVELOPE_INVALID: 'PRE_DISPATCH_MUTATION_ENVELOPE_INVALID', PROTECTED_RESOURCE_CONFLICT: 'PRE_DISPATCH_PROTECTED_RESOURCE_CONFLICT',
  HUMAN_AUTH_REQUIRED: 'PRE_DISPATCH_HUMAN_AUTH_REQUIRED', HUMAN_AUTH_DENIED: 'PRE_DISPATCH_HUMAN_AUTH_DENIED',
  MUTATION_LEASE_REQUIRED: 'PRE_DISPATCH_MUTATION_LEASE_REQUIRED', MUTATION_LEASE_DENIED: 'PRE_DISPATCH_MUTATION_LEASE_DENIED',
  EXTERNAL_MUTATION_PLAN_REQUIRED: 'PRE_DISPATCH_EXTERNAL_MUTATION_PLAN_REQUIRED'
});

const isObject = (x) => x !== null && typeof x === 'object' && !Array.isArray(x);
const nonEmpty = (x) => typeof x === 'string' && x.length > 0;
const sha256 = (x) => typeof x === 'string' && /^[0-9a-f]{64}$/.test(x);
const clone = (x) => JSON.parse(JSON.stringify(x));
const freeze = (x) => { if (isObject(x)) { Object.values(x).forEach(freeze); Object.freeze(x); } else if (Array.isArray(x)) { x.forEach(freeze); Object.freeze(x); } return x; };
const fail = (classification, gate, reason) => ({ classification, eligible: false, mutationAuthorized: false, retryAuthorized: false, reasonCodes: [reason], gates: { [gate]: 'DENIED' } });
const emptyEnvelope = (x) => x === undefined || x === null || (isObject(x) && x.bounded === true && Array.isArray(x.resources) && x.resources.length === 0 && x.sha256 === null);

function suppressed(control = {}) {
  const states = [control.state, control.missionState, control.circuitState, ...(Array.isArray(control.suppressions) ? control.suppressions : [])].filter(nonEmpty);
  return states.some((x) => ['PAUSED_BY_RONY', 'PAUSED_BY_HUMAN', 'STOP', 'ABORT_CURRENT_WORKER', 'RECONCILIATION_REQUIRED', 'CIRCUIT_OPEN', 'OPEN'].includes(x));
}

function validEnvelope(envelope, expected, mutating, protectedBoundaries) {
  if (!mutating) return emptyEnvelope(envelope) || (isObject(envelope) && envelope.bounded === true && envelope.sha256 === expected && Array.isArray(envelope.resources) && envelope.resources.length === 0);
  if (!isObject(envelope) || envelope.bounded !== true || !Array.isArray(envelope.resources) || envelope.resources.length === 0 || !sha256(expected) || envelope.sha256 !== expected) return false;
  return !envelope.resources.some((resource) => {
    if (!nonEmpty(resource)) return true;
    if (resource === '*' || resource === 'ALL_PROJECT' || resource === 'AFFOTECH' || resource === 'nakfreeajer/affotech-agent-relay') return true;
    if (protectedBoundaries?.foreignRepository && resource.includes(protectedBoundaries.foreignRepository)) return true;
    return false;
  });
}

function validExternalPlan(plan) {
  return isObject(plan) && plan.readOnlyPreAttemptSnapshot === true && plan.durableIntentBeforeMutation === true && plan.exactlyOneMutationAttempt === true && plan.durableResultOrAmbiguous === true && plan.readOnlyReconciliationBeforeRetry === true && plan.noBlindRetry === true && nonEmpty(plan.correlationIdentity) && sha256(plan.payloadOrMutationSha256);
}

export function evaluatePreDispatch(input = {}) {
  const profileCheck = validateProjectProfile(input.projectProfile);
  if (!profileCheck.valid) return fail(PRE_DISPATCH_CLASSIFICATIONS.INVALID, 'projectProfile', 'PROJECT_PROFILE_INVALID');
  const profile = profileCheck.profile;
  if (input.expectedProjectId !== profile.projectId || input.expectedProjectId !== input.worker?.projectId) return fail(PRE_DISPATCH_CLASSIFICATIONS.PROJECT_MISMATCH, 'project', 'PROJECT_MISMATCH');
  if (input.expectedProtocolFamily !== 'ORCHESTRATOR_GITHUB' || profile.protocolFamily !== 'ORCHESTRATOR_GITHUB') return fail(PRE_DISPATCH_CLASSIFICATIONS.PROTOCOL_MISMATCH, 'protocol', 'PROTOCOL_MISMATCH');
  const dispatch = input.dispatch ?? {};
  for (const field of ['messageId', 'dispatchId', 'milestoneId', 'targetRole', 'canonicalPromptSha256', 'expectedAcceptedSourcePublicationId', 'expectedMutationEnvelopeSha256']) if (!nonEmpty(dispatch[field])) return fail(PRE_DISPATCH_CLASSIFICATIONS.INVALID, 'dispatch', 'DISPATCH_FIELD_INVALID');
  if (!sha256(dispatch.canonicalPromptSha256) || !sha256(dispatch.expectedMutationEnvelopeSha256)) return fail(PRE_DISPATCH_CLASSIFICATIONS.INVALID, 'dispatch', 'DISPATCH_HASH_INVALID');
  if (input.expectedMessageId !== dispatch.messageId || input.expectedDispatchId !== dispatch.dispatchId || input.expectedMilestoneId !== dispatch.milestoneId || input.expectedTargetRole !== dispatch.targetRole) return fail(PRE_DISPATCH_CLASSIFICATIONS.DISPATCH_IDENTITY_MISMATCH, 'dispatch', 'DISPATCH_IDENTITY_MISMATCH');
  const worker = input.worker ?? {};
  if (!nonEmpty(worker.registrationId) || worker.role !== dispatch.targetRole || worker.projectId !== profile.projectId) return fail(PRE_DISPATCH_CLASSIFICATIONS.WORKER_IDENTITY_MISMATCH, 'worker', 'WORKER_IDENTITY_MISMATCH');
  if (worker.active !== true && worker.state !== 'ACTIVE') return fail(PRE_DISPATCH_CLASSIFICATIONS.WORKER_INACTIVE, 'worker', 'WORKER_INACTIVE');
  if (suppressed(input.control)) return fail(PRE_DISPATCH_CLASSIFICATIONS.CONTROL_SUPPRESSED, 'control', 'CONTROL_SUPPRESSED');
  const baseline = input.acceptedBaseline ?? {};
  if (baseline.acceptedSourcePublicationId !== dispatch.expectedAcceptedSourcePublicationId) return fail(PRE_DISPATCH_CLASSIFICATIONS.BASELINE_MISMATCH, 'baseline', 'BASELINE_MISMATCH');
  if (!validEnvelope(input.mutationEnvelope, dispatch.expectedMutationEnvelopeSha256, input.operationPolicy?.mutating === true, profile.protectedBoundaries)) {
    const resources = input.mutationEnvelope?.resources ?? [];
    if (resources.some((x) => typeof x === 'string' && (x === 'AFFOTECH' || x.includes(profile.protectedBoundaries.foreignRepository)))) return fail(PRE_DISPATCH_CLASSIFICATIONS.PROTECTED_RESOURCE_CONFLICT, 'mutationEnvelope', 'PROTECTED_RESOURCE_CONFLICT');
    return fail(PRE_DISPATCH_CLASSIFICATIONS.MUTATION_ENVELOPE_INVALID, 'mutationEnvelope', 'MUTATION_ENVELOPE_INVALID');
  }
  const policy = input.operationPolicy ?? {};
  let humanState = policy.humanAuthorityRequired === true ? 'REQUIRED' : 'NOT_REQUIRED';
  if (policy.humanAuthorityRequired === true) {
    if (!input.humanAuthority) return fail(PRE_DISPATCH_CLASSIFICATIONS.HUMAN_AUTH_REQUIRED, 'humanAuthority', 'HUMAN_AUTH_REQUIRED');
    const human = evaluateHumanAuthorityUse({ authority: input.humanAuthority, request: { projectId: profile.projectId, approvedBy: profile.roles.humanFinalAuthority, operationClass: policy.operationClass, scope: policy.requestedScope, mutationEnvelopeSha256: dispatch.expectedMutationEnvelopeSha256 }, expectedProjectId: profile.projectId, expectedHumanFinalAuthority: profile.roles.humanFinalAuthority, nowMs: input.nowMs });
    if (!human.authorized) return fail(PRE_DISPATCH_CLASSIFICATIONS.HUMAN_AUTH_DENIED, 'humanAuthority', human.classification);
    humanState = 'AUTHORIZED';
  }
  let leaseState = 'NOT_REQUIRED';
  if (policy.mutationLeaseRequired === true) {
    if (!input.mutationLease) return fail(PRE_DISPATCH_CLASSIFICATIONS.MUTATION_LEASE_REQUIRED, 'mutationLease', 'MUTATION_LEASE_REQUIRED');
    const lease = evaluateMutationLeaseUse({ lease: input.mutationLease, expectedProjectId: profile.projectId, expectedHolder: { registrationId: worker.registrationId, workerRole: worker.role }, expectedMessageId: dispatch.messageId, expectedDispatchId: dispatch.dispatchId, expectedMilestoneId: dispatch.milestoneId, requestedResourceScope: policy.requestedResourceScope, requestedMutationEnvelopeSha256: dispatch.expectedMutationEnvelopeSha256, nowMs: input.nowMs, competingLeases: input.competingLeases });
    if (!lease.authorized) return fail(PRE_DISPATCH_CLASSIFICATIONS.MUTATION_LEASE_DENIED, 'mutationLease', lease.classification);
    leaseState = 'AUTHORIZED';
  }
  let externalState = policy.ambiguityProneExternalMutation === true ? 'DECLARED' : 'NOT_REQUIRED';
  if (policy.ambiguityProneExternalMutation === true && !validExternalPlan(input.externalMutationSafetyPlan)) return fail(PRE_DISPATCH_CLASSIFICATIONS.EXTERNAL_MUTATION_PLAN_REQUIRED, 'externalMutationSafety', 'EXTERNAL_MUTATION_PLAN_REQUIRED');
  return freeze({ classification: PRE_DISPATCH_CLASSIFICATIONS.ELIGIBLE, eligible: true, mutationAuthorized: false, retryAuthorized: false, reasonCodes: [], gates: { projectProfile: 'PASSED', protocol: 'PASSED', project: 'PASSED', dispatch: 'PASSED', worker: 'PASSED', control: 'PASSED', baseline: 'PASSED', mutationEnvelope: 'PASSED', humanAuthority: humanState, mutationLease: leaseState, externalMutationSafety: externalState }, architectDispatchAuthorized: false, workerDispatchAuthorized: false });
}

export const preDispatchValidator = Object.freeze({ evaluatePreDispatch, PRE_DISPATCH_CLASSIFICATIONS });
