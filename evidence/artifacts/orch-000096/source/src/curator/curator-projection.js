import { validateProjectEventChain } from '../events/project-events.js';
import { renderDocumentationProjection } from './curator-document-renderer.js';

export const CURATOR_ROUTES = Object.freeze(['GOVERNANCE', 'DECISIONS', 'ARCHITECTURE', 'CURRENT_STATE', 'PROJECT_HISTORY', 'BUGS_AND_LESSONS', 'RUNBOOK', 'DEPLOYMENT', 'RELEASES', 'USER_GUIDE', 'ROADMAP', 'NONE']);
const clone = (x) => x === undefined ? undefined : JSON.parse(JSON.stringify(x));
const object = (x) => x !== null && typeof x === 'object' && !Array.isArray(x);
const freeze = (x) => { if (Array.isArray(x)) x.forEach(freeze); else if (object(x)) Object.values(x).forEach(freeze); return object(x) || Array.isArray(x) ? Object.freeze(x) : x; };
const nonEmpty = (x) => typeof x === 'string' && x.trim().length > 0;
const forbidden = (x, key = '') => { if (/assistant|transcript|credential|token|cookie|authorization|dom|html|private.?business/i.test(key)) return true; if (typeof x === 'string' && /<s*(html|script|body)/i.test(x)) return true; if (Array.isArray(x)) return x.some((v) => forbidden(v, key)); if (object(x)) return Object.entries(x).some(([k, v]) => forbidden(v, k)); return false; };
const fail = (reason) => freeze({ valid: false, classification: 'CURATOR_PROJECTION_INVALID', reasonCodes: [reason], cursorAdvanceAuthorized: false, mutationAuthorized: false, retryAuthorized: false });
const postLedgerFactKey = (fact) => fact.factKey ?? fact.semanticFactType ?? fact.decisionId;
const validatePostLedgerFacts = (facts, requiredKeys, requiredClassifications) => { if (!Array.isArray(facts)) return null; const seen = new Map(); for (const fact of facts) { if (!object(fact)) return 'POST_LEDGER_FACT_INVALID'; if (fact.sequence !== undefined || fact.eventSequence !== undefined || fact.mirroredIntoLedger === true) return 'POST_LEDGER_FACT_SEQUENCE_FORBIDDEN'; if (fact.classification !== undefined && !['ACCEPTED','BLOCKED','INCONCLUSIVE'].includes(fact.classification)) return 'POST_LEDGER_FACT_CLASSIFICATION_INVALID'; const key=postLedgerFactKey(fact); if (key) { const prior=seen.get(key); if (prior && JSON.stringify(prior)!==JSON.stringify(fact)) return 'POST_LEDGER_FACT_DUPLICATE_CONFLICT'; seen.set(key,fact); } } if (Array.isArray(requiredKeys) && (requiredKeys.length!==seen.size || requiredKeys.some(key=>!seen.has(key)))) return 'POST_LEDGER_FACT_DROPPED'; if (requiredClassifications && object(requiredClassifications)) for (const [key,value] of Object.entries(requiredClassifications)) if (seen.get(key)?.classification!==value) return 'POST_LEDGER_FACT_CLASSIFICATION_ALTERED'; return null; };
const lineage = (event) => [event.missionId, event.milestoneId, event.messageId, event.dispatchId, event.subjectId].filter(nonEmpty).join('|') || event.eventId;
const defaultRoutes = (event) => {
  const type = event.eventType;
  if (type === 'HUMAN_PROJECT_DIRECTIVE' || type === 'GOVERNANCE_CHANGED') return ['GOVERNANCE', 'DECISIONS', 'PROJECT_HISTORY'];
  if (type === 'ARCHITECT_DECISION') return ['DECISIONS'];
  if (type === 'ARCHITECT_DISPATCH_PUBLISHED') return ['PROJECT_HISTORY'];
  if (type === 'ROOT_CAUSE_CONFIRMED' || type === 'COUNTERMEASURE_ADOPTED') return ['BUGS_AND_LESSONS', 'DECISIONS', 'RUNBOOK'];
  if (type === 'EXECUTOR_TERMINAL_PUBLISHED') return ['PROJECT_HISTORY'];
  if (type === 'VALIDATION_PASSED' || type === 'VALIDATION_FAILED' || type === 'EXECUTOR_STARTED' || type === 'EXECUTOR_CHECKPOINT') return ['NONE'];
  if (type === 'BLOCKER_DETECTED' || type === 'RECONCILIATION_STARTED' || type === 'RECONCILIATION_RESOLVED' || type === 'RECONCILIATION_INCONCLUSIVE') return ['PROJECT_HISTORY', 'BUGS_AND_LESSONS'];
  if (type === 'SOURCE_ACCEPTED') return ['CURRENT_STATE', 'PROJECT_HISTORY'];
  if (type === 'MISSION_PAUSED' || type === 'MISSION_RESUMED' || type === 'MISSION_COMPLETE') return ['PROJECT_HISTORY'];
  return ['NONE'];
};
const truthAccepted = (event, state) => event.eventType === 'SOURCE_ACCEPTED' && object(state) && state.acceptedSourcePublicationId && (event.sourcePublicationId ?? event.subjectId ?? event.detailsRef).includes(state.acceptedSourcePublicationId);

