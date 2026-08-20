import {
  buildArchitectPreSendBoundary,
  createGithubDispatchLocator,
  createWorkerDeliveryIntent,
  createWorkerDeliveryPointer,
  createWorkerDeliveryResult,
  evaluateArchitectPostSend,
  validateWorkerDeliveryIntent,
  validateWorkerDeliveryResult,
  GITHUB_DISPATCH_LOCATOR_PROTOCOL
} from '../browser-relay/worker-relay.js';

const FORBIDDEN_PORTS = new Set([9222, 9223]);
const WORKER_PORT = 9444;
const ARCHITECT_PORT = 9333;
const DOORBELL = 'verify & next';
const REPOSITORY = 'nakfreeajer/affotech-agent-orchestrator-evidence';
const isObject = (x) => x !== null && typeof x === 'object' && !Array.isArray(x);
const clone = (x) => x === undefined ? undefined : JSON.parse(JSON.stringify(x));
const timeValue = (options) => {
  const value = typeof options.nowMs === 'function' ? options.nowMs() : options.nowMs;
  if (!Number.isInteger(value) || value < 0) throw new Error('NOW_MS_REQUIRED');
  return value;
};
const fail = (reasonCode, extra = {}) => ({ status: 'FAILED_BEFORE_SEND', durableRecorded: false, retryAuthorized: false, reasonCode, ...extra });
const ambiguous = (reasonCode, extra = {}) => ({ status: 'AMBIGUOUS', durableRecorded: extra.durableRecorded === true, retryAuthorized: false, reasonCode, ...extra });
const userRows = (observation) => Array.isArray(observation?.userMessages)
  ? observation.userMessages.filter((x) => isObject(x) && x.role === 'user' && typeof x.text === 'string').map((x) => x.text)
  : null;
const composerReady = (observation) => observation?.composer?.count === 1 && observation.composer.enabled === true && observation.composer.empty === true;
const targetReady = (observation, target, port) => observation?.conversationId === target.registration.conversationId && observation?.relayPort === port && observation?.generation === target.generation && observation?.composer?.count === 1;
const exactTarget = (target, port) => isObject(target) && isObject(target.authority) && isObject(target.registration)
  && target.registration.relayPort === port && target.registration.state === 'ACTIVE' && target.authority.state === 'ACTIVE'
  && target.registration.authorityId === target.authority.authorityId && !FORBIDDEN_PORTS.has(port);
const exactDelta = (before, after, payload) => before && after && after.length === before.length + 1 && after.filter((x) => x === payload).length === before.filter((x) => x === payload).length + 1;
const disconnect = async (transport) => {
  if (typeof transport.disconnect === 'function') await transport.disconnect();
};
const persist = async (persistence, method, record) => {
  if (!persistence || typeof persistence[method] !== 'function') throw new Error(`${method.toUpperCase()}_REQUIRED`);
  const readback = await persistence[method](clone(record));
  if (readback && JSON.stringify(readback) !== JSON.stringify(record)) throw new Error(`${method.toUpperCase()}_READBACK_MISMATCH`);
};

function requiredOptions(options) {
  if (!isObject(options) || !isObject(options.workerTarget) || !isObject(options.architectTarget)) throw new TypeError('TARGETS_REQUIRED');
  if (!isObject(options.workerTransport) || !isObject(options.architectTransport)) throw new TypeError('TRANSPORTS_REQUIRED');
  if (!isObject(options.workerPersistence) || !isObject(options.architectPersistence)) throw new TypeError('PERSISTENCE_REQUIRED');
  if (!exactTarget(options.workerTarget, WORKER_PORT) || !exactTarget(options.architectTarget, ARCHITECT_PORT)) throw new TypeError('TARGET_BINDING_INVALID');
  for (const [name, transport] of [['workerTransport', options.workerTransport], ['architectTransport', options.architectTransport]]) {
    for (const method of ['observe', 'send', 'disconnect']) if (typeof transport[method] !== 'function') throw new TypeError(`${name}.${method}_REQUIRED`);
  }
  for (const [name, persistence] of [['workerPersistence', options.workerPersistence], ['architectPersistence', options.architectPersistence]]) {
    for (const method of ['persistAndReadBack']) if (typeof persistence[method] !== 'function') throw new TypeError(`${name}.${method}_REQUIRED`);
  }
  if (options.nowMs === undefined && typeof options.clock !== 'function') throw new TypeError('NOW_MS_REQUIRED');
}

