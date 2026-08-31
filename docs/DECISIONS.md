Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000187 Architect review
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

Executor terminal:

`GH-PUB-187-CALLER-OBSERVABILITY-CAPTURE-DIAGNOSTIC-000001`

Architect decision:

`GH-DEC-187-CORRECTED-CALLER-PROJECTION-BOUNDARY-ACCEPTED`

Architect classification: `ACCEPTED` for the bounded read-only diagnostic.

Verified/accepted findings:

- the historical ORCH-000185 launcher is absent and its exact arguments cannot be reconstructed;
- the corrected mutation-disabled caller used one object containing the full immutable lease, exact reconciliation binding, and integer `nowMs`;
- captured lease SHA-256 `320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069` semantically equals immutable revision `000001`;
- full lease validation succeeded;
- expiry projection produced a valid `leaseRevision=2 / state=EXPIRED` object;
- awaited execution reached the first would-be external mutation at creation of revision `000002`;
- the stub intercepted that write, so real reconciliation calls and lease/index mutations remained zero;
- classification `PROJECTION_SUCCEEDS_WITH_STUBBED_REAL_CALLER` is accepted;
- `correctedCallShapeProven=true`;
- `sourcePatchRequired=false`;
- accepted source remains GH-PUB-165.

Historical-causation boundary:

> Do not infer the exact ORCH-000185 mismatch. The accepted durable conclusion is that the corrected caller shape succeeds through validation/projection and reaches the first mutation boundary.

Documentation decision:

- `documentationImpact=FULL` — TEST-1 YES, TEST-2 NO, TEST-3 YES because ORCH-000187 established a reusable caller/observability contract and a permanent historical-evidence boundary;
- `futureIdeaImpact=NONE`.

Retry decision:

Architect authorizes exactly **one** instrumented real expired-lease reconciliation attempt under ORCH-000188, using the ORCH-000187-proven caller shape. This is not authorization for any further retry.

## Next legal action

ORCH-000188 must:

- require the exact pre-state: index `377`, next epoch `190`, one ACTIVE-but-expired epoch-189 target, revision `000002` absent;
- hydrate and verify immutable revision `000001`;
- use the proven one-object caller shape with full lease, exact reconciliation binding, and integer `nowMs`;
- preserve bounded caller/projector/await/request observability;
- invoke real `reconcileExpiredMutationLease` at most once;
- determine outcome from durable GitHub readback;
- on success require immutable revision `000002` EXPIRED and exactly one index CAS `377 → 378`, leaving `activeLeases=[]` and `nextLeaseEpoch=190`;
- on ambiguity or failure, make no second call and return to Architect.

No worker preparation/delivery, new lease, browser, governed host, Architect trigger, source/test/config/package, docs-by-Executor, accepted-source, AFFOTECH, Drive, deployment, tenant, business, or private-data mutation is authorized.
