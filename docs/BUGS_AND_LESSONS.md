Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000173 and canonical ORCH-000174
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

Lesson: deterministic adapter boundaries require the exact accepted field/option contract. The correct preparation repair is explicit disposable `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, not a speculative tracked-source patch.

## Lease ambiguity lesson

ORCH-000171 proved a correctly bound reconciliation can still remain ambiguous at durable transport. The correct response was not another blind retry; ORCH-000172 traced the create/readback seam and identified an `ERROR_PROPAGATION_ONLY_GAP`.

## ORCH-000173 — instrumentation can preserve semantics and resolve ambiguity

ORCH-000173 wrapped only the disposable GitHub request function while preserving accepted method, endpoint, branch, payload, encoding, auth, sequencing and normalization.

The exact reconciliation then succeeded:

- absent revision `000002` precheck returned expected 404;
- exact PUT succeeded;
- exact readback succeeded;
- revision `000002` became durable `EXPIRED` state;
- one index CAS advanced `369 → 370`;
- target lease removed;
- `activeLeases=[]`.

Lesson: **observability instrumentation is safe and useful only when it is semantically inert**. It can distinguish a true transport failure from an opaque normalized ambiguity without weakening retry discipline.

The closed expired lease must not be reopened without regression evidence.

## Recovery separation lesson

Lease recovery and worker-delivery preparation are independent seams. Closing one does not prove the other.

Correct order now is:

1. lease ambiguity closed and active lease count verified zero;
2. prove preparation with exact `workerDeliveryId` and no browser contact;
3. reconcile the preflight as proven-not-sent;
4. release its lease normally;
5. only then arm a fresh host;
6. resume unattended dispatch → Executor → terminal → Architect wake qualification.

## ORCH-000174 rule

ORCH-000174 may acquire one worker-delivery lease and prepare exactly one delivery ID:

`WORKER-DELIVERY-EXECUTOR-000014`.

Success requires durable `PREPARED`, exact ORCH-000174 / DISPATCH-000174 lineage, browser contact/send `0/0`, durable `PROVEN_NOT_SENT / NOT_SENT` result, `LATEST_DELIVERY` still `000013/SENT`, normal lease release before expiry, and final `activeLeases=[]`.

No host action, Architect trigger, browser contact, or tracked source patch may be mixed into this proof.

## Current success criterion

`Architect dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
