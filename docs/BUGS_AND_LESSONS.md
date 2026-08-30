Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000181 and canonical ORCH-000182
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

## Preparation composition lessons

Accepted preparation needs both:

- explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` in disposable composition;
- transient BrowserRelay transport authorization with `actionKind=WORKER_DELIVERY`.

The durable lease itself remains immutable; actionKind belongs only to the transient authorization object used for preparation.

## Transport-status lesson

Process exit code and HTTP semantic status are different fields. ORCH-000177/178 proved an actual GitHub HTTP `404` must remain semantic `404`/NOT_FOUND while `ghExitCode=1` remains diagnostics only.

## ORCH-000181 — an in-process label does not prove continuous execution

ORCH-000181 acquired and indexed epoch `189` and constructed the correct transient actionKind, but the process still terminated before `prepareWorkerDeliveryIntent` was invoked.

Preparation call count remained `0`; therefore the action-kind fix is still not negatively tested.

The lease expired before recovery readback and remains indexed ACTIVE at revision `377`.

Lesson: **the qualification harness must prove the actual next function call occurred, not merely that the code path was intended to be in-process**.

Stage accounting must distinguish:

`lease acquired → transient authorization constructed → preparation call actually issued → durable intent created`.

Stopping between the second and third steps provides no evidence about preparation semantics and can consume the lease expiry window.

## Expired lease recovery rule

Once a lease is expired, do not call normal release and do not acquire another lease over it. Use one Architect-authorized exact `reconcileExpiredMutationLease` call with immutable binding verification and no blind retry.

Current ORCH-000181 target:

- lease `MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0`;
- epoch `189`;
- revision `000001=ACTIVE`;
- index revision `377`;
- next epoch `190`;
- revision `000002` absent.

ORCH-000182 success is revision `000002=EXPIRED`, index `377→378`, and `activeLeases=[]`.

## Stage-specific proof now available

Proven:

- HTTP 404 semantic mapping;
- accepted lease acquisition;
- durable ACTIVE readback/index activation;
- accepted normal release;
- durable RELEASED readback/index removal;
- accepted preparation is reached under a prior continuous flow;
- missing transient actionKind fails closed as HOST_AUTHORIZATION_INVALID;
- transient actionKind can be constructed from an exact durable lease without rewriting that lease.

Still unproven:

- an actual preparation call using the action-kind-enriched transient authorization plus explicit delivery ID;
- durable PREPARED intent for delivery `000014`;
- zero-browser PROVEN_NOT_SENT reconciliation for that intent.

## Recovery ordering

1. reconcile the expired ORCH-000181 lease exactly once;
2. independently accept clean `activeLeases=[]`;
3. exercise preparation without another artificial process termination boundary;
4. once PREPARED/PROVEN_NOT_SENT is proven, arm a fresh persistent host;
5. run a strictly newer unattended full-cycle canary.

## Current success criterion

`Architect dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
