import crypto from 'node:crypto';
import { ALLOWED_RELAY_PORTS, BLOCKING_CONTROLS } from './constants.js';

export const REGISTRATION_SCHEMA_VERSION = '1.0';
export const REGISTRATION_PATHS = Object.freeze({
  authorityDirectory: 'evidence/architect-sessions/authorities',
  registrationDirectory: 'evidence/architect-sessions/registrations',
  controlDirectory: 'evidence/architect-sessions/controls',
  authorityPointer: 'evidence/current/LATEST_ARCHITECT_SESSION_AUTHORITY.json',
  registrationPointer: 'evidence/current/LATEST_ARCHITECT_SESSION_REGISTRATION.json',
  controlPointer: 'evidence/current/RELAY_CONTROL.json'
});

const CONTROL_STATES = Object.freeze(['ACTIVE', ...BLOCKING_CONTROLS]);
const nonEmpty = (x) => typeof x === 'string' && x.length > 0;
const sha256 = (x) => crypto.createHash('sha256').update(x, 'utf8').digest('hex');
const isSha = (x) => typeof x === 'string' && /^[0-9a-f]{64}$/.test(x);
const isTime = (x) => Number.isInteger(x) && x >= 0;
const isId = (x) => nonEmpty(x) && /^[A-Za-z0-9._:-]+$/.test(x);
const clone = (x) => JSON.parse(JSON.stringify(x));
const result = (valid, reasonCodes = []) => ({ valid, reasonCodes });

function authorityPayload(a) {
  return {
    schemaVersion: a.schemaVersion,
    recordType: a.recordType,
    authorityId: a.authorityId,
    missionId: a.missionId,
    generation: a.generation,
    state: a.state,
    createdAt: a.createdAt,
    createdByRole: a.createdByRole,
    architectDecisionId: a.architectDecisionId,
    supersedesAuthorityId: a.supersedesAuthorityId
  };
}

function registrationPayload(r) {
  return {
    schemaVersion: r.schemaVersion,
    recordType: r.recordType,
    registrationId: r.registrationId,
    authorityId: r.authorityId,
    authoritySha256: r.authoritySha256,
    missionId: r.missionId,
    generation: r.generation,
    conversationId: r.conversationId,
    conversationUrl: r.conversationUrl,
    relayPort: r.relayPort,
    state: r.state,
    createdAt: r.createdAt,
    supersededBy: r.supersededBy,
    consumed: r.consumed
  };
}

function controlPayload(c) {
  return { schemaVersion: c.schemaVersion, recordType: c.recordType, controlId: c.controlId, state: c.state, updatedAt: c.updatedAt };
}

function controlRecordPayload(c) {
  return {
    schemaVersion: c.schemaVersion,
    recordType: c.recordType,
    recordId: c.recordId,
    missionId: c.missionId,
    relayPort: c.relayPort,
    state: c.state,
    createdAt: c.createdAt,
    createdByRole: c.createdByRole,
    supersedesRecordId: c.supersedesRecordId
  };
}

export function createGenerationAuthority(input = {}) {
  const authority = {
    schemaVersion: REGISTRATION_SCHEMA_VERSION,
    recordType: 'ARCHITECT_GENERATION_AUTHORITY',
    authorityId: input.authorityId,
    missionId: input.missionId,
    generation: input.generation,
    state: input.state ?? 'ACTIVE',
    createdAt: input.createdAt,
    createdByRole: 'architect',
    architectDecisionId: input.architectDecisionId,
    supersedesAuthorityId: input.supersedesAuthorityId ?? null
  };
  return { ...authority, authoritySha256: sha256(JSON.stringify(authorityPayload(authority))) };
}

export function createConversationRegistration(input = {}) {
  const registration = {
    schemaVersion: REGISTRATION_SCHEMA_VERSION,
    recordType: 'ARCHITECT_SESSION_REGISTRATION',
    registrationId: input.registrationId,
    authorityId: input.authorityId,
    authoritySha256: input.authoritySha256,
    missionId: input.missionId,
    generation: input.generation,
    conversationId: input.conversationId,
    conversationUrl: input.conversationUrl,
    relayPort: input.relayPort ?? 9333,
    state: input.state ?? 'ACTIVE',
    createdAt: input.createdAt,
    supersededBy: input.supersededBy ?? null,
    consumed: input.consumed ?? false
  };
  return { ...registration, registrationSha256: sha256(JSON.stringify(registrationPayload(registration))) };
}

export function createRelayControlState(input = {}) {
  const control = {
    schemaVersion: REGISTRATION_SCHEMA_VERSION,
    recordType: 'RELAY_CONTROL_STATE',
    controlId: input.controlId,
    state: input.state ?? 'ACTIVE',
    updatedAt: input.updatedAt
  };
  return { ...control, controlSha256: sha256(JSON.stringify(controlPayload(control))) };
}

