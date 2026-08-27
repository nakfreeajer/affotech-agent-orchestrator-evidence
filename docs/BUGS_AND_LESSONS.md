Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000166
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

`durable intent/readback → pre-send observation → one send attempt → durable result → duplicate suppression/reconciliation`.

`PROVEN_NOT_SENT` is a first-class recovery state and never means `SENT`.

## Launch/composition lessons

Operational launch glue is production behavior. Prior failures came from missing `input.nowMs`, qualified `gh` resolution, `--input -`, invalid profiles, no-op persistence adapters, and malformed browser argv. Do not loosen source contracts to accommodate bad composition.

## Browser/target lessons

A visible browser is not proof of a governed relay. Separately prove process/listener ownership, CDP health, exact registered target, composer readiness, durable intent, and one-attempt send semantics.

Repeated `verify & next` text is not unique correlation; durable trigger identity plus USER-message boundary evidence is required.

## ORCH-000153 and ORCH-000163

Forward delivery and Architect wake are independently proven exactly once. Durable intent/result plus duplicate suppression—not visible UI alone—is the proof standard.

## ORCH-000164/165 — reader/writer compatibility

A stricter reader rejected historical delivery `000013` because its old result lacked explicit message/dispatch lineage despite exact immutable intent binding.

Accepted repair:

- legacy missing lineage resolves only through the exact immutable intent;
- exact `intentSha256`, delivery ID and worker role must match;
- explicit lineage mismatch remains a hard conflict;
- future results persist explicit `messageId` and `dispatchId`;
- historical records remain untouched.

Lesson: compatibility belongs in a narrow fail-closed reader/writer contract, not historical evidence mutation.

## ORCH-000166 — bootstrap proof must include idle repetition

ORCH-000166 accepted host `000026` only after:

- the repaired current snapshot hydrated successfully;
- exactly one OS process was created;
- the bootstrap watermark was read back before transport eligibility;
- three valid idle polls completed (more than the required two);
- `DISPATCH-000166` was suppressed on all three;
- browser/delivery/trigger/lease side effects stayed zero;
- PID `16880` was alive at terminal publication and intentionally left running.

Lesson: a persistent host is not armed because a process merely exists. It must repeatedly observe the durable state without self-echo or unauthorized side effects and remain alive across the terminal boundary.

## First automatic dispatch after bootstrap

Once a host is accepted as armed, do not manually forward the next dispatch as a convenience. That would invalidate the very property being tested.

The first post-bootstrap probe must distinguish:

1. Architect publishing a new durable dispatch (authorized control-plane mutation);
2. running host discovering it without human relay;
3. durable worker-delivery intent before Executor browser contact;
4. exactly one Executor send and durable result;
5. corresponding Executor terminal publication;
6. running host detecting that terminal;
7. durable fresh Architect-trigger intent before port-9333 contact;
8. exactly one Architect wake and durable result;
9. zero second sends on both legs.

If either transport leg becomes ambiguous, the host must stop that leg without retry and require read-only reconciliation.

## Current success criterion

ORCH-000167 should prove the first complete unattended transport cycle:

`Architect dispatch → persistent Orchestrator → Executor exactly once → durable terminal → persistent Orchestrator → Architect wake exactly once`.

No source, AFFOTECH, Drive, deployment, tenant, or business/private-data mutation is required to prove that loop.
