Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000186 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence, governing policy, and immutable Architect decisions

# Architect Decisions

Architect classifications are exactly `ACCEPTED`, `BLOCKED`, `INCONCLUSIVE`, `NO NEW REPORT`. Executor PASS/COMPLETED is evidence only.

## Permanent authority decisions

- Rony is final human authority.
- Architect governs, verifies, decides, defines next bounded authority, owns canonical human-readable documentation, and preserves material future intent separately from current truth.
- Executor performs bounded implementation/runtime/validation work and publishes first-hand evidence.
- Orchestrator is independent persistent deterministic control-plane infrastructure once qualified; it routes/enforces accepted state-machine rules but does not interpret project semantics.
- GitHub durable evidence is machine authority.
- No blind retry after ambiguous external mutation.
- Historical evidence is immutable in meaning.
- AFFOTECH and protected resources remain separate until explicitly authorized.

## Documentation and future-intent governance

Curator is eliminated from the active project model. Architect owns documentation directly.

Documentation impact is decided through `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0:

`TEST-1 current-truth change → TEST-2 state-only? → TEST-3 lasting truth? → per-document selection test`.

Architect independently classifies `futureIdeaImpact=NONE|CAPTURE|PROMOTE`; idea/roadmap records create zero implementation authority.

## ORCH-000184 — ACCEPTED permanent caller contract

Current accepted decision:

`GH-DEC-184-EXPIRED-LEASE-CALLER-ARGUMENT-CONTRACT-ACCEPTED`

ORCH-000184 established the permanent contract that mutation-lease index entries are reduced locator/projection records and cannot substitute for the canonical full immutable `MUTATION_LEASE` revision when an operation requires `validateMutationLease`-compatible input.

The correct caller sequence is:

`index locator → hydrate exact immutable revision → verify binding → pass full immutable record`.

Accepted source patch required: `false`.

ORCH-000184 was correctly classified `documentationImpact=FULL` because it established a permanent root cause/caller contract.

## ORCH-000185 — BLOCKED before external mutation

Executor terminal:

`GH-PUB-185-EXPIRED-LEASE-RECONCILIATION-PRE-MUTATION-DENIED-000001`

Architect decision:

`GH-DEC-185-FULL-IMMUTABLE-RECONCILIATION-PREMUTATION-DENIAL-BLOCKED`

Verified facts:

- the corrected ORCH-000185 canonical prompt/immutable dispatch existed before terminal publication;
- the full immutable epoch-189 revision `000001` was hydrated and validated;
- accepted `reconcileExpiredMutationLease` was invoked exactly once;
- the call still returned `DENIED / EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`;
- the external mutation boundary was not reached;
- lease revision writes `0`;
- lease-index CAS writes `0`;
- target revision `000002` remained absent;
- index remained revision `377`, `nextLeaseEpoch=190`, exactly one expired ACTIVE target lease;
- latest delivery remained `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger remained `ARCH-TRIGGER-9333-000005/SENT`;
- browser/host/source/AFFOTECH/Drive mutations remained zero.

Interpretation:

ORCH-000184's full-record caller contract remained accepted, but full-record hydration alone did not eliminate the denial. An additional mismatch remained between the required/preflight projection semantics and the actual reconciliation invocation or its async/error boundary.

Architect set `retryAuthorized=false` pending read-only diagnosis.

Documentation decision:

- `documentationImpact=STATE`;
- `futureIdeaImpact=NONE`.

## ORCH-000186 — ACCEPTED bounded diagnostic; observability insufficient

Executor terminal:

`GH-PUB-186-EXPIRED-LEASE-INVOCATION-PARITY-DIAGNOSTIC-000001`

Architect decision:

`GH-DEC-186-INVOCATION-PARITY-OBSERVABILITY-INSUFFICIENT-ACCEPTED`

Architect classification: `ACCEPTED`.

This acceptance applies to the bounded read-only diagnostic contract, not to lease recovery itself.

Verified/accepted findings:

- the mutation-disabled pure projection gate executed against the full immutable epoch-189 revision `000001`;
- the full immutable target validated;
- the accepted projector produced a valid `leaseRevision=2 / state=EXPIRED` projection when supplied the expected previous-record SHA, integer `nowMs`, and canonical EXPIRED releaser;
- therefore the accepted schema/projector is not shown defective;
- the actual ORCH-000185 reconciliation invocation cannot be reconstructed field-by-field from durable evidence;
- the preserved ORCH-000185 evidence omits the exact lease argument, previous-record hash, `nowMs`, releaser, awaited Promise outcome, and innermost failure;
- Executor classification `OBSERVABILITY_INSUFFICIENT` is accepted for ORCH-000186;
- `sourcePatchRequired=false`;
- `safeReconciliationRetry=false`;
- `retryAuthorized=false`;
- real reconciliation calls in ORCH-000186 `0`;
- lease mutations `0`;
- current lease index remains revision `377`, `nextLeaseEpoch=190`, exactly one active epoch-189 target lease;
- revision `000002` remains absent;
- latest delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- accepted source remains `GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`.

Documentation decision:

- `documentationImpact=STATE` — TEST-1 YES because the current legal recovery position advanced; TEST-2 YES because no new lasting architecture, interface, capability, contract, permanent root cause, or reusable engineering rule beyond ORCH-000184 was accepted;
- `futureIdeaImpact=NONE`.

## Next legal action

Canonical ORCH-000187 / DISPATCH-000187 authority is a strictly read-only caller-observability capture diagnostic bound to `GH-DEC-186-INVOCATION-PARITY-OBSERVABILITY-INSUFFICIENT-ACCEPTED`.

It must, under deterministic mutation-disabled stubs:

- recover/read the ORCH-000185 launcher if still available without modifying it;
- reproduce the same caller composition to the maximum deterministically recoverable extent;
- capture the exact reconciliation call signature and full lease argument content/hash;
- capture previous-record SHA, `nowMs`, releaser/releasedBy, operation reference, identity/scope/envelope/index bindings;
- instrument caller → reconciliation → projector → validator → first would-be external mutation boundary;
- capture synchronous throw vs Promise rejection/resolution and awaited result;
- prove semantic equality or mismatch between the captured lease argument and immutable revision `000001`;
- identify the first deterministic mismatch versus successful ORCH-000169/173 invocation semantics, if possible.

Until a later Architect decision explicitly authorizes retry:

- real reconciliation calls `0`;
- no lease/index mutation;
- no new lease;
- no preparation/delivery `000014`;
- no browser/host/trigger/source/protected-resource mutation.