export function createRelayControlRecord(input = {}) {
  const record = {
    schemaVersion: REGISTRATION_SCHEMA_VERSION,
    recordType: 'RELAY_CONTROL',
    recordId: input.recordId,
    missionId: input.missionId,
    relayPort: input.relayPort ?? 9333,
    state: input.state ?? 'ACTIVE',
    createdAt: input.createdAt,
    createdByRole: input.createdByRole,
    supersedesRecordId: input.supersedesRecordId ?? null
  };
  return { ...record, controlSha256: sha256(JSON.stringify(controlRecordPayload(record))) };
}

export function validateGenerationAuthority(a) {
  if (!a || a.schemaVersion !== REGISTRATION_SCHEMA_VERSION || a.recordType !== 'ARCHITECT_GENERATION_AUTHORITY') return result(false, ['GENERATION_AUTHORITY_SCHEMA_INVALID']);
  if (!isId(a.authorityId) || !nonEmpty(a.missionId) || !nonEmpty(a.generation) || !['ACTIVE', 'SUPERSEDED'].includes(a.state)) return result(false, ['GENERATION_AUTHORITY_FIELDS_INVALID']);
  if (!isTime(a.createdAt) || a.createdByRole !== 'architect' || !isId(a.architectDecisionId)) return result(false, ['GENERATION_AUTHORITY_PROVENANCE_INVALID']);
  if (!(a.supersedesAuthorityId === null || isId(a.supersedesAuthorityId))) return result(false, ['GENERATION_AUTHORITY_LINEAGE_INVALID']);
  if (!isSha(a.authoritySha256) || sha256(JSON.stringify(authorityPayload(a))) !== a.authoritySha256) return result(false, ['GENERATION_AUTHORITY_HASH_INVALID']);
  return result(true);
}

export function validateConversationRegistration(r) {
  if (!r || r.schemaVersion !== REGISTRATION_SCHEMA_VERSION || r.recordType !== 'ARCHITECT_SESSION_REGISTRATION') return result(false, ['REGISTRATION_SCHEMA_INVALID']);
  if (!isId(r.registrationId) || !isId(r.authorityId) || !isSha(r.authoritySha256) || !nonEmpty(r.missionId) || !nonEmpty(r.generation)) return result(false, ['REGISTRATION_FIELDS_INVALID']);
  if (!isId(r.conversationId) || !/^https:\/\/chatgpt\.com\/c\/[A-Za-z0-9-]+$/.test(r.conversationUrl)) return result(false, ['REGISTRATION_CONVERSATION_INVALID']);
  if (!ALLOWED_RELAY_PORTS.includes(r.relayPort) || !['ACTIVE', 'SUPERSEDED'].includes(r.state) || !isTime(r.createdAt)) return result(false, ['REGISTRATION_RELAY_STATE_INVALID']);
  if (!(r.supersededBy === null || isId(r.supersededBy)) || typeof r.consumed !== 'boolean') return result(false, ['REGISTRATION_LIFECYCLE_INVALID']);
  if (!isSha(r.registrationSha256) || sha256(JSON.stringify(registrationPayload(r))) !== r.registrationSha256) return result(false, ['REGISTRATION_HASH_INVALID']);
  return result(true);
}

export function validateRelayControlState(c) {
  if (!c || c.schemaVersion !== REGISTRATION_SCHEMA_VERSION || c.recordType !== 'RELAY_CONTROL_STATE') return result(false, ['CONTROL_SCHEMA_INVALID']);
  if (!isId(c.controlId) || !CONTROL_STATES.includes(c.state) || !isTime(c.updatedAt)) return result(false, ['CONTROL_FIELDS_INVALID']);
  if (!isSha(c.controlSha256) || sha256(JSON.stringify(controlPayload(c))) !== c.controlSha256) return result(false, ['CONTROL_HASH_INVALID']);
  return result(true);
}

export function validateRelayControlRecord(c) {
  if (!c || c.schemaVersion !== REGISTRATION_SCHEMA_VERSION || c.recordType !== 'RELAY_CONTROL') return result(false, ['CONTROL_RECORD_SCHEMA_INVALID']);
  if (!isId(c.recordId) || !nonEmpty(c.missionId) || !ALLOWED_RELAY_PORTS.includes(c.relayPort) || !CONTROL_STATES.includes(c.state)) return result(false, ['CONTROL_RECORD_FIELDS_INVALID']);
  if (!isTime(c.createdAt) || !nonEmpty(c.createdByRole)) return result(false, ['CONTROL_RECORD_PROVENANCE_INVALID']);
  if (!(c.supersedesRecordId === null || isId(c.supersedesRecordId))) return result(false, ['CONTROL_RECORD_LINEAGE_INVALID']);
  if (!isSha(c.controlSha256) || sha256(JSON.stringify(controlRecordPayload(c))) !== c.controlSha256) return result(false, ['CONTROL_RECORD_HASH_INVALID']);
  return result(true);
}

