Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000181 and canonical ORCH-000182
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
- ORCH-000179 — preparation requires transient `actionKind=WORKER_DELIVERY` binding.

## ORCH-000181 — BLOCKED

Decision:

`GH-DEC-181-WORKER-DELIVERY-IN-PROCESS-PREFLIGHT-EXPIRED-LEASE-BLOCKED`

Reviewed publication:

`GH-PUB-181-WORKER-DELIVERY-IN-PROCESS-PREFLIGHT-BLOCKED-000001`

Architect verified:

- one epoch-189 lease was acquired and indexed;
- transient `actionKind=WORKER_DELIVERY` was constructed;
- process terminated before preparation, so preparation call count stayed `0`;
- delivery `000014` intent/result absent;
- browser contact/send `0/0`;
- lease expired before recovery readback;
- normal release was not attempted after expiry;
- index remains revision `377`, next epoch `190`, with exactly one active indexed lease;
- target immutable revision `000002` is absent;
- latest delivery and Architect trigger remain `000013/SENT` and `000005/SENT`;
- source unchanged.

Decision rationale:

`IN_PROCESS_ATTEMPT_ACQUIRED_AND_INDEXED_EPOCH_189_AND_CONSTRUCTED_ACTION_KIND_WORKER_DELIVERY_BUT_TERMINATED_BEFORE_PREPARATION_AND_LEFT_THE_EXPIRED_LEASE_ACTIVE_IN_INDEX_REVISION_377`.

Architect decision: no new lease or preparation retry while the expired epoch-189 lease remains indexed. Recover it exactly once first.

## Current next authority — ORCH-000182

ORCH-000182 authorizes one exact `reconcileExpiredMutationLease` call against the immutable ORCH-000181 lease binding.

Success requires revision `000002=EXPIRED`, index `377→378`, next epoch unchanged at `190`, and `activeLeases=[]`.

No new lease, preparation, delivery, browser, host, Architect-trigger, tracked-source, or protected-resource mutation is authorized.
