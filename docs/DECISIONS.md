Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000193 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence, governing policy, and immutable Architect decisions

# Architect Decisions

Architect classifications are exactly `ACCEPTED`, `BLOCKED`, `INCONCLUSIVE`, `NO NEW REPORT`. Executor PASS/COMPLETED/READY is evidence only.

## Permanent authority decisions

- Rony is final human authority.
- Architect governs, verifies, decides, defines next bounded authority, owns canonical documentation, and preserves material future intent separately from current truth.
- Executor performs bounded implementation/runtime/validation work and publishes first-hand evidence.
- Orchestrator is deterministic control-plane infrastructure and never becomes semantic authority.
- GitHub durable evidence is machine authority.
- No blind retry after ambiguous external mutation.
- Historical evidence is immutable in meaning.
- AFFOTECH and protected resources remain separate until explicitly authorized.

## ORCH-000184 — ACCEPTED full immutable caller contract

Decision: `GH-DEC-184-EXPIRED-LEASE-CALLER-ARGUMENT-CONTRACT-ACCEPTED`.

Index locator/projection records cannot substitute for the full immutable `MUTATION_LEASE` when full-schema validation/projection/reconciliation is required.

## ORCH-000187 — ACCEPTED corrected caller through mutation boundary

Decision: `GH-DEC-187-CORRECTED-CALLER-PROJECTION-BOUNDARY-ACCEPTED`.

The corrected mutation-disabled caller using the full immutable lease, exact reconciliation binding, and integer `nowMs` validates/projects correctly and reaches creation of revision `000002`. The exact historical ORCH-000185 mismatch remains unproven.

## ORCH-000188 — BLOCKED hash-namespace mismatch

Decision: `GH-DEC-188-PRECONDITION-HASH-NAMESPACE-MISMATCH-BLOCKED`.

Permanent contract: canonical semantic/content SHA-256 and Git blob SHA are separately typed values and must never be compared directly.

## ORCH-000189 — INCONCLUSIVE pre-call evidence write ambiguity

Decision: `GH-DEC-189-PRECALL-EVIDENCE-WRITE-AMBIGUOUS-INCONCLUSIVE`.

Typed hash and pure projection gates passed, but the prerequisite pre-call `createJson` returned `AMBIGUOUS`; exact path was absent on readback. Real reconciliation calls remained `0` and durable lease state remained unchanged.

## ORCH-000190 — ACCEPTED createJson transport ambiguity diagnostic

Decision: `GH-DEC-190-PRECALL-CREATEJSON-TRANSPORT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`.

Accepted `createJson` semantics are precheck → at most one PUT → exact post-write readback, with durable readback as final authority. A separate prerequisite evidence write must not itself become the blocking ambiguous mutation.

## ORCH-000191 — INCONCLUSIVE revision precheck transport classification

Decision: `GH-DEC-191-REVISION-PRECHECK-TRANSPORT-INCONCLUSIVE`.

The one authorized real reconciliation call was consumed but stopped before target mutation because the disposable GitHub read adapter normalized an expected absent revision precheck as `GITHUB_API_ERROR / CREATE_PRECHECK_FAILED`. Revision PUT and index CAS remained `0`; durable state remained unchanged.

## ORCH-000192 — ACCEPTED disposable adapter 404 mapping diagnosis

Decision: `GH-DEC-192-DISPOSABLE-ADAPTER-404-MAPPING-DEFECT-ACCEPTED`.

The bounded GET-only diagnostic proved:

- existing revision `000001` returns HTTP `200`;
- absent revision `000002` returns HTTP `404`;
- the ORCH-000191 disposable `gh` subprocess lost semantic `404` and collapsed it into process/API failure;
- a direct awaited GitHub Contents adapter preserves status and maps `404 → NOT_FOUND`;
- accepted client normalization is correct;
- `sourcePatchRequired=false`;
- minimal repair scope is the disposable read adapter only.

Permanent contract: GitHub Contents read adapters used for governed recovery must preserve semantic HTTP status and must not collapse expected `404 / NOT_FOUND` into generic transport failure.

## ORCH-000193 — ACCEPTED epoch-189 lease recovery

Executor terminal:

`GH-PUB-193-EXPIRED-LEASE-STATUS-PRESERVING-RECONCILIATION-000001`

Architect decision:

`GH-DEC-193-EXPIRED-WORKER-LEASE-RECOVERY-ACCEPTED`

Architect classification: `ACCEPTED`.

Verified facts:

- status-preserving read-adapter gate passed (`200 / EXISTING_JSON` for revision `000001`, `404 / NOT_FOUND` for absent revision `000002`);
- typed-hash and pure-projection gates passed;
- accepted `reconcileExpiredMutationLease` was invoked exactly once;
- runtime outcome was `EXPIRED_RECONCILED`;
- immutable revision `000002` exists, is valid `leaseRevision=2`, and has `state=EXPIRED`;
- `previousRecordSha256` matches the canonical revision-`000001` SHA-256 exactly;
- lease index advanced exactly `377 → 378`;
- `activeLeases=[]`;
- `nextLeaseEpoch=190` remained unchanged;
- latest worker delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger remains `ARCH-TRIGGER-9333-000005/SENT`;
- no retry, new lease, browser, host-process, worker-delivery, Architect-trigger, source, AFFOTECH, or Drive mutation occurred beyond the authorized revision-create and index-CAS lease-state writes;
- accepted source remains GH-PUB-165.

Epoch-189 recovery is complete and no longer blocks the worker-delivery qualification chain.

Documentation decision:

- `documentationImpact=STATE` — current operational state advanced from blocked lease recovery to clean lease-free continuation, with no new source/governance contract;
- `futureIdeaImpact=NONE`.

## Next legal action

ORCH-000194 should resume the worker-delivery qualification path at a **durable PREPARED / provably not sent** boundary for `WORKER-DELIVERY-EXECUTOR-000014`.

It must require index revision `378`, next epoch `190`, zero active leases, and unchanged delivery/trigger pointers before any mutation. It may acquire at most one new `WORKER_DELIVERY` lease; construct transient action-specific authorization with `actionKind=WORKER_DELIVERY` and explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`; call accepted preparation at most once; and require exact durable PREPARED intent readback.

Browser contact/send, worker-delivery result publication, Architect-trigger mutation, AFFOTECH, Drive, deployment, tenant/business/private-data access, and unrelated source/test/config/package mutation remain unauthorized. The milestone must not continue to delivery/send in the same dispatch.
