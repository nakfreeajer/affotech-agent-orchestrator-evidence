Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000170 and canonical ORCH-000171
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
- ORCH-000168 — accepted composition diagnostic.

## ORCH-000169 — BLOCKED

Decision:

`GH-DEC-169-PREPARATION-PREFLIGHT-AND-LEASE-AMBIGUITY-BLOCKED`

Composition preflight still failed before durable delivery intent creation; host `000027` did not arm; an expired worker-delivery lease remained indexed ACTIVE after ambiguous expiry reconciliation.

## ORCH-000170 — ACCEPTED diagnostic

Decision:

`GH-DEC-170-PREPARATION-AND-EXPIRED-LEASE-DIAGNOSTIC-ACCEPTED`

Reviewed publication:

`GH-PUB-170-PREPARATION-AND-EXPIRED-LEASE-AMBIGUITY-DIAGNOSTIC-000001`

Architect accepts two independent classifications.

### Preparation — `COMPOSITION_ADAPTER_DEFECT`

Accepted transport resolves the worker delivery ID from `request.snapshot?.pointers?.dispatch?.expectedFreshWorkerDeliveryId` or factory option `workerDeliveryId`.

Host `000027` supplied neither. The dispatch exposed `expectedDeliveryId`, so accepted `workerId()` returned no ID and preparation failed with `WORKER_DELIVERY_ID_REQUIRED` before persistence/browser contact.

Decision: no tracked source repair is proven necessary. The later preparation repair belongs first to disposable launcher composition: inject `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` and preserve stable reason logging.

### Lease — `RECONCILIATION_RECORD_CREATION_AMBIGUOUS`

ORCH-000169 supplied the correct immutable expiry-reconciliation binding. Accepted recovery attempted to create revision `000002`, but durable creation/readback was not proven. No valid revision `000002` exists and the index correctly remains fail-closed on revision `000001`.

Decision: do not acquire a new lease or mix preparation recovery with lease recovery. The single safe next mutation is one exact accepted `reconcileExpiredMutationLease` call after unchanged-index and absent-revision-000002 checks.

## Current next authority — ORCH-000171

ORCH-000171 is lease-recovery only.

It authorizes exactly one reconciliation call for `MUTATION-LEASE-HOST-97e204bd87c1b341df79b1d787987f98`. Success requires durable revision `000002` plus one exact index CAS leaving `activeLeases=[]`.

No new lease, preparation, host, browser, delivery, trigger, source, docs, AFFOTECH, Drive, deployment, tenant or private-data mutation is authorized.