function validatePointer(pointer, kind, record) {
  if (!pointer || pointer.pointerKind !== kind || pointer.pointerState !== 'CURRENT') return ['CURRENT_POINTER_INVALID'];
  if (pointer.recordId !== record?.authorityId && pointer.recordId !== record?.registrationId) return ['CURRENT_POINTER_ID_MISMATCH'];
  const expected = kind === 'ARCHITECT_SESSION_AUTHORITY' ? record?.authoritySha256 : record?.registrationSha256;
  if (pointer.recordSha256 !== expected) return ['CURRENT_POINTER_HASH_MISMATCH'];
  return [];
}

function validateControlPointer(pointer, record) {
  if (!pointer || pointer.pointerKind !== 'RELAY_CONTROL' || pointer.pointerState !== 'CURRENT') return ['CURRENT_CONTROL_POINTER_INVALID'];
  if (pointer.recordId !== record?.recordId) return ['CURRENT_CONTROL_POINTER_ID_MISMATCH'];
  if (pointer.recordSha256 !== record?.controlSha256) return ['CURRENT_CONTROL_POINTER_HASH_MISMATCH'];
  return [];
}

export function resolveArchitectSession(input = {}) {
  const authorityCheck = validateGenerationAuthority(input.authority);
  const registrationCheck = validateConversationRegistration(input.registration);
  const controlCheck = input.controlRecord ? validateRelayControlRecord(input.controlRecord) : validateRelayControlState(input.control);
  const defects = [...authorityCheck.reasonCodes, ...registrationCheck.reasonCodes, ...controlCheck.reasonCodes];
  if (defects.length) return { classification: 'FAIL_CLOSED', registrationReady: false, sendAuthorized: false, reasonCodes: defects };
  defects.push(...validatePointer(input.authorityPointer, 'ARCHITECT_SESSION_AUTHORITY', input.authority));
  defects.push(...validatePointer(input.registrationPointer, 'ARCHITECT_SESSION_REGISTRATION', input.registration));
  if (input.controlRecord) defects.push(...validateControlPointer(input.controlPointer, input.controlRecord));
  if (defects.length) return { classification: 'FAIL_CLOSED', registrationReady: false, sendAuthorized: false, reasonCodes: defects };
  if (input.controlRecord && (input.controlRecord.missionId !== input.registration.missionId || input.controlRecord.relayPort !== input.registration.relayPort)) return { classification: 'FAIL_CLOSED', registrationReady: false, sendAuthorized: false, reasonCodes: ['CONTROL_RECORD_BINDING_MISMATCH'] };
  const controlState = input.controlRecord ? input.controlRecord.state : input.control.state;
  if (controlState !== 'ACTIVE') return { classification: controlState, registrationReady: false, sendAuthorized: false, reasonCodes: [controlState] };
  if (input.authority.state !== 'ACTIVE' || input.registration.state !== 'ACTIVE' || input.registration.consumed) return { classification: 'STALE_REGISTRATION', registrationReady: false, sendAuthorized: false, reasonCodes: ['STALE_OR_CONSUMED_REGISTRATION'] };
  if (input.registration.authorityId !== input.authority.authorityId || input.registration.authoritySha256 !== input.authority.authoritySha256 || input.registration.missionId !== input.authority.missionId || input.registration.generation !== input.authority.generation) return { classification: 'FAIL_CLOSED', registrationReady: false, sendAuthorized: false, reasonCodes: ['AUTHORITY_REGISTRATION_MISMATCH'] };
  if (!input.observedSession || input.observedSession.conversationId !== input.registration.conversationId || input.observedSession.conversationUrl !== input.registration.conversationUrl || input.observedSession.composerCount !== 1 || input.observedSession.relayPort !== input.registration.relayPort) return { classification: 'FAIL_CLOSED', registrationReady: false, sendAuthorized: false, reasonCodes: ['OBSERVED_SESSION_MISMATCH'] };
  return { classification: 'ARCHITECT_SESSION_REGISTRATION_READY_FOR_RELAY_QUALIFICATION', registrationReady: true, sendAuthorized: false, reasonCodes: [], authorityId: input.authority.authorityId, registrationId: input.registration.registrationId, conversationId: input.registration.conversationId, architectGeneration: input.authority.generation };
}

export function registrationPaths({ authorityId, registrationId, controlId } = {}) {
  const paths = { authorityPath: `${REGISTRATION_PATHS.authorityDirectory}/${authorityId}.json`, registrationPath: `${REGISTRATION_PATHS.registrationDirectory}/${registrationId}.json`, authorityPointer: REGISTRATION_PATHS.authorityPointer, registrationPointer: REGISTRATION_PATHS.registrationPointer, controlPointer: REGISTRATION_PATHS.controlPointer };
  if (controlId !== undefined) paths.controlPath = `${REGISTRATION_PATHS.controlDirectory}/${controlId}.json`;
  return paths;
}

export { sha256 };
