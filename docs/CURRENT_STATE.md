Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000186 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source did not change through ORCH-000186.

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

ORCH-000184 was `documentationImpact=FULL` because it established a permanent caller/root-cause contract. ORCH-000185 and ORCH-000186 are `documentationImpact=STATE`: the legal recovery position advanced, but no additional permanent root cause, accepted-source contract, or accepted capability was established. `futureIdeaImpact=NONE` for ORCH-000186.

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

ORCH-000184's full-record contract remains accepted, but hydration alone did not eliminate the denial.

## 6. ORCH-000186 — ACCEPTED read-only invocation-parity diagnostic

Executor terminal:

`GH-PUB-186-EXPIRED-LEASE-INVOCATION-PARITY-DIAGNOSTIC-000001`

Architect decision:

`GH-DEC-186-INVOCATION-PARITY-OBSERVABILITY-INSUFFICIENT-ACCEPTED`

Architect classification: `ACCEPTED` for the bounded diagnostic milestone.

Accepted findings:

- the mutation-disabled pure harness executed the accepted projection gate with the full immutable epoch-189 lease;
- the target full immutable revision `000001` validated;
- the pure projector produced a valid `leaseRevision=2 / state=EXPIRED` projection using the expected previous-record SHA, integer `nowMs`, and canonical EXPIRED releaser;
- therefore the accepted schema/projector is not shown defective;
- durable ORCH-000185 evidence does not preserve enough detail to reconstruct the actual reconciliation invocation field-by-field;
- missing durable observability includes the actual lease argument, previous-record hash, `nowMs`, releaser, await resolution, and innermost failure;
- `actualReconcileInvocationReconstructed=false`;
- classification = `OBSERVABILITY_INSUFFICIENT`;
- `sourcePatchRequired=false`;
- `safeReconciliationRetry=false`;
- real reconciliation calls `0` in ORCH-000186;
- lease/browser/host/source/AFFOTECH/Drive mutations `0`.

The accepted source remains ORCH-000165. No reconciliation retry is authorized.

## 7. Current durable lease boundary

Fresh verified state after ORCH-000186:

- lease `MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0`;
- epoch `189`;
- immutable revision `000001` exists and remains `ACTIVE` but expired;
- revision `000002` absent;
- mutation-lease index revision `377`;
- `nextLeaseEpoch=190`;
- exactly one active index entry = the epoch-189 target;
- latest delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 8. Next legal action — ORCH-000187 read-only caller observability capture

Canonical authority already exists:

- message `ORCH-000187`;
- dispatch `DISPATCH-000187`;
- milestone `ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.EXPIRED.WORKER.DELIVERY.LEASE.RECONCILIATION.CALLER.OBSERVABILITY.CAPTURE.DIAGNOSTIC.2F`;
- Architect authority `GH-DEC-186-INVOCATION-PARITY-OBSERVABILITY-INSUFFICIENT-ACCEPTED`;
- dispatch state `MANUAL_TRIGGER_REQUIRED`.

ORCH-000187 must remain strictly mutation-disabled. It must reproduce the ORCH-000185 caller composition as far as deterministically recoverable, stub every external mutation adapter, and capture immediately before/through the reconciliation path:

- exact call signature and positional shape;
- full lease argument canonical content/hash and semantic equality to immutable revision `000001`;
- previous-record SHA argument;
- `nowMs` type/value;
- releaser/releasedBy argument;
- operation reference and identity/scope/envelope bindings;
- projector input and result/null;
- synchronous throw vs Promise rejection/resolution and awaited result;
- first would-be external mutation boundary;
- first deterministic mismatch versus successful historical ORCH-000169/173 semantics.

Protected zero remains mandatory: real reconciliation `0`, lease/index mutation `0`, new lease `0`, worker delivery mutation `0`, browser/host/trigger/source/docs-by-Executor/AFFOTECH/Drive mutation `0`.

Only after a later Architect review proves the exact mismatch and explicitly authorizes a retry may epoch-189 reconciliation be attempted again.

## 9. Future intent

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification. It creates no implementation authority.
