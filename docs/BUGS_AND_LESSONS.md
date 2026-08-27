Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000172 and canonical ORCH-000173
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

Host `000027` supplied neither `expectedFreshWorkerDeliveryId` nor factory `workerDeliveryId`; accepted preparation therefore failed with `WORKER_DELIVERY_ID_REQUIRED` before persistence. The correct later preparation fix is exact disposable `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, not a speculative source patch.

## Lease lesson from ORCH-000171

A correctly bound recovery can still fail at durable mutation transport. ORCH-000171 executed the accepted reconciliation once and reproduced `EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS` with no revision `000002`, no index CAS, and no unrelated mutation.

Correct response: diagnose the write/readback seam, not another blind call.

## ORCH-000172 — error-propagation-only gap

The seam diagnostic proved:

- accepted `createGitHubContentsRuntimeClient` / `createJson` was used;
- revision `000002` path is the accepted lease-revision path;
- projected EXPIRED record is deterministic and schema-valid;
- known-good creates use the same GitHub Contents request model, repository, branch, auth and encoding;
- no path/payload/schema/auth/runtime-create defect is proven;
- the client returns `AMBIGUOUS / POST_MUTATION_ABSENT` when PUT/readback cannot be proven;
- reconciliation then collapses this to `EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`;
- the disposable wrapper discarded the concrete `gh`/HTTP status/error.

Classification: `ERROR_PROPAGATION_ONLY_GAP`.

Lesson: **safe fail-closed normalization is not enough for operability if it destroys the evidence needed to repair a transport failure**. Preserve bounded non-sensitive transport diagnostics at disposable runtime boundaries.

## Instrumentation must not mutate semantics

Diagnostic instrumentation may record operation label, HTTP method/path, process exit code, HTTP status, stable error reason, redacted bounded stderr, parseability, and normalized result. It must not change method, URL, body, branch, encoding, auth, sequencing, accepted normalization, or retry behavior.

This distinction makes an instrumented retry evidence-driven rather than blind.

## ORCH-000173 rule

Exactly one instrumented accepted expired-lease reconciliation is authorized under the unchanged ORCH-000169 lease binding.

Success requires revision `000002` durable readback and one exact index CAS leaving `activeLeases=[]`.

If it fails or remains ambiguous, no retry is allowed. The concrete redacted transport diagnostics become the next Architect evidence.

No new lease, preparation retry, host action, browser contact, delivery/trigger mutation, or tracked source patch may be mixed into this milestone.

## Recovery ordering

1. obtain concrete transport diagnostics and close the expired lease if possible;
2. verify `activeLeases=[]`;
3. separately retry preparation with exact `workerDeliveryId` composition;
4. prove durable `PREPARED` before browser contact;
5. arm a fresh host and resume full-cycle qualification.

## Current success criterion

`Architect dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
