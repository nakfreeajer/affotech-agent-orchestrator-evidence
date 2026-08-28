Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000173 and canonical ORCH-000174
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
- ORCH-000170 — preparation `COMPOSITION_ADAPTER_DEFECT`; no tracked source repair required for the missing worker-delivery ID seam.

## ORCH-000171 — INCONCLUSIVE

One exact correctly bound accepted reconciliation call repeated `AMBIGUOUS / EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS` with revision `000002` absent and no durable side effect.

Architect decision:

`GH-DEC-171-EXPIRED-WORKER-DELIVERY-LEASE-RECONCILIATION-INCONCLUSIVE`.

## ORCH-000172 — ACCEPTED diagnostic

Architect accepted `ERROR_PROPAGATION_ONLY_GAP`: accepted create/path/schema semantics were not proven defective, but disposable/runtime error propagation hid the concrete GitHub transport outcome.

Decision:

`GH-DEC-172-EXPIRED-LEASE-CREATE-READBACK-ERROR-PROPAGATION-DIAGNOSTIC-ACCEPTED`.

## ORCH-000173 — ACCEPTED lease reconciliation

Decision:

`GH-DEC-173-EXPIRED-WORKER-DELIVERY-LEASE-INSTRUMENTED-RECONCILIATION-ACCEPTED`

Reviewed publication:

`GH-PUB-173-EXPIRED-LEASE-INSTRUMENTED-RECONCILED-000001`

Architect independently verified:

- one accepted reconciliation call only;
- revision `000002` created/read back as exact `EXPIRED` projection;
- index revision `369 → 370` by one CAS;
- only the target lease removed;
- `activeLeases=[]`;
- browser/host/delivery/trigger/source side effects zero.

The expired lease is closed. No further recovery work on that lease is authorized absent regression evidence.

## Current next authority — ORCH-000174

Preparation recovery is now separated from host arming.

ORCH-000174 authorizes one zero-browser preflight using exact disposable composition option:

`workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`

It may acquire one worker-delivery lease, call accepted preparation once, require durable `PREPARED`, reconcile delivery `000014` as proven-not-sent without any browser contact, and release the lease normally.

Success requires `LATEST_DELIVERY` remain `000013/SENT`, final active leases zero, and no host/source/trigger activity.

A fresh persistent host may be authorized only after this preflight is accepted.
