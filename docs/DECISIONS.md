Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000184 Architect review
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

## Proven foundations relevant to current transport seam

- ORCH-000153 — exactly-once Executor forward delivery.
- ORCH-000163 — exactly-once Architect wake.
- ORCH-000165 — accepted source, `817/817` deterministic suite.
- ORCH-000166/167 — persistent-host idle and automatic newer-dispatch observation.
- ORCH-000173 — expired worker-delivery lease reconciliation succeeded with full immutable lease input and bounded request instrumentation.
- ORCH-000177/178 — corrected HTTP status mapping and accepted lease acquire/release proven.
- ORCH-000179 — preparation reached and proved transient `actionKind=WORKER_DELIVERY` requirement.

## ORCH-000181 through ORCH-000183

ORCH-000181 left epoch `189` expired while still indexed ACTIVE at lease-index revision `377`.

ORCH-000182 attempted exact reconciliation once but yielded unobservable launcher completion; Architect independently proved zero durable mutation effect and classified it BLOCKED.

ORCH-000183 then made one separately authorized instrumented reconciliation attempt. The accepted path returned `DENIED / EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID` before any durable mutation, leaving revision `000002` absent and index `377` unchanged. Architect classified ORCH-000183 BLOCKED and required read-only root-cause diagnosis.

## ORCH-000184 — ACCEPTED

Executor terminal:

`GH-PUB-184-EXPIRED-LEASE-PROJECTION-INVALID-DIAGNOSTIC-000001`

Current Architect decision:

`GH-DEC-184-EXPIRED-LEASE-CALLER-ARGUMENT-CONTRACT-ACCEPTED`

Accepted root cause:

`CALLER_ARGUMENT_DEFECT`

The target immutable epoch-189 revision `000001` is valid. The ORCH-000183 caller instead passed the reduced `activeLeases` index entry into `projectMutationLeaseExpiryReconciliation` / the accepted expiry reconciliation path. The reduced object omitted full lease lifecycle fields and failed `validateMutationLease` with `RECORD_FIELDS_INVALID` before an EXPIRED projection was constructed.

Historical ORCH-000169/ORCH-000173 control confirms the correct behavior: hydrate and pass the full immutable ACTIVE lease revision; accepted source can then construct/validate the full EXPIRED revision and reconcile the index.

Permanent contract decision:

> Mutation-lease index entries are locator/projection records. They MUST NOT substitute for full immutable `MUTATION_LEASE` revisions when an operation requires `validateMutationLease`-compatible input. The caller must hydrate and verify the exact immutable revision referenced by the index before invoking expiry reconciliation.

Accepted source patch required: `false`.

Smallest repair: caller/composition only.

### Documentation-impact correction

A previously activated ORCH-000184 decision recorded `documentationImpact=STATE`. Under the mandatory fixed semantic test, that classification was insufficient because ORCH-000184 established a permanent root cause and caller contract. Architect therefore published and activated the superseding decision above with:

- `documentationImpact=FULL` — TEST-1 YES, TEST-2 NO, TEST-3 YES;
- `futureIdeaImpact=NONE`.

The earlier decision record remains historical evidence and is not rewritten.

## Next recovery direction

After FULL documentation closure, ORCH-000185 may authorize one corrected reconciliation attempt from the unchanged index-revision-377 boundary.

The corrected caller must:

1. hydrate the exact immutable epoch-189 revision `000001` from its canonical record path;
2. verify exact lease/index/hash/lineage binding;
3. run pure EXPIRED projection/validation before any external mutation and require success;
4. invoke accepted `reconcileExpiredMutationLease` exactly once with the full immutable record;
5. require durable revision `000002=EXPIRED`, index `377→378`, `nextLeaseEpoch=190`, and `activeLeases=[]`;
6. perform zero new-lease/preparation/delivery/browser/host/trigger/source/protected-resource activity.

No worker-delivery preparation is authorized until this recovery is accepted.
