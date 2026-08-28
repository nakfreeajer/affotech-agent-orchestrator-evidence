Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000174 and canonical ORCH-000175
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Bugs and Lessons

## Permanent governance lessons

- Executor PASS is evidence, never acceptance.
- Never blind-retry an ambiguous external mutation; reconcile read-only first.
- Historical evidence remains immutable in meaning.
- Architect owns relevant documentation directly under `ARCHITECT_DIRECT`.
- Orchestrator is deterministic transport only; it never reads assistant decisions for authority.
- Local git commit/push is not runtime state transport.

## Preparation lesson

Host `000027` supplied neither `expectedFreshWorkerDeliveryId` nor factory `workerDeliveryId`; accepted preparation therefore failed with `WORKER_DELIVERY_ID_REQUIRED` before persistence.

The intended preparation repair remains explicit disposable `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, not a speculative tracked-source patch.

## Lease-recovery lesson

ORCH-000173 proved semantically inert instrumentation can resolve an opaque durable-transport ambiguity without changing accepted request semantics. The expired ORCH-000169 lease is closed and must not be reopened absent regression evidence.

## ORCH-000174 — acquisition ambiguity precedes preparation

The explicit delivery ID can be correct and still remain untested if the preceding mutation-lease acquisition fails.

ORCH-000174 made one authorized acquisition call and received `AMBIGUOUS`; preparation call count stayed `0` and delivery `000014` remained absent.

Lesson: **do not attribute a milestone failure to the next state-machine action when execution never reached it**. Preserve stage-specific accounting.

## Clean current index does not prove no orphan immutable record

ORCH-000174 post-state shows index revision `370` with `activeLeases=[]`. That proves no active lease authority is currently projected, but an ambiguous create/readback may still have left an immutable lease revision outside the index.

Lesson: before another acquisition attempt, read-only inspect the durable lease namespace for the proposed lease identity and epoch. Do not rely only on the current index.

## Acquisition ambiguity classification must be stage-specific

The next diagnostic must distinguish:

- revision create ambiguity;
- revision readback ambiguity;
- index CAS ambiguity;
- index readback ambiguity;
- disposable request-wrapper/error-propagation loss;
- binding mismatch;
- accepted source acquisition-contract defect.

These have different recovery requirements.

## ORCH-000175 rule

Read-only diagnose ORCH-000174. Determine the exact acquisition call/binding, proposed lease ID/epoch, lower-level stable GitHub/gh result, any orphan revision `000001`, and smallest safe next boundary.

No acquisition retry, lease/index mutation, preparation call, delivery/trigger mutation, host action, browser contact, tracked source patch, or protected-resource mutation is authorized.

## Recovery ordering

1. diagnose acquisition ambiguity and orphan-record state;
2. clean/reconcile only if durable evidence requires it;
3. if safe, perform one newly bounded instrumented acquisition;
4. only after lease acquisition is proven, exercise explicit `workerDeliveryId` preparation;
5. prove durable PREPARED and PROVEN_NOT_SENT with zero browser contact;
6. release lease normally;
7. then arm a fresh persistent host and resume unattended full-cycle qualification.

## Current success criterion

`Architect dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
