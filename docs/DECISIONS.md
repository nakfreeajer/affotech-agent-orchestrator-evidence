Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000188 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence, governing policy, and immutable Architect decisions

# Architect Decisions

Architect classifications are exactly `ACCEPTED`, `BLOCKED`, `INCONCLUSIVE`, `NO NEW REPORT`. Executor PASS/COMPLETED/READY is evidence only.

## Permanent authority decisions

- Rony is final human authority.
- Architect governs, verifies, decides, defines next bounded authority, owns canonical documentation, and preserves material future intent separately from current truth.
- Executor performs bounded implementation/runtime/validation work and publishes first-hand evidence.
- Orchestrator is independent deterministic control-plane infrastructure once qualified.
- GitHub durable evidence is machine authority.
- No blind retry after ambiguous external mutation.
- Historical evidence is immutable in meaning.
- AFFOTECH and protected resources remain separate until explicitly authorized.

## ORCH-000184 — ACCEPTED permanent full-lease caller contract

Decision:

`GH-DEC-184-EXPIRED-LEASE-CALLER-ARGUMENT-CONTRACT-ACCEPTED`

The mutation-lease index entry is a reduced locator/projection and cannot substitute for the canonical complete immutable `MUTATION_LEASE` record when validation/projection/reconciliation requires the full schema.

Permanent sequence:

`index locator → hydrate exact immutable revision → verify binding → pass full immutable record`.

`sourcePatchRequired=false`.

## ORCH-000185 — BLOCKED before external mutation

Decision:

`GH-DEC-185-FULL-IMMUTABLE-RECONCILIATION-PREMUTATION-DENIAL-BLOCKED`

The full immutable target was reportedly hydrated and reconciliation invoked once, but the call still returned `DENIED / EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`. Durable state remained unchanged. No additional retry was authorized.

## ORCH-000186 — ACCEPTED bounded diagnostic; observability insufficient

Decision:

`GH-DEC-186-INVOCATION-PARITY-OBSERVABILITY-INSUFFICIENT-ACCEPTED`

The pure projection path was proven valid with the full immutable lease. However, durable ORCH-000185 evidence did not preserve the actual invocation field-by-field, so exact historical mismatch remained unproven. `sourcePatchRequired=false`; retry remained unauthorized.

## ORCH-000187 — ACCEPTED corrected caller reaches mutation boundary

Decision:

`GH-DEC-187-CORRECTED-CALLER-PROJECTION-BOUNDARY-ACCEPTED`

The corrected mutation-disabled caller used one object containing the full immutable lease, exact reconciliation binding, and integer `nowMs`; validation/projection succeeded and awaited execution reached creation of revision `000002`. The historical ORCH-000185 launcher is absent, so its exact historical mismatch remains unproven.

`documentationImpact=FULL`; `futureIdeaImpact=NONE`; accepted source unchanged.

## ORCH-000188 — BLOCKED by hash-namespace precondition mismatch

Executor terminal:

`GH-PUB-188-FAILED-BEFORE-MUTATION-PRECONDITION-DRIFT-000001`

Architect decision:

`GH-DEC-188-PRECONDITION-HASH-NAMESPACE-MISMATCH-BLOCKED`

Architect classification: `BLOCKED`.

Verified facts:

- ORCH-000188 failed closed before pure projection, pre-call snapshot, and real reconciliation;
- `reconcileExpiredMutationLease` real call count = `0`;
- lease/index mutations = `0`;
- index remains `377`, `nextLeaseEpoch=190`, one ACTIVE-but-expired epoch-189 target;
- revision `000002` remains absent;
- delivery and Architect-trigger pointers are unchanged;
- accepted source remains GH-PUB-165.

The Executor reported expected immutable lease SHA `320a5ba0...d83069` but observed `514e37fd...26c28`. Architect independently established that these values belong to different hash namespaces:

- `320a5ba0...d83069` is the protocol canonical SHA-256 of the parsed lease under compact accepted serialization and matches the index/ORCH-000187 semantic binding;
- `514e37fd...26c28` is the GitHub Contents API / Git blob SHA.

Therefore real state drift is **not** proven. The blocker is a precondition-comparator defect caused by comparing Git blob identity to canonical SHA-256.

Permanent typed-hash contract:

> Carry canonical semantic/content SHA-256 and Git blob SHA as separate named values. Never compare them directly. Canonical SHA-256 binds immutable record semantics to the Orchestrator index; Git blob SHA is used only for GitHub object identity/CAS semantics.

`sourcePatchRequired=false` because the accepted runtime reconciliation path is not shown defective; the repair belongs to bounded Executor caller/precondition composition.

Documentation decision:

- `documentationImpact=FULL` — lasting hash identity/countermeasure contract established;
- `futureIdeaImpact=NONE`.

Retry decision:

The one-real-call recovery budget authorized after ORCH-000187 is unconsumed because ORCH-000188 made zero real reconciliation calls. Architect authorizes ORCH-000189 to perform at most one real reconciliation after the hash precondition is corrected.

## Next legal action

ORCH-000189 must:

- require current decision `GH-DEC-188-PRECONDITION-HASH-NAMESPACE-MISMATCH-BLOCKED`;
- require pre-state index `377`, next epoch `190`, one ACTIVE-but-expired epoch-189 target, revision `000002` absent;
- fetch immutable revision `000001` and record the returned GitHub `sha` explicitly as `gitBlobSha`;
- parse the immutable lease and compute `canonicalLeaseSha256=SHA256(JSON.stringify(parsedLease))` under the accepted stored-field-order compact representation;
- require canonical SHA-256 exactly `320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069` and equality to index `recordSha256`/`immutableRecordSha256`;
- treat Git blob SHA separately and never compare it to the canonical SHA-256;
- preserve the ORCH-000187-proven caller shape and bounded pre-call/request/CAS observability;
- invoke real reconciliation at most once;
- require durable success as revision `000002` EXPIRED plus index CAS `377 → 378`, `activeLeases=[]`, `nextLeaseEpoch=190`;
- on ambiguity/failure, perform no second call and return to Architect.

No new lease, worker delivery, browser, host, Architect trigger, source/test/config/package, docs-by-Executor, accepted-source, AFFOTECH, Drive, deployment, tenant, business, or private-data mutation is authorized.
