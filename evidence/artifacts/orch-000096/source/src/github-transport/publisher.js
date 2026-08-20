import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { acceptedPointerPath, TERMINAL_LIFECYCLES, TERMINAL_OUTCOMES, TERMINAL_ROLES, TRANSPORT_CLASSIFICATIONS, TRANSPORT_REPO, terminalPointerPath } from './constants.js';

const nonEmpty = (x) => typeof x === 'string' && x.length > 0;
const sha256 = (x) => crypto.createHash('sha256').update(x).digest('hex');
const plain = (x) => x !== null && typeof x === 'object' && !Array.isArray(x) && (Object.getPrototypeOf(x) === Object.prototype || Object.getPrototypeOf(x) === null);
const stable = (x) => JSON.stringify(x, Object.keys(x).sort());
const bytes = (x) => Buffer.from(x, 'utf8');

function fail(reasonCodes) { return { classification: TRANSPORT_CLASSIFICATIONS.FAIL_CLOSED, reasonCodes, requiresArchitectDecision: true }; }

export function buildTerminalPublication(input = {}) {
  const { role, milestone, workerLifecycle, workerOutcome, classification, terminal, report = '', previousEvidenceCommit = null, resultingEvidenceCommit = null, requiresArchitectDecision = true } = input;
  if (!TERMINAL_ROLES.includes(role) || !nonEmpty(milestone) || !TERMINAL_LIFECYCLES.includes(workerLifecycle) || !TERMINAL_OUTCOMES.includes(workerOutcome) || !nonEmpty(classification) || !plain(terminal) || typeof report !== 'string') return fail(['INVALID_TERMINAL_INPUT']);
  const terminalJson = JSON.stringify({ schemaVersion: '1.0', role, milestone, workerLifecycle, workerOutcome, classification, terminal, requiresArchitectDecision });
  const terminalSha256 = sha256(terminalJson);
  const reportSha256 = sha256(report);
  const identity = { repository: TRANSPORT_REPO, role, milestone, workerLifecycle, workerOutcome, classification, terminalSha256, reportSha256 };
  const publicationId = `GH-PUB-${sha256(stable(identity)).slice(0, 32)}`;
  const base = `evidence/terminal/${role}/${publicationId}`;
  const receipt = { schemaVersion: '1.0', publicationId, repository: TRANSPORT_REPO, role, milestone, workerLifecycle, workerOutcome, classification, terminalSha256, reportSha256, previousEvidenceCommit, resultingEvidenceCommit, requiresArchitectDecision };
  const files = [
    { path: `${base}/terminal.json`, content: terminalJson, sha256: terminalSha256 },
    { path: `${base}/report.md`, content: report, sha256: reportSha256 },
    { path: `${base}/receipt.json`, content: JSON.stringify(receipt), sha256: sha256(JSON.stringify(receipt)) },
    { path: terminalPointerPath(role), content: JSON.stringify({ schemaVersion: '1.0', publicationId, role, milestone, workerOutcome, classification, terminalPath: `${base}/terminal.json`, reportPath: `${base}/report.md`, receiptPath: `${base}/receipt.json`, requiresArchitectDecision }), sha256: null }
  ];
  return { classification: TRANSPORT_CLASSIFICATIONS.PUBLISHED, publicationId, role, milestone, workerOutcome, requiresArchitectDecision, terminalSha256, reportSha256, receipt, files, immutablePaths: files.slice(0, 3).map((x) => x.path), terminalPointerPath: terminalPointerPath(role), acceptedPointerPath: acceptedPointerPath(role) };
}

function validateModel(model) {
  if (!model || !/^GH-PUB-[0-9a-f]{32}$/.test(model.publicationId) || !Array.isArray(model.files) || model.files.length !== 4) return ['INVALID_PUBLICATION_MODEL'];
  if (model.files.some((file) => !nonEmpty(file.path) || file.path.includes('..') || file.path.includes('\\'))) return ['INVALID_PUBLICATION_PATH'];
  if (new Set(model.files.map((file) => file.path)).size !== model.files.length) return ['DUPLICATE_PUBLICATION_PATH'];
  return [];
}

