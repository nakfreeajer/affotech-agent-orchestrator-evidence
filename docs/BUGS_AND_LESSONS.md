Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000170 and canonical ORCH-000171
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

## ORCH-000170 — exact preparation lesson

The accepted preparation code was not missing. Host `000027` failed because its disposable composition did not supply the worker-delivery ID in either accepted form:

- `snapshot.pointers.dispatch.expectedFreshWorkerDeliveryId`, or
- factory option `workerDeliveryId`.

The dispatch instead exposed `expectedDeliveryId`. Accepted worker-ID resolution therefore returned undefined and preparation failed with `WORKER_DELIVERY_ID_REQUIRED` before persistence.

Lesson: **semantic similarity of metadata names is not enough at a deterministic adapter boundary**. Composition must inject the exact accepted field/option contract. The correct next preparation fix is disposable `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, not a speculative source patch.

## Diagnostic error-propagation lesson

Host `000027` logged only outer `FAILED_BEFORE_SEND / durableRecorded=false`, which initially hid `WORKER_DELIVERY_ID_REQUIRED`.

Lesson: fail-closed outer status is necessary but operability improves when disposable/runtime diagnostic evidence preserves stable lower-level reason codes without exposing browser response text or private data.

## ORCH-000170 — exact lease lesson

The ORCH-000169 expiry-reconciliation binding itself was correct. The ambiguity arose during creation/readback of the projected revision `000002`; no valid revision `000002` exists.

The current index remaining on expired ACTIVE revision `000001` is therefore correct fail-closed behavior, not proof the index should be manually edited.

Lesson: distinguish:

- `RECONCILIATION_BINDING_MISMATCH`, where the recovery request is wrong;
- `RECONCILIATION_RECORD_CREATION_AMBIGUOUS`, where the exact binding is right but durable mutation cannot be proven.

These demand different next actions.

## Recovery ordering lesson

Preparation failure and lease ambiguity are independent. Do not combine their fixes while authority is ambiguous.

Correct order:

1. close the exact expired lease under one bounded reconciliation authority;
2. verify active lease count zero;
3. only then retry disposable preparation composition with the exact `workerDeliveryId` contract;
4. prove durable `PREPARED` before browser contact;
5. then arm a fresh host and resume full-cycle qualification.

## ORCH-000171 rule

Exactly one accepted `reconcileExpiredMutationLease` call is authorized for the ORCH-000169 lease after unchanged-index and absent-revision-000002 checks.

No new lease acquisition, no preparation retry, no host action, no browser contact, no delivery/trigger mutation, and no source patch may be mixed into that recovery.

If the single reconciliation call is ambiguous again, preserve it as `INCONCLUSIVE`; never retry blindly.

## Current success criterion

The target remains:

`Architect dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

No AFFOTECH, Drive, deployment, tenant, or business/private-data mutation is necessary to prove the transport loop itself.
