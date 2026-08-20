import crypto from 'node:crypto';

export const PROMPT_AUTHORITY = 'CANONICAL';
export const CREATED_BY_ROLE = 'architect';
export const PROMPT_ROLES = Object.freeze(['executor', 'curator', 'orchestrator']);
export const PROMPT_MIRROR_STATES = Object.freeze(['PENDING', 'MIRRORED', 'DEGRADED']);
export const PROMPT_DISPATCH_STATES = Object.freeze(['NOT_DISPATCHED', 'READY', 'DISPATCHED', 'TERMINAL']);
export const JOURNAL_EVENT_TYPES = Object.freeze([
  'ARCHITECT_PROMPT_CREATED', 'ARCHITECT_PROMPT_HASHED', 'LEDGER_MIRROR_ATTEMPTED',
  'LEDGER_MIRROR_SUCCEEDED', 'LEDGER_MIRROR_FAILED', 'DISPATCH_CREATED',
  'WORKER_PROMPT_HASH_VERIFIED', 'WORKER_PROMPT_HASH_REJECTED',
  'WORKER_TERMINAL_PUBLISHED', 'ARCHITECT_DECISION_RECORDED'
]);

const sha256 = (value) => crypto.createHash('sha256').update(Buffer.from(value, 'utf8')).digest('hex');
const nonEmpty = (value) => typeof value === 'string' && value.length > 0;
const sha = (value) => typeof value === 'string' && /^[0-9a-f]{64}$/.test(value);
const id = (value, pattern) => typeof value === 'string' && pattern.test(value);
const plain = (value) => value !== null && typeof value === 'object' && !Array.isArray(value) &&
  (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
const json = (value) => JSON.stringify(value, null, 2) + '\n';
const fail = (reasonCodes) => ({ classification: 'FAIL_CLOSED', reasonCodes, newSideEffectAuthorized: false, workerDispatchAuthorized: false, architectTriggerAuthorized: false, retryAuthorized: false });

function validPromptInput(input) {
  if (!plain(input) || !id(input.messageId, /^ORCH-\d{6}$/) ||
      !(input.parentMessageId === null || id(input.parentMessageId, /^ORCH-\d{6}$/)) ||
      !nonEmpty(input.missionId) || !nonEmpty(input.milestone) || !PROMPT_ROLES.includes(input.targetRole) ||
      typeof input.promptText !== 'string' || !nonEmpty(input.createdAt) || input.createdByRole !== CREATED_BY_ROLE ||
      input.authority !== PROMPT_AUTHORITY || !PROMPT_MIRROR_STATES.includes(input.ledgerMirrorState) ||
      !PROMPT_DISPATCH_STATES.includes(input.dispatchState)) return false;
  return true;
}

export function createCanonicalPrompt(input = {}) {
  const normalized = { ledgerMirrorState: 'PENDING', dispatchState: 'NOT_DISPATCHED', authority: PROMPT_AUTHORITY, createdByRole: CREATED_BY_ROLE, ...input };
  if (!validPromptInput(normalized)) return fail(['INVALID_CANONICAL_PROMPT']);
  const promptSha256 = sha256(normalized.promptText);
  const promptPath = `evidence/prompts/${normalized.messageId}.md`;
  const metadataPath = `evidence/prompts/${normalized.messageId}.json`;
  const metadata = {
    schemaVersion: '1.0', messageId: normalized.messageId, parentMessageId: normalized.parentMessageId,
    missionId: normalized.missionId, milestone: normalized.milestone, targetRole: normalized.targetRole,
    promptPath, promptSha256, encoding: 'UTF-8', createdAt: normalized.createdAt,
    createdByRole: CREATED_BY_ROLE, authority: PROMPT_AUTHORITY,
    ledgerMirrorState: normalized.ledgerMirrorState, dispatchState: normalized.dispatchState
  };
  return {
    classification: 'CANONICAL_PROMPT_CREATED', messageId: normalized.messageId,
    parentMessageId: normalized.parentMessageId, missionId: normalized.missionId,
    milestone: normalized.milestone, targetRole: normalized.targetRole, promptSha256,
    promptPath, metadataPath, promptText: normalized.promptText, metadata,
    files: [{ path: promptPath, content: normalized.promptText, sha256: promptSha256 }, { path: metadataPath, content: json(metadata), sha256: sha256(json(metadata)) }]
  };
}

export function reconcilePromptIdentity(existing, candidate) {
  if (!plain(existing) || !plain(candidate) || existing.messageId !== candidate.messageId) return fail(['PROMPT_IDENTITY_INVALID']);
  if (existing.promptSha256 !== candidate.promptSha256) return fail(['PROMPT_ID_REUSED_WITH_DIFFERENT_HASH']);
  return { classification: 'ALREADY_CANONICAL', messageId: candidate.messageId, promptSha256: candidate.promptSha256, newSideEffectAuthorized: false };
}

export function verifyWorkerPromptHash({ canonicalPromptSha256, actualPromptText, dispatch } = {}) {
  if (!sha(canonicalPromptSha256) || typeof actualPromptText !== 'string' || !plain(dispatch) || dispatch.canonicalPromptSha256 !== canonicalPromptSha256) return fail(['PROMPT_HASH_BINDING_INVALID']);
  const actualPromptSha256 = sha256(actualPromptText);
  if (actualPromptSha256 !== canonicalPromptSha256) return { ...fail(['IDENTITY_GATE_FAILED']), classification: 'IDENTITY_GATE_FAILED', actualPromptSha256, projectMutation: 0, execute: false };
  return { classification: 'WORKER_PROMPT_HASH_VERIFIED', actualPromptSha256, execute: true, projectMutation: 0 };
}

export function createDispatch(input = {}) {
  if (!plain(input) || !id(input.dispatchId, /^DISPATCH-\d{6}$/) || !id(input.messageId, /^ORCH-\d{6}$/) ||
      !(input.parentMessageId === null || id(input.parentMessageId, /^ORCH-\d{6}$/)) || !nonEmpty(input.missionId) ||
      !nonEmpty(input.milestone) || !PROMPT_ROLES.includes(input.targetRole) ||
      !id(input.canonicalPromptPath, /^evidence\/prompts\/ORCH-\d{6}\.md$/) || !sha(input.canonicalPromptSha256) ||
      !plain(input.baselineIdentity) || !plain(input.mutationEnvelope) || !nonEmpty(input.createdAt) ||
      !PROMPT_DISPATCH_STATES.includes(input.dispatchState ?? 'READY')) return fail(['INVALID_DISPATCH']);
  const dispatch = {
    schemaVersion: '1.0', dispatchId: input.dispatchId, messageId: input.messageId,
    parentMessageId: input.parentMessageId, missionId: input.missionId, milestone: input.milestone,
    targetRole: input.targetRole, canonicalPromptPath: input.canonicalPromptPath,
    canonicalPromptSha256: input.canonicalPromptSha256, baselineIdentity: input.baselineIdentity,
    mutationEnvelope: input.mutationEnvelope, createdAt: input.createdAt,
    dispatchState: input.dispatchState ?? 'READY', authority: PROMPT_AUTHORITY
  };
  const path = `evidence/dispatches/${dispatch.dispatchId}/DISPATCH.json`;
  return { classification: 'DISPATCH_CREATED', dispatch, path, content: json(dispatch), sha256: sha256(json(dispatch)) };
}

export function authorizeDispatch({ dispatch, missionState = 'ACTIVE', circuitState = 'CLOSED', controlState = 'CONTINUE' } = {}) {
  if (!plain(dispatch) || dispatch.authority !== PROMPT_AUTHORITY) return fail(['DISPATCH_NOT_CANONICAL']);
  if (missionState === 'PAUSED_BY_RONY' || controlState === 'ABORT_CURRENT_WORKER' || controlState === 'STOP' || controlState === 'RECONCILIATION_REQUIRED') return { classification: 'PAUSED_BY_RONY' === missionState ? 'PAUSED_BY_RONY' : 'DISPATCH_SUPPRESSED', workerDispatchAuthorized: false, architectTriggerAuthorized: false, newSideEffectAuthorized: false, retryAuthorized: false, execute: false };
  if (circuitState !== 'CLOSED' || missionState !== 'ACTIVE') return fail(['DISPATCH_CONTROL_STATE_INVALID_OR_CLOSED']);
  return { classification: 'DISPATCH_AUTHORIZED', workerDispatchAuthorized: true, architectTriggerAuthorized: false, newSideEffectAuthorized: false, retryAuthorized: false, execute: true, authority: 'CANONICAL_PROMPT_ONLY', issueAuthority: false };
}

export function buildLedgerMirrorComment({ sequence, timestamp, prompt, dispatchId, promptText, redactPrivate = false } = {}) {
  if (!Number.isInteger(sequence) || sequence < 1 || !nonEmpty(timestamp) || !plain(prompt) || !plain(prompt.metadata) || !nonEmpty(dispatchId) || typeof promptText !== 'string') return fail(['INVALID_LEDGER_MIRROR']);
  const body = redactPrivate ? '[REDACTED_PRIVATE]' : promptText;
  return `<!-- ORCH-PROMPT-LEDGER messageId=${prompt.messageId} promptSha256=${prompt.promptSha256} -->\nSequence: ${sequence}\nTimestamp: ${timestamp}\nMessage ID: ${prompt.messageId}\nParent Message ID: ${prompt.parentMessageId ?? 'null'}\nMission: ${prompt.missionId}\nMilestone: ${prompt.milestone}\nTarget role: ${prompt.targetRole}\nDispatch ID: ${dispatchId}\nCanonical prompt SHA-256: ${prompt.promptSha256}\nCanonical prompt path: ${prompt.promptPath}\nCurrent lifecycle/status: ${prompt.metadata.dispatchState}\nMirror status: ${redactPrivate ? 'MIRROR_REPRESENTATION_NOT_BYTE_IDENTICAL' : 'FULL_TEXT_MIRROR'}\n\nARCHITECT PROMPT\n\n${body}\n`;
}

export function reconcileLedgerMirror({ comments = [], messageId, promptSha256 } = {}) {
  if (!Array.isArray(comments) || !id(messageId, /^ORCH-\d{6}$/) || !sha(promptSha256)) return fail(['INVALID_LEDGER_OBSERVATION']);
  const marker = `messageId=${messageId}`;
  const matches = comments.filter((comment) => typeof comment === 'string' && comment.includes(marker));
  if (matches.some((comment) => !comment.includes(`promptSha256=${promptSha256}`))) return fail(['CONFLICTING_LEDGER_MIRROR']);
  return matches.length ? { classification: 'ALREADY_MIRRORED', messageId, promptSha256, commentCount: matches.length } : { classification: 'LEDGER_MIRROR_REQUIRED', messageId, promptSha256 };
}

export function appendJournalEvent(journal, input = {}) {
  if (!Array.isArray(journal) || !plain(input) || !JOURNAL_EVENT_TYPES.includes(input.eventType) || !nonEmpty(input.eventId) || !nonEmpty(input.occurredAt) || !nonEmpty(input.messageId)) return fail(['INVALID_JOURNAL_EVENT']);
  const event = Object.freeze({ schemaVersion: '1.0', eventId: input.eventId, eventType: input.eventType, occurredAt: input.occurredAt, messageId: input.messageId, ...(input.dispatchId ? { dispatchId: input.dispatchId } : {}), ...(input.publicationId ? { publicationId: input.publicationId } : {}), ...(input.details ? { details: input.details } : {}) });
  return { classification: 'JOURNAL_EVENT_APPENDED', journal: Object.freeze([...journal, event]), event };
}

export function reconstructGovernanceState({ prompts = [], dispatches = [], terminalPublications = [], architectDecisions = [], current = {} } = {}) {
  if (![prompts, dispatches, terminalPublications, architectDecisions].every(Array.isArray) || !plain(current)) return fail(['GOVERNANCE_STATE_INVALID']);
  const promptMap = new Map();
  for (const prompt of prompts) {
    if (!plain(prompt) || !id(prompt.messageId, /^ORCH-\d{6}$/) || !sha(prompt.promptSha256) || !nonEmpty(prompt.promptPath) || prompt.authority !== PROMPT_AUTHORITY) return fail(['CANONICAL_PROMPT_INVALID']);
    const old = promptMap.get(prompt.messageId);
    if (old && old.promptSha256 !== prompt.promptSha256) return fail(['PROMPT_LINEAGE_CONFLICT']);
    promptMap.set(prompt.messageId, prompt);
  }
  for (const dispatch of dispatches) {
    if (!plain(dispatch) || !nonEmpty(dispatch.dispatchId) || !promptMap.has(dispatch.messageId) || dispatch.canonicalPromptSha256 !== promptMap.get(dispatch.messageId).promptSha256) return fail(['DISPATCH_PROMPT_LINEAGE_INVALID']);
  }
  const newest = (items, field, pattern) => [...items].sort((a, b) => {
    const an = Number(String(a[field]).match(pattern)?.[1] ?? -1);
    const bn = Number(String(b[field]).match(pattern)?.[1] ?? -1);
    return an - bn;
  }).at(-1) ?? null;
  return { classification: 'GOVERNANCE_STATE_RECONSTRUCTED', latestPrompt: newest([...promptMap.values()], 'messageId', /-(\d+)$/), latestDispatch: newest(dispatches, 'dispatchId', /-(\d+)$/), latestTerminal: terminalPublications.at(-1) ?? null, latestArchitectDecision: architectDecisions.at(-1) ?? null, ledgerMirrorDegraded: current.ledgerMirrorState === 'DEGRADED', issueIsObservabilityOnly: true, pointerWasStale: Boolean(current.latestPromptMessageId && current.latestPromptMessageId !== newest([...promptMap.values()], 'messageId', /-(\d+)$/)?.messageId) };
}
