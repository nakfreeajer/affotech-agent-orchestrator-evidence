import crypto from 'node:crypto';
import { ALLOWED_RELAY_PORTS, BLOCKING_CONTROLS, FORBIDDEN_RELAY_PORTS, TRIGGER_CLASSIFICATIONS, TRIGGER_RESULT_STATES, TRIGGER_TEXT } from './constants.js';

const nonEmpty = (value) => typeof value === 'string' && value.length > 0;
const sha256 = (value) => crypto.createHash('sha256').update(value, 'utf8').digest('hex');
const fail = (reasonCodes) => ({ classification: TRIGGER_CLASSIFICATIONS.FAIL_CLOSED, reasonCodes, sendCount: 0, requiresArchitectDecision: true });
const blocked = (reasonCodes) => ({ classification: TRIGGER_CLASSIFICATIONS.TRIGGER_REFUSED, reasonCodes, sendCount: 0, requiresArchitectDecision: true });
const hasControlBlock = (controlState) => BLOCKING_CONTROLS.find((control) => controlState === control);

function validPort(port) {
  return Number.isInteger(port) && ALLOWED_RELAY_PORTS.includes(port) && !FORBIDDEN_RELAY_PORTS.includes(port);
}

export function triggerBytes() {
  const text = Buffer.from(TRIGGER_TEXT, 'utf8');
  return { text: TRIGGER_TEXT, sha256: sha256(TRIGGER_TEXT), byteLength: text.length };
}

export function validateTriggerAuthority(input = {}) {
  const {
    terminalPublication, expectedMission, expectedLineage, consumed = false,
    priorSuccessfulTrigger = false, controlState = 'ACTIVE', architectGeneration,
    conversation, composerCount, relayPort = 9333, dedicatedSession = false,
    unresolvedPriorAmbiguity = false
  } = input;
  if (!terminalPublication || terminalPublication.resultAddress !== 'architect' || terminalPublication.workerOutcome === undefined) return fail(['TERMINAL_PUBLICATION_REQUIRED']);
  if (!nonEmpty(expectedMission) || terminalPublication.missionId !== expectedMission) return fail(['MISSION_MISMATCH']);
  if (!expectedLineage || terminalPublication.parentMessageId !== expectedLineage.parentMessageId || terminalPublication.messageId !== expectedLineage.messageId) return fail(['LINEAGE_MISMATCH']);
  if (consumed) return blocked(['TERMINAL_ALREADY_CONSUMED']);
  if (priorSuccessfulTrigger) return blocked(['TRIGGER_ALREADY_SUCCEEDED']);
  if (hasControlBlock(controlState)) return blocked([controlState]);
  if (!nonEmpty(architectGeneration)) return fail(['ARCHITECT_GENERATION_REQUIRED']);
  if (!conversation || conversation.unique !== true || !nonEmpty(conversation.id)) return fail(['ARCHITECT_CONVERSATION_NOT_UNIQUE']);
  if (composerCount !== 1) return fail([composerCount === 0 ? 'COMPOSER_NOT_FOUND' : 'COMPOSER_NOT_UNIQUE']);
  if (!validPort(relayPort)) return fail([FORBIDDEN_RELAY_PORTS.includes(relayPort) ? 'FORBIDDEN_RELAY_PORT' : 'INVALID_RELAY_PORT']);
  if (dedicatedSession !== true) return fail(['DEDICATED_RELAY_SESSION_REQUIRED']);
  if (unresolvedPriorAmbiguity) return fail(['UNRESOLVED_PRIOR_TRIGGER_AMBIGUITY']);
  return { classification: TRIGGER_CLASSIFICATIONS.ELIGIBLE, sendCount: 0, requiresArchitectDecision: true };
}

export function createTriggerIntent(input = {}) {
  const gate = validateTriggerAuthority(input);
  if (gate.classification !== TRIGGER_CLASSIFICATIONS.ELIGIBLE) return gate;
  const { triggerId, terminalPublication, expectedMission, expectedLineage, architectGeneration, conversation, relayPort = 9333, preSendUserMessageBoundary } = input;
  if (!nonEmpty(triggerId) || !preSendUserMessageBoundary || !nonEmpty(preSendUserMessageBoundary.messageId)) return fail(['PRESEND_BOUNDARY_REQUIRED']);
  const trigger = triggerBytes();
  return {
    classification: TRIGGER_CLASSIFICATIONS.ELIGIBLE,
    sendCount: 0,
    intent: {
      type: 'INTENT', triggerId, missionId: expectedMission,
      reviewedPublicationId: terminalPublication.publicationId,
      messageId: expectedLineage.messageId, parentMessageId: expectedLineage.parentMessageId,
      architectGeneration, conversationId: conversation.id, relayPort,
      triggerText: trigger.text, triggerSha256: trigger.sha256,
      preSendUserMessageBoundary, authority: 'CANONICAL'
    }
  };
}

