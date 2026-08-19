import { createHash } from 'node:crypto';
import { createProjectEvent, validateProjectEvent, validateProjectEventChain } from './project-events.js';

const INDEX = 'evidence/current/events/PROJECT_EVENT_INDEX.json';
const prefix = 'evidence/events/';
const clone = (x) => x === undefined ? undefined : JSON.parse(JSON.stringify(x));
const obj = (x) => x && typeof x === 'object' && !Array.isArray(x);
const freeze = (x) => { if (Array.isArray(x)) x.forEach(freeze); else if (obj(x)) Object.values(x).forEach(freeze); return obj(x) || Array.isArray(x) ? Object.freeze(x) : x; };
const fail = (reason, extra = {}) => freeze({ status: 'INVALID', classification: 'GITHUB_EVENT_LEDGER_INVALID', reasonCodes: [reason], mutationAuthorized: false, retryAuthorized: false, ...extra });
const sha256 = (x) => createHash('sha256').update(typeof x === 'string' ? x : JSON.stringify(x)).digest('hex');
const hashRecord = (x) => sha256(JSON.stringify(x));
const pathFor = (id) => `${prefix}${id}.json`;
const read = (x) => x?.record ?? x?.value ?? x?.json ?? x;
const blob = (x) => x?.blobSha ?? x?.sha ?? x?.blobSha256 ?? null;
const absent = (x) => x === undefined || x === null || x?.absent === true;
const safe = (x) => { const s = JSON.stringify(x); return !/assistant|transcript|credential|secret|token|cookie|authorization|auth[_-]?header|dom|html|private.?business/i.test(s); };
const validSha = (x) => typeof x === 'string' && /^[0-9a-f]{64}$/.test(x);
const json = (x) => JSON.stringify(x);
const result = (status, extra = {}) => freeze({ status, mutationAuthorized: false, retryAuthorized: false, ...extra });

function validateIndex(value, projectId) {
  if (absent(value)) return { absent: true };
  const i = read(value);
  if (!obj(i) || i.schemaVersion !== '1.0' || i.pointerKind !== 'PROJECT_EVENT_INDEX' || i.projectId !== projectId || !Number.isInteger(i.indexRevision) || i.indexRevision < 1 || !Number.isInteger(i.nextSequence) || i.nextSequence < 1 || !Number.isInteger(i.headSequence) || i.headSequence < 0) throw new Error('INDEX_INVALID');
  if (i.headSequence === 0 && (i.headEventId !== null || i.headEventPath !== null || i.headEventSha256 !== null)) throw new Error('INDEX_HEAD_INVARIANT_INVALID');
  if (i.headSequence > 0 && (!i.headEventId || i.headEventPath !== pathFor(i.headEventId) || !validSha(i.headEventSha256) || i.nextSequence !== i.headSequence + 1)) throw new Error('INDEX_HEAD_INVARIANT_INVALID');
  return { record: i, blobSha: blob(value) };
}
function candidateFrom(request, sequence, previous, projectId) {
  if (!obj(request) || !obj(request.event) || typeof request.producerEventKey !== 'string' || !request.producerEventKey || !Number.isInteger(request.createdAt) || request.createdAt < 0 || !safe(request)) throw new Error('EVENT_REQUEST_INVALID');
  const base = { ...request.event, projectId, eventSequence: sequence, previousEventId: previous?.eventId ?? null, createdAt: request.createdAt };
  const identity = sha256(json({ projectId, event: base, producerEventKey: request.producerEventKey }));
  const eventId = `EVT-${String(sequence).padStart(6, '0')}-${identity.slice(0, 16)}`;
  const checked = validateProjectEvent({ ...base, eventId }, { bootstrap: sequence === 1, reconciliationAuthorized: request.reconciliationAuthorized === true });
  if (!checked.valid) throw new Error(checked.reasonCodes[0]);
  const eventPath = pathFor(eventId);
  return { ...checked.event, sequence, previousEventPath: previous ? pathFor(previous.eventId) : null, previousEventSha256: previous ? hashRecord(previous) : null, producerEventKey: request.producerEventKey, eventPath, eventId, canonicalPayloadSha256: identity };
}
function validateStored(event, projectId) {
  if (!obj(event) || event.projectId !== projectId || event.eventPath !== pathFor(event.eventId) || !Number.isInteger(event.sequence) || event.sequence < 1 || !('producerEventKey' in event)) throw new Error('EVENT_RECORD_INVALID');
  const checked = validateProjectEvent({ ...event, eventSequence: event.sequence }, { bootstrap: event.sequence === 1, reconciliationAuthorized: event.producerRole === 'reconciliation' });
  if (!checked.valid) throw new Error(checked.reasonCodes[0]);
  if (!validSha(event.recordSha256)) throw new Error('EVENT_RECORD_HASH_INVALID');
  const { recordSha256: _recordSha256, ...canonicalRecord } = event;
  if (hashRecord(canonicalRecord) !== event.recordSha256) throw new Error('EVENT_RECORD_HASH_INVALID');
  return event;
}

