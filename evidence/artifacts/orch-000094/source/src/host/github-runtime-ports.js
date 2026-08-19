import crypto from 'node:crypto';
import { evaluateMutationLeaseUse, projectMutationLeaseRelease, validateMutationLease, mutationLeaseInternals } from '../governance/mutation-lease.js';

export const HOST_RUNTIME_PATHS = Object.freeze({
  leaseIndex: 'evidence/current/host-runtime/MUTATION_LEASE_INDEX.json',
  identity: (hostInstanceId) => `evidence/host-runtime/instances/${hostInstanceId}/identity.json`,
  event: (hostInstanceId, eventId) => `evidence/host-runtime/events/${hostInstanceId}/${eventId}.json`,
  leaseRevision: (leaseId, revision) => `evidence/host-runtime/mutation-leases/${leaseId}/revisions/${String(revision).padStart(6, '0')}.json`
});
export const RUNTIME_PORT_EVENTS = Object.freeze(['CREATED', 'IDEMPOTENT', 'CONFLICT', 'ACQUIRED', 'DENIED', 'AMBIGUOUS', 'RELEASED', 'ACQUIRED_RECONCILED', 'NOT_ACQUIRED_SAFE', 'RELEASED_RECONCILED', 'STILL_ACTIVE', 'INCONCLUSIVE']);
const CURRENT_POINTERS = Object.freeze({
  architectDecision: 'evidence/current/LATEST_ARCHITECT_DECISION.json', architectPrompt: 'evidence/current/LATEST_ARCHITECT_PROMPT.json',
  dispatch: 'evidence/current/LATEST_DISPATCH.json', accepted: 'evidence/current/LATEST_EXECUTOR_ACCEPTED.json', relayControl: 'evidence/current/RELAY_CONTROL.json',
  authority: 'evidence/current/worker/executor/LATEST_AUTHORITY.json', registration: 'evidence/current/worker/executor/LATEST_REGISTRATION.json',
  delivery: 'evidence/current/worker/executor/LATEST_DELIVERY.json', result: 'evidence/current/worker/executor/LATEST_RESULT.json', reconciliation: 'evidence/current/worker/executor/LATEST_RECONCILIATION.json',
  architectTrigger: 'evidence/current/LATEST_ARCHITECT_TRIGGER.json', architectTriggerReconciliation: 'evidence/current/LATEST_ARCHITECT_TRIGGER_RECONCILIATION.json',
  architectAuthority: 'evidence/current/LATEST_ARCHITECT_SESSION_AUTHORITY.json', architectRegistration: 'evidence/current/LATEST_ARCHITECT_SESSION_REGISTRATION.json'
});
const clone = (x) => x === undefined ? undefined : JSON.parse(JSON.stringify(x));
const object = (x) => x !== null && typeof x === 'object' && !Array.isArray(x);
const freeze = (x) => { if (Array.isArray(x)) x.forEach(freeze); else if (object(x)) Object.values(x).forEach(freeze); return object(x) || Array.isArray(x) ? Object.freeze(x) : x; };
const sha256 = (x) => crypto.createHash('sha256').update(typeof x === 'string' ? x : JSON.stringify(x), 'utf8').digest('hex');
const blobSha256 = (x) => sha256(JSON.stringify(x));
const status = (x) => x?.status ?? x?.outcome ?? x?.state ?? null;
const absent = (error) => error?.code === 'NOT_FOUND' || error?.status === 404 || error?.absent === true;
const result = (statusValue, extra = {}) => freeze({ status: statusValue, mutationAuthorized: false, retryAuthorized: false, architectDispatchAuthorized: false, ...extra });
const projectRecordValid = (record, projectId) => object(record) && (!record.evidenceProject || record.evidenceProject === projectId) && (!record.projectId || record.projectId === projectId);
const normalizeRead = (value) => value?.value !== undefined ? { value: value.value, blobSha: value.blobSha ?? value.sha256 ?? value.blobSha256 ?? null } : { value, blobSha: null };
const exact = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const forbiddenEvent = (event) => /assistant|credential|token|cookie|authorization|header|browser.?dom|private.?business/i.test(JSON.stringify(event));
const resourceHash = (scope) => mutationLeaseInternals.scopeHash(scope);
const activeEntry = (index, leaseId) => (index?.activeLeases ?? []).find((x) => x.leaseId === leaseId);
const overlap = (a, b) => Array.isArray(a) && Array.isArray(b) && a.some((x) => b.includes(x));
const pointerRecord = (pointer) => pointer && typeof pointer === 'object' && !Array.isArray(pointer);
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
async function hydrateWorkerPointers(pointers, readAt, sourceRef) {
  const hydrated = { ...pointers };
  const fail = (reasonCode, pointer) => { const error = new Error(reasonCode); error.reasonCode = reasonCode; error.pointer = pointer; throw error; };
  const hydrateDelivery = async (pointer) => {
    if (!pointerRecord(pointer) || !pointer.intentPath && !pointer.resultPath) return pointer;
    if (!pointer.intentPath || !pointer.resultPath || !pointer.deliveryId) fail('WORKER_DELIVERY_POINTER_INVALID', 'delivery');
    let intent; let resultRecord;
    try { intent = (await readAt(pointer.intentPath, sourceRef)).value; resultRecord = (await readAt(pointer.resultPath, sourceRef)).value; } catch { fail('WORKER_DELIVERY_IMMUTABLE_RECORD_MISSING', 'delivery'); }
    if (!pointerRecord(intent) || !pointerRecord(resultRecord) || intent.recordType !== 'WORKER_DELIVERY_INTENT' || resultRecord.recordType !== 'WORKER_DELIVERY_RESULT') fail('WORKER_DELIVERY_IMMUTABLE_RECORD_INVALID', 'delivery');
    if (intent.deliveryId !== pointer.deliveryId || resultRecord.deliveryId !== pointer.deliveryId || resultRecord.intentSha256 && pointer.intentSha256 && resultRecord.intentSha256 !== pointer.intentSha256) fail('WORKER_DELIVERY_POINTER_ID_CONFLICT', 'delivery');
    if (intent.messageId !== resultRecord.messageId || intent.dispatchId !== resultRecord.dispatchId || intent.workerRole !== resultRecord.workerRole) fail('WORKER_DELIVERY_LINEAGE_CONFLICT', 'delivery');
    const state = resultRecord.outcome ?? resultRecord.state;
    if (pointer.state !== undefined && pointer.state !== state) fail('WORKER_DELIVERY_STATE_CONFLICT', 'delivery');
    return { ...pointer, ...intent, ...resultRecord, state, intentPath: pointer.intentPath, resultPath: pointer.resultPath };
  };
  const hydrateResult = async (pointer) => {
    if (!pointerRecord(pointer) || !pointer.resultPath) return pointer;
    let record; try { record = (await readAt(pointer.resultPath, sourceRef)).value; } catch { fail('WORKER_RESULT_IMMUTABLE_RECORD_MISSING', 'result'); }
    if (!pointerRecord(record) || record.recordType !== 'WORKER_RESULT' || pointer.resultId !== record.resultId) fail('WORKER_RESULT_POINTER_CONFLICT', 'result');
    return { ...pointer, ...record, resultPath: pointer.resultPath };
  };
  const hydrateReconciliation = async (pointer) => {
    if (!pointerRecord(pointer) || !pointer.reconciliationPath) return pointer;
    let record; try { record = (await readAt(pointer.reconciliationPath, sourceRef)).value; } catch { fail('WORKER_RECONCILIATION_IMMUTABLE_RECORD_MISSING', 'reconciliation'); }
    if (!pointerRecord(record) || record.recordType !== 'WORKER_RECONCILIATION' || pointer.reconciliationId !== record.reconciliationId) fail('WORKER_RECONCILIATION_POINTER_CONFLICT', 'reconciliation');
    return { ...pointer, ...record, reconciliationPath: pointer.reconciliationPath };
  };
  hydrated.delivery = await hydrateDelivery(pointers.delivery);
  hydrated.result = await hydrateResult(pointers.result);
  hydrated.reconciliation = await hydrateReconciliation(pointers.reconciliation);
  return hydrated;
}

