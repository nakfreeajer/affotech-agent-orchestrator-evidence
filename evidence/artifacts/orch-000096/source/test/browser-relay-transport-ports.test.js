import test from 'node:test';
import assert from 'node:assert/strict';
import { createBrowserRelayTransportPorts } from '../src/host/browser-relay-transport-ports.js';

const hash = 'a'.repeat(64);
const target = (port, id) => ({
  generation: `${id}-GEN`,
  authority: { authorityId: `${id}-AUTH`, authoritySha256: hash, state: 'ACTIVE' },
  registration: { registrationId: `${id}-REG`, authorityId: `${id}-AUTH`, authoritySha256: hash, registrationSha256: hash, conversationId: `${id}-CONV`, conversationUrl: `https://chatgpt.com/c/${id}-CONV`, relayPort: port, state: 'ACTIVE' }
});
const dispatch = { dispatchId: 'DISPATCH-000091', messageId: 'ORCH-000091', targetRole: 'executor', canonicalPromptPath: 'evidence/prompts/ORCH-000091.md', canonicalPromptSha256: hash, expectedFreshWorkerDeliveryId: 'WORKER-DELIVERY-EXECUTOR-000005' };
const request = (targetData, hostState = 'HOST_DELIVERY_READY', actionKind = 'WORKER_DELIVERY') => ({
  hostInstanceId: 'HOST-INSTANCE-SANDBOX-000001', hostGenerationId: 'HOST-GEN-SANDBOX-000001', projectId: 'affotech-agent-orchestrator',
  decision: { hostState, dispatchId: dispatch.dispatchId, messageId: dispatch.messageId, deliveryId: dispatch.expectedFreshWorkerDeliveryId, architectTriggerId: 'ARCH-TRIGGER-1' },
  lease: { actionKind, resourceScope: [actionKind === 'WORKER_DELIVERY' ? 'worker-delivery' : 'architect-doorbell'] },
  snapshot: { pointers: { dispatch, registration: { conversationId: targetData.registration.conversationId } } }
});
const fakeTransport = (pre, post, sendResult = {}) => {
  let sent = false;
  return { calls: { observe: 0, send: 0, disconnect: 0 }, async observe() { this.calls.observe += 1; return sent ? post : pre; }, async send(text) { this.calls.send += 1; sent = true; this.text = text; return { sendActionCount: 1, composerText: '', browserDisconnected: true, responseDomRead: false, ...sendResult }; }, async disconnect() { this.calls.disconnect += 1; } };
};
const persistence = () => ({ records: [], async persistAndReadBack(record) { this.records.push(record); return structuredClone(record); } });
const make = (overrides = {}) => {
  const worker = target(9444, 'WORKER');
  const architect = target(9333, 'ARCH');
  const workerPre = { generation: worker.generation, conversationId: worker.registration.conversationId, relayPort: 9444, composer: { count: 1, enabled: true, empty: true }, userMessages: [{ role: 'user', text: 'old' }] };
  const workerPost = { ...workerPre, composer: { count: 1, enabled: true, empty: true }, userMessages: [...workerPre.userMessages, { role: 'user', text: 'execute github dispatch nakfreeajer/affotech-agent-orchestrator-evidence DISPATCH-000091' }] };
  const architectPre = { generation: architect.generation, conversationId: architect.registration.conversationId, relayPort: 9333, composer: { count: 1, enabled: true, empty: true }, userMessages: [{ role: 'user', text: 'old' }] };
  const architectPost = { ...architectPre, userMessages: [...architectPre.userMessages, { role: 'user', text: 'verify & next' }] };
  return { worker, architect, workerTarget: worker, architectTarget: architect, workerTransport: fakeTransport(workerPre, workerPost), architectTransport: fakeTransport(architectPre, architectPost), workerPersistence: persistence(), architectPersistence: persistence(), nowMs: 1000, projectId: 'affotech-agent-orchestrator', ...overrides };
};