export function createBrowserRelayTransportPorts(options = {}) {
  requiredOptions(options);
  const now = () => options.nowMs === undefined ? options.clock() : timeValue(options);
  const workerTarget = clone(options.workerTarget);
  const architectTarget = clone(options.architectTarget);
  const workerId = (request) => request.snapshot?.pointers?.dispatch?.expectedFreshWorkerDeliveryId ?? options.workerDeliveryId;
  const triggerId = (request) => request.decision?.architectTriggerId ?? options.architectTriggerId ?? `ARCHITECT-TRIGGER-${request.decision?.deliveryId ?? 'CURRENT'}`;
  const binding = (request, kind) => {
    if (!isObject(request) || !isObject(request.decision) || !isObject(request.lease)) return { ok: false, reason: 'HOST_REQUEST_INVALID' };
    const expectedState = kind === 'worker' ? 'HOST_DELIVERY_READY' : 'HOST_ARCHITECT_TRIGGER_READY';
    const expectedAction = kind === 'worker' ? 'WORKER_DELIVERY' : 'ARCHITECT_TRIGGER';
    if (request.decision.hostState !== expectedState || request.lease.actionKind !== expectedAction) return { ok: false, reason: 'HOST_AUTHORIZATION_INVALID' };
    if (request.projectId !== options.projectId) return { ok: false, reason: 'PROJECT_MISMATCH' };
    if (request.lease.hostInstanceId && request.lease.hostInstanceId !== request.hostInstanceId) return { ok: false, reason: 'HOST_IDENTITY_MISMATCH' };
    return { ok: true };
  };

  async function sendWorkerDelivery(request = {}) {
    const gate = binding(request, 'worker');
    const id = workerId(request);
    if (!gate.ok) return fail(gate.reason);
    if (!id || !request.snapshot?.pointers?.dispatch) return fail('WORKER_DELIVERY_ID_REQUIRED');
    const dispatch = request.snapshot.pointers.dispatch;
    if (request.decision.dispatchId !== dispatch.dispatchId || request.decision.messageId !== dispatch.messageId) return fail('WORKER_LINEAGE_MISMATCH');
    const payload = request.payloadText ?? createGithubDispatchLocator({ dispatchId: dispatch.dispatchId });
    const expectedPayload = createGithubDispatchLocator({ dispatchId: dispatch.dispatchId });
    if (payload !== expectedPayload || dispatch.targetRole !== 'executor' || dispatch.dispatchState === 'CONSUMED') return fail('WORKER_PAYLOAD_OR_LINEAGE_INVALID');
    const target = workerTarget;
    if (!exactTarget(target, WORKER_PORT) || target.registration.conversationId !== request.snapshot?.pointers?.registration?.conversationId && request.snapshot?.pointers?.registration?.conversationId !== undefined) return fail('WORKER_TARGET_INVALID');
    const before = await options.workerTransport.observe();
    if (!targetReady(before, target, WORKER_PORT) || !composerReady(before)) return fail('WORKER_PRE_SEND_BOUNDARY_INVALID');
    const beforeUsers = userRows(before);
    if (!beforeUsers) return fail('WORKER_USER_BOUNDARY_MISSING');
    let intent;
    try {
      intent = createWorkerDeliveryIntent({ deliveryId: id, workerRole: 'executor', dispatchId: dispatch.dispatchId, messageId: dispatch.messageId, canonicalPromptPath: dispatch.canonicalPromptPath, canonicalPromptSha256: dispatch.canonicalPromptSha256, authorityId: target.authority.authorityId, authoritySha256: target.authority.authoritySha256, registrationId: target.registration.registrationId, registrationSha256: target.registration.registrationSha256, conversationId: target.registration.conversationId, conversationUrl: target.registration.conversationUrl, relayPort: WORKER_PORT, deliveryPayloadKind: GITHUB_DISPATCH_LOCATOR_PROTOCOL, deliveryPayloadText: payload, createdAt: now() });
      if (!validateWorkerDeliveryIntent(intent).valid) return fail('WORKER_INTENT_INVALID');
      await persist(options.workerPersistence, 'persistAndReadBack', intent);
    } catch (error) { return fail(error.message); }
    let send;
    try { send = await options.workerTransport.send(payload); } catch (error) { return ambiguous('WORKER_SEND_EXCEPTION', { error: error.message }); }
    let after;
    try { after = await options.workerTransport.observe(); } catch { after = null; }
    const postUsers = userRows(after);
    const attempted = send?.sendActionCount === 1;
    const responseDomRead = send?.responseDomRead === true || after?.assistantMessageText !== undefined || after?.assistantMessages !== undefined;
    const confirmed = attempted && send?.composerText === '' && send?.browserDisconnected === true && send?.responseDomRead === false && !responseDomRead && exactDelta(beforeUsers, postUsers, payload);
    const outcome = confirmed ? 'SENT' : 'AMBIGUOUS';
    const result = createWorkerDeliveryResult({ deliveryId: id, intentSha256: intent.intentSha256, workerRole: 'executor', outcome, attemptedSendCount: attempted ? 1 : 1, confirmedSendCount: confirmed ? 1 : 0, browserDisconnected: send?.browserDisconnected === true, resultRecordedAt: now() });
    try { await disconnect(options.workerTransport); await persist(options.workerPersistence, 'persistAndReadBack', result); const pointer = createWorkerDeliveryPointer({ workerRole: 'executor', deliveryId: id, intent, result }); await persist(options.workerPersistence, 'persistAndReadBack', pointer); if (!validateWorkerDeliveryResult(result, intent).valid) return ambiguous('WORKER_RESULT_INVALID', { deliveryId: id, durableRecorded: true }); }
    catch (error) { return ambiguous(error.message, { deliveryId: id, durableRecorded: false }); }
    return outcome === 'SENT' ? { status: 'SENT', durableRecorded: true, durableResult: true, deliveryId: id, attemptedSendCount: 1, confirmedSendCount: 1, retryAuthorized: false, assistantMessageTextRead: false } : { status: 'AMBIGUOUS', durableRecorded: true, deliveryId: id, attemptedSendCount: 1, confirmedSendCount: 0, retryAuthorized: false, assistantMessageTextRead: false };
  }

  async function sendArchitectTrigger(request = {}) {
    const gate = binding(request, 'architect');
    if (!gate.ok) return fail(gate.reason);
    const payload = request.payloadText ?? DOORBELL;
    if (payload !== DOORBELL) return fail('ARCHITECT_PAYLOAD_INVALID');
    const target = architectTarget;
    if (!exactTarget(target, ARCHITECT_PORT)) return fail('ARCHITECT_TARGET_INVALID');
    const before = await options.architectTransport.observe();
    if (!targetReady(before, target, ARCHITECT_PORT) || !composerReady(before)) return fail('ARCHITECT_PRE_SEND_BOUNDARY_INVALID');
    const beforeUsers = userRows(before);
    const trigger = { recordType: 'ARCHITECT_TRIGGER_INTENT', triggerId: triggerId(request), dispatchId: request.decision.dispatchId, messageId: request.decision.messageId, authorityId: target.authority.authorityId, registrationId: target.registration.registrationId, relayPort: ARCHITECT_PORT, conversationId: target.registration.conversationId, payloadText: DOORBELL, intendedSendCount: 1, retryAuthorized: false, createdAt: now() };
    try { await persist(options.architectPersistence, 'persistAndReadBack', trigger); } catch (error) { return fail(error.message); }
    let send;
    try { send = await options.architectTransport.send(DOORBELL); } catch (error) { return ambiguous('ARCHITECT_SEND_EXCEPTION', { error: error.message }); }
    let after;
    try { after = await options.architectTransport.observe(); } catch { after = null; }
    const postUsers = userRows(after);
    const boundary = buildArchitectPreSendBoundary({ intentId: trigger.triggerId, triggerId: trigger.triggerId, sourceMessageId: trigger.messageId, dispatchId: trigger.dispatchId, authorityId: target.authority.authorityId, registrationId: target.registration.registrationId, relayPort: ARCHITECT_PORT, conversationId: target.registration.conversationId, payloadText: DOORBELL, userMessages: before.userMessages });
    const post = boundary ? evaluateArchitectPostSend({ preBoundary: boundary, postObservation: { userMessages: after?.userMessages }, newlyAppendedUserMessage: DOORBELL, sendAttemptCount: 1, responseDomRead: send?.responseDomRead === true }) : null;
    const confirmed = send?.sendActionCount === 1 && send?.composerText === '' && send?.browserDisconnected === true && send?.responseDomRead === false && post?.classification === 'SENT' && exactDelta(beforeUsers, postUsers, DOORBELL);
    try { await disconnect(options.architectTransport); } catch { return ambiguous('ARCHITECT_DISCONNECT_EXCEPTION'); }
    return confirmed ? { status: 'SENT', durableRecorded: true, durableResult: true, triggerId: trigger.triggerId, attemptedSendCount: 1, confirmedSendCount: 1, retryAuthorized: false, assistantMessageTextRead: false } : { status: 'AMBIGUOUS', durableRecorded: true, triggerId: trigger.triggerId, attemptedSendCount: 1, confirmedSendCount: 0, retryAuthorized: false, assistantMessageTextRead: false };
  }

  return Object.freeze({ sendWorkerDelivery, sendArchitectTrigger });
}
