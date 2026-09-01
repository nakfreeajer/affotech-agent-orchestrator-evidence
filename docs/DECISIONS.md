Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000191 Architect review
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

Accepted `createJson` semantics are precheck → at most one PUT → exact post-write readback, with durable readback as final authority. A separate prerequisite evidence write must not itself become the blocking ambiguous mutation. Accepted source remained unchanged.

## ORCH-000191 — INCONCLUSIVE revision precheck transport classification

Executor terminal:

`GH-PUB-191-EXPIRED-LEASE-IN-MEMORY-RECONCILIATION-INCONCLUSIVE-000001`

Architect decision:

`GH-DEC-191-REVISION-PRECHECK-TRANSPORT-INCONCLUSIVE`

Architect classification: `INCONCLUSIVE`.

Verified facts:

- preconditions, typed-hash gate, and pure projection gate passed;
- the one authorized real `reconcileExpiredMutationLease` call was invoked exactly once;
- the ORCH-000191 real-call budget is therefore consumed;
- revision-`000002` `createJson` pre-read returned `gh` exit code `1` without semantic HTTP status;
- the disposable adapter normalized that read to `GITHUB_API_ERROR` instead of `NOT_FOUND`;
- accepted `createJson` stopped with `CREATE_PRECHECK_FAILED`;
- revision PUT `0`;
- index CAS `0`;
- revision `000002` absent;
- index remains `377`, `nextLeaseEpoch=190`, one expired ACTIVE epoch-189 lease;
- protected side effects remained zero;
- accepted source remains GH-PUB-165.

Interpretation:

The real target mutation was never reached. The evidence narrows the failure to the disposable GitHub read adapter's semantic classification of an expected absent contents path. It does not yet prove an accepted-source defect.

Retry decision:

`retryAuthorized=false`. Because the single real call has been consumed, no second reconciliation may occur unless a later Architect decision separately establishes a repaired authority after diagnosis.

Documentation decision:

- `documentationImpact=STATE` — the current recovery boundary advanced, but no new permanent root cause or accepted source contract has yet been established;
- `futureIdeaImpact=NONE`.

## Next legal action

ORCH-000192 / DISPATCH-000192 is strictly read-only. It must diagnose why the ORCH-000191 disposable GitHub read adapter failed to map the known-absent revision `000002` to semantic `NOT_FOUND`.

It may perform bounded GET-only probes against one known-existing contents path and the known-absent target; capture non-sensitive exit/status/error/body/normalization details; and prove a corrected read-adapter shape if possible.

No PUT, real reconciliation, lease/index mutation, new lease, worker delivery, browser, host, Architect trigger, source/test/config/package mutation, AFFOTECH, Drive, deployment, tenant, business, or private-data mutation is authorized.
