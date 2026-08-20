export const EVENT_TYPES = Object.freeze([
  'HUMAN_PROJECT_DIRECTIVE', 'GOVERNANCE_CHANGED', 'ARCHITECT_DECISION', 'ARCHITECT_DISPATCH_PUBLISHED',
  'ROOT_CAUSE_CONFIRMED', 'COUNTERMEASURE_ADOPTED', 'EXECUTOR_STARTED', 'EXECUTOR_CHECKPOINT',
  'EXECUTOR_TERMINAL_PUBLISHED', 'VALIDATION_PASSED', 'VALIDATION_FAILED', 'BLOCKER_DETECTED',
  'RECONCILIATION_STARTED', 'RECONCILIATION_RESOLVED', 'RECONCILIATION_INCONCLUSIVE', 'SOURCE_ACCEPTED',
  'MISSION_PAUSED', 'MISSION_RESUMED', 'MISSION_COMPLETE', 'CURATOR_UPDATE_STARTED',
  'CURATOR_UPDATE_COMPLETED', 'CURATOR_UPDATE_BLOCKED', 'CURATOR_CURSOR_ADVANCED'
]);
export const DOCUMENTATION_IMPACTS = Object.freeze(['GOVERNANCE', 'DECISIONS', 'ARCHITECTURE', 'CURRENT_STATE', 'PROJECT_HISTORY', 'BUGS_AND_LESSONS', 'RUNBOOK', 'DEPLOYMENT', 'RELEASES', 'USER_GUIDE', 'ROADMAP', 'NONE']);
const ARCHITECT_EVENTS = new Set(['HUMAN_PROJECT_DIRECTIVE', 'GOVERNANCE_CHANGED', 'ARCHITECT_DECISION', 'ARCHITECT_DISPATCH_PUBLISHED', 'ROOT_CAUSE_CONFIRMED', 'COUNTERMEASURE_ADOPTED', 'SOURCE_ACCEPTED', 'MISSION_PAUSED', 'MISSION_RESUMED', 'MISSION_COMPLETE']);
const EXECUTOR_EVENTS = new Set(['EXECUTOR_STARTED', 'EXECUTOR_CHECKPOINT', 'EXECUTOR_TERMINAL_PUBLISHED', 'VALIDATION_PASSED', 'VALIDATION_FAILED', 'BLOCKER_DETECTED']);
const CURATOR_EVENTS = new Set(['CURATOR_UPDATE_STARTED', 'CURATOR_UPDATE_COMPLETED', 'CURATOR_UPDATE_BLOCKED', 'CURATOR_CURSOR_ADVANCED']);
const RECON_EVENTS = new Set(['RECONCILIATION_STARTED', 'RECONCILIATION_RESOLVED', 'RECONCILIATION_INCONCLUSIVE']);
const DIRECTIVE_CLASSES = new Set(['GOVERNANCE', 'ARCHITECTURE', 'REQUIREMENT', 'BUSINESS_RULE', 'SCOPE_PRIORITY', 'SECURITY_PRIVACY', 'PROTECTED_RESOURCE', 'DEPLOYMENT_RELEASE', 'ACCEPTED_INTERPRETATION', 'HUMAN_CONTROL', 'FUTURE_CONSTRAINT']);
const clone = (x) => x === undefined ? undefined : JSON.parse(JSON.stringify(x));
const object = (x) => x !== null && typeof x === 'object' && !Array.isArray(x);
const freeze = (x) => { if (Array.isArray(x)) x.forEach(freeze); else if (object(x)) Object.values(x).forEach(freeze); return object(x) || Array.isArray(x) ? Object.freeze(x) : x; };
const nonEmpty = (x) => typeof x === 'string' && x.trim().length > 0;
const sha = (x) => typeof x === 'string' && /^[0-9a-f]{64}$/.test(x);
const sensitiveKey = /assistant|transcript|credential|secret|token|cookie|authorization|authentication|auth[_-]?header|header|dom|html|customer|private.?business|financial|raw.?payload/i;
const sensitive = (value, key = '') => { if (sensitiveKey.test(key)) return true; if (typeof value === 'string' && /<s*(html|body|script|div)|Bearers+[A-Za-z0-9._-]+/i.test(value)) return true; if (Array.isArray(value)) return value.some((x) => sensitive(x, key)); if (object(value)) return Object.entries(value).some(([k, v]) => sensitive(v, k)); return false; };
const validImpacts = (impacts) => { if (!Array.isArray(impacts) || impacts.some((x) => !DOCUMENTATION_IMPACTS.includes(x)) || new Set(impacts).size !== impacts.length || impacts.includes('NONE') && impacts.length > 1) return null; return [...impacts].sort(); };
const producerAllowed = (eventType, role, input) => (ARCHITECT_EVENTS.has(eventType) && role === 'architect') || (EXECUTOR_EVENTS.has(eventType) && role === 'executor') || (CURATOR_EVENTS.has(eventType) && role === 'curator') || (RECON_EVENTS.has(eventType) && (role === 'reconciliation' || role === 'worker') && input.reconciliationAuthorized === true);
const fail = (reason) => freeze({ valid: false, classification: 'PROJECT_EVENT_INVALID', reasonCodes: [reason], mutationAuthorized: false, retryAuthorized: false });

