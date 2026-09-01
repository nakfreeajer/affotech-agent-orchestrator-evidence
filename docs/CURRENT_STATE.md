Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000192 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source did not change through ORCH-000192.

## 2. Permanent recovery contracts

- mutation-lease index entries are reduced locators; hydrate and verify the full immutable lease before full-schema reconciliation;
- canonical semantic SHA-256 and Git blob SHA are separately typed identities and must never be compared directly;
- the ORCH-000187-proven reconciliation caller uses one object containing full immutable `lease`, exact `reconciliationBinding`, and integer `nowMs`;
- accepted `createJson` uses precheck → at most one PUT → exact post-write readback, with durable readback as final outcome authority;
- bounded adapter/projector/await diagnostics should remain in the target execution context rather than requiring a separate prerequisite external evidence write;
- GitHub contents read adapters used in recovery must preserve semantic HTTP status, including `404 → NOT_FOUND`;
- historical ORCH-000185 exact causation remains unknown because its launcher is absent.

## 3. ORCH-000191 — INCONCLUSIVE before target mutation

Executor terminal:

`GH-PUB-191-EXPIRED-LEASE-IN-MEMORY-RECONCILIATION-INCONCLUSIVE-000001`

Architect decision:

`GH-DEC-191-REVISION-PRECHECK-TRANSPORT-INCONCLUSIVE`

ORCH-000191 passed typed-hash and pure-projection gates and consumed one real reconciliation call. It stopped during the revision-`000002` pre-read because the disposable `gh` subprocess surfaced exit code `1` without semantic HTTP `404`, causing `GITHUB_API_ERROR / CREATE_PRECHECK_FAILED`. No revision PUT or index CAS occurred.

## 4. ORCH-000192 — ACCEPTED disposable adapter 404 diagnosis

Executor terminal:

`GH-PUB-192-REVISION-PRECHECK-GITHUB-READ-ADAPTER-DIAGNOSTIC-000001`

Architect decision:

`GH-DEC-192-DISPOSABLE-ADAPTER-404-MAPPING-DEFECT-ACCEPTED`

Accepted findings:

- known-existing revision `000001` GET returns HTTP `200` with parseable JSON;
- known-absent revision `000002` GET returns HTTP `404` with a parseable JSON error;
- the ORCH-000191 disposable `gh` subprocess shape does not surface that semantic `404` and therefore cannot map it to `NOT_FOUND`;
- the corrected read-adapter shape is a direct awaited GitHub Contents GET that preserves HTTP status and maps `404` to `NOT_FOUND`;
- accepted client normalization then handles existing content as `EXISTING_JSON` and absent content as `NOT_FOUND`;
- classification `DISPOSABLE_ADAPTER_404_MAPPING_DEFECT` is accepted;
- corrected read-adapter shape proven `true`;
- `sourcePatchRequired=false`;
- minimal repair scope = disposable read adapter only;
- ORCH-000192 made zero reconciliation calls and zero external mutation requests;
- durable lease state remained unchanged.

## 5. Current durable lease boundary

Fresh verified state after ORCH-000192:

- lease `MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0`;
- epoch `189`;
- immutable revision `000001` remains ACTIVE but expired;
- revision `000002` absent;
- mutation-lease index revision `377`;
- `nextLeaseEpoch=190`;
- exactly one active index entry;
- latest delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 6. Next legal action — ORCH-000193

Architect authorizes one **new separately bounded** real epoch-189 reconciliation attempt after the ORCH-000192 diagnosis. This is not a continuation of the consumed ORCH-000191 budget.

ORCH-000193 must:

1. require unchanged durable pre-state and revision `000002` absence;
2. verify the corrected read adapter using bounded GET-only gates: existing revision must normalize as existing and absent revision must normalize as `NOT_FOUND`;
3. hydrate/verify full immutable revision `000001` and typed hashes;
4. pass the pure projection gate;
5. use the ORCH-000187-proven reconciliation caller and the corrected status-preserving read adapter;
6. invoke real `reconcileExpiredMutationLease` exactly once and await it completely;
7. immediately fresh-read revision `000002` and the lease index regardless of returned status;
8. accept success only if durable state proves valid EXPIRED revision `000002` plus index CAS `377 → 378`, `activeLeases=[]`, `nextLeaseEpoch=190`;
9. if ambiguous/failure/unobservable completion occurs, make no second call and return to Architect.

No new lease, worker preparation/delivery, browser, governed-host mutation, Architect-trigger mutation, source/test/config/package mutation, docs-by-Executor, AFFOTECH, Drive, deployment, tenant, business, or private-data mutation is authorized.

Only after epoch-189 recovery is independently accepted may worker-delivery preparation resume.

## 7. Documentation / future intent

ORCH-000192: `documentationImpact=FULL`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification and creates no current implementation authority.
