import crypto from 'node:crypto';

export const MUTATION_LEASE_SCHEMA_VERSION = '1.0';
export const MUTATION_LEASE_RECORD_TYPE = 'MUTATION_LEASE';
export const MUTATION_LEASE_PROTOCOL_FAMILY = 'ORCHESTRATOR_GITHUB';
export const MUTATION_LEASE_STATES = Object.freeze(['ACTIVE', 'RELEASED', 'EXPIRED']);
export const MUTATION_LEASE_CLASSIFICATIONS = Object.freeze({ AUTHORIZED: 'MUTATION_LEASE_AUTHORIZED', INVALID: 'MUTATION_LEASE_INVALID', PROJECT_MISMATCH: 'MUTATION_LEASE_PROJECT_MISMATCH', HOLDER_MISMATCH: 'MUTATION_LEASE_HOLDER_MISMATCH', LINEAGE_MISMATCH: 'MUTATION_LEASE_LINEAGE_MISMATCH', RESOURCE_SCOPE_MISMATCH: 'MUTATION_LEASE_RESOURCE_SCOPE_MISMATCH', MUTATION_ENVELOPE_MISMATCH: 'MUTATION_LEASE_MUTATION_ENVELOPE_MISMATCH', EXPIRED: 'MUTATION_LEASE_EXPIRED', RELEASED: 'MUTATION_LEASE_RELEASED', CONFLICT: 'MUTATION_LEASE_CONFLICT' });
const TOP_LEVEL = Object.freeze(['recordType', 'schemaVersion', 'protocolFamily', 'leaseId', 'leaseRevision', 'leaseEpoch', 'projectId', 'resourceScope', 'resourceScopeSha256', 'mutationEnvelopeSha256', 'holder', 'messageId', 'dispatchId', 'milestoneId', 'state', 'acquiredAt', 'expiresAt', 'releasedAt', 'previousRecordSha256', 'releasedBy']);
const HOLDER_KEYS = Object.freeze(['registrationId', 'workerRole']);
const RELEASED_BY_KEYS = Object.freeze(['registrationId', 'workerRole', 'messageId', 'dispatchId', 'milestoneId', 'operationReference']);
const isObject = (x) => x !== null && typeof x === 'object' && !Array.isArray(x);
const isString = (x) => typeof x === 'string' && x.length > 0;
const isSha = (x) => typeof x === 'string' && /^[0-9a-f]{64}$/.test(x);
const exactKeys = (x, keys) => isObject(x) && Object.keys(x).sort().join('|') === [...keys].sort().join('|');
const clone = (x) => JSON.parse(JSON.stringify(x));
const freeze = (x) => { if (isObject(x)) { Object.values(x).forEach(freeze); Object.freeze(x); } else if (Array.isArray(x)) { x.forEach(freeze); Object.freeze(x); } return x; };
const scopeHash = (scope) => crypto.createHash('sha256').update(JSON.stringify([...scope].sort()), 'utf8').digest('hex');
const validScope = (scope) => Array.isArray(scope) && scope.length > 0 && scope.every((x) => isString(x) && !['*', 'ALL_PROJECT', 'ALL_RESOURCES'].includes(x) && !/\b(?:all|unbounded|wildcard)\b/i.test(x)) && new Set(scope).size === scope.length;
const result = (classification, reasonCodes = [], extra = {}) => ({ classification, valid: classification === MUTATION_LEASE_CLASSIFICATIONS.AUTHORIZED, authorized: false, mutationAuthorized: false, retryAuthorized: false, reasonCodes, architectDispatchAuthorized: false, ...extra });

