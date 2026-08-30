Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000180 and canonical ORCH-000181
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
- AFFOTECH and protected resources remain separate.
- Documentation policy is `ARCHITECT_DIRECT`.

## Proven foundations relevant to current seam

- ORCH-000165 — accepted source, `817/817`.
- ORCH-000173 — prior expired lease closed.
- ORCH-000177/178 — corrected HTTP semantic status mapping and accepted lease acquire/release proven.
- ORCH-000179 — preparation reached and proved transient transport authorization requires `actionKind=WORKER_DELIVERY`.

## ORCH-000180 — BLOCKED

Decision:

`GH-DEC-180-WORKER-DELIVERY-ACTION-KIND-PREFLIGHT-OPERATIONAL-TIMEOUT-BLOCKED`

Reviewed publication:

`GH-PUB-180-WORKER-DELIVERY-ACTION-KIND-ENRICHED-PREFLIGHT-BLOCKED-000001`

Architect verified:

- one epoch-188 lease acquisition succeeded and ACTIVE readback passed;
- bounded disposable process stopped before preparation;
- preparation call count remained `0`;
- action-kind-enriched preparation was not actually tested;
- no delivery `000014` intent/result exists;
- browser contact/send remained `0/0`;
- exact lease was normally released once;
- final index revision `376`, next epoch `189`, active leases `0`;
- latest delivery remains `000013/SENT`;
- no source/host/trigger/protected-resource mutation occurred.

Decision rationale:

`ACTION_KIND_ENRICHED_PREFLIGHT_ACQUIRED_AND_RELEASED_CLEANLY_BUT_BOUNDED_DISPOSABLE_PROCESS_STOPPED_BEFORE_ANY_PREPARATION_REQUEST_SO_ACTION_KIND_FIX_REMAINS_UNTESTED`.

Architect decision: do not reinterpret ORCH-000180 as an action-kind or source failure. Remove only the external process boundary and run acquisition plus immediate preparation in one process.

## Current next authority — ORCH-000181

ORCH-000181 requires exactly one in-process successful-path sequence:

`ACQUIRE → transient actionKind=WORKER_DELIVERY → PREPARE → PROVEN_NOT_SENT → RELEASE`.

No child process, shell timeout, or polling wrapper may intervene between ACTIVE readback and preparation. Preparation uses explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`.

No browser, host, Architect-trigger, tracked-source, or protected-resource mutation is authorized.
