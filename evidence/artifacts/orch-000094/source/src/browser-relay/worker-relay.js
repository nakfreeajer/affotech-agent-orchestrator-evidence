import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { validateProtocolRecord, evaluateCorrelationEvidence } from '../protocol/compatibility-registry.js';
import { evaluatePreDispatch } from '../governance/pre-dispatch-validator.js';

export const WORKER_RELAY_SCHEMA_VERSION = '1.0';
export const WORKER_ROLES = Object.freeze(['executor', 'documentation_curator']);
export const DELIVERY_OUTCOMES = Object.freeze(['SENT', 'FAILED_BEFORE_SEND', 'AMBIGUOUS']);
export const DELIVERY_STATES = Object.freeze(['ARMED', 'SENT', 'FAILED_BEFORE_SEND', 'AMBIGUOUS']);
export const GITHUB_DISPATCH_LOCATOR_PROTOCOL = 'GITHUB_DISPATCH_LOCATOR_V1';
export const GITHUB_DISPATCH_REPOSITORY = 'nakfreeajer/affotech-agent-orchestrator-evidence';
export const WORKER_RELAY_PATHS = Object.freeze({
  authorityDirectory: 'evidence/worker-sessions/authorities',
  registrationDirectory: 'evidence/worker-sessions/registrations',
  deliveryDirectory: 'evidence/worker-deliveries',
  authorityPointerDirectory: 'evidence/current/worker'
});

const BLOCKING_CONTROLS = new Set(['PAUSED_BY_RONY', 'STOP', 'ABORT_CURRENT_WORKER', 'RECONCILIATION_REQUIRED', 'CIRCUIT_OPEN']);
const isObject = (x) => x !== null && typeof x === 'object' && !Array.isArray(x);
const nonEmpty = (x) => typeof x === 'string' && x.length > 0;
const isSha = (x) => typeof x === 'string' && /^[0-9a-f]{64}$/.test(x);
const isId = (x) => nonEmpty(x) && /^[A-Za-z0-9._:-]+$/.test(x);
const isTime = (x) => Number.isInteger(x) && x >= 0;
const sha256 = (bytes) => crypto.createHash('sha256').update(bytes).digest('hex');
const canonicalHash = (value) => sha256(Buffer.from(JSON.stringify(value), 'utf8'));
const clone = (value) => JSON.parse(JSON.stringify(value));
const validRole = (role) => WORKER_ROLES.includes(role);
const validPath = (x) => nonEmpty(x) && x.startsWith('evidence/prompts/') && !x.includes('..') && !x.includes('\\');
const locatorText = (repository, dispatchId) => `execute github dispatch ${repository} ${dispatchId}`;
const locatorFields = (text) => {
  if (typeof text !== 'string' || text.length === 0 || text.includes('\n') || text.includes('\r') || /[^\x00-\x7F]/.test(text)) return null;
  const match = /^execute github dispatch ([^ ]+) ([^ ]+)$/.exec(text);
  return match ? { repository: match[1], dispatchId: match[2] } : null;
};
const invalid = (...reasonCodes) => ({ valid: false, reasonCodes });
const valid = (value = {}) => ({ valid: true, reasonCodes: [], ...value });

const ARCHITECT_DOORBELL_TEXT = 'verify & next';
const architectUserBoundaryRows = (messages) => Array.isArray(messages)
  ? messages.filter((message) => isObject(message) && message.role === 'user' && typeof message.text === 'string').map((message, index) => ({ index, text: message.text }))
  : null;
const architectBoundaryFingerprint = (rows) => sha256(Buffer.from(JSON.stringify(rows), 'utf8'));
const architectTargetPayload = (x) => ({ authorityId: x.authorityId, registrationId: x.registrationId, relayPort: x.relayPort, conversationId: x.conversationId });

export function buildArchitectPreSendBoundary(input = {}) {
  const rows = architectUserBoundaryRows(input.userMessages);
  if (!rows || typeof input.intentId !== 'string' || typeof input.triggerId !== 'string' || typeof input.sourceMessageId !== 'string' || typeof input.dispatchId !== 'string' || typeof input.authorityId !== 'string' || typeof input.registrationId !== 'string' || !Number.isInteger(input.relayPort) || typeof input.conversationId !== 'string' || input.payloadText !== ARCHITECT_DOORBELL_TEXT) return null;
  const record = {
    schemaVersion: WORKER_RELAY_SCHEMA_VERSION,
    recordType: 'ARCHITECT_TRIGGER_PRE_SEND_BOUNDARY',
    intentId: input.intentId,
    triggerId: input.triggerId,
    sourceMessageId: input.sourceMessageId,
    dispatchId: input.dispatchId,
    ...architectTargetPayload(input),
    payloadText: input.payloadText,
    payloadSha256: sha256(Buffer.from(input.payloadText, 'utf8')),
    totalUserMessageCount: rows.length,
    matchingUserMessageCount: rows.filter((row) => row.text === input.payloadText).length,
    userMessageBoundaryFingerprint: architectBoundaryFingerprint(rows)
  };
  return Object.freeze({ ...record, boundarySha256: canonicalHash(record) });
}

export function validateArchitectPreSendBoundary(boundary) {
  if (!isObject(boundary) || boundary.schemaVersion !== WORKER_RELAY_SCHEMA_VERSION || boundary.recordType !== 'ARCHITECT_TRIGGER_PRE_SEND_BOUNDARY' || boundary.payloadText !== ARCHITECT_DOORBELL_TEXT || !isSha(boundary.payloadSha256) || boundary.payloadSha256 !== sha256(Buffer.from(boundary.payloadText, 'utf8')) || !Number.isInteger(boundary.totalUserMessageCount) || !Number.isInteger(boundary.matchingUserMessageCount) || boundary.totalUserMessageCount < 0 || boundary.matchingUserMessageCount < 0 || boundary.matchingUserMessageCount > boundary.totalUserMessageCount || !isSha(boundary.userMessageBoundaryFingerprint) || !isSha(boundary.boundarySha256) || canonicalHash({ ...boundary, boundarySha256: undefined }) !== boundary.boundarySha256) return { classification: 'INSUFFICIENT_CORRELATION_EVIDENCE', valid: false, sendAuthorized: false, retryAuthorized: false, reasonCodes: ['PRE_SEND_BOUNDARY_INVALID'] };
  if (!boundary.intentId || !boundary.triggerId || !boundary.sourceMessageId || !boundary.dispatchId || !boundary.authorityId || !boundary.registrationId || !Number.isInteger(boundary.relayPort) || !boundary.conversationId) return { classification: 'INSUFFICIENT_CORRELATION_EVIDENCE', valid: false, sendAuthorized: false, retryAuthorized: false, reasonCodes: ['PRE_SEND_BOUNDARY_TARGET_INVALID'] };
  return { classification: 'PRE_SEND_BOUNDARY_VALID', valid: true, sendAuthorized: false, retryAuthorized: false, reasonCodes: [] };
}

export function evaluateArchitectPreSendBoundary({ boundary, observation } = {}) {
  const checked = validateArchitectPreSendBoundary(boundary);
  if (!checked.valid) return checked;
  const rows = architectUserBoundaryRows(observation?.userMessages);
  if (!rows) return { classification: 'INSUFFICIENT_CORRELATION_EVIDENCE', valid: false, sendAuthorized: false, retryAuthorized: false, reasonCodes: ['PRE_SEND_OBSERVATION_MISSING'] };
  const observed = buildArchitectPreSendBoundary({ ...boundary, userMessages: observation.userMessages });
  if (!observed || observed.boundarySha256 !== boundary.boundarySha256 || JSON.stringify(architectTargetPayload(observed)) !== JSON.stringify(architectTargetPayload(boundary))) return { classification: 'CORRELATION_MISMATCH', valid: false, sendAuthorized: false, retryAuthorized: false, reasonCodes: ['PRE_SEND_BOUNDARY_STALE'] };
  return { classification: 'PRE_SEND_BOUNDARY_READY', valid: true, sendAuthorized: true, retryAuthorized: false, reasonCodes: [] };
}

