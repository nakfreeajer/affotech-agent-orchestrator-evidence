export const TRANSPORT_REPO = 'nakfreeajer/affotech-agent-orchestrator-evidence';
export const TRANSPORT_BRANCH = 'transport-foundation-1a';
export const TERMINAL_ROLES = Object.freeze(['executor', 'curator', 'orchestrator']);
export const TERMINAL_OUTCOMES = Object.freeze(['PASS', 'BLOCKED', 'FAILED', 'INCONCLUSIVE', 'PARTIAL', 'CIRCUIT_OPEN']);
export const TERMINAL_LIFECYCLES = Object.freeze(['COMPLETED', 'INTERRUPTED']);
export const TRANSPORT_CLASSIFICATIONS = Object.freeze({
  PUBLISHED: 'PUBLISHED',
  ALREADY_PUBLISHED: 'ALREADY_PUBLISHED',
  RECONCILED_PUBLISHED: 'RECONCILED_PUBLISHED',
  EVIDENCE_REMOTE_PARENT_CHANGED: 'EVIDENCE_REMOTE_PARENT_CHANGED',
  RECONCILIATION_REQUIRED: 'RECONCILIATION_REQUIRED',
  DEFINITE_PUSH_FAILED: 'DEFINITE_PUSH_FAILED',
  FAIL_CLOSED: 'FAIL_CLOSED',
  WORKER_EXITED_WITHOUT_TERMINAL_PUBLICATION: 'WORKER_EXITED_WITHOUT_TERMINAL_PUBLICATION'
});
export const terminalPointerPath = (role) => `evidence/current/LATEST_${role.toUpperCase()}_TERMINAL.json`;
export const acceptedPointerPath = (role) => `evidence/current/LATEST_${role.toUpperCase()}_ACCEPTED.json`;
