Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000182 Architect review
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

Executor terminal:

`GH-PUB-182-EXPIRED-WORKER-LEASE-RECONCILIATION-INCONCLUSIVE-000001`

Executor classified its run `INCONCLUSIVE`: one authorized `reconcileExpiredMutationLease` call was launched, but the disposable process yielded no observable completion output.

Architect independently read the exact external namespace and found:

- revision `000002` absent;
- lease index unchanged at revision `377`;
- `nextLeaseEpoch=190`;
- the same single epoch-189 lease remains indexed ACTIVE;
- latest delivery `000013/SENT` unchanged;
- latest Architect trigger `000005/SENT` unchanged;
- browser/host/source/protected-resource side effects zero.

Therefore Architect final classification is:

`GH-DEC-182-EXPIRED-WORKER-LEASE-RECONCILIATION-NO-DURABLE-EFFECT-BLOCKED`

Rationale:

The ORCH-000182 attempt did not durably mutate either authorized external resource. Its internal completion remains unobservable, but the mutation effect is independently proven absent. A new attempt may therefore be separately authorized after this read-only reconciliation; that is not a blind retry.

Documentation decision:

- `documentationImpact=STATE` — TEST-1 YES, TEST-2 YES; current recovery/next-legal-action changed, no lasting accepted capability/contract changed.
- `futureIdeaImpact=NONE`.

## Next recovery direction

The next recovery must make one new instrumented expired-lease reconciliation attempt from the unchanged revision-377 boundary, using the ORCH-000173 proven request-level trace pattern.

It must not rely on stdout as authority. Durable GitHub revision/index readback determines outcome.

Success remains:

`revision 000002=EXPIRED → index 377→378 → nextLeaseEpoch=190 → activeLeases=[]`.

No preparation, new lease, delivery, browser, host, Architect trigger, tracked source, or protected-resource activity is authorized until the expired lease is closed.