function requiredOptions(options) {
  if (!object(options) || typeof options.repositoryFullName !== 'string' || typeof options.branch !== 'string' || typeof options.projectId !== 'string' || typeof options.hostInstanceId !== 'string' || typeof options.hostGenerationId !== 'string' || !object(options.client)) throw new TypeError('repository, branch, project, host identity, and injected client are required');
  if (options.repositoryFullName.length === 0 || options.branch.length === 0 || !/^HOST-INSTANCE-[A-Za-z0-9._:-]+$/.test(options.hostInstanceId) || !/^HOST-GEN-[A-Za-z0-9._:-]+$/.test(options.hostGenerationId)) throw new TypeError('runtime identity or binding is invalid');
  const methods = ['getBranchHead', 'readJsonAtRef', 'readJsonCurrent', 'createJson', 'updateJsonCas'];
  const missing = methods.filter((name) => typeof options.client[name] !== 'function');
  if (missing.length) throw new TypeError(`missing client methods: ${missing.join(',')}`);
}

export function createGitHubRuntimePorts(options = {}) {
  requiredOptions(options);
  const { client, repositoryFullName, branch, projectId, hostInstanceId, hostGenerationId } = options;
  const readCurrent = async (path) => normalizeRead(await client.readJsonCurrent(path));
  const readAt = async (path, ref) => normalizeRead(await client.readJsonAtRef(path, ref));
  const head = async () => {
    const value = await client.getBranchHead({ repositoryFullName, branch });
    const ref = value?.ref ?? value?.sha ?? value?.commitSha ?? value;
    if (typeof ref !== 'string' || ref.length === 0) throw new Error('BRANCH_HEAD_INVALID');
    return ref;
  };
  const currentIndex = async () => {
    try { const read = await readCurrent(HOST_RUNTIME_PATHS.leaseIndex); if (read.value === null || read.value === undefined) return { value: null, blobSha: null, absent: true }; return read; }
    catch (error) { if (absent(error)) return { value: null, blobSha: null, absent: true }; throw error; }
  };
  const validateIndex = (index, nowMs = 0) => {
    if (index === null) return { valid: true, index: { schemaVersion: '1.0', pointerKind: 'HOST_MUTATION_LEASE_INDEX', projectId, indexRevision: 0, nextLeaseEpoch: 1, activeLeases: [], updatedAt: 0 }, blobSha: null };
    if (!object(index) || index.schemaVersion !== '1.0' || index.pointerKind !== 'HOST_MUTATION_LEASE_INDEX' || index.projectId !== projectId || !Number.isInteger(index.indexRevision) || index.indexRevision < 0 || !Number.isInteger(index.nextLeaseEpoch) || index.nextLeaseEpoch < 1 || !Array.isArray(index.activeLeases) || !Number.isInteger(index.updatedAt)) return { valid: false, reason: 'LEASE_INDEX_INVALID' };
    const ids = new Set();
    for (const entry of index.activeLeases) {
      if (!object(entry) || typeof entry.leaseId !== 'string' || ids.has(entry.leaseId) || entry.projectId !== projectId || entry.state === 'RELEASED' || entry.state === 'EXPIRED' || !Array.isArray(entry.resourceScope) || !Number.isInteger(entry.expiresAt)) return { valid: false, reason: 'LEASE_INDEX_ENTRY_INVALID' };
      ids.add(entry.leaseId);
      if (entry.state === 'ACTIVE' && nowMs < entry.expiresAt && entry.resourceScope.some((x) => typeof x !== 'string' || x.length === 0)) return { valid: false, reason: 'LEASE_INDEX_SCOPE_INVALID' };
    }
    return { valid: true, index };
  };
  const descriptor = (request) => request.requiredLease ?? request.leaseDescriptor ?? request;
  const candidateIdentity = (request, index, epoch) => ({ actionKind: descriptor(request).actionKind, projectId, hostInstanceId, hostGenerationId, holder: descriptor(request).holder, messageId: descriptor(request).messageId, dispatchId: descriptor(request).dispatchId, milestoneId: descriptor(request).milestoneId, resourceScope: descriptor(request).resourceScope, mutationEnvelopeSha256: descriptor(request).mutationEnvelopeSha256, epoch });
  const candidateLease = (request, index) => {
    const epoch = index.nextLeaseEpoch;
    const identity = candidateIdentity(request, index, epoch);
    const leaseId = `MUTATION-LEASE-HOST-${sha256(identity).slice(0, 32)}`;
    const nowMs = request.nowMs;
    const ttl = request.ttlMs ?? request.requestedTtlMs ?? options.defaultLeaseTtlMs ?? 60000;
    const expiresAt = request.expiresAt ?? nowMs + ttl;
    const scope = [...descriptor(request).resourceScope];
    return { recordType: 'MUTATION_LEASE', schemaVersion: '1.0', protocolFamily: 'ORCHESTRATOR_GITHUB', leaseId, leaseRevision: 1, leaseEpoch: epoch, projectId, resourceScope: scope, resourceScopeSha256: resourceHash(scope), mutationEnvelopeSha256: descriptor(request).mutationEnvelopeSha256, holder: clone(descriptor(request).holder), messageId: descriptor(request).messageId, dispatchId: descriptor(request).dispatchId, milestoneId: descriptor(request).milestoneId, state: 'ACTIVE', acquiredAt: nowMs, expiresAt, releasedAt: null, previousRecordSha256: null, releasedBy: null };
  };
  const readbackActive = async (candidate, indexPath = HOST_RUNTIME_PATHS.leaseIndex) => { const read = await readCurrent(indexPath); return object(read.value) && (read.value.activeLeases ?? []).some((x) => x.leaseId === candidate.leaseId && x.leaseRevision === candidate.leaseRevision); };

  async function readDurableSnapshot() {
    const sourceRef = await head();
    const pointers = {};
    for (const [name, path] of Object.entries(CURRENT_POINTERS)) {
      try { pointers[name] = (await readAt(path, sourceRef)).value; }
      catch (error) { if (name === 'reconciliation' || name === 'architectTriggerReconciliation') { pointers[name] = null; continue; } return result('INVALID', { reasonCode: 'REQUIRED_POINTER_MISSING', pointer: path, sourceRef }); }
      if (!projectRecordValid(pointers[name], projectId)) return result('INVALID', { reasonCode: 'FOREIGN_PROJECT_POINTER', pointer: path, sourceRef });
    }
    let hydratedPointers;
    try { hydratedPointers = await hydrateWorkerPointers(pointers, readAt, sourceRef); } catch (error) { return result('INVALID', { reasonCode: error.reasonCode ?? 'WORKER_LINEAGE_HYDRATION_FAILED', pointer: error.pointer, sourceRef }); }
    let control = pointers.relayControl;
    if (control?.recordId) { try { control = (await readAt(`evidence/architect-sessions/controls/${control.recordId}.json`, sourceRef)).value; } catch (error) { return result('INVALID', { reasonCode: 'RELAY_CONTROL_MISSING', sourceRef }); } }
    let index = null;
    try { index = (await readAt(HOST_RUNTIME_PATHS.leaseIndex, sourceRef)).value; } catch (error) { if (!absent(error)) return result('INVALID', { reasonCode: 'LEASE_INDEX_READ_FAILED', sourceRef }); }
    const worker = { registrationId: pointers.registration?.recordId, role: pointers.registration?.workerRole ?? 'executor', projectId, active: pointers.registration?.state === 'ACTIVE' || pointers.registration?.registrationState === 'ACTIVE', state: pointers.registration?.state ?? pointers.registration?.registrationState };
    return freeze({ status: 'READY', sourceRef, ref: sourceRef, projectId, hostInstanceId, hostGenerationId, pointers: { ...pointers, rawWorker: { delivery: pointers.delivery, result: pointers.result, reconciliation: pointers.reconciliation } }, control, mutationLeaseIndex: index, lifecycleInput: { projectId, workerRole: 'executor', currentDispatch: pointers.dispatch, worker, control, delivery: hydratedPointers.delivery, workerResult: hydratedPointers.result, reconciliation: hydratedPointers.reconciliation, acceptedBaseline: pointers.accepted, governanceContext: { projectProfile: options.projectProfile, expectedProjectId: projectId, expectedProtocolFamily: 'ORCHESTRATOR_GITHUB', acceptedBaseline: { acceptedSourcePublicationId: pointers.accepted?.acceptedSourcePublicationId }, worker, control, mutationEnvelope: { bounded: true, resources: [], sha256: null }, operationPolicy: { mutating: false } } } });
  }

  async function publishHostIdentity(identity) {
    const path = HOST_RUNTIME_PATHS.identity(hostInstanceId);
    const record = { schemaVersion: '1.0', recordType: 'HOST_INSTANCE_IDENTITY', hostInstanceId, hostGenerationId, projectId, workerRole: 'executor', acceptedSourcePublicationId: identity.acceptedSourcePublicationId ?? options.acceptedSourcePublicationId ?? null, createdAt: identity.createdAt, createdByRole: 'executor', authorityBoundary: { grantsArchitectAuthority: false, grantsHumanAuthAuthority: false, grantsMutationLeaseAuthority: false, mutationAuthorized: false, retryAuthorized: false } };
    let current;
    try { current = await readCurrent(path); } catch (error) { if (!absent(error)) return result('AMBIGUOUS', { reasonCode: 'IDENTITY_READ_FAILED' }); }
    if (current?.value !== undefined && current.value !== null) return exact(current.value, record) ? result('IDEMPOTENT', { record: freeze(clone(record)), path }) : result('CONFLICT', { reasonCode: 'HOST_IDENTITY_CONFLICT', path });
    try { const made = await client.createJson(path, record); const madeStatus = status(made); if (madeStatus && !['CREATED', 'IDEMPOTENT', 'OK'].includes(madeStatus)) return result('AMBIGUOUS', { reasonCode: 'IDENTITY_CREATE_AMBIGUOUS', path }); return result('CREATED', { record: freeze(clone(record)), path }); } catch { return result('AMBIGUOUS', { reasonCode: 'IDENTITY_CREATE_AMBIGUOUS', path }); }
  }

  async function acquireMutationLease(request = {}) {
    if (!Number.isInteger(request.nowMs) || !object(descriptor(request)) || !Array.isArray(descriptor(request).resourceScope) || !descriptor(request).mutationEnvelopeSha256) return result('DENIED', { reasonCode: 'LEASE_REQUEST_INVALID' });
    let current; try { current = await currentIndex(); } catch { return result('AMBIGUOUS', { reasonCode: 'LEASE_INDEX_READ_FAILED' }); }
    const checked = validateIndex(current.value, request.nowMs); if (!checked.valid) return result('DENIED', { reasonCode: checked.reason });
    const index = checked.index; const requested = descriptor(request); const conflicting = index.activeLeases.find((entry) => entry.state === 'ACTIVE' && request.nowMs < entry.expiresAt && entry.projectId === projectId && overlap(entry.resourceScope, requested.resourceScope));
    if (conflicting) return result('DENIED', { reasonCode: 'CONFLICT', conflictingLeaseId: conflicting.leaseId });
    const candidate = candidateLease(request, index); const recordPath = HOST_RUNTIME_PATHS.leaseRevision(candidate.leaseId, 1); const entry = { leaseId: candidate.leaseId, leaseEpoch: candidate.leaseEpoch, leaseRevision: 1, revision: 1, currentRevision: 1, recordPath, recordSha256: blobSha256(candidate), immutableRecordPath: recordPath, immutableRecordSha256: blobSha256(candidate), projectId, holder: clone(candidate.holder), messageId: candidate.messageId, dispatchId: candidate.dispatchId, milestoneId: candidate.milestoneId, resourceScope: clone(candidate.resourceScope), resourceScopeSha256: candidate.resourceScopeSha256, mutationEnvelopeSha256: candidate.mutationEnvelopeSha256, expiresAt: candidate.expiresAt, state: 'ACTIVE' };
    try { const made = await client.createJson(recordPath, candidate); if (status(made) && !['CREATED', 'IDEMPOTENT', 'OK'].includes(status(made))) return result('AMBIGUOUS', { reconciliationDescriptor: { leaseId: candidate.leaseId, recordPath, epoch: candidate.leaseEpoch } }); } catch { return result('AMBIGUOUS', { reconciliationDescriptor: { leaseId: candidate.leaseId, recordPath, epoch: candidate.leaseEpoch } }); }
    const next = { schemaVersion: '1.0', pointerKind: 'HOST_MUTATION_LEASE_INDEX', projectId, indexRevision: index.indexRevision + 1, nextLeaseEpoch: candidate.leaseEpoch + 1, activeLeases: [...index.activeLeases, entry], updatedAt: request.nowMs };
    try { const wrote = await client.updateJsonCas(HOST_RUNTIME_PATHS.leaseIndex, current.blobSha, next); if (status(wrote) && !['UPDATED', 'CREATED', 'OK'].includes(status(wrote))) return status(wrote) === 'AMBIGUOUS' ? result('AMBIGUOUS', { reconciliationDescriptor: { leaseId: candidate.leaseId, recordPath, epoch: candidate.leaseEpoch } }) : result('DENIED', { reasonCode: 'STALE_INDEX_CAS' }); } catch { return result('AMBIGUOUS', { reconciliationDescriptor: { leaseId: candidate.leaseId, recordPath, epoch: candidate.leaseEpoch } }); }
    try { if (!(await readbackActive(candidate))) return result('AMBIGUOUS', { reconciliationDescriptor: { leaseId: candidate.leaseId, recordPath, epoch: candidate.leaseEpoch } }); } catch { return result('AMBIGUOUS', { reconciliationDescriptor: { leaseId: candidate.leaseId, recordPath, epoch: candidate.leaseEpoch } }); }
    return result('ACQUIRED', { lease: freeze(clone(candidate)), leasePath: recordPath, sourceRef: request.sourceRef ?? null });
  }

  async function reconcileMutationLease(request = {}) {
    const d = request.reconciliationDescriptor ?? request; if (!d.leaseId) return result('INCONCLUSIVE', { reasonCode: 'RECONCILIATION_DESCRIPTOR_REQUIRED' });
    let current; try { current = await currentIndex(); } catch { return result('INCONCLUSIVE', { reasonCode: 'LEASE_INDEX_READ_FAILED' }); }
    if (current.value === null) return result('NOT_ACQUIRED_SAFE', { leaseId: d.leaseId });
    const found = activeEntry(current.value, d.leaseId); if (found) return result('ACQUIRED_RECONCILED', { leaseId: d.leaseId, leasePath: found.recordPath });
    const requested = d.resourceScope ?? d.requiredLease?.resourceScope; const conflict = (current.value.activeLeases ?? []).find((x) => x.state === 'ACTIVE' && request.nowMs < x.expiresAt && overlap(x.resourceScope, requested));
    return conflict ? result('CONFLICT', { conflictingLeaseId: conflict.leaseId }) : result('NOT_ACQUIRED_SAFE', { leaseId: d.leaseId });
  }

  async function releaseMutationLease(request = {}) {
    const lease = request.lease ?? request.mutationLease; if (!object(lease)) return result('DENIED', { reasonCode: 'LEASE_REQUIRED' });
    let current; try { current = await currentIndex(); } catch { return result('AMBIGUOUS', { leaseReconciliationRequired: true }); }
    const checked = validateIndex(current.value, request.nowMs); if (!checked.valid) return result('DENIED', { reasonCode: checked.reason });
    const entry = activeEntry(checked.index, lease.leaseId); if (!entry || entry.currentRevision !== lease.leaseRevision) return result('DENIED', { reasonCode: 'LEASE_NOT_CURRENT' });
    const evaluation = evaluateMutationLeaseUse({ lease, expectedProjectId: projectId, expectedHolder: lease.holder, expectedMessageId: lease.messageId, expectedDispatchId: lease.dispatchId, expectedMilestoneId: lease.milestoneId, requestedResourceScope: lease.resourceScope, requestedMutationEnvelopeSha256: lease.mutationEnvelopeSha256, nowMs: request.nowMs });
    if (!evaluation.authorized) return result('DENIED', { reasonCode: evaluation.reasonCodes?.[0] ?? evaluation.classification });
    const previousSha = entry.recordSha256 ?? blobSha256(lease); const released = projectMutationLeaseRelease({ lease, evaluation, previousRecordSha256: previousSha, nowMs: request.nowMs, releasedBy: request.releasedBy ?? { registrationId: lease.holder.registrationId, workerRole: lease.holder.workerRole, messageId: lease.messageId, dispatchId: lease.dispatchId, milestoneId: lease.milestoneId, operationReference: request.operationReference ?? 'HOST_RUNTIME' } });
    if (!released) return result('DENIED', { reasonCode: 'LEASE_RELEASE_PROJECTION_INVALID' });
    const releasePath = HOST_RUNTIME_PATHS.leaseRevision(lease.leaseId, lease.leaseRevision + 1);
    try { const made = await client.createJson(releasePath, released); if (status(made) && !['CREATED', 'IDEMPOTENT', 'OK'].includes(status(made))) return result('AMBIGUOUS', { leaseReconciliationRequired: true }); } catch { return result('AMBIGUOUS', { leaseReconciliationRequired: true }); }
    const next = { ...checked.index, indexRevision: checked.index.indexRevision + 1, activeLeases: checked.index.activeLeases.filter((x) => x.leaseId !== lease.leaseId), updatedAt: request.nowMs };
    try { const wrote = await client.updateJsonCas(HOST_RUNTIME_PATHS.leaseIndex, current.blobSha, next); if (status(wrote) && !['UPDATED', 'OK'].includes(status(wrote))) return status(wrote) === 'AMBIGUOUS' ? result('AMBIGUOUS', { leaseReconciliationRequired: true }) : result('DENIED', { reasonCode: 'STALE_INDEX_CAS' }); } catch { return result('AMBIGUOUS', { leaseReconciliationRequired: true }); }
    try { const read = await currentIndex(); if (activeEntry(read.value, lease.leaseId)) return result('AMBIGUOUS', { leaseReconciliationRequired: true }); } catch { return result('AMBIGUOUS', { leaseReconciliationRequired: true }); }
    return result('RELEASED', { leaseId: lease.leaseId, releasePath });
  }

  async function reconcileLeaseRelease(request = {}) {
    const leaseId = request.leaseId ?? request.lease?.leaseId; if (!leaseId) return result('INCONCLUSIVE', { reasonCode: 'LEASE_ID_REQUIRED' });
    let current; try { current = await currentIndex(); } catch { return result('INCONCLUSIVE', { reasonCode: 'LEASE_INDEX_READ_FAILED' }); }
    if (activeEntry(current.value, leaseId)) return result('STILL_ACTIVE', { leaseId });
    if (request.releasePath) { try { const read = await readCurrent(request.releasePath); if (read.value) return result('RELEASED_RECONCILED', { leaseId, releasePath: request.releasePath }); } catch { return result('INCONCLUSIVE', { leaseId }); } }
    return result('INCONCLUSIVE', { leaseId });
  }

  async function publishHostEvent(event = {}) {
    if (!object(event) || !event.eventId || !event.sourceRef || forbiddenEvent(event)) return result('DENIED', { reasonCode: 'HOST_EVENT_SANITIZATION_FAILED' });
    const path = HOST_RUNTIME_PATHS.event(hostInstanceId, event.eventId); const record = { schemaVersion: '1.0', recordType: 'HOST_EVENT', ...clone(event), hostInstanceId, hostGenerationId, projectId, telemetryOnly: true, mutationAuthorized: false, retryAuthorized: false };
    let current; try { current = await readCurrent(path); } catch (error) { if (!absent(error)) return result('AMBIGUOUS', { reasonCode: 'HOST_EVENT_READ_FAILED' }); }
    if (current?.value !== undefined && current.value !== null) return exact(current.value, record) ? result('IDEMPOTENT', { path }) : result('CONFLICT', { reasonCode: 'HOST_EVENT_CONFLICT', path });
    try { const made = await client.createJson(path, record); if (status(made) && !['CREATED', 'IDEMPOTENT', 'OK'].includes(status(made))) return result('AMBIGUOUS', { reasonCode: 'HOST_EVENT_CREATE_AMBIGUOUS', path }); return result('CREATED', { path }); } catch { return result('AMBIGUOUS', { reasonCode: 'HOST_EVENT_CREATE_AMBIGUOUS', path }); }
  }

  const waitForNextPoll = options.waitForNextPoll ?? (async () => undefined);
  return Object.freeze({ readDurableSnapshot, publishHostIdentity, acquireMutationLease, reconcileMutationLease, releaseMutationLease, reconcileLeaseRelease, publishHostEvent, waitForNextPoll, paths: HOST_RUNTIME_PATHS, repositoryFullName, branch, projectId, hostInstanceId, hostGenerationId });
}