export function evaluateArchitectPostSend({ preBoundary, postObservation, newlyAppendedUserMessage, sendAttemptCount = 1, responseDomRead = false } = {}) {
  const checked = validateArchitectPreSendBoundary(preBoundary);
  if (!checked.valid || sendAttemptCount !== 1 || responseDomRead !== false) return { classification: 'INSUFFICIENT_CORRELATION_EVIDENCE', confirmedSendCount: 0, retryAuthorized: false, reconciliationRequired: true, reasonCodes: ['POST_SEND_BOUNDARY_INVALID'] };
  const rows = architectUserBoundaryRows(postObservation?.userMessages);
  if (!rows) return { classification: 'INSUFFICIENT_CORRELATION_EVIDENCE', confirmedSendCount: 0, retryAuthorized: false, reconciliationRequired: true, reasonCodes: ['POST_SEND_OBSERVATION_MISSING'] };
  const totalDelta = rows.length - preBoundary.totalUserMessageCount;
  const matchingDelta = rows.filter((row) => row.text === preBoundary.payloadText).length - preBoundary.matchingUserMessageCount;
  const target = buildArchitectPreSendBoundary({ ...preBoundary, userMessages: postObservation.userMessages });
  if (target && JSON.stringify(architectTargetPayload(target)) !== JSON.stringify(architectTargetPayload(preBoundary))) return { classification: 'CORRELATION_MISMATCH', confirmedSendCount: 0, retryAuthorized: false, reconciliationRequired: true, reasonCodes: ['POST_SEND_TARGET_MISMATCH'] };
  if (totalDelta !== 1 || matchingDelta !== 1 || newlyAppendedUserMessage !== preBoundary.payloadText) return { classification: 'CORRELATION_MISMATCH', confirmedSendCount: 0, retryAuthorized: false, reconciliationRequired: true, reasonCodes: ['POST_SEND_DELTA_MISMATCH'] };
  const correlation = evaluateCorrelationEvidence({ operationId: preBoundary.intentId, sourceMessageId: preBoundary.sourceMessageId, dispatchId: preBoundary.dispatchId, targetId: `${preBoundary.authorityId}/${preBoundary.registrationId}/${preBoundary.relayPort}/${preBoundary.conversationId}`, payloadSha256: preBoundary.payloadSha256, preAttemptBoundary: preBoundary.userMessageBoundaryFingerprint, preAttemptBoundarySha256: preBoundary.boundarySha256, attemptOrdinal: 1 });
  if (correlation.classification !== 'CORRELATION_SUFFICIENT') return { classification: correlation.classification, confirmedSendCount: 0, retryAuthorized: false, reconciliationRequired: true, reasonCodes: correlation.reasonCodes };
  return { classification: 'SENT', confirmedSendCount: 1, retryAuthorized: false, reconciliationRequired: false, responseDomRead: false, totalUserMessageDelta: 1, matchingUserMessageDelta: 1, reasonCodes: [] };
}

const architectProofFields = Object.freeze(['triggerId', 'sourceMessageId', 'dispatchId', 'authorityId', 'registrationId', 'relayPort', 'conversationId', 'payloadSha256', 'preTotalUserMessageCount', 'preMatchingUserMessageCount', 'postTotalUserMessageCount', 'postMatchingUserMessageCount', 'postTotalDelta', 'postMatchingDelta', 'newlyAppendedUserMessage', 'correlationEvaluator']);

export function evaluateArchitectSendProof({ intent, result, expected = {} } = {}) {
  const facts = { ...intent, ...result };
  const required = {
    triggerId: expected.triggerId ?? facts.triggerId,
    sourceMessageId: expected.sourceMessageId ?? facts.sourceMessageId,
    dispatchId: expected.dispatchId ?? facts.sourceDispatchId ?? facts.dispatchId,
    authorityId: expected.authorityId ?? facts.authorityId,
    registrationId: expected.registrationId ?? facts.registrationId,
    relayPort: expected.relayPort ?? facts.relayPort,
    conversationId: expected.conversationId ?? facts.conversationId,
    payloadSha256: expected.payloadSha256 ?? facts.payloadSha256,
    preTotalUserMessageCount: expected.preTotalUserMessageCount ?? facts.preTotalUserMessageCount,
    preMatchingUserMessageCount: expected.preMatchingUserMessageCount ?? facts.preMatchingUserMessageCount,
    postTotalUserMessageCount: expected.postTotalUserMessageCount ?? facts.postTotalUserMessageCount,
    postMatchingUserMessageCount: expected.postMatchingUserMessageCount ?? facts.postMatchingUserMessageCount,
    postTotalDelta: expected.postTotalDelta ?? facts.postTotalDelta,
    postMatchingDelta: expected.postMatchingDelta ?? facts.postMatchingDelta,
    newlyAppendedUserMessage: expected.newlyAppendedUserMessage ?? facts.newlyAppendedUserMessage,
    correlationEvaluator: expected.correlationEvaluator ?? facts.correlationEvaluator
  };
  if (architectProofFields.some((field) => required[field] === undefined || required[field] === null)) return { classification: 'SEND_NOT_PROVEN', sendProven: false, retryAuthorized: false, reconciliationRequired: true, reasonCodes: ['SEND_PROOF_INCOMPLETE'] };
  const mismatched = architectProofFields.some((field) => expected[field] !== undefined && required[field] !== expected[field]);
  const lineageValid = intent?.triggerId === result?.triggerId && intent?.sourceMessageId === result?.sourceMessageId && (intent?.dispatchId ?? intent?.sourceDispatchId) === (result?.dispatchId ?? result?.sourceDispatchId);
  const identityValid = ['authorityId', 'registrationId', 'relayPort', 'conversationId', 'payloadSha256'].every((field) => intent?.[field] === result?.[field]);
  const proofFactsValid = required.preTotalUserMessageCount + 1 === required.postTotalUserMessageCount && required.preMatchingUserMessageCount + 1 === required.postMatchingUserMessageCount && required.postTotalDelta === 1 && required.postMatchingDelta === 1 && required.newlyAppendedUserMessage === (expected.payloadText ?? facts.exactText) && required.correlationEvaluator === 'CORRELATION_SUFFICIENT';
  const attemptValid = result?.attemptedSendCount === 1 && result?.retryAuthorized === false && result?.responseDomRead === false && result?.assistantMessageTextRead === false && intent?.intendedSendCount === 1 && intent?.retryAuthorized === false;
  if (mismatched || !lineageValid || !identityValid || !proofFactsValid) return { classification: 'CORRELATION_MISMATCH', sendProven: false, retryAuthorized: false, reconciliationRequired: true, reasonCodes: ['SEND_PROOF_CORRELATION_MISMATCH'] };
  if (!attemptValid || (result?.intentSha256 !== undefined && intent?.intentSha256 !== undefined && result.intentSha256 !== intent.intentSha256)) return { classification: 'SEND_NOT_PROVEN', sendProven: false, retryAuthorized: false, reconciliationRequired: true, reasonCodes: ['SEND_PROOF_IDENTITY_INVALID'] };
  return { classification: 'SEND_PROVEN', sendProven: true, retryAuthorized: false, reconciliationRequired: false, responseDomRead: false, reasonCodes: [] };
}

const architectProofTarget = ({ authorityId, registrationId, relayPort, conversationId } = {}) => ({ authorityId, registrationId, relayPort, conversationId });

export function reconcileArchitectStableState({ sendProof, targetIdentity, currentTargetIdentity, composerState } = {}) {
  const sameTarget = JSON.stringify(architectProofTarget(targetIdentity)) === JSON.stringify(architectProofTarget(currentTargetIdentity));
  if (sendProof?.classification !== 'SEND_PROVEN' || !sameTarget || !['EMPTY', 'NON_EMPTY'].includes(composerState)) return { classification: 'INCONCLUSIVE', resolvedTransportState: 'INCONCLUSIVE', residualDraftPresent: false, cleanupOrRepairRequired: false, retryAuthorized: false, reconciliationRequired: true, reasonCodes: ['STABLE_STATE_RECONCILIATION_INCONCLUSIVE'] };
  if (composerState === 'NON_EMPTY') return { classification: 'SEND_PROVEN_RESIDUAL_DRAFT', resolvedTransportState: 'SENT', residualDraftPresent: true, cleanupOrRepairRequired: true, retryAuthorized: false, reconciliationRequired: false, reasonCodes: [] };
  return { classification: 'SEND_PROVEN_STABLE', resolvedTransportState: 'SENT', residualDraftPresent: false, cleanupOrRepairRequired: false, retryAuthorized: false, reconciliationRequired: false, reasonCodes: [] };
}

const authorityPayload = (x) => ({
  schemaVersion: x.schemaVersion, recordType: x.recordType, workerRole: x.workerRole,
  authorityId: x.authorityId, generationId: x.generationId, missionId: x.missionId,
  state: x.state, createdAt: x.createdAt, createdByRole: x.createdByRole,
  supersedesAuthorityId: x.supersedesAuthorityId
});

const registrationPayload = (x) => ({
  schemaVersion: x.schemaVersion, recordType: x.recordType, workerRole: x.workerRole,
  registrationId: x.registrationId, authorityId: x.authorityId, authoritySha256: x.authoritySha256,
  generationId: x.generationId, missionId: x.missionId, conversationId: x.conversationId,
  conversationUrl: x.conversationUrl, relayPort: x.relayPort, state: x.state,
  createdAt: x.createdAt, createdByRole: x.createdByRole, supersededBy: x.supersededBy,
  consumed: x.consumed
});

