Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000183 Architect review
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

Documentation impact is decided through `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0 under project/memory policy v1.4:

`TEST-1 current-truth change → TEST-2 state-only? → TEST-3 lasting truth? → per-document selection test`.

Milestone status alone never determines documentation impact. `FULL` does not mean rewrite every Markdown file.

Architect independently also classifies `futureIdeaImpact=NONE|CAPTURE|PROMOTE`; idea/roadmap records create zero implementation authority.

Current adopted future item:

`IDEA-0001 — Deterministic Architect documentation-closure marker` = `ADOPTED_FOR_FUTURE`.

## Proven foundations relevant to current transport seam

- ORCH-000153 — exactly-once Executor forward delivery.
- ORCH-000163 — exactly-once Architect wake.
- ORCH-000165 — accepted source, `817/817` deterministic suite.
- ORCH-000166/167 — persistent-host idle and automatic newer-dispatch observation.
- ORCH-000173 — expired worker-delivery lease reconciliation succeeded with bounded request instrumentation.
- ORCH-000177/178 — corrected HTTP status mapping and accepted lease acquire/release proven.
- ORCH-000179 — preparation reached and proved transient `actionKind=WORKER_DELIVERY` requirement.

## ORCH-000181 — BLOCKED

Decision:

`GH-DEC-181-WORKER-DELIVERY-IN-PROCESS-PREFLIGHT-EXPIRED-LEASE-BLOCKED`

Epoch `189` was acquired/indexed and transient `actionKind=WORKER_DELIVERY` constructed, but preparation was never called and the lease expired while still indexed ACTIVE at revision `377`.

## ORCH-000182 — BLOCKED after independent reconciliation

Decision:

`GH-DEC-182-EXPIRED-WORKER-LEASE-RECONCILIATION-NO-DURABLE-EFFECT-BLOCKED`

The single reconciliation launcher had unobservable completion, but Architect independently proved revision `000002` absent and index revision `377` unchanged. Therefore the authorized mutation effect was durably absent and one new separately authorized attempt could be made without violating no-blind-retry.

## ORCH-000183 — BLOCKED at projection validation

Executor terminal:

`GH-PUB-183-EXPIRED-WORKER-LEASE-RECONCILIATION-PROJECTION-BLOCKED-000001`

Architect verified:

- required pre-state passed;
- exactly one accepted `reconcileExpiredMutationLease` call;
- deterministic result `DENIED`;
- reason `EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`;
- target revision `000002` absent;
- index remains revision `377` with the epoch-189 lease ACTIVE;
- `nextLeaseEpoch=190`;
- latest delivery `000013/SENT` unchanged;
- Architect trigger `000005/SENT` unchanged;
- zero browser/host/source/protected-resource side effects;
- terminal and milestone convenience pointers advanced normally.

Architect classification:

`GH-DEC-183-EXPIRED-WORKER-LEASE-RECONCILIATION-PROJECTION-INVALID-BLOCKED`

Rationale:

The recovery is no longer externally ambiguous: accepted reconciliation validation denied the projected expired-lease transition before revision/index mutation. The exact validation condition is not yet known, so another reconciliation attempt would be premature.

Documentation decision:

- `documentationImpact=STATE` — TEST-1 YES because next legal recovery action changed; TEST-2 YES because no lasting accepted capability/contract/root cause is established yet.
- `futureIdeaImpact=NONE`.

## Next recovery direction

ORCH-000184 must be read-only. It must compare the ORCH-000183 projection/call shape with accepted ORCH-000165 source and the proven-successful ORCH-000173 reconciliation path, identify the exact field/condition behind `EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`, and recommend the smallest safe repair.

Until that diagnosis is accepted:

- no further expired-lease reconciliation call;
- no new lease;
- no preparation/delivery `000014`;
- no browser/host/trigger/source mutation;
- lease index remains `377`, next epoch `190`, one expired indexed ACTIVE lease.
