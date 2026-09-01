Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000190 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source did not change through ORCH-000190.

## 2. Permanent recovery contracts

- mutation-lease index entries are reduced locators; hydrate and verify the full immutable lease before full-schema reconciliation;
- canonical semantic SHA-256 and Git blob SHA are separately typed identities and must never be compared directly;
- the ORCH-000187-proven reconciliation caller uses one object containing full immutable `lease`, exact `reconciliationBinding`, and integer `nowMs`;
- historical ORCH-000185 exact causation remains unknown because its launcher is absent.

## 3. ORCH-000189 — pre-call evidence ambiguity

ORCH-000189 passed typed-hash preconditions and pure projection. Its prerequisite durable pre-call snapshot `createJson` returned `AMBIGUOUS`; fresh readback proved that exact path absent. Therefore real reconciliation was not invoked.

Durable safety after ORCH-000189:

- real reconciliation calls `0`;
- revision `000002` absent;
- index revision `377`;
- `nextLeaseEpoch=190`;
- one ACTIVE-but-expired epoch-189 lease remains;
- delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` unchanged;
- Architect trigger `ARCH-TRIGGER-9333-000005/SENT` unchanged.

## 4. ORCH-000190 — ACCEPTED createJson ambiguity diagnostic

Executor terminal:

`GH-PUB-190-PRECALL-CREATEJSON-AMBIGUITY-DIAGNOSTIC-000001`

Architect decision:

`GH-DEC-190-PRECALL-CREATEJSON-TRANSPORT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`

Accepted findings:

- ORCH-000190 satisfied the mutation-disabled diagnostic contract;
- `createJson` performs target precheck, one PUT, then exact post-write readback;
- PUT response body is not used as the final creation proof;
- matching post-write readback can yield `CREATED` even if the PUT result itself is missing/throws;
- absent post-write readback can yield `AMBIGUOUS / POST_MUTATION_ABSENT` for multiple transport branches;
- ORCH-000189 did not persist enough live adapter throw/status/readback detail to identify its exact branch;
- classification `PRECALL_CREATEJSON_TRANSPORT_AMBIGUITY_WITHOUT_DURABLE_EFFECT` is accepted;
- accepted source patch required `false`;
- external target mutation requests in ORCH-000190 `0`;
- real reconciliation calls `0`;
- the real reconciliation budget remains unconsumed.

## 5. Current durable lease boundary

Fresh verified state after ORCH-000190:

- lease `MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0`;
- epoch `189`;
- immutable revision `000001` remains ACTIVE but expired;
- revision `000002` absent;
- mutation-lease index revision `377`;
- `nextLeaseEpoch=190`;
- exactly one active index entry;
- latest delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 6. Next legal action — ORCH-000191

Architect authorizes exactly one real expired-lease reconciliation attempt, but **without** a separate prerequisite pre-call `createJson` evidence publication.

ORCH-000191 must:

1. require unchanged durable pre-state and revision `000002` absence;
2. hydrate/verify full immutable revision `000001`;
3. keep canonical SHA-256 and Git blob SHA separately typed;
4. pass the pure projection gate;
5. construct the same bounded pre-call/adapter diagnostic data in memory only;
6. instrument the request adapter without changing request semantics;
7. invoke accepted `reconcileExpiredMutationLease` exactly once and await completely;
8. immediately fresh-read revision `000002` and the lease index regardless of returned status;
9. classify success only if durable state proves valid EXPIRED revision `000002` plus index CAS `377 → 378`, `activeLeases=[]`, `nextLeaseEpoch=190`;
10. if result/completion is ambiguous, issue no second reconciliation call and return durable terminal evidence.

No new lease, worker preparation/delivery, browser, governed-host mutation, Architect-trigger mutation, source/test/config/package mutation, docs-by-Executor, AFFOTECH, Drive, deployment, tenant, business, or private-data mutation is authorized.

Only after epoch-189 recovery is independently accepted may worker-delivery preparation resume.

## 7. Documentation / future intent

ORCH-000190: `documentationImpact=FULL`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification and creates no current implementation authority.
