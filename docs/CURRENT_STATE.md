Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000185 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 2. Active role model

- Rony = final human authority.
- Architect = verification, governance, decisions, architecture, next bounded authority, canonical documentation ownership, and material future-intent preservation.
- Executor = bounded implementation/runtime/test/validation work.
- Orchestrator = independent persistent deterministic control-plane service once qualified.
- Curator = eliminated from the active model; historical Curator evidence remains history only.

## 3. Documentation decision model

Governing files:

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.3
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.4
- `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.4

ORCH-000184 was `documentationImpact=FULL` because it established a permanent caller/root-cause contract. ORCH-000185 is `documentationImpact=STATE`: the next legal recovery action changed, but no additional permanent root cause or accepted-source contract is established yet. `futureIdeaImpact=NONE`.

## 4. Permanent caller contract from ORCH-000184

Mutation-lease `activeLeases` index entries are reduced locator/projection records. They are not substitutes for the canonical full immutable `MUTATION_LEASE` revision when an operation requires `validateMutationLease`-compatible input.

Caller rule:

`index entry → hydrate exact immutable revision → verify exact binding → pass full immutable record`

Accepted source patch for this contract: not required.

## 5. ORCH-000185 — BLOCKED pre-mutation

Executor terminal:

`GH-PUB-185-EXPIRED-LEASE-RECONCILIATION-PRE-MUTATION-DENIED-000001`

Architect decision:

`GH-DEC-185-FULL-IMMUTABLE-RECONCILIATION-PREMUTATION-DENIAL-BLOCKED`

Verified facts:

- corrected ORCH-000185 prompt/immutable dispatch existed before terminal publication;
- full immutable epoch-189 revision `000001` was hydrated and validated;
- `reconcileExpiredMutationLease` was invoked exactly once;
- result remained `DENIED / EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`;
- external mutation boundary was not reached;
- lease revision writes `0`;
- lease-index CAS writes `0`;
- revision `000002` absent;
- mutation-lease index remains revision `377`;
- `nextLeaseEpoch=190`;
- exactly one indexed ACTIVE-but-expired epoch-189 lease remains;
- latest delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger remains `ARCH-TRIGGER-9333-000005/SENT`;
- browser/host/source/AFFOTECH/Drive effects remain zero.

ORCH-000184's full-record contract remains accepted, but hydration alone did not eliminate the denial. Another invocation/projection input or async boundary remains unresolved.

## 6. Next legal action — ORCH-000186 read-only invocation parity diagnostic

Do **not** call reconciliation again yet.

The next diagnostic must compare the pure/pre-mutation projection path and actual `reconcileExpiredMutationLease` call field-for-field and identify the first deterministic difference or failure condition.

Required inspection includes:

- exact accepted function signature and arguments;
- hydrated lease object identity/content;
- `nowMs` / expiry time used by preflight versus actual call;
- releaser / `releasedBy` / operation-reference inputs;
- previous-record SHA binding;
- lease-index binding/CAS preconditions;
- project/holder/message/dispatch/milestone/scope/envelope arguments;
- whether the pure projection gate actually executed and what exact object it validated;
- Promise return type, `await` behavior, synchronous throw vs async rejection, and serialization of returned/caught error details;
- exact source branch that emits `EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID` in the actual invocation.

ORCH-000186 must be read-only: reconciliation calls `0`, lease/index mutation `0`, new lease `0`, delivery/browser/host/trigger/source/protected-resource mutation `0`.

It must classify the exact remaining cause before another reconciliation attempt is authorized.

## 7. Future intent

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification. It creates no implementation authority.
