Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000185 Architect review
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
- target revision `000002` remains absent;
- index remains revision `377`, `nextLeaseEpoch=190`, exactly one expired ACTIVE target lease;
- latest delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger remains `ARCH-TRIGGER-9333-000005/SENT`;
- browser/host/source/AFFOTECH/Drive mutations remain zero.

Interpretation:

ORCH-000184's full-record caller contract remains accepted, but full-record hydration alone did not eliminate the denial. An additional mismatch remains between the required/preflight projection semantics and the actual reconciliation invocation or its async/error boundary.

The Executor's `safeSingleRetry=true` is evidence/suggestion only and does not grant retry authority. Architect sets `retryAuthorized=false` until a read-only diagnostic resolves the remaining difference.

Documentation decision:

- `documentationImpact=STATE` — TEST-1 YES because the next legal action changed; TEST-2 YES because no new permanent root cause/contract beyond ORCH-000184 has yet been established;
- `futureIdeaImpact=NONE`.

## Next legal action

ORCH-000186 must be read-only and compare the pre-mutation pure projection/validation path with the actual reconciliation invocation field-for-field.

It must inspect at minimum:

- exact accepted function signatures and arguments;
- the hydrated lease object used in each path;
- `nowMs` / expiry time;
- releaser / `releasedBy` / operation reference;
- previous-record SHA binding;
- lease-index/CAS binding;
- project/holder/message/dispatch/milestone/scope/envelope arguments;
- whether the pure projection gate actually ran and its exact result/object;
- Promise return type, `await` behavior, synchronous throw vs async rejection, and caught-error serialization;
- exact source branch producing `EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`.

Until ORCH-000186 is accepted:

- reconciliation calls `0`;
- no new lease;
- no preparation/delivery `000014`;
- no browser/host/trigger/source/protected-resource mutation.
