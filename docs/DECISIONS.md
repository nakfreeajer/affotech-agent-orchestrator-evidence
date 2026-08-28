Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000174 and canonical ORCH-000175
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
- ORCH-000170 — preparation `COMPOSITION_ADAPTER_DEFECT`; explicit worker-delivery ID needed in disposable composition.
- ORCH-000173 — expired ORCH-000169 lease closed; index `369→370`; zero active leases.

## ORCH-000174 — BLOCKED before preparation

Decision:

`GH-DEC-174-WORKER-DELIVERY-PREFLIGHT-LEASE-ACQUISITION-BLOCKED`

Reviewed publication:

`GH-PUB-174-WORKER-DELIVERY-PREFLIGHT-BLOCKED-000001`

Architect verified:

- ORCH-000174 clean pre-state passed;
- one worker-delivery lease acquisition call was made;
- acquisition returned `AMBIGUOUS`;
- `prepareWorkerDeliveryIntent` was never called;
- delivery `000014` intent/result do not exist;
- index remains revision `370` with `activeLeases=[]`;
- latest delivery remains `000013/SENT`;
- browser, host, trigger, source and protected-resource side effects are zero.

Decision rationale:

`SINGLE_WORKER_DELIVERY_LEASE_ACQUISITION_BECAME_AMBIGUOUS_BEFORE_EXPLICIT_ID_PREPARATION_WITH_NO_ACTIVE_LEASE_OR_DELIVERY_SIDE_EFFECT`.

Architect decision: do not retry acquisition or claim the explicit-ID preparation fix is proven until read-only diagnosis establishes the exact acquisition failure and checks for any orphan immutable lease revision outside the index.

## Current next authority — ORCH-000175

ORCH-000175 is zero-mutation diagnostic work. It must identify the proposed lease identity/binding, exact acquisition stage/status/error, orphan-record state, and smallest safe repair/recovery boundary.

It may not acquire/reconcile/release a lease, call preparation, create delivery `000014`, start a host, contact a browser, mutate trigger/source/docs, or touch AFFOTECH/Drive/deployment/private boundaries.
