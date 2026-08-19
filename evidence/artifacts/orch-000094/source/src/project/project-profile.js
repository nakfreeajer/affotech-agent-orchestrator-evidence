import crypto from 'node:crypto';

export const PROJECT_PROFILE_SCHEMA_VERSION = '1.0';
export const PROJECT_PROFILE_RECORD_TYPE = 'PROJECT_PROFILE';
export const PROJECT_PROFILE_PROTOCOL_FAMILY = 'ORCHESTRATOR_GITHUB';
export const PROJECT_PROFILE_REASON_CODES = Object.freeze({
  INVALID: 'PROJECT_PROFILE_INVALID',
  SCHEMA_UNSUPPORTED: 'PROJECT_PROFILE_SCHEMA_UNSUPPORTED',
  FOREIGN_PROTOCOL_FAMILY: 'PROJECT_PROFILE_FOREIGN_PROTOCOL_FAMILY',
  GOVERNANCE_PIN_INVALID: 'PROJECT_PROFILE_GOVERNANCE_PIN_INVALID',
  DYNAMIC_STATE_EMBEDDED: 'PROJECT_PROFILE_DYNAMIC_STATE_EMBEDDED',
  PROTECTED_RESOURCE_CONFLICT: 'PROJECT_PROFILE_PROTECTED_RESOURCE_CONFLICT'
});

const TOP_LEVEL = Object.freeze(['recordType', 'schemaVersion', 'protocolFamily', 'projectId', 'projectName', 'authority', 'source', 'governance', 'roles', 'protectedBoundaries', 'endpoints', 'pointers']);
const POINTER_KEYS = Object.freeze(['architectDecision', 'architectPrompt', 'dispatch', 'acceptedExecutor', 'relayControl']);
const DYNAMIC_KEYS = new Set(['currentDispatchId', 'currentMessageId', 'currentDecisionId', 'decisionId', 'acceptedSourcePublicationId', 'acceptedSourceHash', 'triggerId', 'reconciliationId', 'currentBranchHead', 'currentRef', 'branchHead', 'headRef']);
const sha256 = (value) => crypto.createHash('sha256').update(JSON.stringify(value), 'utf8').digest('hex');
const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
const isString = (value) => typeof value === 'string' && value.length > 0;
const isSha1 = (value) => typeof value === 'string' && /^[0-9a-f]{40}$/.test(value);
const isSha256 = (value) => typeof value === 'string' && /^[0-9a-f]{64}$/.test(value);
const isPath = (value) => isString(value) && value.startsWith('evidence/current/') && !value.includes('..') && !value.includes('\\');
const isRepository = (value) => typeof value === 'string' && /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(value);
const clone = (value) => JSON.parse(JSON.stringify(value));
const freeze = (value) => { if (isObject(value)) { for (const child of Object.values(value)) freeze(child); Object.freeze(value); } else if (Array.isArray(value)) { for (const child of value) freeze(child); Object.freeze(value); } return value; };
const fail = (classification, reasonCodes) => ({ classification, valid: false, reasonCodes });

function hasDynamicKey(value) {
  if (!isObject(value) && !Array.isArray(value)) return false;
  if (isObject(value)) for (const [key, child] of Object.entries(value)) if (DYNAMIC_KEYS.has(key) || hasDynamicKey(child)) return true;
  if (Array.isArray(value)) for (const child of value) if (hasDynamicKey(child)) return true;
  return false;
}

function exactKeys(value, keys) { return isObject(value) && Object.keys(value).sort().join('|') === [...keys].sort().join('|'); }
function validGovernancePin(pin, expectedPath, expectedVersion) { return isObject(pin) && exactKeys(pin, ['version', 'path', 'blobSha', 'contentSha256', ...(expectedPath.includes('PROJECT') ? ['inheritsBootstrap'] : [])]) && pin.version === expectedVersion && pin.path === expectedPath && isSha1(pin.blobSha) && isSha256(pin.contentSha256); }

