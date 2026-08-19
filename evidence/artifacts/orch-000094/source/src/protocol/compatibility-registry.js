const SUPPORTED = new Set([
  'DISPATCH', 'ARCHITECT_PROMPT', 'ARCHITECT_DECISION', 'EXECUTOR_ACCEPTED', 'RELAY_CONTROL',
  'WORKER_AUTHORITY', 'WORKER_REGISTRATION', 'WORKER_DELIVERY_INTENT', 'WORKER_DELIVERY_RESULT',
  'WORKER_DELIVERY', 'WORKER_RESULT', 'WORKER_RECONCILIATION', 'ARCHITECT_TRIGGER',
  'ARCHITECT_TRIGGER_RECONCILIATION', 'ARCHITECT_SESSION_AUTHORITY', 'ARCHITECT_SESSION_REGISTRATION', 'PROJECT_PROFILE', 'HUMAN_AUTH', 'MUTATION_LEASE'
]);
const RESERVED = new Set(['CURATOR_RESULT']);
const isObject = (x) => x !== null && typeof x === 'object' && !Array.isArray(x);
const isOrch = (x) => typeof x === 'string' && /^ORCH-[A-Za-z0-9._:-]+$/.test(x);
const isDispatch = (x) => typeof x === 'string' && /^DISPATCH-[A-Za-z0-9._:-]+$/.test(x);
const isForeign = (x) => typeof x === 'string' && /^PUB-[A-Za-z0-9._:-]+$/.test(x);
const result = (classification, reasonCodes = [], extra = {}) => ({ classification, valid: classification === 'SUPPORTED', reasonCodes, ...extra });

export const PROTOCOL_FAMILIES = Object.freeze({ ORCHESTRATOR_GITHUB: 'ORCHESTRATOR_GITHUB', AFFOTECH_PUB_EXTERNAL: 'AFFOTECH_PUB_EXTERNAL' });
export const COMPATIBILITY_REASON_CODES = Object.freeze({ MISSING_SCHEMA_VERSION: 'MISSING_SCHEMA_VERSION', UNSUPPORTED_SCHEMA_VERSION: 'UNSUPPORTED_SCHEMA_VERSION', UNKNOWN_RECORD_KIND: 'UNKNOWN_RECORD_KIND', RESERVED_NOT_YET_SUPPORTED: 'RESERVED_NOT_YET_SUPPORTED', FOREIGN_PROTOCOL_FAMILY: 'FOREIGN_PROTOCOL_FAMILY', INVALID_CANONICAL_IDENTITY: 'INVALID_CANONICAL_IDENTITY', INSUFFICIENT_CORRELATION_EVIDENCE: 'INSUFFICIENT_CORRELATION_EVIDENCE', CORRELATION_MISMATCH: 'CORRELATION_MISMATCH' });

export function identifyProtocolFamily(value, field = 'identity') {
  if (field === 'messageId' && isOrch(value)) return PROTOCOL_FAMILIES.ORCHESTRATOR_GITHUB;
  if (field === 'dispatchId' && isDispatch(value)) return PROTOCOL_FAMILIES.ORCHESTRATOR_GITHUB;
  if (isForeign(value)) return PROTOCOL_FAMILIES.AFFOTECH_PUB_EXTERNAL;
  if (typeof value === 'string' && /^GH-PUB-/.test(value)) return PROTOCOL_FAMILIES.ORCHESTRATOR_GITHUB;
  return null;
}

export function validateProtocolFamily({ family = PROTOCOL_FAMILIES.ORCHESTRATOR_GITHUB, messageId, dispatchId } = {}) {
  if (family !== PROTOCOL_FAMILIES.ORCHESTRATOR_GITHUB) return result('FOREIGN_FAMILY', ['FOREIGN_PROTOCOL_FAMILY']);
  if (messageId !== undefined && !isOrch(messageId)) return result('FOREIGN_FAMILY', [isForeign(messageId) ? 'FOREIGN_PROTOCOL_FAMILY' : 'INVALID_CANONICAL_IDENTITY']);
  if (dispatchId !== undefined && !isDispatch(dispatchId)) return result('FOREIGN_FAMILY', [isForeign(dispatchId) ? 'FOREIGN_PROTOCOL_FAMILY' : 'INVALID_CANONICAL_IDENTITY']);
  return result('SUPPORTED');
}

export function validateProtocolRecord(record, { expectedFamily = PROTOCOL_FAMILIES.ORCHESTRATOR_GITHUB } = {}) {
  if (!isObject(record) || typeof record.schemaVersion !== 'string' || record.schemaVersion.length === 0) return result('INCOMPATIBLE', ['MISSING_SCHEMA_VERSION']);
  if (record.schemaVersion !== '1.0') return result('INCOMPATIBLE', ['UNSUPPORTED_SCHEMA_VERSION']);
  if (RESERVED.has(record.recordType)) return result('RESERVED_NOT_YET_SUPPORTED', ['RESERVED_NOT_YET_SUPPORTED']);
  if ((record.recordType === 'PROJECT_PROFILE' || record.recordType === 'HUMAN_AUTH' || record.recordType === 'MUTATION_LEASE') && record.protocolFamily === undefined) return result('RESERVED_NOT_YET_SUPPORTED', ['RESERVED_NOT_YET_SUPPORTED']);
  if (!SUPPORTED.has(record.recordType)) return result('INCOMPATIBLE', ['UNKNOWN_RECORD_KIND']);
  const family = validateProtocolFamily({ family: expectedFamily, messageId: record.messageId, dispatchId: record.dispatchId });
  if (!family.valid && (record.messageId !== undefined || record.dispatchId !== undefined)) return family;
  return result('SUPPORTED', [], { recordType: record.recordType, schemaVersion: record.schemaVersion });
}

export function evaluateCorrelationEvidence({ operationId, sourceMessageId, dispatchId, targetId, payloadSha256, preAttemptBoundary, preAttemptBoundarySha256, attemptOrdinal, timestamp } = {}) {
  const required = [operationId, sourceMessageId, dispatchId, targetId, payloadSha256, preAttemptBoundary, preAttemptBoundarySha256, attemptOrdinal];
  if (required.some((x) => x === undefined || x === null || x === '')) return result('INSUFFICIENT_CORRELATION_EVIDENCE', ['INSUFFICIENT_CORRELATION_EVIDENCE'], { retryAuthorized: false });
  if (timestamp !== undefined && !Number.isFinite(timestamp)) return result('INSUFFICIENT_CORRELATION_EVIDENCE', ['INSUFFICIENT_CORRELATION_EVIDENCE'], { retryAuthorized: false });
  if (typeof attemptOrdinal !== 'number' || attemptOrdinal < 1) return result('CORRELATION_MISMATCH', ['CORRELATION_MISMATCH'], { retryAuthorized: false });
  return result('CORRELATION_SUFFICIENT', [], { retryAuthorized: false });
}

export const compatibilityRegistry = Object.freeze({ PROTOCOL_FAMILIES, SUPPORTED: Object.freeze([...SUPPORTED]), RESERVED: Object.freeze([...RESERVED]), validateProtocolRecord, validateProtocolFamily, identifyProtocolFamily, evaluateCorrelationEvidence });
