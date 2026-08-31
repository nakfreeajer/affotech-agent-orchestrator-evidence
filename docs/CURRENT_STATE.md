Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000187 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source did not change through ORCH-000187.

## 2. Active role model

- Rony = final human authority.
- Architect = verification, governance, decisions, architecture, next bounded authority, canonical documentation ownership, and material future-intent preservation.
- Executor = bounded implementation/runtime/test/validation work.
- Orchestrator = independent persistent deterministic control-plane service once qualified.
- Curator = eliminated from the active model; historical Curator evidence remains history only.

## 3. Permanent lease-record contract

Mutation-lease `activeLeases` index entries are reduced locator/projection records. When a validator/projector/reconciliation path requires a complete `MUTATION_LEASE`, the caller must:

`index locator → hydrate exact immutable revision → verify exact binding → pass full immutable record`.

A reduced index entry must not substitute for the immutable revision.

## 4. ORCH-000185 / ORCH-000186 recovery findings

ORCH-000185 used a full immutable epoch-189 lease but still reported `DENIED / EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID` before external mutation. Its historical launcher did not preserve enough durable caller-level observability to prove the exact mismatch.

ORCH-000186 was accepted as a read-only diagnostic: the full immutable lease and pure expiry projector are valid, but the actual ORCH-000185 call could not be reconstructed field-by-field. No source patch was justified and no retry was authorized at that stage.

## 5. ORCH-000187 — ACCEPTED corrected-caller proof

Executor terminal:

`GH-PUB-187-CALLER-OBSERVABILITY-CAPTURE-DIAGNOSTIC-000001`

Architect decision:

`GH-DEC-187-CORRECTED-CALLER-PROJECTION-BOUNDARY-ACCEPTED`

Accepted findings:

- historical `orch-000185-reconcile.mjs` is absent; do not invent its exact caller arguments or a historical root cause beyond what durable evidence proves;
- the mutation-disabled reproduction used the accepted runtime call shape with one object containing the full immutable revision `000001`, exact reconciliation binding, and integer `nowMs`;
- the captured lease argument SHA-256 was `320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069` and semantically equaled immutable revision `000001`;
- validation succeeded;
- the accepted projector constructed a valid `leaseRevision=2 / state=EXPIRED` record;
- awaited execution reached the first would-be external mutation boundary:
  `createJson(evidence/host-runtime/mutation-leases/MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0/revisions/000002.json)`;
- the stub blocked that mutation and the runtime normalized the harness rejection as `EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`;
- classification `PROJECTION_SUCCEEDS_WITH_STUBBED_REAL_CALLER` is accepted;
- `correctedCallShapeProven=true`;
- `sourcePatchRequired=false`;
- ORCH-000187 made zero real reconciliation calls and zero lease/index/source/browser/host/AFFOTECH/Drive mutations.

Permanent recovery rule added by ORCH-000187: a real retry must preserve the proven full-immutable one-object caller shape and bounded caller/projector/await observability. Historical ORCH-000185 exact causation remains unknown because its launcher is absent.

## 6. Current durable lease boundary

Fresh verified state after ORCH-000187:

- lease `MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0`;
- epoch `189`;
- immutable revision `000001` exists and remains `ACTIVE` but expired;
- revision `000002` absent;
- mutation-lease index revision `377`;
- `nextLeaseEpoch=190`;
- exactly one active index entry = the epoch-189 target;
- latest delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 7. Next legal action — ORCH-000188

Architect has authorized exactly one instrumented real expired-lease reconciliation attempt using the ORCH-000187-proven caller shape.

Required success state:

- full immutable revision `000002` exists as `leaseRevision=2`, `leaseEpoch=189`, `state=EXPIRED`;
- `previousRecordSha256` binds exactly to revision `000001`;
- identity/holder/lineage/scope/envelope fields are preserved;
- lease index performs exactly one CAS `377 → 378`;
- final `nextLeaseEpoch=190`;
- final `activeLeases=[]`;
- no new lease, worker preparation/delivery, browser, host, trigger, source, docs-by-Executor, AFFOTECH, Drive, deployment, tenant, business, or private-data mutation.

If the real call is ambiguous, errors, or process completion is unobservable, do not retry. Determine outcome only from durable GitHub readback and return to Architect.

Only after epoch-189 recovery is independently accepted may worker-delivery preparation resume.

## 8. Documentation / future intent

ORCH-000187: `documentationImpact=FULL`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification and creates no current implementation authority.
