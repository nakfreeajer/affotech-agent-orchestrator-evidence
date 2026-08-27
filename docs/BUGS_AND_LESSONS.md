Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000165 and canonical ORCH-000166
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Bugs and Lessons

## Permanent governance lessons

- Executor PASS is evidence, never acceptance.
- Never blind-retry an ambiguous external mutation; reconcile read-only first.
- Historical evidence remains immutable in meaning.
- Architect owns relevant documentation directly under `ARCHITECT_DIRECT`.
- Orchestrator is deterministic transport only; it never reads assistant decisions for authority.
- Local git commit/push is not runtime state transport.

## Durable delivery ordering

Required worker-send order:

`durable intent/readback → pre-send observation → one send attempt → durable result → duplicate suppression/reconciliation`

`PROVEN_NOT_SENT` is a first-class recovery state and never means `SENT`.

## Launch/composition lessons

Operational launch glue is production behavior. Prior failures came from missing `input.nowMs`, missing qualified `gh` resolution, missing `--input -`, invalid temporary profiles, no-op persistence adapters, and malformed browser argv. Do not loosen source contracts to accommodate bad composition.

## Browser/target lessons

A visible browser is not proof of a governed relay. Separately prove process/listener ownership, CDP health, exact registered target, composer readiness, durable intent, and one-attempt send semantics.

Repeated text such as `verify & next` is not unique correlation; durable trigger identity plus USER-message boundary evidence is required.

## ORCH-000153 — forward delivery proof

Accepted pattern: fresh delivery identity, intent before browser contact, exactly one send, durable `SENT`, duplicate additional send `0`, retry false.

## ORCH-000163 — Architect doorbell proof

Accepted pattern: fresh trigger identity, exact USER-boundary delta, attempted/confirmed `1/1`, second send `0`, duplicate additional send `0`, no assistant-response scraping.

## ORCH-000164 — bootstrap watermark is necessary but not sufficient

The first persistent-host bootstrap correctly established `DISPATCH-000164` as already handled, yet readiness still failed because the complete durable snapshot could not hydrate.

Lesson: an unattended host is not armed until the entire polling snapshot hydrates and multiple valid idle iterations complete with zero unauthorized side effects.

## ORCH-000164/165 — reader/writer schema compatibility

The historical accepted result for worker delivery `000013` contains exact `intentSha256`, delivery ID and worker role but predates explicit result `messageId`/`dispatchId` fields. A stricter newer reader rejected it with `WORKER_DELIVERY_LINEAGE_CONFLICT`.

Wrong repair: rewrite the old result or infer lineage from timestamps/current pointers/payload text.

Accepted repair in ORCH-000165:

- legacy missing lineage may resolve only through the exact immutable intent;
- exact `intentSha256`, delivery ID and worker role must match;
- the immutable intent itself must contain valid message/dispatch lineage;
- any explicit result-lineage mismatch remains a hard conflict;
- future results persist explicit `messageId` and `dispatchId`;
- historical result `000013` remains unchanged.

Validation: focused `65/65`, GitHub runtime ports `43/43`, BrowserRelay transport ports `22/22`, full deterministic `817/817`, and read-only real-000013 hydration with zero writes.

Lesson: compatibility belongs in a narrowly bounded fail-closed reader/writer contract, not in historical evidence mutation.

## ORCH-000166 — stricter persistent-host retry

The new bootstrap requires:

- a read-only real-000013 hydration probe before any process launch;
- exactly one OS process-creation attempt, with no relaunch loop;
- self-echo boundary `DISPATCH-000166` established before polling;
- at least two valid idle polls;
- zero browser contacts/sends and zero delivery/trigger/lease mutation during bootstrap;
- host alive and intentionally left running;
- no readiness claim unless the running accepted composition supports both automatic newer-dispatch forwarding and durable-terminal-to-Architect wake observation.

If ORCH-000166 is accepted, the next dispatch must be picked up automatically rather than manually forwarded.

## Current success criterion

Combine the already-proven forward and return legs into:

`Architect dispatch → persistent Orchestrator → Executor exactly once → durable terminal → Architect wake exactly once → Architect decision → repeat`

while preserving durable authority, exact IDs/hashes, duplicate suppression, fail-closed ambiguity, protected project boundaries, zero response scraping, and Architect-direct documentation closure.
