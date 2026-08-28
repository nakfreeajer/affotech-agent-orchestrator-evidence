Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000176 and canonical ORCH-000177
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
- ORCH-000170 — preparation requires exact disposable worker-delivery ID.
- ORCH-000173 — expired ORCH-000169 lease closed.
- ORCH-000175 — acquisition ambiguity left no orphan candidate/index mutation; `ERROR_PROPAGATION_ONLY_GAP`.

## ORCH-000176 — BLOCKED

Decision:

`GH-DEC-176-WORKER-DELIVERY-INSTRUMENTED-ACQUISITION-TRACE-PERSISTENCE-BLOCKED`

Reviewed publication:

`GH-PUB-176-WORKER-DELIVERY-INSTRUMENTED-LEASE-ACQUISITION-PREFLIGHT-BLOCKED-000001`

Architect verified:

- one fresh acquisition call only;
- accepted result `AMBIGUOUS`;
- no candidate revision/readback;
- no index CAS;
- index unchanged at revision `370`, next epoch `186`, active leases `0`;
- no preparation or delivery `000014` mutation;
- no browser/host/trigger/source side effect;
- wrapper collected safe diagnostics in memory;
- launcher exited before flushing the trace or reconciliation descriptor.

Decision rationale:

`ACQUISITION_REMAINED_AMBIGUOUS_WITH_ZERO_DURABLE_SIDE_EFFECTS_BUT_THE_DISPOSABLE_LAUNCHER_EXITED_BEFORE_FLUSHING_ITS_IN_MEMORY_DIAGNOSTIC_TRACE`.

Architect decision: do not perform another acquisition until the disposable trace sink itself is qualified on a harmless read-only request and the wrapper guarantees synchronous durable flush before result interpretation/throw.

## Current next authority — ORCH-000177

ORCH-000177 must first prove durable diagnostic trace flush without mutation. Only then may one fresh acquisition occur.

If acquisition succeeds durably, the milestone may continue to explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, PREPARED intent, zero-browser PROVEN_NOT_SENT result, and normal lease release.

Any ambiguity stops without retry and must preserve already-flushed diagnostics and a safe reconciliation descriptor.
