Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000165 and canonical ORCH-000166
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: immutable Architect decisions under `evidence/decisions/architect/`

# Architect Decisions

Architect classifications are exactly `ACCEPTED`, `BLOCKED`, `INCONCLUSIVE`, `NO NEW REPORT`. Executor PASS/COMPLETED is evidence only.

## Permanent decisions

- Rony is final human authority.
- Architect governs, verifies, decides, and directly maintains relevant documentation.
- Executor performs bounded implementation/runtime/validation work.
- Orchestrator is deterministic/non-AI transport only.
- GitHub durable evidence is machine authority.
- No blind retry after ambiguous external mutation.
- Historical evidence is immutable in meaning.
- Local git commit/push is not runtime persistence.
- AFFOTECH and its protected resources remain separate.
- Documentation policy is `ARCHITECT_DIRECT`; Curator is not an active required role.

## Prior accepted transport foundations

### ORCH-000153 — ACCEPTED forward delivery

Decision: `GH-DEC-153-FRESH-EXECUTOR-FORWARD-DELIVERY-000013-ACCEPTED`.

Proved `WORKER-DELIVERY-EXECUTOR-000013 / SENT` exactly once with duplicate additional send `0`.

### ORCH-000162 — ACCEPTED reconciliation

Decision: `GH-DEC-162-ARCHITECT-TRIGGER-000004-PROVEN-NOT-SENT-RECONCILIATION-ACCEPTED`.

Proved historical trigger `000004` not sent; old trigger was not retried.

### ORCH-000163 — ACCEPTED automatic Architect wake

Decision: `GH-DEC-163-AUTOMATIC-ARCHITECT-DOORBELL-TRIGGER-000005-ACCEPTED`.

Proved trigger `000005 / SENT`, USER boundary `2→3`, attempted/confirmed `1/1`, second send `0`, duplicate additional send `0`, no assistant-response scraping.

## ORCH-000164 — BLOCKED unattended-host bootstrap

Decision:

`GH-DEC-164-UNATTENDED-HOST-BOOTSTRAP-LINEAGE-CONFLICT-BLOCKED`

The explicit bootstrap boundary for `DISPATCH-000164` succeeded, but current-delivery hydration failed with `WORKER_DELIVERY_LINEAGE_CONFLICT` before any browser contact/send.

Accepted root cause:

- delivery `000013` intent contains `ORCH-000153 / DISPATCH-000153`;
- its result binds to the exact intent SHA, delivery ID and worker role;
- that historical result omits explicit message/dispatch lineage;
- the then-accepted reader incorrectly required those fields on every result.

Repair policy: do not rewrite historical evidence; add an exact fail-closed legacy hydration rule and make future results explicit.

## ORCH-000165 — ACCEPTED source repair

Decision:

`GH-DEC-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-ACCEPTED`

Accepted source:

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Why accepted:

- only four authorized source/test paths changed;
- legacy lineage hydrates only through exact immutable intent binding;
- mismatched exact bindings fail closed;
- explicit lineage conflicts fail closed;
- future results persist explicit `messageId`/`dispatchId`;
- historical delivery `000013` was not modified;
- live read-only compatibility resolved `000013` as `SENT / ORCH-000153 / DISPATCH-000153` with zero writes;
- focused suite `65/65`;
- GitHub runtime ports `43/43`;
- BrowserRelay transport ports `22/22`;
- full deterministic suite `817/817`;
- candidate source preserved as 101-file immutable snapshot.

Accepted hashes:

- manifest `3a5f046056cf1b94b6ec1685d3c18b754625727eb296f3a07df298f9732abf28`;
- archive `e07ef7e0775de6e500568d3e813800a2750c5b4e0e56befb676ce3d259cd80ba`.

ORCH-000165 supersedes ORCH-000130 as the current accepted source.

## Current next authority — ORCH-000166

`DISPATCH-000166` retries persistent-host bootstrap using fresh host `000026` and the accepted ORCH-000165 source.

It must perform the repaired hydration probe before launch, gets exactly one OS process-creation attempt, must suppress its own bootstrap dispatch, complete at least two valid idle polls with zero browser traffic, remain running, and prove its accepted composition can support both future forward delivery and terminal-to-Architect wake observation.

If accepted, the next Architect dispatch must be handled automatically by the running host rather than manually relayed.
