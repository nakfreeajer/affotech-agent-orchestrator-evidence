Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000175 and canonical ORCH-000176
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

One worker-delivery lease acquisition returned `AMBIGUOUS` before preparation. Delivery `000014` remained absent and index revision `370` remained clean with zero active leases.

## ORCH-000175 — ACCEPTED diagnostic

Decision:

`GH-DEC-175-WORKER-DELIVERY-LEASE-ACQUISITION-ERROR-PROPAGATION-DIAGNOSTIC-ACCEPTED`

Reviewed publication:

`GH-PUB-175-WORKER-DELIVERY-LEASE-ACQUISITION-AMBIGUITY-DIAGNOSTIC-000001`

Architect accepts:

- acquisition failure classification `ERROR_PROPAGATION_ONLY_GAP`;
- no durable candidate lease revision exists for ORCH-000174;
- candidate readback did not succeed;
- no index CAS occurred;
- no orphan immutable lease record exists;
- index remains revision `370`, next epoch `186`, active lease count `0`;
- accepted source is not proven defective;
- ORCH-000174's disposable launcher lost the accepted reconciliation descriptor and concrete lower request outcome.

Decision: do not manually edit the index or patch source. A later acquisition may be authorized only with semantically inert bounded diagnostics at a freshly verified clean boundary.

## Current next authority — ORCH-000176

ORCH-000176 authorizes one instrumented fresh worker-delivery lease acquisition.

If and only if acquisition is durably proven ACTIVE/indexed, it may proceed to exact preparation option `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, prove durable PREPARED, reconcile as PROVEN_NOT_SENT without browser contact, and normally release the lease.

Any ambiguous external mutation stops the milestone without retry.

No host, browser, Architect-trigger, tracked-source, AFFOTECH, Drive, deployment, tenant, or private-data mutation is authorized beyond the exact lease/delivery preflight envelope.
