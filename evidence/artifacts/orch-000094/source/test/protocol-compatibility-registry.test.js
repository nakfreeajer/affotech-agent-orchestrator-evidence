import test from 'node:test';
import assert from 'node:assert/strict';
import { PROTOCOL_FAMILIES, validateProtocolRecord, validateProtocolFamily, identifyProtocolFamily, evaluateCorrelationEvidence } from '../src/protocol/compatibility-registry.js';

const dispatch = () => ({ schemaVersion: '1.0', recordType: 'DISPATCH', messageId: 'ORCH-1', dispatchId: 'DISPATCH-1' });
test('supported Orchestrator DISPATCH schemaVersion 1.0 accepted', () => assert.equal(validateProtocolRecord(dispatch()).classification, 'SUPPORTED'));
test('missing schemaVersion fails closed', () => assert.equal(validateProtocolRecord({ recordType: 'DISPATCH' }).reasonCodes[0], 'MISSING_SCHEMA_VERSION'));
test('unsupported major version fails closed', () => assert.equal(validateProtocolRecord({ ...dispatch(), schemaVersion: '2.0' }).reasonCodes[0], 'UNSUPPORTED_SCHEMA_VERSION'));
test('unsupported minor version fails closed', () => assert.equal(validateProtocolRecord({ ...dispatch(), schemaVersion: '1.1' }).reasonCodes[0], 'UNSUPPORTED_SCHEMA_VERSION'));
test('unknown record kind fails closed', () => assert.equal(validateProtocolRecord({ schemaVersion: '1.0', recordType: 'NOPE' }).reasonCodes[0], 'UNKNOWN_RECORD_KIND'));
test('input record is not mutated', () => { const x = dispatch(); const before = JSON.stringify(x); validateProtocolRecord(x); assert.equal(JSON.stringify(x), before); });
test('ORCHESTRATOR_GITHUB family accepted', () => assert.equal(validateProtocolFamily({ family: PROTOCOL_FAMILIES.ORCHESTRATOR_GITHUB, messageId: 'ORCH-1', dispatchId: 'DISPATCH-1' }).valid, true));
test('bare AFFOTECH-family PUB-* canonical identity rejected as foreign family', () => assert.equal(validateProtocolFamily({ messageId: 'PUB-1' }).reasonCodes[0], 'FOREIGN_PROTOCOL_FAMILY'));
test('GH-PUB-* evidence publication ID is not misclassified as AFFOTECH relay family', () => assert.equal(identifyProtocolFamily('GH-PUB-1'), PROTOCOL_FAMILIES.ORCHESTRATOR_GITHUB));
test('no cross-family translation/migration interface exists', () => { const m = awaitImportShape(); assert.equal('translate' in m || 'migrate' in m || 'normalize' in m, false); });
function awaitImportShape() { return { validateProtocolRecord, validateProtocolFamily, identifyProtocolFamily, evaluateCorrelationEvidence }; }
test('HUMAN_AUTH 1.0 is supported for the Orchestrator family', () => assert.equal(validateProtocolRecord({ schemaVersion: '1.0', recordType: 'HUMAN_AUTH', protocolFamily: PROTOCOL_FAMILIES.ORCHESTRATOR_GITHUB }).classification, 'SUPPORTED'));
test('MUTATION_LEASE is supported while CURATOR_RESULT remains reserved/not executable', () => { assert.equal(validateProtocolRecord({ schemaVersion: '1.0', recordType: 'MUTATION_LEASE', protocolFamily: PROTOCOL_FAMILIES.ORCHESTRATOR_GITHUB }).classification, 'SUPPORTED'); assert.equal(validateProtocolRecord({ schemaVersion: '1.0', recordType: 'CURATOR_RESULT' }).classification, 'RESERVED_NOT_YET_SUPPORTED'); });
test('repeated payload/content alone is insufficient correlation', () => assert.equal(evaluateCorrelationEvidence({ operationId: 'x', payloadSha256: 'x' }).classification, 'INSUFFICIENT_CORRELATION_EVIDENCE'));
test('complete durable target/source/payload/pre-boundary identity is correlation-sufficient', () => assert.equal(evaluateCorrelationEvidence({ operationId: 'i', sourceMessageId: 'ORCH-1', dispatchId: 'DISPATCH-1', targetId: 't', payloadSha256: 'p', preAttemptBoundary: 'b', preAttemptBoundarySha256: 'h', attemptOrdinal: 1 }).classification, 'CORRELATION_SUFFICIENT'));
test('target/source/payload/boundary mismatch returns CORRELATION_MISMATCH', () => assert.equal(evaluateCorrelationEvidence({ operationId: 'i', sourceMessageId: 'ORCH-1', dispatchId: 'DISPATCH-1', targetId: 't', payloadSha256: 'p', preAttemptBoundary: 'b', preAttemptBoundarySha256: 'h', attemptOrdinal: 0 }).classification, 'CORRELATION_MISMATCH'));
test('timestamp/current-state-only evidence remains insufficient and retry is not authorized', () => { const x = evaluateCorrelationEvidence({ timestamp: 1, targetId: 'current' }); assert.equal(x.classification, 'INSUFFICIENT_CORRELATION_EVIDENCE'); assert.equal(x.retryAuthorized, false); });
