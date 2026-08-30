Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000180 and canonical ORCH-000181
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

The durable lease itself must remain immutable; actionKind belongs to the transient authorization object used for the preparation call.

## Transport-status lesson

Process exit code and HTTP semantic status are different fields. ORCH-000177/178 proved an actual GitHub HTTP `404` must remain semantic `404`/NOT_FOUND while `ghExitCode=1` remains diagnostics only.

## ORCH-000180 — do not confuse execution timeout with semantic failure

ORCH-000180 acquired epoch `188` successfully and read back its ACTIVE lease, but the bounded disposable process stopped before any preparation request. Preparation call count was `0` and the trace contained no delivery-record request.

The lease was then normally released and the index returned to:

- revision `376`;
- next epoch `189`;
- active leases `0`.

Lesson: **a process-level timeout before a function call provides no evidence about whether that function's corrected semantic binding is valid**.

Do not reopen actionKind/source diagnosis from ORCH-000180. Remove the artificial execution boundary first.

## In-process continuation rule

For the current preflight, successful-path control flow must remain in one process:

`acquire returns ACQUIRED → ACTIVE readback → immediately construct transient actionKind=WORKER_DELIVERY authorization → immediately call prepareWorkerDeliveryIntent → reconcile PROVEN_NOT_SENT → release`.

Do not put a child process, shell timeout, polling wrapper, or generic external wait between ACTIVE readback and preparation.

## Stage-specific proof now available

Proven:

- HTTP 404 semantic mapping;
- accepted lease acquisition;
- durable ACTIVE readback/index activation;
- accepted normal release;
- durable RELEASED readback/index removal;
- accepted preparation is reached under continuous control flow;
- missing transient actionKind fails closed as HOST_AUTHORIZATION_INVALID.

Still unproven:

- action-kind-enriched preparation with explicit delivery ID;
- durable PREPARED intent for delivery `000014`;
- zero-browser PROVEN_NOT_SENT reconciliation for that intent.

## ORCH-000181 rule

Start from index revision `376`, next epoch `189`, active leases `0`. Acquire once. In the same process, enrich only the transient transport authorization with `actionKind=WORKER_DELIVERY` and immediately call preparation once using explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`.

After durable PREPARED readback, reconcile delivery `000014` as PROVEN_NOT_SENT/NOT_SENT with browser contact/send `0/0`, then release the lease normally.

Any ambiguity stops without retry and preserves exact durable state.

## Recovery ordering

1. complete in-process action-kind-enriched preparation preflight;
2. independently accept the preparation proof;
3. arm a fresh persistent host using the proven composition;
4. publish a strictly newer automatic canary dispatch without manual forwarding;
5. prove Executor delivery, terminal observation, and Architect wake end-to-end.

## Current success criterion

`Architect dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