const intentPayload = (x) => ({
  schemaVersion: x.schemaVersion, recordType: x.recordType, deliveryId: x.deliveryId,
  workerRole: x.workerRole, dispatchId: x.dispatchId, messageId: x.messageId,
  canonicalPromptPath: x.canonicalPromptPath, canonicalPromptSha256: x.canonicalPromptSha256,
  authorityId: x.authorityId, authoritySha256: x.authoritySha256,
  registrationId: x.registrationId, registrationSha256: x.registrationSha256,
  conversationId: x.conversationId, conversationUrl: x.conversationUrl, relayPort: x.relayPort,
  deliveryPayloadKind: x.deliveryPayloadKind, deliveryPayloadText: x.deliveryPayloadText,
  deliveryPayloadSha256: x.deliveryPayloadSha256, deliveryPayloadByteCount: x.deliveryPayloadByteCount,
  intendedSendCount: x.intendedSendCount, state: x.state, createdAt: x.createdAt
});

const resultPayload = (x) => ({
  schemaVersion: x.schemaVersion, recordType: x.recordType, deliveryId: x.deliveryId,
  intentSha256: x.intentSha256, workerRole: x.workerRole, outcome: x.outcome,
  attemptedSendCount: x.attemptedSendCount, confirmedSendCount: x.confirmedSendCount,
  browserDisconnected: x.browserDisconnected, responseDomRead: x.responseDomRead,
  resultRecordedAt: x.resultRecordedAt
});

function baseFailure(reasonCodes, extra = {}) {
  return { classification: 'FAIL_CLOSED', newSideEffectAuthorized: false, retryAuthorized: false, workerDispatchAuthorized: false, architectTriggerAuthorized: false, reasonCodes, ...extra };
}

export function workerAuthorityPath(workerRole, authorityId) {
  if (!validRole(workerRole) || !isId(authorityId)) return null;
  return `${WORKER_RELAY_PATHS.authorityDirectory}/${workerRole}/${authorityId}.json`;
}

export function workerRegistrationPath(workerRole, registrationId) {
  if (!validRole(workerRole) || !isId(registrationId)) return null;
  return `${WORKER_RELAY_PATHS.registrationDirectory}/${workerRole}/${registrationId}.json`;
}

export function workerCurrentPointers(workerRole) {
  if (!validRole(workerRole)) return null;
  return {
    authorityPointer: `${WORKER_RELAY_PATHS.authorityPointerDirectory}/${workerRole}/LATEST_AUTHORITY.json`,
    registrationPointer: `${WORKER_RELAY_PATHS.authorityPointerDirectory}/${workerRole}/LATEST_REGISTRATION.json`
  };
}

export function workerDeliveryPath(workerRole, deliveryId) {
  if (!validRole(workerRole) || !isId(deliveryId)) return null;
  return `${WORKER_RELAY_PATHS.deliveryDirectory}/${workerRole}/${deliveryId}`;
}

export function workerDeliveryIntentPath(workerRole, deliveryId) {
  const base = workerDeliveryPath(workerRole, deliveryId);
  return base ? `${base}/intent.json` : null;
}

export function workerDeliveryResultPath(workerRole, deliveryId) {
  const base = workerDeliveryPath(workerRole, deliveryId);
  return base ? `${base}/result.json` : null;
}

export function workerCurrentDeliveryPointer(workerRole) {
  if (!validRole(workerRole)) return null;
  return `${WORKER_RELAY_PATHS.authorityPointerDirectory}/${workerRole}/LATEST_DELIVERY.json`;
}

export function workerDeliveryPaths(workerRole, deliveryId) {
  const base = workerDeliveryPath(workerRole, deliveryId);
  if (!base) return null;
  return {
    deliveryDirectory: base,
    intentPath: `${base}/intent.json`,
    resultPath: `${base}/result.json`,
    currentPointer: workerCurrentDeliveryPointer(workerRole)
  };
}

export function createWorkerAuthority(input = {}) {
  const record = {
    schemaVersion: WORKER_RELAY_SCHEMA_VERSION, recordType: 'WORKER_AUTHORITY', workerRole: input.workerRole,
    authorityId: input.authorityId, generationId: input.generationId, missionId: input.missionId,
    state: input.state ?? 'ACTIVE', createdAt: input.createdAt, createdByRole: 'architect',
    supersedesAuthorityId: input.supersedesAuthorityId ?? null
  };
  return { ...record, authoritySha256: canonicalHash(authorityPayload(record)) };
}

export function validateWorkerAuthority(record) {
  if (!isObject(record) || record.schemaVersion !== WORKER_RELAY_SCHEMA_VERSION || record.recordType !== 'WORKER_AUTHORITY') return invalid('WORKER_AUTHORITY_SCHEMA_INVALID');
  if (!validRole(record.workerRole) || !isId(record.authorityId) || !isId(record.generationId) || !nonEmpty(record.missionId) || record.state !== 'ACTIVE' || !isTime(record.createdAt) || record.createdByRole !== 'architect') return invalid('WORKER_AUTHORITY_FIELDS_INVALID');
  if (!(record.supersedesAuthorityId === null || isId(record.supersedesAuthorityId))) return invalid('WORKER_AUTHORITY_LINEAGE_INVALID');
  if (!isSha(record.authoritySha256) || canonicalHash(authorityPayload(record)) !== record.authoritySha256) return invalid('WORKER_AUTHORITY_HASH_INVALID');
  return valid();
}

export function createWorkerRegistration(input = {}) {
  const record = {
    schemaVersion: WORKER_RELAY_SCHEMA_VERSION, recordType: 'WORKER_REGISTRATION', workerRole: input.workerRole,
    registrationId: input.registrationId, authorityId: input.authorityId, authoritySha256: input.authoritySha256,
    generationId: input.generationId, missionId: input.missionId, conversationId: input.conversationId,
    conversationUrl: input.conversationUrl, relayPort: input.relayPort, state: input.state ?? 'ACTIVE',
    createdAt: input.createdAt, createdByRole: 'architect', supersededBy: input.supersededBy ?? null,
    consumed: input.consumed ?? false
  };
  return { ...record, registrationSha256: canonicalHash(registrationPayload(record)) };
}

export function validateWorkerRegistration(record, { authority } = {}) {
  if (!isObject(record) || record.schemaVersion !== WORKER_RELAY_SCHEMA_VERSION || record.recordType !== 'WORKER_REGISTRATION') return invalid('WORKER_REGISTRATION_SCHEMA_INVALID');
  if (!validRole(record.workerRole) || !isId(record.registrationId) || !isId(record.authorityId) || !isSha(record.authoritySha256) || !isId(record.generationId) || !nonEmpty(record.missionId) || !isId(record.conversationId) || !nonEmpty(record.conversationUrl) || !Number.isInteger(record.relayPort) || record.relayPort <= 0 || record.state !== 'ACTIVE' || !isTime(record.createdAt) || record.createdByRole !== 'architect' || typeof record.consumed !== 'boolean') return invalid('WORKER_REGISTRATION_FIELDS_INVALID');
  if (!(record.supersededBy === null || isId(record.supersededBy))) return invalid('WORKER_REGISTRATION_LINEAGE_INVALID');
  if (!isSha(record.registrationSha256) || canonicalHash(registrationPayload(record)) !== record.registrationSha256) return invalid('WORKER_REGISTRATION_HASH_INVALID');
  if (authority !== undefined) {
    const authorityCheck = validateWorkerAuthority(authority);
    if (!authorityCheck.valid || record.authorityId !== authority.authorityId || record.authoritySha256 !== authority.authoritySha256 || record.workerRole !== authority.workerRole || record.generationId !== authority.generationId || record.missionId !== authority.missionId) return invalid('WORKER_REGISTRATION_AUTHORITY_MISMATCH');
  }
  if (record.consumed || record.supersededBy !== null) return invalid('WORKER_REGISTRATION_STALE');
  return valid();
}

export function resolveWorkerRegistration({ workerRole, authority, registration, authorityPointer, registrationPointer, missionId } = {}) {
  const a = validateWorkerAuthority(authority);
  if (!a.valid) return baseFailure(a.reasonCodes);
  const r = validateWorkerRegistration(registration, { authority });
  if (!r.valid) return baseFailure(r.reasonCodes);
  if (authority.workerRole !== workerRole || registration.workerRole !== workerRole || authority.missionId !== missionId || registration.missionId !== missionId) return baseFailure(['WORKER_ROLE_OR_MISSION_MISMATCH']);
  if (!isObject(authorityPointer) || authorityPointer.pointerKind !== 'WORKER_AUTHORITY' || authorityPointer.workerRole !== workerRole || authorityPointer.recordId !== authority.authorityId || authorityPointer.recordSha256 !== authority.authoritySha256) return baseFailure(['WORKER_AUTHORITY_POINTER_INVALID']);
  if (!isObject(registrationPointer) || registrationPointer.pointerKind !== 'WORKER_REGISTRATION' || registrationPointer.workerRole !== workerRole || registrationPointer.recordId !== registration.registrationId || registrationPointer.recordSha256 !== registration.registrationSha256) return baseFailure(['WORKER_REGISTRATION_POINTER_INVALID']);
  return { classification: 'READY', workerRole, authorityId: authority.authorityId, registrationId: registration.registrationId, relayPort: registration.relayPort, sendAuthorized: false };
}

