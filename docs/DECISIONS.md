Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000166
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

## Accepted transport foundations

### ORCH-000153 — ACCEPTED forward delivery

Decision: `GH-DEC-153-FRESH-EXECUTOR-FORWARD-DELIVERY-000013-ACCEPTED`.

Proved `WORKER-DELIVERY-EXECUTOR-000013 / SENT` exactly once with duplicate additional send `0`.

### ORCH-000163 — ACCEPTED automatic Architect wake

Decision: `GH-DEC-163-AUTOMATIC-ARCHITECT-DOORBELL-TRIGGER-000005-ACCEPTED`.

Proved trigger `000005 / SENT`, USER boundary `2→3`, attempted/confirmed `1/1`, second send `0`, duplicate additional send `0`, no assistant-response scraping.

## ORCH-000164 — BLOCKED first unattended-host bootstrap

Decision: `GH-DEC-164-UNATTENDED-HOST-BOOTSTRAP-LINEAGE-CONFLICT-BLOCKED`.

The bootstrap watermark worked, but durable snapshot hydration failed with `WORKER_DELIVERY_LINEAGE_CONFLICT` before any browser contact/send. Historical delivery `000013` was not rewritten.

## ORCH-000165 — ACCEPTED source compatibility repair

Decision: `GH-DEC-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-ACCEPTED`.

Accepted source: `GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`.

Why accepted: exact legacy intent binding only, explicit conflicts fail closed, future results persist explicit lineage, historical delivery unchanged, live compatibility writes `0`, and full deterministic suite `817/817`.

## ORCH-000166 — ACCEPTED persistent automatic host bootstrap

Decision:

`GH-DEC-166-UNATTENDED-AUTOMATIC-HOST-000026-ARMED-ACCEPTED`

Reviewed publication:

`GH-PUB-166-AUTOMATIC-HOST-000026-ARMED-000001`

Verified facts:

- host `HOST-INSTANCE-SANDBOX-000026 / HOST-GEN-SANDBOX-000026`;
- exactly one process-creation attempt;
- PID `16880` alive at terminal publication;
- `leaveRunning=true`;
- explicit bootstrap boundary `DISPATCH-000166` read back;
- three valid idle polls;
- bootstrap dispatch suppressed three times;
- browser contact/send `0/0`;
- worker-delivery and Architect-trigger mutations `0/0`;
- lease acquisition `0`;
- accepted source unchanged;
- protected boundaries clean.

Reason code:

`HOST_000026_STARTED_ONCE_ARMED_AT_DISPATCH_000166_COMPLETED_THREE_VALID_IDLE_POLLS_AND_REMAINED_RUNNING_WITH_ZERO_TRANSPORT_SIDE_EFFECTS`.

This accepts the persistent host as armed for a strictly newer dispatch. It does **not yet** accept a full unattended cycle.

## Current next authority — ORCH-000167

Architect will publish the first full unattended-cycle probe directly to GitHub. Manual forwarding is not authorized as the normal path.

Success requires the running host to automatically perform exactly one fresh Executor delivery, observe the matching no-op Executor terminal, and automatically perform exactly one fresh Architect wake, with durable intent/result evidence and no second sends.
