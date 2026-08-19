import crypto from 'node:crypto';

export const HUMAN_AUTH_SCHEMA_VERSION = '1.0';
export const HUMAN_AUTH_RECORD_TYPE = 'HUMAN_AUTH';
export const HUMAN_AUTH_PROTOCOL_FAMILY = 'ORCHESTRATOR_GITHUB';
export const HUMAN_AUTH_OPERATION_CLASSES = Object.freeze(['DESTRUCTIVE', 'PRODUCTION', 'DEPLOYMENT', 'BUSINESS_DATA', 'INTEGRATION', 'EXTERNAL_MUTATION', 'EXCEPTION']);
export const HUMAN_AUTH_STATES = Object.freeze(['ACTIVE', 'CONSUMED', 'REVOKED', 'EXPIRED']);
export const HUMAN_AUTH_REASON_CODES = Object.freeze({ INVALID: 'HUMAN_AUTH_INVALID', SCHEMA_UNSUPPORTED: 'HUMAN_AUTH_SCHEMA_UNSUPPORTED', FOREIGN_PROTOCOL_FAMILY: 'HUMAN_AUTH_FOREIGN_PROTOCOL_FAMILY', PROJECT_MISMATCH: 'HUMAN_AUTH_PROJECT_MISMATCH', HUMAN_MISMATCH: 'HUMAN_AUTH_HUMAN_MISMATCH', SCOPE_MISMATCH: 'HUMAN_AUTH_SCOPE_MISMATCH', MUTATION_ENVELOPE_MISMATCH: 'HUMAN_AUTH_MUTATION_ENVELOPE_MISMATCH', EXPIRED: 'HUMAN_AUTH_EXPIRED', REVOKED: 'HUMAN_AUTH_REVOKED', ALREADY_CONSUMED: 'HUMAN_AUTH_ALREADY_CONSUMED', OPERATION_CLASS_MISMATCH: 'HUMAN_AUTH_OPERATION_CLASS_MISMATCH' });

const TOP_LEVEL = Object.freeze(['recordType', 'schemaVersion', 'protocolFamily', 'authorityId', 'authorityRevision', 'projectId', 'approvedBy', 'approvedRole', 'operationClass', 'scope', 'mutationEnvelopeSha256', 'maxConsumptionCount', 'consumptionCount', 'state', 'issuedAt', 'expiresAt', 'previousRecordSha256', 'consumedBy']);
const SCOPE_KEYS = Object.freeze(['milestoneId', 'messageId', 'dispatchId', 'resourceType', 'resourceId', 'environment', 'tenantId', 'mutationEnvelopeSha256']);
const CONSUMED_BY_KEYS = Object.freeze(['messageId', 'dispatchId', 'milestoneId', 'workerRole', 'operationReference']);
const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
const isString = (value) => typeof value === 'string' && value.length > 0;
const isSha256 = (value) => typeof value === 'string' && /^[0-9a-f]{64}$/.test(value);
const isId = (value) => isString(value) && /^[A-Za-z0-9._:-]+$/.test(value);
const exactKeys = (value, keys) => isObject(value) && Object.keys(value).sort().join('|') === [...keys].sort().join('|');
const clone = (value) => JSON.parse(JSON.stringify(value));
const freeze = (value) => { if (isObject(value)) { for (const child of Object.values(value)) freeze(child); Object.freeze(value); } else if (Array.isArray(value)) { for (const child of value) freeze(child); Object.freeze(value); } return value; };
const result = (classification, reasonCodes = [], extra = {}) => ({ classification, valid: classification === 'HUMAN_AUTH_SUPPORTED', authorized: false, reasonCodes, architectDispatchAuthorized: false, mutationLeaseAuthorized: false, workerDispatchAuthorized: false, ...extra });

function validScope(scope, envelope) {
  if (!isObject(scope) || !exactKeys(scope, Object.keys(scope)) || Object.keys(scope).some((key) => !SCOPE_KEYS.includes(key)) || scope.mutationEnvelopeSha256 !== envelope || Object.keys(scope).filter((key) => key !== 'mutationEnvelopeSha256').length === 0) return false;
  return Object.entries(scope).filter(([key]) => key !== 'mutationEnvelopeSha256').every(([, value]) => isString(value));
}

function validConsumedBy(value) { return value === null || (isObject(value) && exactKeys(value, CONSUMED_BY_KEYS) && Object.values(value).every(isString)); }