export function resolveWorkerPromptPayload({ dispatch, promptBytes, registeredWorkerRole } = {}) {
  if (!isObject(dispatch) || dispatch.dispatchState !== 'READY' || !isId(dispatch.dispatchId) || !isId(dispatch.messageId) || !validRole(dispatch.targetRole) || dispatch.targetRole !== registeredWorkerRole || !validPath(dispatch.canonicalPromptPath) || !isSha(dispatch.canonicalPromptSha256)) return baseFailure(['DISPATCH_PROMPT_BINDING_INVALID']);
  if (!(typeof promptBytes === 'string' || Buffer.isBuffer(promptBytes))) return baseFailure(['CANONICAL_PROMPT_BYTES_MISSING']);
  const bytes = Buffer.isBuffer(promptBytes) ? Buffer.from(promptBytes) : Buffer.from(promptBytes, 'utf8');
  if (sha256(bytes) !== dispatch.canonicalPromptSha256) return baseFailure(['CANONICAL_PROMPT_HASH_MISMATCH']);
  return { classification: 'READY', dispatchId: dispatch.dispatchId, messageId: dispatch.messageId, workerRole: registeredWorkerRole, canonicalPromptPath: dispatch.canonicalPromptPath, canonicalPromptSha256: dispatch.canonicalPromptSha256, promptBytes: Buffer.from(bytes), payloadSource: 'CANONICAL_GITHUB_PROMPT' };
}

export function createGithubDispatchLocator({ repository = GITHUB_DISPATCH_REPOSITORY, dispatchId } = {}) {
  if (repository !== GITHUB_DISPATCH_REPOSITORY || !isId(dispatchId)) return null;
  return locatorText(repository, dispatchId);
}

export function validateGithubDispatchLocator({ locator, immutableDispatch, currentDispatch, latestArchitectPrompt, architectDecision, promptBytes, registeredWorkerRole } = {}) {
  const fields = locatorFields(locator);
  if (!fields || fields.repository !== GITHUB_DISPATCH_REPOSITORY) return baseFailure(['GITHUB_LOCATOR_INVALID']);
  if (!isObject(immutableDispatch) || immutableDispatch.dispatchState !== 'READY' || immutableDispatch.dispatchId !== fields.dispatchId || !isId(immutableDispatch.messageId) || !validRole(immutableDispatch.targetRole) || immutableDispatch.targetRole !== registeredWorkerRole || !validPath(immutableDispatch.canonicalPromptPath) || !isSha(immutableDispatch.canonicalPromptSha256)) return baseFailure(['IMMUTABLE_DISPATCH_BINDING_INVALID']);
  if (!isObject(currentDispatch) || currentDispatch.dispatchId !== immutableDispatch.dispatchId || currentDispatch.messageId !== immutableDispatch.messageId || currentDispatch.canonicalPromptPath !== immutableDispatch.canonicalPromptPath || currentDispatch.canonicalPromptSha256 !== immutableDispatch.canonicalPromptSha256) return baseFailure(['CURRENT_DISPATCH_POINTER_INVALID']);
  if (!isObject(latestArchitectPrompt) || latestArchitectPrompt.messageId !== immutableDispatch.messageId || latestArchitectPrompt.promptPath !== immutableDispatch.canonicalPromptPath || latestArchitectPrompt.promptSha256 !== immutableDispatch.canonicalPromptSha256) return baseFailure(['CURRENT_ARCHITECT_PROMPT_POINTER_INVALID']);
  if (!isObject(architectDecision) || architectDecision.nextCanonicalMessageId !== immutableDispatch.messageId) return baseFailure(['ARCHITECT_DECISION_NOT_CURRENT']);
  if (!(typeof promptBytes === 'string' || Buffer.isBuffer(promptBytes))) return baseFailure(['CANONICAL_PROMPT_BYTES_MISSING']);
  const bytes = Buffer.isBuffer(promptBytes) ? Buffer.from(promptBytes) : Buffer.from(promptBytes, 'utf8');
  if (sha256(bytes) !== immutableDispatch.canonicalPromptSha256) return baseFailure(['CANONICAL_PROMPT_HASH_MISMATCH']);
  return { classification: 'READY', protocol: GITHUB_DISPATCH_LOCATOR_PROTOCOL, repository: fields.repository, dispatchId: fields.dispatchId, messageId: immutableDispatch.messageId, workerRole: registeredWorkerRole, canonicalPromptPath: immutableDispatch.canonicalPromptPath, canonicalPromptSha256: immutableDispatch.canonicalPromptSha256, promptBytes: bytes, payloadSource: 'CANONICAL_GITHUB_PROMPT' };
}

export function confirmWorkerComposerSend({ sendActionCount, composerText, browserDisconnected, responseDomRead = false } = {}) {
  if (sendActionCount !== 1 || typeof composerText !== 'string' || responseDomRead !== false || browserDisconnected !== true) return baseFailure(['COMPOSER_SEND_CONFIRMATION_INVALID']);
  if (composerText.length === 0) return { classification: 'SENT', attemptedSendCount: 1, confirmedSendCount: 1, browserDisconnected: true, responseDomRead: false, retryAuthorized: false, reconciliationRequired: false, reasonCodes: [] };
  return { classification: 'RECONCILIATION_REQUIRED', attemptedSendCount: 1, confirmedSendCount: 0, browserDisconnected: true, responseDomRead: false, retryAuthorized: false, reconciliationRequired: true, reasonCodes: ['COMPOSER_NOT_CLEARED'] };
}

export function createWorkerDeliveryIntent(input = {}) {
  const deliveryPayloadText = input.deliveryPayloadKind === GITHUB_DISPATCH_LOCATOR_PROTOCOL
    ? (input.deliveryPayloadText ?? createGithubDispatchLocator({ dispatchId: input.dispatchId }))
    : input.deliveryPayloadText;
  const deliveryPayloadByteCount = deliveryPayloadText === undefined ? input.deliveryPayloadByteCount : Buffer.byteLength(deliveryPayloadText, 'utf8');
  const deliveryPayloadSha256 = deliveryPayloadText === undefined ? input.deliveryPayloadSha256 : sha256(Buffer.from(deliveryPayloadText, 'utf8'));
  const record = {
    schemaVersion: WORKER_RELAY_SCHEMA_VERSION, recordType: 'WORKER_DELIVERY_INTENT', deliveryId: input.deliveryId,
    workerRole: input.workerRole, dispatchId: input.dispatchId, messageId: input.messageId,
    canonicalPromptPath: input.canonicalPromptPath, canonicalPromptSha256: input.canonicalPromptSha256,
    authorityId: input.authorityId, authoritySha256: input.authoritySha256, registrationId: input.registrationId,
    registrationSha256: input.registrationSha256, conversationId: input.conversationId, conversationUrl: input.conversationUrl,
    relayPort: input.relayPort, deliveryPayloadKind: input.deliveryPayloadKind,
    deliveryPayloadText, deliveryPayloadSha256, deliveryPayloadByteCount,
    intendedSendCount: 1, state: 'ARMED', createdAt: input.createdAt
  };
  return { ...record, intentSha256: canonicalHash(intentPayload(record)) };
}

export function validateWorkerDeliveryIntent(record) {
  if (!isObject(record) || record.schemaVersion !== WORKER_RELAY_SCHEMA_VERSION || record.recordType !== 'WORKER_DELIVERY_INTENT') return invalid('DELIVERY_INTENT_SCHEMA_INVALID');
  if (!isId(record.deliveryId) || !validRole(record.workerRole) || !isId(record.dispatchId) || !isId(record.messageId) || !validPath(record.canonicalPromptPath) || !isSha(record.canonicalPromptSha256) || !isId(record.authorityId) || !isSha(record.authoritySha256) || !isId(record.registrationId) || !isSha(record.registrationSha256) || !isId(record.conversationId) || !nonEmpty(record.conversationUrl) || !Number.isInteger(record.relayPort) || record.relayPort <= 0 || record.intendedSendCount !== 1 || record.state !== 'ARMED' || !isTime(record.createdAt)) return invalid('DELIVERY_INTENT_FIELDS_INVALID');
  if (!isSha(record.intentSha256) || canonicalHash(intentPayload(record)) !== record.intentSha256) return invalid('DELIVERY_INTENT_HASH_INVALID');
  if (record.deliveryPayloadKind !== undefined) {
    if (record.deliveryPayloadKind !== GITHUB_DISPATCH_LOCATOR_PROTOCOL) return invalid('DELIVERY_PAYLOAD_KIND_INVALID');
    const fields = locatorFields(record.deliveryPayloadText);
    if (!fields || fields.repository !== GITHUB_DISPATCH_REPOSITORY || fields.dispatchId !== record.dispatchId) return invalid('DELIVERY_LOCATOR_TEXT_INVALID');
    const byteCount = Buffer.byteLength(record.deliveryPayloadText, 'utf8');
    if (byteCount > 160 || record.deliveryPayloadByteCount !== byteCount) return invalid('DELIVERY_LOCATOR_BYTE_COUNT_INVALID');
    if (!isSha(record.deliveryPayloadSha256) || sha256(Buffer.from(record.deliveryPayloadText, 'utf8')) !== record.deliveryPayloadSha256) return invalid('DELIVERY_LOCATOR_HASH_INVALID');
  } else if (record.deliveryPayloadText !== undefined || record.deliveryPayloadSha256 !== undefined || record.deliveryPayloadByteCount !== undefined) {
    return invalid('DELIVERY_PAYLOAD_FIELDS_INVALID');
  }
  return valid();
}