export function createProjectEvent(input = {}) {
  const source = input.event ?? input;
  if (!object(source)) return fail('EVENT_OBJECT_REQUIRED');
  if (source.schemaVersion !== '1.0' || source.recordType !== 'PROJECT_EVENT') return fail('EVENT_SCHEMA_INVALID');
  if (!nonEmpty(source.eventId) || !nonEmpty(source.projectId) || !nonEmpty(source.eventType) || !nonEmpty(source.producerRole) || !nonEmpty(source.producerId) || !Number.isInteger(source.eventSequence) || source.eventSequence < 1 || !Number.isInteger(source.createdAt) || source.createdAt < 0 || !nonEmpty(source.detailsRef)) return fail('EVENT_REQUIRED_FIELD_INVALID');
  if (!EVENT_TYPES.includes(source.eventType)) return fail('EVENT_TYPE_UNSUPPORTED');
  if (!producerAllowed(source.eventType, source.producerRole, input)) return fail('EVENT_PRODUCER_NOT_AUTHORIZED');
  if (source.previousEventId !== null && !nonEmpty(source.previousEventId)) return fail('PREVIOUS_EVENT_INVALID');
  if (source.previousEventId === null && input.bootstrap !== true && source.eventSequence !== 1) return fail('BOOTSTRAP_REQUIRED');
  if (source.detailsSha256 !== undefined && !sha(source.detailsSha256)) return fail('DETAILS_HASH_INVALID');
  if (sensitive(source)) return fail('EVENT_SENSITIVE_FIELD_REJECTED');
  const impacts = validImpacts(source.documentationImpact ?? []); if (!impacts) return fail('DOCUMENTATION_IMPACT_INVALID');
  if (source.eventType === 'HUMAN_PROJECT_DIRECTIVE' && (!nonEmpty(source.humanAuthority) || !nonEmpty(source.directiveClass) || !DIRECTIVE_CLASSES.has(source.directiveClass))) return fail('HUMAN_DIRECTIVE_INVALID');
  const event = { schemaVersion: '1.0', recordType: 'PROJECT_EVENT', eventId: source.eventId, projectId: source.projectId, eventType: source.eventType, producerRole: source.producerRole, producerId: source.producerId, eventSequence: source.eventSequence, previousEventId: source.previousEventId, createdAt: source.createdAt, missionId: source.missionId ?? null, messageId: source.messageId ?? null, dispatchId: source.dispatchId ?? null, milestoneId: source.milestoneId ?? null, subjectId: source.subjectId ?? null, detailsRef: source.detailsRef, ...(source.detailsSha256 ? { detailsSha256: source.detailsSha256 } : {}), ...(source.humanAuthority ? { humanAuthority: source.humanAuthority } : {}), ...(source.directiveClass ? { directiveClass: source.directiveClass } : {}), documentationImpact: impacts, authorityBoundary: { grantsArchitectAuthority: false, grantsHumanAuthority: false, grantsMutationLeaseAuthority: false, mutationAuthorized: false, retryAuthorized: false, acceptanceAuthority: false } };
  return freeze({ valid: true, classification: 'PROJECT_EVENT_VALID', event: freeze(event), mutationAuthorized: false, retryAuthorized: false });
}

export function validateProjectEvent(event, options = {}) { return createProjectEvent({ ...options, event }); }

export function validateProjectEventChain(events = [], cursor = {}, options = {}) {
  if (!Array.isArray(events)) return fail('EVENT_CHAIN_INVALID');
  let previousId = cursor.lastProcessedEventId ?? null; let previousSequence = cursor.lastProcessedEventSequence ?? 0; const ids = new Set(); const normalized = [];
  for (const event of events) {
    const checked = validateProjectEvent(event, { ...options, bootstrap: options.bootstrap === true || previousSequence === 0 && previousId === null });
    if (!checked.valid || event.projectId !== (cursor.projectId ?? event.projectId) || ids.has(event.eventId) || event.eventSequence !== previousSequence + 1 || event.previousEventId !== previousId) return fail('EVENT_CHAIN_CONTINUITY_INVALID');
    ids.add(event.eventId); normalized.push(checked.event); previousId = event.eventId; previousSequence = event.eventSequence;
  }
  return freeze({ valid: true, classification: 'PROJECT_EVENT_CHAIN_VALID', events: freeze(clone(normalized)), finalEventId: previousId, finalEventSequence: previousSequence, mutationAuthorized: false, retryAuthorized: false });
}

export const projectEventInternals = Object.freeze({ ARCHITECT_EVENTS, EXECUTOR_EVENTS, CURATOR_EVENTS, RECON_EVENTS, DIRECTIVE_CLASSES, sensitiveKey });
