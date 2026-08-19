import { TRANSPORT_CLASSIFICATIONS } from './constants.js';

export function terminalFallback({ workerLifecycle = 'INTERRUPTED', workerExited = true, terminalPublished = false } = {}) {
  if (!workerExited || terminalPublished) return { classification: 'NO_FALLBACK_REQUIRED' };
  return { classification: TRANSPORT_CLASSIFICATIONS.WORKER_EXITED_WITHOUT_TERMINAL_PUBLICATION, workerLifecycle, workerOutcome: 'INCONCLUSIVE', requiresArchitectDecision: true, terminalPublished: false };
}