export function createWorkerDeliveryResult(input = {}) {
  const record = {
    schemaVersion: WORKER_RELAY_SCHEMA_VERSION, recordType: 'WORKER_DELIVERY_RESULT', deliveryId: input.deliveryId,
    intentSha256: input.intentSha256, workerRole: input.workerRole, outcome: input.outcome,
    attemptedSendCount: input.attemptedSendCount, confirmedSendCount: input.confirmedSendCount,
    browserDisconnected: input.browserDisconnected, responseDomRead: false, resultRecordedAt: input.resultRecordedAt
  };
  return { ...record, resultSha256: canonicalHash(resultPayload(record)) };
}

export function validateWorkerDeliveryResult(record, intent) {
  if (!isObject(record) || record.schemaVersion !== WORKER_RELAY_SCHEMA_VERSION || record.recordType !== 'WORKER_DELIVERY_RESULT') return invalid('DELIVERY_RESULT_SCHEMA_INVALID');
  if (!isId(record.deliveryId) || !isSha(record.intentSha256) || !validRole(record.workerRole) || !DELIVERY_OUTCOMES.includes(record.outcome) || !Number.isInteger(record.attemptedSendCount) || record.attemptedSendCount < 0 || !Number.isInteger(record.confirmedSendCount) || record.confirmedSendCount < 0 || record.confirmedSendCount > 1 || typeof record.browserDisconnected !== 'boolean' || record.responseDomRead !== false || !isTime(record.resultRecordedAt)) return invalid('DELIVERY_RESULT_FIELDS_INVALID');
  if (!isSha(record.resultSha256) || canonicalHash(resultPayload(record)) !== record.resultSha256) return invalid('DELIVERY_RESULT_HASH_INVALID');
  if (intent !== undefined && (!validateWorkerDeliveryIntent(intent).valid || record.deliveryId !== intent.deliveryId || record.intentSha256 !== intent.intentSha256 || record.workerRole !== intent.workerRole)) return invalid('DELIVERY_RESULT_INTENT_MISMATCH');
  if (record.outcome === 'SENT' && (record.attemptedSendCount !== 1 || record.confirmedSendCount !== 1)) return invalid('DELIVERY_RESULT_SEND_COUNT_INVALID');
  if (record.outcome !== 'SENT' && record.confirmedSendCount !== 0) return invalid('DELIVERY_RESULT_CONFIRMATION_INVALID');
  return valid();
}

export function createWorkerDeliveryPointer({ workerRole, deliveryId, intent, result, state } = {}) {
  const resolvedState = state ?? (result?.outcome ?? 'ARMED');
  const paths = workerDeliveryPaths(workerRole, deliveryId);
  return {
    schemaVersion: WORKER_RELAY_SCHEMA_VERSION,
    pointerKind: 'WORKER_DELIVERY',
    workerRole,
    deliveryId,
    state: resolvedState,
    intentPath: paths?.intentPath,
    resultPath: paths?.resultPath,
    intentSha256: intent?.intentSha256,
    resultSha256: result?.resultSha256 ?? null
  };
}

export function validateWorkerDeliveryPointer(pointer, { intent, result } = {}) {
  if (!isObject(pointer) || pointer.schemaVersion !== WORKER_RELAY_SCHEMA_VERSION || pointer.pointerKind !== 'WORKER_DELIVERY') return invalid('DELIVERY_POINTER_SCHEMA_INVALID');
  if (!validRole(pointer.workerRole) || !isId(pointer.deliveryId) || !DELIVERY_STATES.includes(pointer.state)) return invalid('DELIVERY_POINTER_FIELDS_INVALID');
  const paths = workerDeliveryPaths(pointer.workerRole, pointer.deliveryId);
  if (pointer.intentPath !== paths.intentPath || pointer.resultPath !== paths.resultPath || !isSha(pointer.intentSha256)) return invalid('DELIVERY_POINTER_PATH_OR_INTENT_INVALID');
  if (intent !== undefined) {
    const intentCheck = validateWorkerDeliveryIntent(intent);
    if (!intentCheck.valid || intent.deliveryId !== pointer.deliveryId || intent.workerRole !== pointer.workerRole || intent.intentSha256 !== pointer.intentSha256) return invalid('DELIVERY_POINTER_INTENT_MISMATCH');
  }
  if (pointer.state === 'ARMED') {
    if (pointer.resultSha256 !== null) return invalid('DELIVERY_POINTER_ARMED_RESULT_INVALID');
    if (result !== undefined) return invalid('DELIVERY_POINTER_ARMED_RESULT_PRESENT');
    return valid();
  }
  if (!isSha(pointer.resultSha256) || result === undefined) return invalid('DELIVERY_POINTER_RESULT_MISSING');
  const resultCheck = validateWorkerDeliveryResult(result, intent);
  if (!resultCheck.valid || result.deliveryId !== pointer.deliveryId || result.workerRole !== pointer.workerRole || result.resultSha256 !== pointer.resultSha256 || result.outcome !== pointer.state) return invalid('DELIVERY_POINTER_RESULT_MISMATCH');
  return valid();
}

export function classifyWorkerDelivery({ intent, result, controlState = 'ACTIVE' } = {}) {
  const i = validateWorkerDeliveryIntent(intent);
  if (!i.valid) return baseFailure(i.reasonCodes);
  if (BLOCKING_CONTROLS.has(controlState)) return { classification: controlState, newSideEffectAuthorized: false, retryAuthorized: false, workerDispatchAuthorized: false, architectTriggerAuthorized: false, reasonCodes: ['CONTROL_SUPPRESSED'] };
  if (controlState !== 'ACTIVE') return baseFailure(['CONTROL_STATE_INVALID']);
  if (result === undefined || result === null) return { classification: 'INTENT_ARMED', newSideEffectAuthorized: false, retryAuthorized: false, workerDispatchAuthorized: false, architectTriggerAuthorized: false, reconciliationRequired: true, reasonCodes: ['RESULT_NOT_RECORDED'] };
  const r = validateWorkerDeliveryResult(result, intent);
  if (!r.valid) return baseFailure(r.reasonCodes);
  if (result.outcome === 'AMBIGUOUS') return { classification: 'RECONCILIATION_REQUIRED', newSideEffectAuthorized: false, retryAuthorized: false, workerDispatchAuthorized: false, architectTriggerAuthorized: false, reconciliationRequired: true, reasonCodes: ['AMBIGUOUS_NO_RETRY'] };
  return { classification: result.outcome, newSideEffectAuthorized: false, retryAuthorized: false, workerDispatchAuthorized: false, architectTriggerAuthorized: false, reconciliationRequired: false, reasonCodes: [] };
}

export function validateWorkerDeliveryBundle({ authority, registration, dispatch, promptBytes, intent, result, workerRole, missionId, authorityPointer, registrationPointer, controlState = 'ACTIVE' } = {}) {
  const registrationResult = resolveWorkerRegistration({ workerRole, authority, registration, authorityPointer, registrationPointer, missionId });
  if (registrationResult.classification !== 'READY') return registrationResult;
  const prompt = resolveWorkerPromptPayload({ dispatch, promptBytes, registeredWorkerRole: workerRole });
  if (prompt.classification !== 'READY') return prompt;
  const intentCheck = validateWorkerDeliveryIntent(intent);
  if (!intentCheck.valid || intent.workerRole !== workerRole || intent.authorityId !== authority.authorityId || intent.registrationId !== registration.registrationId || intent.canonicalPromptSha256 !== prompt.canonicalPromptSha256 || intent.dispatchId !== dispatch.dispatchId || intent.messageId !== dispatch.messageId || intent.relayPort !== registration.relayPort) return baseFailure(['DELIVERY_INTENT_BINDING_INVALID']);
  const delivery = classifyWorkerDelivery({ intent, result, controlState });
  const locatorMode = intent.deliveryPayloadKind === GITHUB_DISPATCH_LOCATOR_PROTOCOL;
  return { ...delivery, workerRole, deliveryId: intent.deliveryId, payloadHash: locatorMode ? intent.deliveryPayloadSha256 : prompt.canonicalPromptSha256, canonicalPromptHash: prompt.canonicalPromptSha256, sendPayload: locatorMode ? Buffer.from(intent.deliveryPayloadText, 'utf8') : prompt.promptBytes };
}

