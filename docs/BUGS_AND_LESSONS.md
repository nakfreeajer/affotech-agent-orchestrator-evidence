Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000169 and canonical ORCH-000170
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

A state machine returning `PREPARE_WORKER_DELIVERY_INTENT` is not equivalent to a runner successfully creating/read-backing the canonical intent.

## Proven transport foundations

ORCH-000153 and ORCH-000163 independently prove exactly-once forward delivery and Architect wake. ORCH-000166 proves safe persistent idle operation. ORCH-000167 proves automatic observation of a new Architect dispatch.

## ORCH-000168 — distinguish accepted logic from effective composition

Accepted source already calls `prepareWorkerDeliveryIntent` after lease acquisition. Host-000026's effective injected worker-persistence composition failed to return a durable `PREPARED` intent, so the runner failed closed before send.

Lesson: a method being statically bound does not prove that its injected adapter satisfies the accepted create/readback contract.

## ORCH-000169 — composition repair can expose a deeper contract/error-surface issue

The composition-first repair supplied GitHub-backed persistence and reached the real accepted preparation method, but preparation still returned:

`FAILED_BEFORE_SEND` with `durableRecorded=false`.

No delivery `000014` intent/result was created and no browser contact occurred.

Lesson: once the composition is plausibly real, do not automatically label the remaining failure as source defect merely because the outer terminal says `SOURCE_CONTRACT_REPAIR_REQUIRED`. Independently identify the lower-level error and the exact branch that suppresses it before choosing a source repair boundary.

## Fresh host identity is not host readiness

Host `000027` identity was created and one launch attempt occurred, but the process exited and completed zero idle polls.

Lesson: a durable identity record proves lineage only. Host readiness still requires process liveness, complete snapshot hydration, bootstrap suppression, multiple valid polls, and zero unauthorized side effects.

## Expired lease + ambiguous reconciliation is a hard stop

ORCH-000169 acquired one worker-delivery lease for the zero-browser preflight. It expired before cleanup. Release/expiry reconciliation returned:

`EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`.

The current lease index still lists that exact expired lease as `ACTIVE`.

Lesson: **expiry does not erase mutation authority ambiguity**. An expired lease that remains indexed active after ambiguous reconciliation blocks later mutation until read-only diagnosis proves whether:

- a durable reconciliation record exists but the index is stale;
- the recovery binding mismatched the immutable lease;
- record creation itself was ambiguous;
- or the accepted reconciliation contract is defective.

Do not simply acquire a new lease or retry reconciliation with guessed bindings.

## Error propagation is part of operability

Fail-closed stable reason codes are necessary, but if the runner collapses all preparation failures into `WORKER_DELIVERY_INTENT_PREPARATION_REQUIRED` / `FAILED_BEFORE_SEND`, the system may be safe yet hard to repair.

Diagnostic evidence should preserve a stable lower-level code and non-sensitive binding detail sufficient to distinguish adapter misuse, GitHub persistence failure, readback mismatch, or source-contract defect without reading browser responses or private data.

## ORCH-000170 diagnostic rule

Before any further mutation, diagnose two streams separately:

1. preparation failure: exact accepted interface, actual host-000027 injected adapter, failure code/hidden branch, and smallest repair boundary;
2. lease ambiguity: exact immutable lease/recovery binding, any durable reconciliation record, index state, and single safe later recovery mutation.

Only after both are resolved should Architect authorize another source/composition/host attempt.

## Current success criterion

The target remains:

`Architect dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

No AFFOTECH, Drive, deployment, tenant, or business/private-data mutation is necessary to prove the transport loop itself.
