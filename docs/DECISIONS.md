Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000189 Architect review
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

Decision: `GH-DEC-184-EXPIRED-LEASE-CALLER-ARGUMENT-CONTRACT-ACCEPTED`.

The mutation-lease index entry is a reduced locator/projection and cannot substitute for the canonical complete immutable `MUTATION_LEASE` record when validation/projection/reconciliation requires the full schema.

Permanent sequence:

`index locator → hydrate exact immutable revision → verify binding → pass full immutable record`.

## ORCH-000185 — BLOCKED before external mutation

Decision: `GH-DEC-185-FULL-IMMUTABLE-RECONCILIATION-PREMUTATION-DENIAL-BLOCKED`.

The full immutable target was reportedly hydrated and reconciliation invoked once, but the call still returned `DENIED / EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`. Durable state remained unchanged.

## ORCH-000186 — ACCEPTED bounded diagnostic; observability insufficient

Decision: `GH-DEC-186-INVOCATION-PARITY-OBSERVABILITY-INSUFFICIENT-ACCEPTED`.

The pure projection path was proven valid with the full immutable lease, but durable ORCH-000185 evidence did not preserve the actual invocation field-by-field. Exact historical mismatch remained unproven.

## ORCH-000187 — ACCEPTED corrected caller reaches mutation boundary

Decision: `GH-DEC-187-CORRECTED-CALLER-PROJECTION-BOUNDARY-ACCEPTED`.

The corrected mutation-disabled caller used the full immutable lease, exact reconciliation binding, and integer `nowMs`; validation/projection succeeded and awaited execution reached creation of revision `000002`. Accepted source remained unchanged.

## ORCH-000188 — BLOCKED hash-namespace mismatch

Decision: `GH-DEC-188-PRECONDITION-HASH-NAMESPACE-MISMATCH-BLOCKED`.

ORCH-000188 failed closed before real reconciliation because a precondition compared project canonical SHA-256 with Git blob SHA. Architect proved those are distinct typed hashes, not real record drift. Real reconciliation calls remained `0`.

Permanent contract:

> Canonical semantic/content SHA-256 and Git blob SHA must remain separately named and must never be compared directly.

## ORCH-000189 — INCONCLUSIVE pre-call evidence write ambiguity

Executor terminal:

`GH-PUB-189-TYPED-HASH-CORRECTED-CALLER-RECONCILIATION-INCONCLUSIVE-000001`

Architect decision:

`GH-DEC-189-PRECALL-EVIDENCE-WRITE-AMBIGUOUS-INCONCLUSIVE`

Architect classification: `INCONCLUSIVE`.

Verified facts:

- typed hash preconditions passed;
- canonical lease SHA-256 matched `320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069`;
- Git blob SHA remained separately typed as `514e37fddd80cfceae87d260e73acebd34526c28`;
- pure projection gate passed;
- required pre-call snapshot write returned `AMBIGUOUS`;
- fresh readback found the exact pre-call path absent;
- real `reconcileExpiredMutationLease` call count = `0`;
- revision `000002` absent;
- lease index remains `377`, `nextLeaseEpoch=190`, one expired ACTIVE epoch-189 target;
- delivery and Architect-trigger pointers unchanged;
- protected side effects remained zero.

Interpretation:

The durable lease state is safely reconciled as unchanged, and the one-real-reconciliation-call budget remains unconsumed. But the pre-call evidence transport ambiguity itself is not yet explained. No further external mutation attempt is authorized until that path is diagnosed.

Documentation decision:

- `documentationImpact=STATE` — current recovery position changed, but no new permanent root cause, contract, or accepted capability has been established yet;
- `futureIdeaImpact=NONE`.

Retry decision:

`retryAuthorized=false` pending ORCH-000190 read-only diagnosis.

## Next legal action

ORCH-000190 must be strictly mutation-disabled and diagnose the exact `createJson → AMBIGUOUS → absent-on-readback` behavior from ORCH-000189. It must inspect/reproduce request construction, response status/body normalization, synchronous vs asynchronous behavior, Promise await resolution/rejection, and the first deterministic cause of ambiguity, comparing against accepted successful GitHub-write semantics where useful.

No real reconciliation, pre-call snapshot retry, lease/index mutation, new lease, worker delivery, browser, host, Architect trigger, tracked source/test/config/package mutation, AFFOTECH, Drive, deployment, tenant, business, or private-data mutation is authorized.