export function projectCuratorUpdate(input = {}) {
  if (!object(input) || input.command !== 'update') return fail('COMMAND_MUST_BE_UPDATE');
  if (!nonEmpty(input.projectId) || !nonEmpty(input.sourceRef) || !Array.isArray(input.events) || !object(input.cursor) || input.cursor.projectId !== input.projectId) return fail('CURATOR_INPUT_INVALID');
  if (forbidden(input)) return fail('CURATOR_SENSITIVE_INPUT_REJECTED');
  const chain = validateProjectEventChain(input.events, input.cursor, { bootstrap: input.bootstrapMode === true });
  if (!chain.valid) return fail(chain.reasonCodes[0]);
  const catalog = object(input.documentCatalog) ? input.documentCatalog : {};
  const currentTruthOverlay = clone(input.postLedgerFacts ?? input.currentTruthOverlay ?? []);
  const overlayError = validatePostLedgerFacts(currentTruthOverlay, input.requiredPostLedgerFactKeys, input.requiredPostLedgerClassifications);
  if (overlayError) return fail(overlayError);
  if (input.events.length === 0) return freeze({ valid: true, classification: 'CURATOR_NO_UPDATE_REQUIRED', projectId: input.projectId, sourceRef: input.sourceRef, plan: [], proposedCursor: freeze(clone(input.cursor)), currentTruthOverlay, cursorAdvanceAuthorized: false, documentationPreservationRequired: false, architectSemanticVerificationRequired: false, mutationAuthorized: false, retryAuthorized: false });
  const groups = new Map(); const unavailable = new Set();
  for (const event of chain.events) {
    let routes = [...new Set([...(event.documentationImpact ?? []), ...defaultRoutes(event)])].filter((x) => x !== 'NONE');
    if (['EXECUTOR_STARTED', 'EXECUTOR_CHECKPOINT', 'VALIDATION_PASSED', 'VALIDATION_FAILED'].includes(event.eventType)) routes = [];
    if (event.eventType === 'ARCHITECT_DECISION') routes = ['DECISIONS'];
    if (event.eventType === 'SOURCE_ACCEPTED') routes = truthAccepted(event, input.acceptedArchitectState) ? ['CURRENT_STATE', 'PROJECT_HISTORY'] : ['PROJECT_HISTORY'];
    if (event.eventType === 'EXECUTOR_TERMINAL_PUBLISHED' && event.outcome === 'PASS' && !truthAccepted(event, input.acceptedArchitectState)) routes = routes.filter((x) => x !== 'CURRENT_STATE' && x !== 'ARCHITECTURE');
    routes = routes.filter((x) => CURATOR_ROUTES.includes(x));
    if (routes.length === 0) continue;
    for (const route of routes) if (catalog[route] === false || catalog[route]?.available === false) unavailable.add(route);
    const key = lineage(event); const group = groups.get(key) ?? { lineageKey: key, eventIds: [], eventSequences: [], routes: new Set(), sourceRefs: new Set() }; group.eventIds.push(event.eventId); group.eventSequences.push(event.eventSequence); routes.forEach((x) => group.routes.add(x)); group.sourceRefs.add(input.sourceRef); groups.set(key, group);
  }
  const plan = [...groups.values()].sort((a, b) => a.eventSequences[0] - b.eventSequences[0]).map((group) => ({ lineageKey: group.lineageKey, eventIds: group.eventIds, eventSequences: group.eventSequences, routes: [...group.routes].sort(), sourceRefs: [...group.sourceRefs].sort(), unavailableTargets: [...unavailable].sort() }));
  const canonicalDecisionFacts = chain.events.filter((event) => event.eventType === 'ARCHITECT_DECISION').map((event) => ({ eventSequence: event.eventSequence, eventId: event.eventId, decisionId: event.producerEventKey ?? event.subjectId, detailsRef: event.detailsRef }));
  const last = chain.events.at(-1); const proposedCursor = { projectId: input.projectId, lastProcessedEventId: last.eventId, lastProcessedEventSequence: last.eventSequence, sourceRef: input.sourceRef, priorResultRef: input.cursor.priorResultRef ?? null, documentRefs: input.cursor.documentRefs ?? [] };
  const hasDocs = plan.some((x) => x.routes.length > 0); const semantic = plan.some((x) => x.routes.some((r) => ['GOVERNANCE', 'DECISIONS', 'ARCHITECTURE', 'CURRENT_STATE'].includes(r)));
  return freeze({ valid: true, classification: hasDocs ? 'CURATOR_UPDATE_PLANNED' : 'CURATOR_NO_DOCUMENTATION_UPDATE_REQUIRED', projectId: input.projectId, sourceRef: input.sourceRef, plan: clone(plan), canonicalDecisionFacts, semanticFacts: clone(input.semanticFacts ?? input.semanticProfile ?? null), executorContentAuthorship: false, proposedCursor, currentTruthOverlay, cursorAdvanceAuthorized: false, documentationPreservationRequired: hasDocs, architectSemanticVerificationRequired: semantic, unavailableTargets: [...unavailable].sort(), mutationAuthorized: false, retryAuthorized: false });
}

export const curatorProjection = Object.freeze({ projectCuratorUpdate, renderDocumentationProjection, CURATOR_ROUTES });
