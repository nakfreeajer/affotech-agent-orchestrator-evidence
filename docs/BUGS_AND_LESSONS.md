Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000171 and canonical ORCH-000172
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

## Durable worker-delivery ordering

Required order:

`observe governed dispatch → exact action-derived lease → durable worker-delivery intent/readback → BrowserRelay pre-send observation → one send → durable result → duplicate suppression/reconciliation`.

## Preparation lesson from ORCH-000170

Deterministic adapter boundaries require exact field/option names. Host `000027` supplied neither `expectedFreshWorkerDeliveryId` nor factory `workerDeliveryId`; accepted preparation therefore failed with `WORKER_DELIVERY_ID_REQUIRED` before persistence. Semantic similarity such as `expectedDeliveryId` is insufficient.

No tracked source repair is currently proven necessary for this preparation seam.

## Lease lesson from ORCH-000170 and ORCH-000171

ORCH-000170 proved the expired-lease reconciliation binding was correct. ORCH-000171 then executed that exact accepted recovery once under unchanged preconditions.

It still returned:

`AMBIGUOUS / EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`.

Revision `000002` remained absent and index revision `369` did not move.

Lesson: **a correct recovery binding does not prove the durable mutation adapter can create/read back the recovery record**. When a correctly-bound one-call recovery repeats the same ambiguity with no durable side effect, the next step is not another retry; it is diagnosis of the concrete write/readback seam.

## No-partial-side-effect distinction

ORCH-000171 produced no revision `000002`, no index CAS, and no unrelated mutation. This matters: the state is unresolved, but there is no half-created reconciliation record requiring speculative repair.

The safe posture is preserve the expired ACTIVE index entry until the durable create/readback mechanism is understood and corrected.

## Error-propagation requirement

Generic stable outer reason codes such as `EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS` are safe but may be operationally insufficient. Diagnostic evidence must preserve the non-sensitive lower-level client status/error needed to distinguish:

- disposable GitHub client adapter defect;
- accepted runtime createJson defect;
- GitHub auth/transport failure;
- invalid revision path/payload;
- or error-propagation-only loss.

## ORCH-000172 rule

Read-only trace the exact revision-`000002` path used by ORCH-000171 and compare it to a known-good durable create. Inspect API/CLI method, stdin/input handling, repository/ref/path, payload encoding, return normalization, and the branch that collapses the lower failure.

No reconciliation call, lease/index/revision mutation, new lease, host action, browser contact, delivery/trigger mutation, or source patch is authorized by this diagnostic.

## Recovery ordering

1. identify and repair the revision-create/readback seam;
2. only then authorize one newly-bounded exact lease reconciliation if evidence says it is safe;
3. verify `activeLeases=[]`;
4. separately retry preparation with exact `workerDeliveryId` composition;
5. prove durable `PREPARED` before browser contact;
6. arm a fresh host and resume full-cycle qualification.

## Current success criterion

`Architect dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
