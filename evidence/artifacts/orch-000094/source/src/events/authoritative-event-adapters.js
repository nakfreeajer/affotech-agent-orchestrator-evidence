import { EVENT_TYPES, createProjectEvent } from './project-events.js';
const roles = { architect: new Set(['HUMAN_PROJECT_DIRECTIVE','GOVERNANCE_CHANGED','ARCHITECT_DECISION','ARCHITECT_DISPATCH_PUBLISHED','ROOT_CAUSE_CONFIRMED','COUNTERMEASURE_ADOPTED','SOURCE_ACCEPTED']), executor: new Set(['EXECUTOR_STARTED','EXECUTOR_CHECKPOINT','EXECUTOR_TERMINAL_PUBLISHED','VALIDATION_PASSED','VALIDATION_FAILED','BLOCKER_DETECTED']), reconciliation: new Set(['RECONCILIATION_STARTED','RECONCILIATION_RESOLVED','RECONCILIATION_INCONCLUSIVE']), curator: new Set(['CURATOR_UPDATE_STARTED','CURATOR_UPDATE_COMPLETED','CURATOR_UPDATE_BLOCKED','CURATOR_CURSOR_ADVANCED']) };
const sensitive = /assistant|transcript|conversation|credential|secret|token|cookie|authorization|auth[_-]?header|browser|dom|html|private.?business|financial/i;
const obj = x => x && typeof x === 'object' && !Array.isArray(x);
const clone = x => x === undefined ? undefined : JSON.parse(JSON.stringify(x));
const freeze = x => { if (Array.isArray(x)) x.forEach(freeze); else if (obj(x)) Object.values(x).forEach(freeze); return obj(x)||Array.isArray(x)?Object.freeze(x):x; };
const fail = reason => freeze({valid:false,classification:'AUTHORITATIVE_EVENT_INVALID',reasonCodes:[reason],mutationAuthorized:false,retryAuthorized:false});
const nonempty = x => typeof x === 'string' && x.trim().length > 0;
const sha = x => typeof x === 'string' && /^[0-9a-f]{64}$/.test(x);
const identity = (r, eventType) => eventType === 'SOURCE_ACCEPTED' ? (r.sourceAcceptanceId ?? (nonempty(r.acceptedSourcePublicationId) && nonempty(r.decisionId) ? `SOURCE_ACCEPTED:${r.acceptedSourcePublicationId}:${r.decisionId}` : null)) : (r.producerEventKey ?? r.decisionId ?? r.dispatchId ?? r.publicationId ?? r.resultId ?? r.reconciliationId ?? r.cursorResultId ?? r.directiveId ?? null);
const refs = r => r.detailsRef ?? r.sourceRef ?? r.recordPath;
const impact = r => Array.isArray(r.documentationImpact) ? r.documentationImpact : ['NONE'];
const typeFor = r => r.eventType;
function forbidden(x, key='') { if (sensitive.test(key)) return true; if (typeof x === 'string' && sensitive.test(x)) return true; if (Array.isArray(x)) return x.some(v=>forbidden(v,key)); if (obj(x)) return Object.entries(x).some(([k,v])=>forbidden(v,k)); return false; }

export function adaptAuthoritativeEvent(input = {}) {
  if (!obj(input) || !nonempty(input.projectId) || !obj(input.record)) return fail('STRUCTURED_RECORD_REQUIRED');
  const r = input.record; if (forbidden(r)) return fail('SENSITIVE_SOURCE_REJECTED');
  const eventType = typeFor(r); const family = input.producerFamily ?? r.producerFamily; const role = input.producerRole ?? r.producerRole;
  if (!roles[family] || role !== family || !EVENT_TYPES.includes(eventType) || !roles[family].has(eventType)) return fail('PRODUCER_OWNERSHIP_INVALID');
  if (eventType === 'HUMAN_PROJECT_DIRECTIVE' && !(r.architectPromoted === true && r.humanAuthority === 'Rony' && nonempty(r.directiveId) && (obj(r.adoptedDirective) || nonempty(r.adoptedSummary)))) return fail('PROMOTED_DIRECTIVE_REQUIRED');
  if (eventType === 'SOURCE_ACCEPTED' && !(r.decisionState === 'ACCEPTED' && r.reviewedPublicationId === r.acceptedSourcePublicationId && nonempty(r.acceptedSourceManifestSha256) && nonempty(r.acceptedSourceArchiveSha256))) return fail('SOURCE_ACCEPTANCE_BINDING_INVALID');
  const producerEventKey = identity(r,eventType); const detailsRef = refs(r);
  if (!nonempty(producerEventKey) || !nonempty(detailsRef) || r.detailsSha256 !== undefined && !sha(r.detailsSha256)) return fail('DURABLE_IDENTITY_REQUIRED');
  if (!Number.isInteger(r.createdAt) || r.createdAt < 0 || !nonempty(r.producerId)) return fail('PRODUCER_FIELDS_INVALID');
  const adapted = { schemaVersion:'1.0', recordType:'PROJECT_EVENT', projectId:input.projectId, eventId:'pending', eventType, producerRole:role, producerId:r.producerId, eventSequence:1, previousEventId:null, createdAt:r.createdAt, missionId:r.missionId??null, messageId:r.messageId??null, dispatchId:r.dispatchId??null, milestoneId:r.milestoneId??null, subjectId:r.subjectId??producerEventKey, detailsRef, ...(r.detailsSha256?{detailsSha256:r.detailsSha256}:{}), documentationImpact:impact(r), producerEventKey, sourceRecordType:r.recordType??eventType, ...(eventType==='HUMAN_PROJECT_DIRECTIVE'?{humanAuthority:r.humanAuthority,directiveClass:r.directiveClass??'REQUIREMENT'}:{}), ...(eventType==='SOURCE_ACCEPTED'?{sourcePublicationId:r.acceptedSourcePublicationId}: {}) };
  const checked = createProjectEvent({event:adapted, bootstrap:true, reconciliationAuthorized:role==='reconciliation'}); if (!checked.valid) return fail(checked.reasonCodes[0]);
  return freeze({valid:true,classification:'AUTHORITATIVE_EVENT_ADAPTED',eventInput:freeze(clone({...adapted,eventId:undefined})),producerEventKey,sourceIdentity:producerEventKey,mutationAuthorized:false,retryAuthorized:false});
}
export const authoritativeEventAdapters = Object.freeze({adaptAuthoritativeEvent, roles});
