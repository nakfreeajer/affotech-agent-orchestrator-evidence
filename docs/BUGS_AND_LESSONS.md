Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000176 and canonical ORCH-000177
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

Accepted preparation requires the exact disposable worker-delivery ID contract. The known repair remains `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`; it must not be replaced by a speculative tracked-source patch.

## Acquisition ambiguity lesson

ORCH-000174 and ORCH-000176 both stopped before preparation because lease acquisition returned `AMBIGUOUS`. Durable readback after both attempts showed no candidate revision and no index mutation.

Lesson: stage-specific accounting prevents a later preparation defect from being blamed when execution never reached preparation.

## ORCH-000175 — clean index plus namespace scan

A clean index alone is not enough after an ambiguous candidate create. ORCH-000175 correctly inspected the durable lease namespace and proved no orphan ORCH-000174 candidate existed.

Classification: `ERROR_PROPAGATION_ONLY_GAP`.

## ORCH-000176 — in-memory diagnostics are not durable evidence

The wrapper did collect bounded acquisition diagnostics, but only in process memory. The launcher then converted the accepted result to `LEASE_AMBIGUOUS` and exited before flushing the trace or safe reconciliation descriptor.

Lesson: **instrumentation that disappears on the exact failure path it is meant to diagnose is operationally equivalent to no instrumentation**.

For ambiguity-prone external mutation, diagnostic persistence must be ordered before error/result interpretation:

`request completes → append safe trace → flush durable trace → persist safe reconciliation descriptor → only then interpret/throw/exit`.

## Durable trace qualification must precede the next mutation

ORCH-000177 first uses a harmless read-only request to prove the exact disposable wrapper can append, flush, and read back a safe diagnostic record without leaking credentials or private data.

Only after that proof may one new acquisition occur.

If acquisition is ambiguous, the launcher must not exit until the already-flushed trace and safe descriptor are available for terminal publication.

## Recovery ordering

1. qualify durable diagnostic trace flush with no mutation;
2. perform one instrumented acquisition only;
3. if acquisition succeeds, prove explicit-ID PREPARED intent;
4. reconcile delivery `000014` as PROVEN_NOT_SENT with zero browser contact;
5. release lease normally;
6. only then arm a fresh persistent host;
7. resume unattended full-cycle qualification.

## Current success criterion

`Architect dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
