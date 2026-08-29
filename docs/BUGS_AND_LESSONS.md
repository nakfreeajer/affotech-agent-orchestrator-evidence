Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000177 and canonical ORCH-000178
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Bugs and Lessons

## Permanent governance lessons

- Executor PASS is evidence, never acceptance.
- Never blind-retry an ambiguous external mutation; reconcile read-only first.
- Historical evidence remains immutable in meaning.
- Architect owns relevant documentation directly under `ARCHITECT_DIRECT`.
- Orchestrator is deterministic transport only; it never reads assistant decisions for authority.
- Local git commit/push is not runtime persistence.

## Preparation lesson

Accepted preparation requires the exact disposable worker-delivery ID contract. The known repair remains `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`; do not replace it with a speculative tracked-source patch.

## Durable diagnostics lesson

ORCH-000176 proved in-memory instrumentation is insufficient. ORCH-000177 corrected the lifecycle by flushing diagnostics before result interpretation and finally exposed the lower transport cause.

## ORCH-000177 — process exit code is not HTTP status

The candidate-path request returned:

- HTTP status `404`;
- `ghExitCode=1`;
- safe stderr `gh: Not Found (HTTP 404)`.

The disposable adapter incorrectly supplied semantic status `1` to the accepted client. Accepted `notFound()` therefore rejected the normal absent-candidate response, `createJson` returned `CREATE_PRECHECK_FAILED`, and acquisition failed closed before any candidate PUT or index CAS.

Lesson: **transport-process exit status and protocol semantic status are different fields and must never overwrite one another**.

Correct adapter behavior for a GitHub 404 is:

- preserve semantic `status/statusCode=404` or accepted NOT_FOUND/absent equivalent;
- preserve `ghExitCode=1` separately for diagnostics;
- let accepted client normalization decide NOT_FOUND semantics from the HTTP field, not the process exit code.

## Stage-specific safety remains intact

ORCH-000177 had:

- one acquisition call;
- candidate PUT `0`;
- index CAS `0`;
- preparation calls `0`;
- delivery `000014` absent;
- browser contact/send `0/0`;
- active leases `0`.

The clean index baseline therefore remains valid and no orphan reconciliation or manual index edit is needed.

## ORCH-000178 rule

Before mutation, prove on a harmless read-only missing path that the corrected disposable adapter presents actual HTTP `404` to the accepted client as `404`/NOT_FOUND while keeping `ghExitCode=1` separate.

Only then may exactly one fresh lease acquisition occur.

If acquisition succeeds durably, continue to explicit-ID PREPARED intent, zero-browser PROVEN_NOT_SENT result, and normal lease release. Any ambiguity stops without retry and must preserve flushed diagnostics.

## Recovery ordering

1. qualify corrected HTTP-status mapping on read-only 404;
2. perform one fresh acquisition;
3. if acquisition succeeds, prove explicit-ID PREPARED intent;
4. reconcile delivery `000014` as PROVEN_NOT_SENT with zero browser contact;
5. release lease normally;
6. only then arm a fresh persistent host;
7. resume unattended full-cycle qualification.

## Current success criterion

`Architect dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