export function createGitHubEventLedger(options = {}) {
  if (!obj(options) || typeof options.repositoryFullName !== 'string' || !options.repositoryFullName || typeof options.branch !== 'string' || !options.branch || typeof options.projectId !== 'string' || !options.projectId || !obj(options.client)) throw new Error('LEDGER_FACTORY_CONTRACT_INVALID');
  const c = options.client; const methods = ['getBranchHead', 'readJsonAtRef', 'readJsonCurrent', 'createJson', 'updateJsonCas'];
  if (methods.some((m) => typeof c[m] !== 'function')) throw new Error('LEDGER_CLIENT_CONTRACT_INVALID');
  const projectId = options.projectId;
  const current = async () => { const x = await c.readJsonCurrent(INDEX); return validateIndex(x, projectId); };
  const at = async (path, ref) => { const x = await c.readJsonAtRef(path, ref); if (absent(x)) throw new Error('EVENT_MISSING'); return read(x); };
  async function publishEvent(request = {}) {
    let state; try { state = await current(); } catch (e) { return fail(e.message); }
    const index = state.absent ? { indexRevision: 0, nextSequence: 1, headSequence: 0, headEventId: null, headEventPath: null, headEventSha256: null } : state.record;
    let previous = null;
    try { if (index.headSequence) previous = validateStored(read(await c.readJsonCurrent(index.headEventPath)), projectId); const event = candidateFrom(request, index.nextSequence, previous, projectId); const stored = { ...event, recordSha256: hashRecord(event) }; await c.createJson(event.eventPath, stored); const next = { schemaVersion: '1.0', pointerKind: 'PROJECT_EVENT_INDEX', projectId, indexRevision: index.indexRevision + 1, nextSequence: event.sequence + 1, headEventId: event.eventId, headEventPath: event.eventPath, headEventSha256: hashRecord(stored), headSequence: event.sequence, updatedAt: request.updatedAt ?? request.createdAt }; await c.updateJsonCas(INDEX, state.absent ? null : state.blobSha, next); const readback = validateIndex(await c.readJsonCurrent(INDEX), projectId); if (readback.record.headEventId !== event.eventId || readback.record.headEventSha256 !== hashRecord(stored)) return result('INCONCLUSIVE', { reconciliationRequired: true }); return result('PUBLISHED', { event: clone(stored), index: clone(next) }); } catch (e) { return result('AMBIGUOUS', { reasonCodes: [e.message], reconciliationDescriptor: { eventPath: request.event ? 'candidate-derived' : null, indexPath: INDEX }, noRetry: true }); }
  }
  async function reconcilePublishEvent(request = {}) {
    try {
      const state = await current(); if (state.absent) return result('NOT_PUBLISHED_SAFE');
      const head = validateStored(read(await c.readJsonCurrent(state.record.headEventPath)), projectId);
      const candidate = candidateFrom(request, state.record.nextSequence, head, projectId);
      const candidateRaw = await c.readJsonCurrent(candidate.eventPath);
      if (!absent(candidateRaw)) {
        const stored = validateStored(read(candidateRaw), projectId);
        if (state.record.headEventId === stored.eventId && state.record.headEventSha256 === hashRecord(stored)) return result('PUBLISHED_RECONCILED', { event: clone(stored) });
        return result('INCONCLUSIVE');
      }
      if (head.producerEventKey === request.producerEventKey) return result('CONFLICT');
      return result('NOT_PUBLISHED_SAFE', { intendedSequence: state.record.nextSequence, intendedEventId: candidate.eventId });
    } catch (e) { return result('INCONCLUSIVE', { reasonCodes: [e.message] }); }
  }
  async function readEventsAfter(cursor = {}, options = {}) {
    const maxEvents = Number.isInteger(options.maxEvents) && options.maxEvents > 0 ? options.maxEvents : 100;
    try { const ref = await c.getBranchHead(); const idxRaw = await c.readJsonAtRef(INDEX, ref); const idx = validateIndex(idxRaw, projectId); if (idx.absent || idx.record.headSequence === 0) return result('OK', { sourceRef: ref, events: [] }); const collected = []; let cur = idx.record.headEventPath; let next = idx.record.headSequence; const wanted = cursor.lastProcessedEventId ?? null; while (cur && next > (cursor.lastProcessedSequence ?? 0)) { const e = validateStored(await at(cur, ref), projectId); if (e.sequence !== next || (next === idx.record.headSequence ? hashRecord(e) !== idx.record.headEventSha256 : false)) throw new Error('CHAIN_INVALID'); collected.push(e); if (e.eventId === wanted) break; cur = e.previousEventPath; next--; if (collected.length > maxEvents) return result('BATCH_LIMIT_REACHED', { sourceRef: ref, events: collected.slice(0, maxEvents).reverse(), continuation: { lastProcessedEventId: collected[maxEvents - 1].eventId, lastProcessedSequence: collected[maxEvents - 1].sequence } }); } if (wanted && !collected.some((e) => e.eventId === wanted) && (cursor.lastProcessedSequence ?? 0) > 0) throw new Error('CURSOR_NOT_ON_CHAIN'); const chain = validateProjectEventChain(collected.reverse().filter((e) => e.eventId !== wanted), { projectId, lastProcessedEventId: null, lastProcessedEventSequence: 0 }, { bootstrap: true }); if (!chain.valid) throw new Error('CHAIN_INVALID'); return result('OK', { sourceRef: ref, events: clone(chain.events) }); } catch (e) { return result('INVALID', { reasonCodes: [e.message], sourceRef: null, events: [] }); }
  }
  return Object.freeze({ publishEvent, reconcilePublishEvent, readEventsAfter, validateIndex: (x) => validateIndex(x, projectId) });
}
