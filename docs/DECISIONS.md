Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000178 and canonical ORCH-000179
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

## Accepted foundations

- ORCH-000153 — exactly-once Executor forward delivery.
- ORCH-000163 — exactly-once Architect wake.
- ORCH-000165 — accepted lineage-compatibility source repair, `817/817`.
- ORCH-000166 — persistent host `000026` safely armed/idle.
- ORCH-000170 — explicit worker-delivery ID requirement diagnosed.
- ORCH-000173 — expired ORCH-000169 lease closed.

## ORCH-000177 — BLOCKED, adapter cause identified

`GH-DEC-177-WORKER-DELIVERY-ACQUISITION-HTTP-STATUS-ADAPTER-BLOCKED`

The disposable adapter overwrote actual HTTP `404` with `ghExitCode=1`; no mutation occurred.

## ORCH-000178 — BLOCKED only at continuation

Decision:

`GH-DEC-178-WORKER-DELIVERY-LEASE-ACQUISITION-ACCEPTED-CONTINUATION-BLOCKED`

Reviewed publication:

`GH-PUB-178-WORKER-DELIVERY-HTTP-STATUS-PRESERVING-PREFLIGHT-INCOMPLETE-000001`

Architect independently verified:

- corrected disposable adapter preserves HTTP `404` independently from `ghExitCode=1`;
- one accepted worker-delivery lease acquisition succeeded;
- immutable revision `000001` is ACTIVE at epoch `186` with exact ORCH-000178 lineage/envelope;
- temporary launcher terminated before preparation, so preparation count remained `0` and delivery `000014` is absent;
- one accepted normal release succeeded;
- immutable revision `000002` is RELEASED with exact previous-record binding;
- final index revision `372`, next epoch `187`, active leases `0`;
- latest delivery remains `000013/SENT`;
- browser/host/trigger/source side effects zero.

Decision rationale:

`HTTP_STATUS_PRESERVING_ADAPTER_AND_ACCEPTED_LEASE_ACQUIRE_RELEASE_PATHS_ARE_PROVEN_BUT_TEMPORARY_LAUNCHER_TERMINATED_AFTER_ACQUISITION_BEFORE_PREPARE_WORKER_DELIVERY_INTENT`.

Architect decision: do not reopen HTTP-status/acquisition diagnostics. The next proof must keep successful acquisition and preparation in the same disposable process/control flow.

## Current next authority — ORCH-000179

ORCH-000179 requires exactly one successful-path sequence:

`ACQUIRE → PREPARE → PROVEN_NOT_SENT → RELEASE`.

A successful acquisition must not trigger process exit or early cleanup. The same process must retain the returned lease binding and immediately call preparation with `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`.

No browser, host, Architect-trigger, tracked-source, or protected-resource mutation is authorized.
