Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000192 Architect review
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

Executor terminal:

`GH-PUB-192-REVISION-PRECHECK-GITHUB-READ-ADAPTER-DIAGNOSTIC-000001`

Architect decision:

`GH-DEC-192-DISPOSABLE-ADAPTER-404-MAPPING-DEFECT-ACCEPTED`

Architect classification: `ACCEPTED` for the bounded read-only diagnostic, not for lease recovery.

Verified/accepted findings:

- known-existing revision `000001` returns HTTP `200` with parseable JSON;
- known-absent revision `000002` returns HTTP `404` with parseable JSON error;
- the recovered ORCH-000191 disposable `gh` subprocess shape does not expose semantic HTTP `404` and instead surfaces only process exit code `1`;
- that adapter therefore emitted `GITHUB_API_ERROR`, causing accepted `createJson` to return `CREATE_PRECHECK_FAILED` before any PUT;
- a direct awaited GitHub Contents GET preserves HTTP status and proves `404 → NOT_FOUND` mapping;
- accepted client normalization handles existing content as `EXISTING_JSON` and absent content as `NOT_FOUND`;
- classification `DISPOSABLE_ADAPTER_404_MAPPING_DEFECT` is accepted;
- `correctedReadAdapterShapeProven=true`;
- `sourcePatchRequired=false`;
- minimal repair scope = disposable read adapter only;
- ORCH-000192 made zero real reconciliation calls and zero external mutation requests;
- lease/index state remains unchanged at revision `377`, next epoch `190`, one expired ACTIVE epoch-189 lease, revision `000002` absent;
- accepted source remains GH-PUB-165.

Permanent contract:

> Recovery/read adapters that depend on GitHub Contents absence semantics must preserve semantic HTTP status. Map `404 → NOT_FOUND`; do not collapse semantic absence into a generic subprocess/API failure. Keep authentication, transport, and other non-success failures separate.

Documentation decision:

- `documentationImpact=FULL` — exact root cause and a reusable status-preserving read-adapter countermeasure were established;
- `futureIdeaImpact=NONE`.

Retry decision:

The ORCH-000191 one-call budget is consumed. Architect separately authorizes ORCH-000193 to make at most **one new real** epoch-189 reconciliation call after a read-only gate proves the corrected status-preserving adapter returns existing content for revision `000001` and semantic `NOT_FOUND` for absent revision `000002`.

## Next legal action

ORCH-000193 must:

- require unchanged pre-state: index `377`, next epoch `190`, one expired ACTIVE epoch-189 target, revision `000002` absent;
- prove the corrected adapter using GET-only existing/absent probes before mutation;
- hydrate and verify immutable revision `000001` and typed hashes;
- pass the pure projection gate;
- use the ORCH-000187-proven caller and corrected status-preserving adapter;
- invoke real `reconcileExpiredMutationLease` exactly once;
- fresh-read revision `000002` and index regardless of returned status;
- accept success only if durable state proves valid EXPIRED revision `000002` plus index CAS `377 → 378`, `activeLeases=[]`, `nextLeaseEpoch=190`;
- on ambiguity/failure/unobservable completion, make no second call and return to Architect.

No new lease, worker delivery, browser, governed host, Architect trigger, source/test/config/package mutation, docs-by-Executor, accepted-source, AFFOTECH, Drive, deployment, tenant, business, or private-data mutation is authorized.