export function reconcileTrigger({ intent, observation, currentUserMessageBoundary } = {}) {
  if (!intent || intent.type !== 'INTENT' || intent.triggerText !== TRIGGER_TEXT || intent.triggerSha256 !== sha256(TRIGGER_TEXT)) return fail(['INVALID_TRIGGER_INTENT']);
  if (!['SENT', 'PROVEN_NOT_SENT', 'UNKNOWN'].includes(observation)) return fail(['INVALID_TRIGGER_OBSERVATION']);
  if (observation === 'SENT' && currentUserMessageBoundary?.messageId === intent.preSendUserMessageBoundary.messageId && currentUserMessageBoundary.messageCount === intent.preSendUserMessageBoundary.messageCount + 1 && currentUserMessageBoundary.lastUserText === TRIGGER_TEXT) return { classification: TRIGGER_CLASSIFICATIONS.RECONCILED_SENT, resultState: 'RECONCILED_SENT', sendCount: 0, requiresArchitectDecision: true };
  if (observation === 'PROVEN_NOT_SENT') return { classification: TRIGGER_CLASSIFICATIONS.PROVEN_NOT_SENT, resultState: 'PROVEN_NOT_SENT', sendCount: 0, requiresArchitectDecision: true };
  return { classification: TRIGGER_CLASSIFICATIONS.RECONCILIATION_REQUIRED, resultState: 'RECONCILIATION_REQUIRED', sendCount: 0, requiresArchitectDecision: true };
}

export async function executeTrigger(input = {}, adapter) {
  if (!adapter || typeof adapter.persistIntent !== 'function' || typeof adapter.rediscover !== 'function' || typeof adapter.send !== 'function' || typeof adapter.persistResult !== 'function' || typeof adapter.disconnect !== 'function') return fail(['INVALID_RELAY_ADAPTER']);
  const planned = createTriggerIntent(input);
  if (planned.classification !== TRIGGER_CLASSIFICATIONS.ELIGIBLE) return planned;
  await adapter.persistIntent(planned.intent);
  const verified = await adapter.rediscover();
  if (!verified || verified.generation !== planned.intent.architectGeneration || verified.conversationId !== planned.intent.conversationId || verified.composerCount !== 1) return fail(['RELAY_REVERIFICATION_FAILED']);
  const sendResult = await adapter.send(planned.intent.triggerText);
  if (sendResult?.acknowledgement === 'AMBIGUOUS') {
    await adapter.disconnect();
    return { ...reconcileTrigger({ intent: planned.intent, observation: sendResult.observation ?? 'UNKNOWN', currentUserMessageBoundary: sendResult.currentUserMessageBoundary }), intent: planned.intent };
  }
  if (sendResult?.sent !== true) {
    await adapter.persistResult({ type: 'RESULT', triggerId: planned.intent.triggerId, resultState: 'TRIGGER_REFUSED' });
    await adapter.disconnect();
    return { classification: TRIGGER_CLASSIFICATIONS.TRIGGER_REFUSED, resultState: 'TRIGGER_REFUSED', sendCount: 1, intent: planned.intent, requiresArchitectDecision: true };
  }
  const result = { type: 'RESULT', triggerId: planned.intent.triggerId, resultState: 'SENT', triggerText: TRIGGER_TEXT, triggerSha256: sha256(TRIGGER_TEXT) };
  await adapter.persistResult(result);
  await adapter.disconnect();
  return { classification: TRIGGER_CLASSIFICATIONS.SENT, resultState: 'SENT', sendCount: 1, intent: planned.intent, result, requiresArchitectDecision: true };
}

export function rejectResponseAuthority(responseText) {
  return { classification: TRIGGER_CLASSIFICATIONS.FAIL_CLOSED, reasonCodes: ['ARCHITECT_RESPONSE_NOT_MACHINE_AUTHORITY'], ignored: typeof responseText === 'string' };
}

export { sha256, TRIGGER_TEXT, TRIGGER_RESULT_STATES };