export function reconcileWorkerDelivery({ intent, result, observation } = {}) {
  const i = validateWorkerDeliveryIntent(intent);
  if (!i.valid) return baseFailure(i.reasonCodes);
  if (result !== undefined && result !== null) return classifyWorkerDelivery({ intent, result });
  if (!['SENT', 'NOT_SENT', 'UNKNOWN'].includes(observation)) return baseFailure(['RECONCILIATION_OBSERVATION_INVALID']);
  if (observation === 'UNKNOWN') return { classification: 'RECONCILIATION_REQUIRED', retryAuthorized: false, newSideEffectAuthorized: false, workerDispatchAuthorized: false, architectTriggerAuthorized: false, reconciliationRequired: true, reasonCodes: ['UNKNOWN_DELIVERY_STATE'] };
  return { classification: observation === 'SENT' ? 'RECONCILED_SENT' : 'RECONCILED_NOT_SENT', retryAuthorized: false, newSideEffectAuthorized: false, workerDispatchAuthorized: false, architectTriggerAuthorized: false, reconciliationRequired: false, reasonCodes: ['READ_ONLY_RECONCILIATION'] };
}

export const workerRelayInternals = Object.freeze({ authorityPayload, registrationPayload, intentPayload, resultPayload, sha256 });
export { evaluateAutomaticDispatchHost } from '../host/automatic-dispatch-host.js';

const NATIVE_LOCATOR = /^execute github dispatch ([^\s/]+\/[^\s/]+) (DISPATCH-[0-9]{6})$/;
const NATIVE_DISPATCH_PATH = (id) => `evidence/dispatches/${id}/DISPATCH.json`;
const nativeFail = (message) => { throw new Error(`GITHUB_DISPATCH_LOCATOR_REJECTED: ${message}`); };
const nativeEqual = (label, actual, expected) => { if (actual !== expected) nativeFail(`${label} mismatch`); };

function readGitObjectNative(repoRoot, ref, relativePath) {
  try {
    return execFileSync('git', ['-C', repoRoot, 'show', `${ref}:${relativePath}`], { shell: false, encoding: null, maxBuffer: 4 * 1024 * 1024 });
  } catch (error) { nativeFail(`missing Git object ${relativePath}: ${error.message}`); }
}

function readGitJsonNative(repoRoot, ref, relativePath) {
  try { return JSON.parse(readGitObjectNative(repoRoot, ref, relativePath).toString('utf8')); }
  catch (error) { if (error.message.startsWith('GITHUB_DISPATCH_LOCATOR_REJECTED:')) throw error; nativeFail(`invalid JSON object ${relativePath}: ${error.message}`); }
}

function captureGitRefNative(repoRoot, ref) {
  try { return execFileSync('git', ['-C', repoRoot, 'rev-parse', '--verify', `${ref}^{commit}`], { shell: false, encoding: 'utf8', maxBuffer: 1024 }).trim(); }
  catch (error) { nativeFail(`cannot capture Git ref ${ref}: ${error.message}`); }
}

function parseNativeLocator(value) {
  if (typeof value !== 'string') nativeFail('locator must be a string');
  const match = NATIVE_LOCATOR.exec(value);
  if (!match) nativeFail('locator grammar is invalid');
  return { repository: match[1], dispatchId: match[2] };
}

export function resolveGithubDispatchLocator({ repoRoot, ref = 'origin/main', locatorText, locator, workerRole } = {}) {
  const text = locatorText ?? locator;
  if (typeof repoRoot !== 'string' || repoRoot.length === 0) nativeFail('repoRoot is required');
  if (typeof workerRole !== 'string' || workerRole.length === 0) nativeFail('workerRole is required');
  const { repository, dispatchId } = parseNativeLocator(text);
  const capturedRef = captureGitRefNative(repoRoot, ref);
  const dispatch = readGitJsonNative(repoRoot, capturedRef, NATIVE_DISPATCH_PATH(dispatchId));
  const latestDispatch = readGitJsonNative(repoRoot, capturedRef, 'evidence/current/LATEST_DISPATCH.json');
  const latestPrompt = readGitJsonNative(repoRoot, capturedRef, 'evidence/current/LATEST_ARCHITECT_PROMPT.json');
  const decision = readGitJsonNative(repoRoot, capturedRef, 'evidence/current/LATEST_ARCHITECT_DECISION.json');
  const accepted = readGitJsonNative(repoRoot, capturedRef, 'evidence/current/LATEST_EXECUTOR_ACCEPTED.json');
  nativeEqual('evidence repository', dispatch.evidenceProject, 'affotech-agent-orchestrator');
  nativeEqual('locator repository', repository, GITHUB_DISPATCH_REPOSITORY);
  if (typeof dispatch.messageId === 'string' && /^PUB-/.test(dispatch.messageId)) nativeFail('FOREIGN_PROTOCOL_FAMILY');
  nativeEqual('dispatch identity', dispatch.dispatchId, dispatchId);
  nativeEqual('current dispatch id', latestDispatch.dispatchId, dispatchId);
  nativeEqual('dispatch message id', dispatch.messageId, latestDispatch.messageId);
  nativeEqual('target role', dispatch.targetRole, workerRole);
  nativeEqual('current target role', latestDispatch.targetRole, workerRole);
  nativeEqual('dispatch prompt path', dispatch.canonicalPromptPath, latestDispatch.canonicalPromptPath);
  nativeEqual('dispatch prompt hash', dispatch.canonicalPromptSha256, latestDispatch.canonicalPromptSha256);
  nativeEqual('prompt message id', latestPrompt.messageId, dispatch.messageId);
  nativeEqual('prompt path', latestPrompt.promptPath, dispatch.canonicalPromptPath);
  nativeEqual('prompt hash', latestPrompt.promptSha256, dispatch.canonicalPromptSha256);
  nativeEqual('architect prompt target role', latestPrompt.targetRole, workerRole);
  if (decision.decision !== 'ACCEPTED' || decision.nextCanonicalMessageId !== dispatch.messageId) nativeFail('Architect decision does not authorize current message');
  if (!nonEmpty(accepted.publicationId) || accepted.accepted !== true || accepted.requiresArchitectDecision !== false) nativeFail('accepted transport contract is incompatible');
  const canonicalPromptBytes = readGitObjectNative(repoRoot, capturedRef, dispatch.canonicalPromptPath);
  if (!isSha(dispatch.canonicalPromptSha256) || sha256(canonicalPromptBytes) !== dispatch.canonicalPromptSha256) nativeFail('canonical prompt SHA-256 mismatch');
  return Object.freeze({ dispatchId, messageId: dispatch.messageId, canonicalPromptPath: dispatch.canonicalPromptPath, canonicalPromptSha256: dispatch.canonicalPromptSha256, workerRole, ref: capturedRef, canonicalPromptBytes });
}

function nativeCliArgs(argv) {
  const values = {};
  for (let i = 0; i < argv.length; i += 1) { const key = argv[i]; if (!key.startsWith('--') || i + 1 >= argv.length) nativeFail('CLI arguments must be bounded option/value pairs'); values[key.slice(2)] = argv[++i]; }
  return values;
}

export function runGithubDispatchLocatorCli(argv = process.argv.slice(2), output = process.stdout) {
  const args = nativeCliArgs(argv);
  const resolution = resolveGithubDispatchLocator({ repoRoot: args['repo-root'], ref: args.ref ?? 'origin/main', locatorText: args.locator, workerRole: args['worker-role'] });
  if (args.output) writeFileSync(path.resolve(args.output), resolution.canonicalPromptBytes); else output.write(resolution.canonicalPromptBytes);
  return resolution;
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  try { runGithubDispatchLocatorCli(); } catch (error) { process.stderr.write(`${error.message}\n`); process.exitCode = 1; }
}

const WATCHER_STATES = Object.freeze(['IDLE', 'CANDIDATE_READY', 'INTENT_REQUIRED', 'IN_FLIGHT', 'RESULT_WAIT', 'RECONCILIATION_REQUIRED', 'PAUSED', 'CIRCUIT_OPEN']);
const WATCHER_ELIGIBLE_DISPATCH_STATES = new Set(['READY', 'MANUAL_TRIGGER_REQUIRED', 'RELAY_ELIGIBLE']);
const WATCHER_SUPPRESSING_CONTROLS = new Set(['PAUSED_BY_RONY', 'STOP', 'ABORT_CURRENT_WORKER', 'RECONCILIATION_REQUIRED', 'CIRCUIT_OPEN']);
const watcherReject = (reason) => ({ watcherState: 'IDLE', classification: 'REJECTED', reasonCodes: [reason], candidate: null, browserContacts: 0, githubMutation: 0 });
const watcherGovernanceReject = (reason) => ({ watcherState: 'IDLE', candidateState: 'CANDIDATE_GOVERNANCE_DENIED', governanceState: 'PRE_DISPATCH_INVALID', governanceReason: reason, classification: 'REJECTED', reasonCodes: [reason], deliveryEligible: false, sendEligible: false, mutationAuthorized: false, retryAuthorized: false, browserContactAuthorized: false, candidate: null, browserContacts: 0, githubMutation: 0 });
const watcherReadJson = (repoRoot, ref, relativePath) => JSON.parse(readGitObjectNative(repoRoot, ref, relativePath).toString('utf8'));
const watcherPath = (role, id, kind) => `evidence/worker-sessions/${kind}/${role}/${id}.json`;