export function validateHumanAuthority(record, { expectedProjectId, expectedHumanFinalAuthority } = {}) {
  if (!isObject(record)) return result(HUMAN_AUTH_REASON_CODES.INVALID, ['RECORD_NOT_OBJECT']);
  if (record.schemaVersion !== HUMAN_AUTH_SCHEMA_VERSION) return result(HUMAN_AUTH_REASON_CODES.SCHEMA_UNSUPPORTED, ['UNSUPPORTED_SCHEMA_VERSION']);
  if (record.protocolFamily !== HUMAN_AUTH_PROTOCOL_FAMILY) return result(HUMAN_AUTH_REASON_CODES.FOREIGN_PROTOCOL_FAMILY, ['FOREIGN_PROTOCOL_FAMILY']);
  if (!exactKeys(record, TOP_LEVEL) || record.recordType !== HUMAN_AUTH_RECORD_TYPE || !/^HUMAN-AUTH-[A-Za-z0-9._:-]+$/.test(record.authorityId) || !Number.isInteger(record.authorityRevision) || record.authorityRevision < 1 || !isString(record.projectId) || !isString(record.approvedBy) || record.approvedRole !== 'HUMAN_FINAL_AUTHORITY' || !HUMAN_AUTH_OPERATION_CLASSES.includes(record.operationClass) || !isSha256(record.mutationEnvelopeSha256) || !Number.isInteger(record.maxConsumptionCount) || record.maxConsumptionCount < 1 || !Number.isInteger(record.consumptionCount) || record.consumptionCount < 0 || record.consumptionCount > record.maxConsumptionCount || !HUMAN_AUTH_STATES.includes(record.state) || !Number.isInteger(record.issuedAt) || record.issuedAt < 0 || (record.expiresAt !== null && (!Number.isInteger(record.expiresAt) || record.expiresAt <= record.issuedAt)) || !validConsumedBy(record.consumedBy) || !validScope(record.scope, record.mutationEnvelopeSha256)) return result(HUMAN_AUTH_REASON_CODES.INVALID, ['RECORD_FIELDS_INVALID']);
  if (record.authorityRevision === 1 ? record.previousRecordSha256 !== null : !isSha256(record.previousRecordSha256)) return result(HUMAN_AUTH_REASON_CODES.INVALID, ['PREVIOUS_RECORD_HASH_INVALID']);
  if (record.state === 'ACTIVE' && record.consumptionCount >= record.maxConsumptionCount) return result(HUMAN_AUTH_REASON_CODES.INVALID, ['ACTIVE_CONSUMPTION_EXHAUSTED']);
  if (record.state === 'CONSUMED' && record.consumptionCount !== record.maxConsumptionCount) return result(HUMAN_AUTH_REASON_CODES.INVALID, ['CONSUMED_COUNT_MISMATCH']);
  if (expectedProjectId !== undefined && record.projectId !== expectedProjectId) return result(HUMAN_AUTH_REASON_CODES.PROJECT_MISMATCH, ['PROJECT_MISMATCH']);
  if (expectedHumanFinalAuthority !== undefined && record.approvedBy !== expectedHumanFinalAuthority) return result(HUMAN_AUTH_REASON_CODES.HUMAN_MISMATCH, ['HUMAN_MISMATCH']);
  const projection = freeze(clone(record));
  return result('HUMAN_AUTH_SUPPORTED', [], { valid: true, projection, record: projection });
}

function scopeNarrower(authorityScope, requestedScope) {
  if (!isObject(requestedScope) || requestedScope.mutationEnvelopeSha256 !== authorityScope.mutationEnvelopeSha256) return false;
  return Object.entries(authorityScope).filter(([key]) => key !== 'mutationEnvelopeSha256').every(([key, value]) => requestedScope[key] === value);
}

export function evaluateHumanAuthorityUse({ authority, request, expectedProjectId, expectedHumanFinalAuthority, nowMs } = {}) {
  const checked = validateHumanAuthority(authority, { expectedProjectId, expectedHumanFinalAuthority });
  if (!checked.valid) return checked;
  if (!isObject(request)) return result(HUMAN_AUTH_REASON_CODES.INVALID, ['REQUEST_INVALID']);
  if (authority.state === 'REVOKED') return result(HUMAN_AUTH_REASON_CODES.REVOKED, ['AUTHORITY_REVOKED']);
  if (authority.state === 'EXPIRED' || (authority.expiresAt !== null && (!Number.isInteger(nowMs) || nowMs >= authority.expiresAt))) return result(HUMAN_AUTH_REASON_CODES.EXPIRED, ['AUTHORITY_EXPIRED']);
  if (authority.state === 'CONSUMED' || authority.consumptionCount >= authority.maxConsumptionCount) return result(HUMAN_AUTH_REASON_CODES.ALREADY_CONSUMED, ['AUTHORITY_ALREADY_CONSUMED']);
  if (request.projectId !== authority.projectId || (expectedProjectId !== undefined && request.projectId !== expectedProjectId)) return result(HUMAN_AUTH_REASON_CODES.PROJECT_MISMATCH, ['PROJECT_MISMATCH']);
  if (request.approvedBy !== undefined && request.approvedBy !== authority.approvedBy) return result(HUMAN_AUTH_REASON_CODES.HUMAN_MISMATCH, ['HUMAN_MISMATCH']);
  if (request.operationClass !== authority.operationClass) return result(HUMAN_AUTH_REASON_CODES.OPERATION_CLASS_MISMATCH, ['OPERATION_CLASS_MISMATCH']);
  if (request.mutationEnvelopeSha256 !== authority.mutationEnvelopeSha256) return result(HUMAN_AUTH_REASON_CODES.MUTATION_ENVELOPE_MISMATCH, ['MUTATION_ENVELOPE_MISMATCH']);
  if (!scopeNarrower(authority.scope, request.scope)) return result(HUMAN_AUTH_REASON_CODES.SCOPE_MISMATCH, ['SCOPE_MISMATCH']);
  return result('HUMAN_AUTH_AUTHORIZED', [], { valid: true, authorized: true, authorityId: authority.authorityId });
}

export function projectHumanAuthorityConsumption({ authority, evaluation, previousRecordSha256, consumedBy } = {}) {
  if (evaluation?.authorized !== true || !isSha256(previousRecordSha256) || !validConsumedBy(consumedBy) || consumedBy === null) return null;
  const next = clone(authority);
  next.authorityRevision += 1;
  next.previousRecordSha256 = previousRecordSha256;
  next.consumptionCount += 1;
  next.state = next.consumptionCount === next.maxConsumptionCount ? 'CONSUMED' : 'ACTIVE';
  next.consumedBy = clone(consumedBy);
  return freeze(next);
}
