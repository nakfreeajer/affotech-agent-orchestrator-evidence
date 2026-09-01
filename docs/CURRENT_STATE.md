Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000189 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source did not change through ORCH-000189.

## 2. Active role model

- Rony = final human authority.
- Architect = verification, governance, decisions, architecture, next bounded authority, canonical documentation ownership, and material future-intent preservation.
- Executor = bounded implementation/runtime/test/validation work.
- Orchestrator = independent persistent deterministic control-plane service once qualified.
- Curator = eliminated from the active model; historical Curator evidence remains history only.

## 3. Permanent lease-record and hash contracts

Mutation-lease `activeLeases` index entries are reduced locator/projection records. When validation/projection/reconciliation requires a complete `MUTATION_LEASE`, the caller must:

`index locator → hydrate exact immutable revision → verify exact binding → pass full immutable record`.

Canonical semantic/content SHA-256 and Git blob SHA are separately typed values. Canonical SHA-256 binds immutable record semantics to the Orchestrator index; Git blob SHA is only Git object identity/CAS metadata. They must never be compared directly.

For epoch-189 revision `000001`:

- canonical lease SHA-256 = `320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069`;
- Git blob SHA = `514e37fddd80cfceae87d260e73acebd34526c28`.

## 4. Proven corrected reconciliation caller

ORCH-000187 proved under mutation-disabled stubs that the accepted runtime reaches the external revision-create boundary when called with one object containing:

- `lease`: full immutable current revision;
- `reconciliationBinding`: exact accepted identity/holder/lineage/scope/envelope binding;
- `nowMs`: integer current time.

The historical ORCH-000185 launcher is absent, so its exact caller mismatch remains unproven and must not be invented.

## 5. ORCH-000188 — BLOCKED hash-namespace precondition mismatch

Architect decision:

`GH-DEC-188-PRECONDITION-HASH-NAMESPACE-MISMATCH-BLOCKED`

ORCH-000188 failed closed before reconciliation because a precondition check compared the canonical SHA-256 to the Git blob SHA. Independent verification proved no real lease drift. Real reconciliation calls remained `0`, revision `000002` remained absent, and index stayed `377`.

## 6. ORCH-000189 — INCONCLUSIVE pre-call evidence write

Executor terminal:

`GH-PUB-189-TYPED-HASH-CORRECTED-CALLER-RECONCILIATION-INCONCLUSIVE-000001`

Architect decision:

`GH-DEC-189-PRECALL-EVIDENCE-WRITE-AMBIGUOUS-INCONCLUSIVE`

Verified facts:

- typed hash preconditions passed;
- canonical lease SHA-256 matched exactly;
- Git blob SHA was kept separate;
- pure projection gate passed and produced a valid projected EXPIRED revision;
- required pre-call snapshot `createJson` returned `AMBIGUOUS`;
- fresh GitHub readback found the exact pre-call path absent;
- `reconcileExpiredMutationLease` real call count = `0`;
- revision `000002` remains absent;
- lease index remains revision `377`, `nextLeaseEpoch=190`, one ACTIVE-but-expired epoch-189 target;
- latest delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger remains `ARCH-TRIGGER-9333-000005/SENT`;
- no lease/index, source, browser, host, worker-delivery, Architect-trigger, AFFOTECH, or Drive mutation occurred.

The one-real-reconciliation-call budget therefore remains unconsumed. However, another external mutation attempt is not authorized until the pre-call `createJson → AMBIGUOUS → absent-on-readback` behavior is diagnosed.

## 7. Current durable lease boundary

Fresh verified state after ORCH-000189:

- lease `MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0`;
- epoch `189`;
- immutable revision `000001` remains `ACTIVE` but expired;
- revision `000002` absent;
- mutation-lease index revision `377`;
- `nextLeaseEpoch=190`;
- exactly one active index entry = epoch-189 target;
- latest delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 8. Next legal action — ORCH-000190

Run a strictly mutation-disabled diagnostic of the ORCH-000189 pre-call snapshot publication path before any new real reconciliation attempt.

The diagnostic must determine, from accepted source and bounded reproduction, the exact first deterministic cause of the `createJson` AMBIGUOUS result, including request construction, expected/observed response semantics, status/body normalization, Promise/await behavior, and why durable readback was absent.

No real reconciliation, lease/index mutation, pre-call snapshot retry, new lease, worker delivery, browser, host, trigger, source/test mutation, AFFOTECH, or Drive mutation is authorized.

Only after ORCH-000190 is independently reviewed may Architect decide whether a source repair, caller/composition repair, or reissued one-shot reconciliation is justified.

## 9. Documentation / future intent

ORCH-000189: `documentationImpact=STATE`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification and creates no current implementation authority.