function watcherControl(repoRoot, ref, supplied) {
  if (supplied !== undefined) return supplied;
  const pointer = watcherReadJson(repoRoot, ref, 'evidence/current/RELAY_CONTROL.json');
  const candidates = [
    `evidence/architect-sessions/controls/${pointer.recordId}.json`,
    `evidence/relay-controls/${pointer.recordId}/record.json`,
    `evidence/relay-control/${pointer.recordId}/record.json`
  ];
  for (const candidate of candidates) { try { return watcherReadJson(repoRoot, ref, candidate); } catch {} }
  return pointer;
}

function watcherResultPlan({ state, resultEvidence, deliveryId, dispatchId, messageId } = {}) {
  if (state !== 'RESULT_WAIT') return null;
  if (!resultEvidence || resultEvidence.dispatchId !== dispatchId || resultEvidence.messageId !== messageId || resultEvidence.deliveryId !== deliveryId || resultEvidence.status !== 'SENT') return { watcherState: 'RESULT_WAIT', classification: 'WAITING_FOR_GITHUB_RESULT', browserContacts: 0, githubMutation: 0 };
  return { watcherState: 'RESULT_WAIT', classification: 'ARCHITECT_DOORBELL_PLANNED', doorbellText: 'verify & next', browserContacts: 0, githubMutation: 0 };
}

export function evaluateDispatchWatcher({ repoRoot, ref = 'origin/main', capturedRef, workerRole, authority, registration, currentState = 'IDLE', pollResult = {}, consumedDispatchIds = [], deliveryState, resultEvidence } = {}) {
  if (typeof repoRoot !== 'string' || repoRoot.length === 0) return watcherReject('REPO_ROOT_REQUIRED');
  if (!validRole(workerRole)) return watcherReject('WORKER_ROLE_INVALID');
  if (!WATCHER_STATES.includes(currentState)) return watcherReject('WATCHER_STATE_INVALID');
  const pinnedRef = capturedRef ?? ref;
  let resolved;
  try { resolved = resolveGithubDispatchLocator({ repoRoot, ref: pinnedRef, locatorText: pollResult.locatorText ?? pollResult.locator ?? `execute github dispatch ${GITHUB_DISPATCH_REPOSITORY} ${pollResult.dispatchId ?? 'DISPATCH-000000'}`, workerRole }); }
  catch (error) { return watcherReject(error.message.includes('FOREIGN_PROTOCOL_FAMILY') ? 'FOREIGN_PROTOCOL_FAMILY' : error.message.includes('current') ? 'DISPATCH_POINTER_MISMATCH' : 'NATIVE_RESOLVER_REJECTED'); }
  const currentRef = resolved.ref;
  let dispatch;
  try { dispatch = watcherReadJson(repoRoot, currentRef, NATIVE_DISPATCH_PATH(resolved.dispatchId)); }
  catch { return watcherReject('DISPATCH_MISSING'); }
  const dispatchCompatibility = validateProtocolRecord(dispatch);
  if (!dispatchCompatibility.valid) return watcherReject(dispatchCompatibility.reasonCodes[0]);
  const authorityPointer = watcherReadJson(repoRoot, currentRef, `evidence/current/worker/${workerRole}/LATEST_AUTHORITY.json`);
  const registrationPointer = watcherReadJson(repoRoot, currentRef, `evidence/current/worker/${workerRole}/LATEST_REGISTRATION.json`);
  const actualAuthority = authority ?? watcherReadJson(repoRoot, currentRef, watcherPath(workerRole, authorityPointer.recordId, 'authorities'));
  const actualRegistration = registration ?? watcherReadJson(repoRoot, currentRef, watcherPath(workerRole, registrationPointer.recordId, 'registrations'));
  if (actualAuthority.authorityId !== authorityPointer.recordId || actualAuthority.authoritySha256 !== authorityPointer.recordSha256 || actualRegistration.registrationId !== registrationPointer.recordId || actualRegistration.registrationSha256 !== registrationPointer.recordSha256 || actualRegistration.authorityId !== actualAuthority.authorityId) return watcherReject('WORKER_IDENTITY_MISMATCH');
  const control = watcherControl(repoRoot, currentRef, pollResult.control ?? pollResult.controlState);
  const controlState = typeof control === 'string' ? control : control?.state;
  if (WATCHER_SUPPRESSING_CONTROLS.has(controlState)) return { ...watcherReject('CONTROL_SUPPRESSED'), watcherState: controlState === 'CIRCUIT_OPEN' ? 'CIRCUIT_OPEN' : 'PAUSED' };
  if (deliveryState === 'AMBIGUOUS' || deliveryState === 'IN_FLIGHT' || deliveryState === 'RESULT_WAIT' || pollResult.deliveryState === 'AMBIGUOUS' || pollResult.unresolvedDelivery === true) return watcherReject('UNRESOLVED_DELIVERY_BLOCKS_RETRY');
  const plan = watcherResultPlan({ state: currentState, resultEvidence, deliveryId: pollResult.deliveryId, dispatchId: resolved.dispatchId, messageId: resolved.messageId });
  if (resultEvidence?.schemaVersion !== undefined) {
    const resultCompatibility = validateProtocolRecord(resultEvidence);
    if (!resultCompatibility.valid) return watcherReject(resultCompatibility.reasonCodes[0]);
  }
  if (plan) return plan;
  if (!WATCHER_ELIGIBLE_DISPATCH_STATES.has(dispatch.dispatchState)) return watcherReject('DISPATCH_NOT_RELAY_ELIGIBLE');
  if (consumedDispatchIds.includes(resolved.dispatchId) || pollResult.consumed === true) return watcherReject('DISPATCH_ALREADY_CONSUMED');
  if (pollResult.remoteAdvance === true && pollResult.capturedRef === undefined) return watcherReject('REMOTE_ADVANCE_REQUIRES_REEVALUATION');
  if (pollResult.olderDispatch === true) return watcherReject('OLDER_DISPATCH_FALLBACK_PROHIBITED');
  if (pollResult.otherWorkerInFlight === true || pollResult.workerMutationInFlight === true) return watcherReject('WORKER_MUTATION_STREAM_BUSY');
  const governanceContext = pollResult.governanceContext;
  if (!governanceContext || typeof governanceContext !== 'object') return watcherGovernanceReject('PRE_DISPATCH_GOVERNANCE_CONTEXT_REQUIRED');
  const governance = evaluatePreDispatch({ ...governanceContext, dispatch: { ...governanceContext.dispatch, messageId: resolved.messageId, dispatchId: resolved.dispatchId, canonicalPromptSha256: resolved.canonicalPromptSha256, targetRole: resolved.targetRole ?? governanceContext.dispatch?.targetRole } });
  if (governance.classification !== 'PRE_DISPATCH_ELIGIBLE') return watcherGovernanceReject(governance.reasonCodes?.[0] ?? governance.classification);
  const payloadText = locatorText(GITHUB_DISPATCH_REPOSITORY, resolved.dispatchId);
  return { watcherState: 'CANDIDATE_READY', candidateState: 'CANDIDATE_READY', governanceState: governance.classification, deliveryEligible: true, sendEligible: false, mutationAuthorized: false, retryAuthorized: false, browserContactAuthorized: false, classification: 'ELIGIBLE_DISPATCH_CANDIDATE', candidate: { dispatchId: resolved.dispatchId, messageId: resolved.messageId, workerRole, workerAuthorityId: actualAuthority.authorityId, workerRegistrationId: actualRegistration.registrationId, capturedRef: currentRef, canonicalPromptPath: resolved.canonicalPromptPath, canonicalPromptSha256: resolved.canonicalPromptSha256, deliveryPayloadKind: GITHUB_DISPATCH_LOCATOR_PROTOCOL, deliveryPayloadText: payloadText, deliveryPayloadSha256: sha256(Buffer.from(payloadText, 'utf8')), deliveryPayloadByteCount: Buffer.byteLength(payloadText, 'utf8'), nextAction: 'PREPARE_DURABLE_INTENT' }, browserContacts: 0, githubMutation: 0 };
}

export const watcherStates = WATCHER_STATES;
export function validateArchitectReconciliationCompatibility(record) {
  return validateProtocolRecord(record);
}

const CYCLE_STATES = Object.freeze(['IDLE', 'CANDIDATE_READY', 'INTENT_REQUIRED', 'IN_FLIGHT', 'RESULT_WAIT', 'RECONCILIATION_REQUIRED', 'PAUSED', 'CIRCUIT_OPEN', 'DOORBELL_SENT', 'FAILED_BEFORE_SEND']);
const cycleReject = (state, reason) => ({ cycleState: state, classification: 'FAIL_CLOSED', reasonCodes: [reason], workerSendCount: 0, architectSendCount: 0, browserContacts: 0, githubMutation: 0 });
const cycleIntentMatch = (intent, readback) => isObject(readback) && readback.deliveryId === intent.deliveryId && readback.dispatchId === intent.dispatchId && readback.messageId === intent.messageId && readback.deliveryPayloadText === intent.deliveryPayloadText && readback.state === 'ARMED';
const cycleSendOutcome = (outcome = {}) => {
  if (outcome.outcome === 'FAILED_BEFORE_SEND' || outcome.status === 'FAILED_BEFORE_SEND' || outcome.sent === false && outcome.attemptedSendCount === 0) return 'FAILED_BEFORE_SEND';
  if (outcome.sendActionCount === 1 && outcome.composerText !== '') return 'AMBIGUOUS';
  if (outcome.outcome === 'SENT' || outcome.status === 'SENT' || outcome.sendActionCount === 1 && outcome.composerText === '' && outcome.responseDomRead !== true) return 'SENT';
  return 'AMBIGUOUS';
};