export function normalizeMutationLeaseScope(scope) { return validScope(scope) ? [...scope].sort() : null; }
export function validateMutationLease(record, { expectedProjectId } = {}) {
  if (!isObject(record) || !exactKeys(record, TOP_LEVEL) || record.recordType !== MUTATION_LEASE_RECORD_TYPE || record.schemaVersion !== MUTATION_LEASE_SCHEMA_VERSION || record.protocolFamily !== MUTATION_LEASE_PROTOCOL_FAMILY || !/^MUTATION-LEASE-[A-Za-z0-9._:-]+$/.test(record.leaseId) || !Number.isInteger(record.leaseRevision) || record.leaseRevision < 1 || !Number.isInteger(record.leaseEpoch) || record.leaseEpoch < 1 || !isString(record.projectId) || !validScope(record.resourceScope) || !isSha(record.resourceScopeSha256) || record.resourceScopeSha256 !== scopeHash(record.resourceScope) || !isSha(record.mutationEnvelopeSha256) || !exactKeys(record.holder, HOLDER_KEYS) || Object.values(record.holder).some((x) => !isString(x)) || !isString(record.messageId) || !isString(record.dispatchId) || !isString(record.milestoneId) || !MUTATION_LEASE_STATES.includes(record.state) || !Number.isInteger(record.acquiredAt) || record.acquiredAt < 0 || !Number.isInteger(record.expiresAt) || record.expiresAt <= record.acquiredAt || (record.state === 'ACTIVE' && (record.releasedAt !== null || record.releasedBy !== null)) || (record.state === 'RELEASED' && (!Number.isInteger(record.releasedAt) || record.releasedAt < record.acquiredAt || record.releasedAt > record.expiresAt || !exactKeys(record.releasedBy, RELEASED_BY_KEYS) || Object.values(record.releasedBy).some((x) => !isString(x)))) || (record.state !== 'RELEASED' && (record.releasedAt !== null || record.releasedBy !== null)) || (record.leaseRevision === 1 ? record.previousRecordSha256 !== null : !isSha(record.previousRecordSha256))) return result(MUTATION_LEASE_CLASSIFICATIONS.INVALID, ['RECORD_FIELDS_INVALID']);
  if (expectedProjectId !== undefined && record.projectId !== expectedProjectId) return result(MUTATION_LEASE_CLASSIFICATIONS.PROJECT_MISMATCH, ['PROJECT_MISMATCH']);
  return result(MUTATION_LEASE_CLASSIFICATIONS.AUTHORIZED, [], { valid: true, projection: freeze(clone(record)) });
}
const scopeNarrower = (leaseScope, requestedScope) => validScope(requestedScope) && requestedScope.every((resource) => leaseScope.includes(resource));
const overlaps = (a, b) => a.some((resource) => b.includes(resource));
export function evaluateMutationLeaseUse({ lease, expectedProjectId, expectedHolder, expectedMessageId, expectedDispatchId, expectedMilestoneId, requestedResourceScope, requestedMutationEnvelopeSha256, nowMs, competingLeases = [] } = {}) {
  const checked = validateMutationLease(lease, { expectedProjectId }); if (!checked.valid) return checked;
  if (lease.state === 'RELEASED') return result(MUTATION_LEASE_CLASSIFICATIONS.RELEASED, ['LEASE_RELEASED']);
  if (lease.state === 'EXPIRED' || !Number.isInteger(nowMs) || nowMs >= lease.expiresAt) return result(MUTATION_LEASE_CLASSIFICATIONS.EXPIRED, ['LEASE_EXPIRED']);
  if (!isObject(expectedHolder) || expectedHolder.registrationId !== lease.holder.registrationId || expectedHolder.workerRole !== lease.holder.workerRole) return result(MUTATION_LEASE_CLASSIFICATIONS.HOLDER_MISMATCH, ['HOLDER_MISMATCH']);
  if (expectedMessageId !== lease.messageId || expectedDispatchId !== lease.dispatchId || expectedMilestoneId !== lease.milestoneId) return result(MUTATION_LEASE_CLASSIFICATIONS.LINEAGE_MISMATCH, ['LINEAGE_MISMATCH']);
  if (!isSha(requestedMutationEnvelopeSha256) || requestedMutationEnvelopeSha256 !== lease.mutationEnvelopeSha256) return result(MUTATION_LEASE_CLASSIFICATIONS.MUTATION_ENVELOPE_MISMATCH, ['MUTATION_ENVELOPE_MISMATCH']);
  if (!scopeNarrower(lease.resourceScope, requestedResourceScope)) return result(MUTATION_LEASE_CLASSIFICATIONS.RESOURCE_SCOPE_MISMATCH, ['RESOURCE_SCOPE_MISMATCH']);
  for (const competing of competingLeases) { const other = validateMutationLease(competing, { expectedProjectId }); if (!other.valid) { if (competing?.projectId === lease.projectId && overlaps(competing.resourceScope ?? [], requestedResourceScope ?? [])) return result(MUTATION_LEASE_CLASSIFICATIONS.CONFLICT, ['MALFORMED_COMPETING_LEASE']); continue; } if (competing.leaseId !== lease.leaseId && competing.state === 'ACTIVE' && nowMs < competing.expiresAt && competing.holder.registrationId !== lease.holder.registrationId && overlaps(competing.resourceScope, requestedResourceScope)) return result(MUTATION_LEASE_CLASSIFICATIONS.CONFLICT, ['CONFLICTING_ACTIVE_LEASE']); }
  return result(MUTATION_LEASE_CLASSIFICATIONS.AUTHORIZED, [], { valid: true, authorized: true, leaseId: lease.leaseId });
}
export function projectMutationLeaseRelease({ lease, evaluation, previousRecordSha256, nowMs, releasedBy } = {}) {
  if (evaluation?.authorized !== true || !isSha(previousRecordSha256) || !Number.isInteger(nowMs) || nowMs < lease.acquiredAt || nowMs > lease.expiresAt || !exactKeys(releasedBy, RELEASED_BY_KEYS) || Object.values(releasedBy).some((x) => !isString(x))) return null;
  const checked = validateMutationLease(lease); if (!checked.valid || lease.state !== 'ACTIVE') return null;
  const next = clone(lease); next.leaseRevision += 1; next.previousRecordSha256 = previousRecordSha256; next.state = 'RELEASED'; next.releasedAt = nowMs; next.releasedBy = clone(releasedBy); return freeze(next);
}
export const mutationLeaseInternals = Object.freeze({ TOP_LEVEL, scopeHash });