async function exactPublication(remote, model) {
  const found = await remote.getPublication(model.publicationId);
  if (!found) return false;
  return model.files.slice(0, 3).every((file) => found.files?.[file.path]?.sha256 === sha256(file.content));
}

export async function publishTerminal(remote, model) {
  const defects = validateModel(model);
  if (defects.length) return fail(defects);
  if (await exactPublication(remote, model)) return { classification: TRANSPORT_CLASSIFICATIONS.ALREADY_PUBLISHED, publicationId: model.publicationId, requiresArchitectDecision: true };
  const expectedParent = await remote.getBranchHead();
  const commit = await remote.createCommit({ parent: expectedParent, files: model.files, publicationId: model.publicationId });
  const currentBeforePush = await remote.getBranchHead();
  if (currentBeforePush !== expectedParent) return { classification: TRANSPORT_CLASSIFICATIONS.EVIDENCE_REMOTE_PARENT_CHANGED, publicationId: model.publicationId, expectedParent, observedParent: currentBeforePush, requiresArchitectDecision: true };
  try {
    await remote.pushOnce({ expectedParent, commit, publicationId: model.publicationId });
  } catch (error) {
    const reconciled = await exactPublication(remote, model);
    if (reconciled) return { classification: TRANSPORT_CLASSIFICATIONS.RECONCILED_PUBLISHED, publicationId: model.publicationId, commit, requiresArchitectDecision: true };
    const head = await remote.getBranchHead();
    if (head === expectedParent) return { classification: TRANSPORT_CLASSIFICATIONS.DEFINITE_PUSH_FAILED, publicationId: model.publicationId, expectedParent, requiresArchitectDecision: true, error: error.message };
    return { classification: TRANSPORT_CLASSIFICATIONS.RECONCILIATION_REQUIRED, publicationId: model.publicationId, expectedParent, observedParent: head, requiresArchitectDecision: true };
  }
  const readback = await remote.getPublication(model.publicationId);
  if (!readback || !(await exactPublication(remote, model))) return { classification: TRANSPORT_CLASSIFICATIONS.RECONCILIATION_REQUIRED, publicationId: model.publicationId, commit, requiresArchitectDecision: true };
  return { classification: TRANSPORT_CLASSIFICATIONS.PUBLISHED, publicationId: model.publicationId, commit, expectedParent, requiresArchitectDecision: true };
}

export async function acceptTerminalPublication(remote, { publicationId, role, acceptedBy, decision, milestone }) {
  if (!/^GH-PUB-[0-9a-f]{32}$/.test(publicationId) || !TERMINAL_ROLES.includes(role) || acceptedBy !== 'Architect' || decision !== 'ACCEPT' || !nonEmpty(milestone)) return fail(['INVALID_ACCEPTANCE']);
  const publication = await remote.getPublication(publicationId);
  if (!publication || publication.role !== role || publication.milestone !== milestone) return fail(['PUBLICATION_NOT_FOUND_OR_MISMATCH']);
  const pointer = { schemaVersion: '1.0', publicationId, role, milestone, acceptedBy, decision, accepted: true };
  const parent = await remote.getBranchHead();
  const commit = await remote.createCommit({ parent, files: [{ path: acceptedPointerPath(role), content: JSON.stringify(pointer) }], publicationId });
  await remote.pushOnce({ expectedParent: parent, commit, publicationId });
  return { classification: TRANSPORT_CLASSIFICATIONS.PUBLISHED, publicationId, acceptedPointerPath: acceptedPointerPath(role), commit };
}

export async function captureLocalTerminal({ spoolRoot, model }) {
  if (!nonEmpty(spoolRoot) || !model?.publicationId) return fail(['INVALID_SPOOL_INPUT']);
  const dir = path.join(spoolRoot, model.publicationId);
  await fs.mkdir(dir, { recursive: false });
  for (const file of model.files.slice(0, 3)) await fs.writeFile(path.join(dir, path.basename(file.path)), file.content, { flag: 'wx' });
  return { classification: 'LOCAL_TERMINAL_CAPTURED', publicationId: model.publicationId, spoolPath: dir };
}