export function runAutomaticRelayCycle({ repoRoot, ref = 'origin/main', capturedRef, workerRole, workerAuthority, workerRegistration, architectAuthority, architectRegistration, currentState = 'IDLE', watcherGeneration = 'GENERATION-1', consumedDispatchIds = [], deliveryId, pollResult = {}, watcherResult, deliveryPersistence, workerSendAdapter, workerResultAdapter, architectTriggerPersistence, architectSendAdapter, controlState, workerMutationInFlight = false } = {}) {
  if (!CYCLE_STATES.includes(currentState)) return cycleReject('IDLE', 'CYCLE_STATE_INVALID');
  if (WATCHER_SUPPRESSING_CONTROLS.has(controlState)) return cycleReject(controlState === 'CIRCUIT_OPEN' ? 'CIRCUIT_OPEN' : 'PAUSED', 'CONTROL_SUPPRESSED');
  if (workerMutationInFlight) return cycleReject('IDLE', 'WORKER_MUTATION_STREAM_BUSY');
  let evaluation = watcherResult;
  if (evaluation === undefined) evaluation = evaluateDispatchWatcher({ repoRoot, ref, capturedRef, workerRole, authority: workerAuthority, registration: workerRegistration, currentState: currentState === 'IDLE' ? 'IDLE' : currentState, consumedDispatchIds, pollResult, deliveryState: currentState === 'RECONCILIATION_REQUIRED' ? 'AMBIGUOUS' : undefined });
  if (!evaluation || !evaluation.candidate) return { ...evaluation, cycleState: evaluation?.watcherState ?? 'IDLE', workerSendCount: 0, architectSendCount: 0 };
  const candidate = evaluation.candidate;
  const intent = Object.freeze({ schemaVersion: WORKER_RELAY_SCHEMA_VERSION, recordType: 'WORKER_DELIVERY_INTENT', deliveryId: deliveryId ?? `DELIVERY-${candidate.dispatchId}-${watcherGeneration}`, dispatchId: candidate.dispatchId, messageId: candidate.messageId, workerRole: candidate.workerRole, workerAuthorityId: candidate.workerAuthorityId, workerRegistrationId: candidate.workerRegistrationId, capturedRef: candidate.capturedRef, canonicalPromptPath: candidate.canonicalPromptPath, canonicalPromptSha256: candidate.canonicalPromptSha256, deliveryPayloadKind: GITHUB_DISPATCH_LOCATOR_PROTOCOL, deliveryPayloadText: candidate.deliveryPayloadText, deliveryPayloadSha256: candidate.deliveryPayloadSha256, deliveryPayloadByteCount: candidate.deliveryPayloadByteCount, state: 'ARMED', retryAuthorized: false, watcherGeneration });
  if (!deliveryPersistence || typeof deliveryPersistence.persistAndReadBack !== 'function') return cycleReject('INTENT_REQUIRED', 'INTENT_PERSISTENCE_ADAPTER_REQUIRED');
  let readback;
  try { readback = deliveryPersistence.persistAndReadBack(intent); } catch { return cycleReject('INTENT_REQUIRED', 'INTENT_PERSISTENCE_FAILED'); }
  if (!cycleIntentMatch(intent, readback)) return cycleReject('INTENT_REQUIRED', 'INTENT_READBACK_MISMATCH');
  if (typeof workerSendAdapter !== 'function') return cycleReject('INTENT_REQUIRED', 'WORKER_SEND_ADAPTER_REQUIRED');
  let workerOutcome;
  try { workerOutcome = workerSendAdapter({ payloadText: intent.deliveryPayloadText, intent }); } catch { workerOutcome = { outcome: 'FAILED_BEFORE_SEND', sendActionCount: 0 }; }
  const workerStatus = cycleSendOutcome(workerOutcome);
  if (workerStatus === 'FAILED_BEFORE_SEND') return { cycleState: 'FAILED_BEFORE_SEND', classification: 'FAILED_BEFORE_SEND', intent, workerSendCount: 0, architectSendCount: 0, retryAuthorized: false, browserContacts: 0, githubMutation: 0 };
  if (workerStatus !== 'SENT') return { cycleState: 'RECONCILIATION_REQUIRED', classification: 'AMBIGUOUS', intent, workerSendCount: 1, architectSendCount: 0, retryAuthorized: false, browserContacts: 0, githubMutation: 0 };
  if (typeof workerResultAdapter !== 'function') return { cycleState: 'RESULT_WAIT', classification: 'RESULT_WAIT', intent, workerSendCount: 1, architectSendCount: 0, retryAuthorized: false, browserContacts: 0, githubMutation: 0 };
  let result;
  try { result = workerResultAdapter({ ref: intent.capturedRef, intent }); } catch { return cycleReject('RECONCILIATION_REQUIRED', 'WORKER_RESULT_READ_FAILED'); }
  if (result === undefined || result === null) return { cycleState: 'RESULT_WAIT', classification: 'RESULT_WAIT', intent, workerSendCount: 1, architectSendCount: 0, retryAuthorized: false, browserContacts: 0, githubMutation: 0 };
  if (result.schemaVersion !== undefined && !validateProtocolRecord(result).valid) return cycleReject('RECONCILIATION_REQUIRED', 'WORKER_RESULT_INCOMPATIBLE');
  if (result.workerRole !== undefined && result.workerRole !== intent.workerRole || result.dispatchId !== undefined && result.dispatchId !== intent.dispatchId || result.messageId !== undefined && result.messageId !== intent.messageId || result.deliveryId !== undefined && result.deliveryId !== intent.deliveryId || !['SENT', 'COMPLETED', 'PASS'].includes(result.status ?? result.outcome)) return cycleReject('RECONCILIATION_REQUIRED', 'WORKER_RESULT_BINDING_INVALID');
  const triggerIntent = Object.freeze({ triggerId: `ARCHITECT-TRIGGER-${intent.deliveryId}`, workerRole: intent.workerRole, dispatchId: intent.dispatchId, messageId: intent.messageId, deliveryId: intent.deliveryId, authority: architectAuthority, registration: architectRegistration, payloadText: 'verify & next', state: 'ARMED', retryAuthorized: false });
  if (!architectTriggerPersistence || typeof architectTriggerPersistence.persistAndReadBack !== 'function') return cycleReject('RECONCILIATION_REQUIRED', 'TRIGGER_PERSISTENCE_ADAPTER_REQUIRED');
  let triggerReadback;
  try { triggerReadback = architectTriggerPersistence.persistAndReadBack(triggerIntent); } catch { return cycleReject('RECONCILIATION_REQUIRED', 'TRIGGER_PERSISTENCE_FAILED'); }
  if (!isObject(triggerReadback) || triggerReadback.triggerId !== triggerIntent.triggerId || triggerReadback.state !== 'ARMED' || (triggerReadback.payloadText ?? triggerReadback.deliveryPayloadText) !== triggerIntent.payloadText) return cycleReject('RECONCILIATION_REQUIRED', 'TRIGGER_READBACK_MISMATCH');
  if (typeof architectSendAdapter !== 'function') return cycleReject('RECONCILIATION_REQUIRED', 'ARCHITECT_SEND_ADAPTER_REQUIRED');
  let architectOutcome;
  try { architectOutcome = architectSendAdapter({ payloadText: 'verify & next', triggerIntent }); } catch { architectOutcome = { outcome: 'AMBIGUOUS', sendActionCount: 1 }; }
  const architectStatus = cycleSendOutcome(architectOutcome);
  if (architectStatus === 'SENT') return { cycleState: 'DOORBELL_SENT', classification: 'ARCHITECT_DOORBELL_SENT', intent, triggerIntent, workerSendCount: 1, architectSendCount: 1, retryAuthorized: false, browserContacts: 0, githubMutation: 0 };
  if (architectStatus === 'FAILED_BEFORE_SEND') return { cycleState: 'RECONCILIATION_REQUIRED', classification: 'ARCHITECT_DOORBELL_FAILED_BEFORE_SEND', intent, triggerIntent, workerSendCount: 1, architectSendCount: 0, retryAuthorized: false, browserContacts: 0, githubMutation: 0 };
  return { cycleState: 'RECONCILIATION_REQUIRED', classification: 'ARCHITECT_DOORBELL_AMBIGUOUS', intent, triggerIntent, workerSendCount: 1, architectSendCount: 1, retryAuthorized: false, browserContacts: 0, githubMutation: 0 };
}