test('factory returns both callable ports and import is side-effect free', () => { const x = make(); const ports = createBrowserRelayTransportPorts(x); assert.equal(typeof ports.sendWorkerDelivery, 'function'); assert.equal(typeof ports.sendArchitectTrigger, 'function'); assert.equal(x.workerTransport.calls.send, 0); });
test('worker exact target and USER +1/+1 correlation returns SENT', async () => { const x = make(); const out = await createBrowserRelayTransportPorts(x).sendWorkerDelivery(request(x.worker)); assert.equal(out.status, 'SENT'); assert.equal(out.attemptedSendCount, 1); assert.equal(out.confirmedSendCount, 1); assert.equal(out.retryAuthorized, false); assert.equal(x.workerTransport.calls.send, 1); });
test('worker uncertain post-state returns AMBIGUOUS without retry', async () => { const x = make(); const pre = { generation: x.worker.generation, conversationId: x.worker.registration.conversationId, relayPort: 9444, composer: { count: 1, enabled: true, empty: true }, userMessages: [{ role: 'user', text: 'old' }] }; x.workerTransport = fakeTransport(pre, null); const out = await createBrowserRelayTransportPorts(x).sendWorkerDelivery(request(x.worker)); assert.equal(out.status, 'AMBIGUOUS'); assert.equal(out.retryAuthorized, false); assert.equal(x.workerTransport.calls.send, 1); });
test('worker pre-send mismatch causes zero send', async () => { const x = make(); x.workerTransport = fakeTransport({ generation: 'wrong', conversationId: x.worker.registration.conversationId, relayPort: 9444, composer: { count: 1, enabled: true, empty: true }, userMessages: [] }, null); const out = await createBrowserRelayTransportPorts(x).sendWorkerDelivery(request(x.worker)); assert.equal(out.status, 'FAILED_BEFORE_SEND'); assert.equal(x.workerTransport.calls.send, 0); });
test('historical or mismatched lineage cannot be used as current target', async () => { const x = make(); const r = request(x.worker); r.decision.dispatchId = 'DISPATCH-OLD'; const out = await createBrowserRelayTransportPorts(x).sendWorkerDelivery(r); assert.equal(out.status, 'FAILED_BEFORE_SEND'); assert.equal(x.workerTransport.calls.send, 0); });
test('architect exact verify & next correlation returns SENT', async () => { const x = make(); const out = await createBrowserRelayTransportPorts(x).sendArchitectTrigger(request(x.architect, 'HOST_ARCHITECT_TRIGGER_READY', 'ARCHITECT_TRIGGER')); assert.equal(out.status, 'SENT'); assert.equal(out.triggerId, 'ARCH-TRIGGER-1'); assert.equal(out.retryAuthorized, false); });
test('architect uncertain post-state returns AMBIGUOUS without retry', async () => { const x = make({ architectTransport: fakeTransport({ generation: target(9333, 'ARCH').generation, conversationId: 'ARCH-CONV', relayPort: 9333, composer: { count: 1, enabled: true, empty: true }, userMessages: [] }, null) }); const out = await createBrowserRelayTransportPorts(x).sendArchitectTrigger(request(x.architect, 'HOST_ARCHITECT_TRIGGER_READY', 'ARCHITECT_TRIGGER')); assert.equal(out.status, 'AMBIGUOUS'); assert.equal(out.retryAuthorized, false); });
test('assistant response text is never required or consumed', async () => { const x = make(); const out = await createBrowserRelayTransportPorts(x).sendWorkerDelivery(request(x.worker)); assert.equal(out.assistantMessageTextRead, false); });
test('protected ports and wrong registration are rejected', () => { assert.throws(() => createBrowserRelayTransportPorts({ ...make(), workerTarget: target(9222, 'WORKER') }), /TARGET_BINDING_INVALID/); });
test('wrong conversation is rejected before send', async () => { const x = make(); const pre = { generation: x.worker.generation, conversationId: 'OTHER', relayPort: 9444, composer: { count: 1, enabled: true, empty: true }, userMessages: [] }; x.workerTransport = fakeTransport(pre, null); const out = await createBrowserRelayTransportPorts(x).sendWorkerDelivery(request(x.worker)); assert.equal(out.status, 'FAILED_BEFORE_SEND'); assert.equal(x.workerTransport.calls.send, 0); });
test('at most one worker send occurs per invocation', async () => { const x = make(); const out = await createBrowserRelayTransportPorts(x).sendWorkerDelivery(request(x.worker)); assert.equal(out.attemptedSendCount, 1); assert.equal(x.workerTransport.calls.send, 1); });
test('disconnect is injected and does not close, navigate, or reload', async () => { const x = make(); let unsafe = 0; x.workerTransport.close = () => { unsafe += 1; }; x.workerTransport.navigate = () => { unsafe += 1; }; x.workerTransport.reload = () => { unsafe += 1; }; await createBrowserRelayTransportPorts(x).sendWorkerDelivery(request(x.worker)); assert.equal(x.workerTransport.calls.disconnect, 1); assert.equal(unsafe, 0); });
test('returned worker result has the host-consumed SENT shape', async () => { const x = make(); const out = await createBrowserRelayTransportPorts(x).sendWorkerDelivery(request(x.worker)); assert.deepEqual(Object.keys(out).sort(), ['assistantMessageTextRead', 'attemptedSendCount', 'confirmedSendCount', 'deliveryId', 'durableRecorded', 'durableResult', 'retryAuthorized', 'status'].sort()); });
test('missing explicit time fails before browser send', () => { assert.throws(() => createBrowserRelayTransportPorts({ ...make(), nowMs: undefined, clock: undefined }), /NOW_MS_REQUIRED/); });
