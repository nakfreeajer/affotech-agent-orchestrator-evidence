Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000190 Architect review
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

Executor terminal:

`GH-PUB-190-PRECALL-CREATEJSON-AMBIGUITY-DIAGNOSTIC-000001`

Architect decision:

`GH-DEC-190-PRECALL-CREATEJSON-TRANSPORT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`

Architect classification: `ACCEPTED` for the bounded mutation-disabled diagnostic, not for lease recovery.

Verified/accepted findings:

- the ORCH-000190 prompt explicitly allowed `PRECALL_CREATEJSON_TRANSPORT_AMBIGUITY_WITHOUT_DURABLE_EFFECT` when the exact live branch could not be reconstructed;
- accepted `createJson` performs a target precheck, at most one PUT, and exact post-write readback;
- PUT response body is not the final success authority;
- a missing/throwing/non-success PUT can still normalize to `CREATED` when exact readback proves the expected object exists;
- absent post-write readback can normalize to `AMBIGUOUS / POST_MUTATION_ABSENT` for more than one live transport branch;
- ORCH-000189 did not preserve its exact live adapter throw/status/readback detail, so that exact branch remains unobservable;
- classification `PRECALL_CREATEJSON_TRANSPORT_AMBIGUITY_WITHOUT_DURABLE_EFFECT` is accepted;
- `sourcePatchRequired=false`;
- real reconciliation calls `0`;
- external target mutation requests in ORCH-000190 `0`;
- index remains `377`, `nextLeaseEpoch=190`, one expired ACTIVE epoch-189 lease;
- revision `000002` remains absent;
- real reconciliation budget remains unconsumed;
- accepted source remains GH-PUB-165.

Permanent observability decision:

> A separate prerequisite external evidence write must not be required when that evidence write can itself become the blocking ambiguous mutation. For a one-shot authorized target mutation, bounded non-sensitive adapter/projector/await diagnostics may be buffered in memory during the same execution, while durable target-state readback remains the final outcome authority.

Documentation decision:

- `documentationImpact=FULL` — reusable `createJson` reconciliation/ambiguity semantics and a permanent observability countermeasure were established;
- `futureIdeaImpact=NONE`.

Retry decision:

Architect authorizes ORCH-000191 to make at most **one** real epoch-189 expired-lease reconciliation call using the ORCH-000187-proven caller shape, with no separate pre-call `createJson` evidence publication. This is not authorization for a second real call under any outcome.

## Next legal action

ORCH-000191 must:

- require index `377`, next epoch `190`, one ACTIVE-but-expired epoch-189 target, revision `000002` absent;
- hydrate and verify immutable revision `000001` and typed hashes;
- pass the pure projection gate;
- buffer bounded adapter/caller/projector/await diagnostics in memory only;
- invoke real `reconcileExpiredMutationLease` exactly once and await it completely;
- fresh-read revision `000002` and index immediately afterward regardless of returned status;
- accept success only if durable state proves valid EXPIRED revision `000002` and index CAS `377 → 378`, `activeLeases=[]`, `nextLeaseEpoch=190`;
- on ambiguous/failure/unobservable completion, make no second call and return to Architect.

No new lease, worker delivery, browser, governed host, Architect trigger, source/test/config/package, docs-by-Executor, accepted-source, AFFOTECH, Drive, deployment, tenant, business, or private-data mutation is authorized.
