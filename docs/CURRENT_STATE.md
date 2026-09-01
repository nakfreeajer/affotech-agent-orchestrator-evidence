Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000188 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source did not change through ORCH-000188.

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

## 4. Proven corrected reconciliation caller

ORCH-000187 proved under mutation-disabled stubs that the accepted runtime reaches the external revision-create boundary when called with one object containing:

- `lease`: full immutable current revision;
- `reconciliationBinding`: exact accepted identity/holder/lineage/scope/envelope binding;
- `nowMs`: integer current time.

For epoch 189 the canonical lease SHA-256 is:

`320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069`

The historical ORCH-000185 launcher is absent, so its exact caller mismatch remains unproven and must not be invented.

## 5. ORCH-000188 — BLOCKED before mutation by hash-namespace mismatch

Executor terminal:

`GH-PUB-188-FAILED-BEFORE-MUTATION-PRECONDITION-DRIFT-000001`

Architect decision:

`GH-DEC-188-PRECONDITION-HASH-NAMESPACE-MISMATCH-BLOCKED`

ORCH-000188 correctly failed closed before the pure projection gate, pre-call snapshot, or real reconciliation call. The reported precondition drift was not real lease drift.

The failed comparison mixed two distinct typed hashes:

- project canonical semantic/content SHA-256: `320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069`;
- GitHub Contents API blob SHA: `514e37fddd80cfceae87d260e73acebd34526c28`.

The 64-hex canonical SHA-256 is recomputed from the parsed immutable lease using compact JSON serialization preserving its stored field order. It matches the lease index and ORCH-000187 evidence exactly. The 40-hex Git blob SHA is a different Git object identity and must never be compared directly to the canonical SHA-256.

Therefore:

- real state drift = false;
- accepted source patch required = false;
- real reconciliation call count = `0`;
- lease/index mutations = `0`;
- the one-real-call recovery budget remains unconsumed.

## 6. Current durable lease boundary

Fresh verified state after ORCH-000188:

- lease `MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0`;
- epoch `189`;
- immutable revision `000001` remains `ACTIVE` but expired;
- canonical SHA-256 `320a5ba0...d83069`;
- Git blob SHA `514e37fd...26c28`;
- revision `000002` absent;
- mutation-lease index revision `377`;
- `nextLeaseEpoch=190`;
- exactly one active index entry = epoch-189 target;
- latest delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 7. Next legal action — ORCH-000189

Reissue the same one-shot real reconciliation with a corrected typed hash precondition.

Before mutation, ORCH-000189 must independently verify both values without conflating them:

1. fetch immutable revision `000001`;
2. treat GitHub response `sha` as `gitBlobSha` only;
3. parse the lease and compute `canonicalLeaseSha256 = SHA256(JSON.stringify(parsedLease))` using the accepted stored field order/compact serialization;
4. require `canonicalLeaseSha256=320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069` and equality with the index-advertised `recordSha256`/`immutableRecordSha256`;
5. record `gitBlobSha=514e37fddd80cfceae87d260e73acebd34526c28` separately for GitHub object/CAS diagnostics only;
6. preserve the ORCH-000187-proven caller shape and ORCH-000188 pre-call/request observability;
7. invoke real reconciliation at most once.

Success still requires immutable revision `000002` EXPIRED and exactly one index CAS `377 → 378`, leaving `activeLeases=[]` and `nextLeaseEpoch=190`.

If any real result is ambiguous, no second real call is authorized.

Only after epoch-189 recovery is independently accepted may worker-delivery preparation resume.

## 8. Documentation / future intent

ORCH-000188: `documentationImpact=FULL`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification and creates no current implementation authority.