export function validateProjectProfile(input = {}) {
  if (!isObject(input)) return fail(PROJECT_PROFILE_REASON_CODES.INVALID, ['PROFILE_NOT_OBJECT']);
  if (input.schemaVersion !== PROJECT_PROFILE_SCHEMA_VERSION) return fail(PROJECT_PROFILE_REASON_CODES.SCHEMA_UNSUPPORTED, ['UNSUPPORTED_SCHEMA_VERSION']);
  if (input.protocolFamily !== PROJECT_PROFILE_PROTOCOL_FAMILY) return fail(PROJECT_PROFILE_REASON_CODES.FOREIGN_PROTOCOL_FAMILY, ['FOREIGN_PROTOCOL_FAMILY']);
  if (hasDynamicKey(input)) return fail(PROJECT_PROFILE_REASON_CODES.DYNAMIC_STATE_EMBEDDED, ['DYNAMIC_WORKFLOW_STATE_EMBEDDED']);
  if (!exactKeys(input, TOP_LEVEL)) return fail(PROJECT_PROFILE_REASON_CODES.INVALID, ['TOP_LEVEL_FIELDS_INVALID']);
  if (input.recordType !== PROJECT_PROFILE_RECORD_TYPE || !isString(input.projectId) || !isString(input.projectName)) return fail(PROJECT_PROFILE_REASON_CODES.INVALID, ['IDENTITY_INVALID']);
  if (!isObject(input.authority) || !isRepository(input.authority.evidenceRepository) || input.authority.evidenceBranch !== 'main' || input.authority.evidenceAuthority !== 'GITHUB_DURABLE_EVIDENCE' || !Array.isArray(input.authority.currentPointerPaths) || input.authority.currentPointerPaths.length !== 5 || input.authority.currentPointerPaths.some((path) => !isPath(path))) return fail(PROJECT_PROFILE_REASON_CODES.INVALID, ['EVIDENCE_AUTHORITY_INVALID']);
  if (!isObject(input.source) || !exactKeys(input.source, ['sourceAuthorityMode', 'acceptedSourcePointerPath', 'canonicalLocalRoot']) || input.source.sourceAuthorityMode !== 'EVIDENCE_SNAPSHOT' || !isPath(input.source.acceptedSourcePointerPath) || !isString(input.source.canonicalLocalRoot)) return fail(PROJECT_PROFILE_REASON_CODES.INVALID, ['SOURCE_AUTHORITY_INVALID']);
  if (!isObject(input.governance) || !exactKeys(input.governance, ['bootstrap', 'projectPolicy']) || !validGovernancePin(input.governance.bootstrap, 'governance/ORCHESTRATOR_BOOTSTRAP.md', '1.1') || !validGovernancePin(input.governance.projectPolicy, 'governance/PROJECT_ORCHESTRATION_POLICY.md', '1.0') || input.governance.projectPolicy.inheritsBootstrap !== true) return fail(PROJECT_PROFILE_REASON_CODES.GOVERNANCE_PIN_INVALID, ['GOVERNANCE_PIN_INVALID']);
  if (!isObject(input.roles) || !exactKeys(input.roles, ['humanFinalAuthority', 'architectRole', 'executorRole', 'curatorPolicy']) || input.roles.humanFinalAuthority !== 'Rony Finster' || !isString(input.roles.architectRole) || !isString(input.roles.executorRole) || input.roles.curatorPolicy !== 'ON_DEMAND') return fail(PROJECT_PROFILE_REASON_CODES.INVALID, ['ROLES_INVALID']);
  if (!isObject(input.protectedBoundaries) || !exactKeys(input.protectedBoundaries, ['foreignProtocolFamily', 'foreignRepository', 'foreignRepositoryAccess', 'protectedPorts', 'affotechIntegrationAuthorized', 'affotechAccessAuthorized']) || input.protectedBoundaries.foreignProtocolFamily !== 'AFFOTECH_PUB_EXTERNAL' || input.protectedBoundaries.foreignRepository !== 'nakfreeajer/affotech-agent-relay' || input.protectedBoundaries.foreignRepositoryAccess !== 'PROTECTED_NO_ACCESS' || input.protectedBoundaries.affotechIntegrationAuthorized !== false || input.protectedBoundaries.affotechAccessAuthorized !== false || !Array.isArray(input.protectedBoundaries.protectedPorts) || input.protectedBoundaries.protectedPorts.some((port) => !Number.isInteger(port) || port < 1 || port > 65535)) return fail(PROJECT_PROFILE_REASON_CODES.INVALID, ['PROTECTED_BOUNDARY_INVALID']);
  if (!isObject(input.endpoints) || !exactKeys(input.endpoints, ['architectRelayPort', 'executorRelayPort']) || input.endpoints.architectRelayPort !== 9333 || input.endpoints.executorRelayPort !== 9444) return fail(PROJECT_PROFILE_REASON_CODES.INVALID, ['ENDPOINTS_INVALID']);
  if (input.protectedBoundaries.protectedPorts.includes(input.endpoints.architectRelayPort) || input.protectedBoundaries.protectedPorts.includes(input.endpoints.executorRelayPort)) return fail(PROJECT_PROFILE_REASON_CODES.PROTECTED_RESOURCE_CONFLICT, ['PROTECTED_PORT_OVERLAPS_ORCHESTRATOR_ENDPOINT']);
  if (!isObject(input.pointers) || !exactKeys(input.pointers, POINTER_KEYS) || Object.values(input.pointers).some((path) => !isPath(path))) return fail(PROJECT_PROFILE_REASON_CODES.INVALID, ['POINTERS_INVALID']);
  const projection = freeze(clone(input));
  return { classification: 'PROJECT_PROFILE_SUPPORTED', valid: true, reasonCodes: [], profile: projection, projection, profileSha256: sha256(input) };
}

export const projectProfileInternals = Object.freeze({ TOP_LEVEL: Object.freeze([...TOP_LEVEL]), POINTER_KEYS: Object.freeze([...POINTER_KEYS]) });
