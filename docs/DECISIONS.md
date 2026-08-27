Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000171 and canonical ORCH-000172
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
- ORCH-000170 — accepted dual diagnostic: preparation `COMPOSITION_ADAPTER_DEFECT`; lease `RECONCILIATION_RECORD_CREATION_AMBIGUOUS`.

## ORCH-000171 — INCONCLUSIVE

Decision:

`GH-DEC-171-EXPIRED-WORKER-DELIVERY-LEASE-RECONCILIATION-INCONCLUSIVE`

The exact accepted expiry-reconciliation call was authorized once and executed once after unchanged-index and absent-revision-000002 checks.

Outcome:

`AMBIGUOUS / EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`.

Post-readback proves revision `000002` is still absent and the lease index remains revision `369` with the same expired revision-1 lease active. No durable lease-state advancement occurred. No blind retry was performed.

Decision rationale:

`ONE_EXACT_CORRECTLY_BOUND_RECONCILIATION_CALL_REPEATED_THE_REVISION_000002_CREATE_READBACK_AMBIGUITY_WITH_NO_DURABLE_SIDE_EFFECT`.

Architect decision: a second reconciliation call is not authorized until the concrete create/readback failure seam is diagnosed.

## Current next authority — ORCH-000172

ORCH-000172 is zero-mutation diagnostic work focused on the revision-`000002` GitHub create/readback seam. It must identify the concrete client/adapter used by ORCH-000171, exact API/CLI invocation and lower-level failure, compare it with known-good durable creates, classify root cause, and state the smallest repair boundary.

It may not call reconciliation, mutate lease/index/revision state, acquire a new lease, retry preparation, launch a host, contact a browser, mutate delivery/trigger state, patch source, or touch AFFOTECH/Drive/deployment/private boundaries.
