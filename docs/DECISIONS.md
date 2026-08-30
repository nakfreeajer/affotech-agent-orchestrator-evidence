Project: affotech-agent-orchestrator
Documentation sync boundary: through Rony fixed documentation-semantic-test directive and canonical ORCH-000182
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
- Local git commit/push is not runtime persistence.
- AFFOTECH and protected resources remain separate until explicitly authorized.

## Rony directive — Architect-direct documentation closure

Rony directed that Architect is aware of the complete governed process and should therefore maintain all relevant project documentation directly rather than relying on a Curator terminal that reconstructs Architect meaning second-hand.

Permanent policy:

- Curator is eliminated from the active project model.
- No Curator terminal, relay, browser registration, cursor, or approval hop is required.
- Historical Curator evidence remains valid history.
- Architect owns semantic and physical maintenance of canonical documentation.
- Required documentation closure precedes the next mutating implementation dispatch.

## Rony directive — fixed semantic test for documentation decisions

Rony asked how Architect will decide, consistently and without relying on memory, whether documentation actually needs to be updated.

Architect adopted a fixed governing semantic procedure:

`governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0

The rule is now mandatory under `PROJECT_ORCHESTRATION_POLICY.md` v1.4 and `PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.4.

Architect must apply the decision in this order:

1. **TEST-1 — did current project truth materially change?** If leaving all current-truth docs unchanged would not make any canonical file false, materially incomplete/stale, or likely to mislead cold-start/recovery/implementation, classify `documentationImpact=NONE`.
2. **TEST-2 — is the change only current operational/recovery state?** If the only material change is blocker/reconciliation/lease/recovery/next-legal-action state and no lasting accepted capability/contract/governance/reusable truth changed, classify `STATE`.
3. **TEST-3 — did lasting project truth change?** A material change to governance/authority, accepted architecture/interface/contract, accepted capability/behavior, production/deployment model, security/privacy boundary, accepted business/product rule, permanent root cause/countermeasure/reusable lesson, accepted current requirement, or equivalent lasting truth is `FULL`.
4. **Per-document test.** For every plausible document ask whether leaving that specific file unchanged would make it false, materially incomplete, obsolete, misleading, hide a lesson it is responsible for preserving, or materially endanger cold-start/recovery/implementation. Update only files for which the answer is YES.

Permanent interpretation rules:

- milestone status alone never determines documentation impact;
- `ACCEPTED` may be `NONE` when nothing materially new became true;
- `BLOCKED` may be `NONE`, `STATE`, or `FULL` depending on what truth changed;
- `FULL` does not mean rewrite every Markdown file;
- tests, retries, diagnostics, process starts/stops, and repeated confirmations are activity, not documentation-worthy truth by themselves.

For `STATE` or `FULL`, selected documents must be written and durably read back before the next mutating implementation dispatch.

## Rony directive — preserve future ideas separately from current truth

Rony asked how Architect will avoid losing new ideas that are useful for future implementation. Architect proposed and Rony approved a separate future-intent continuity model.

Permanent decision:

```text
documentationImpact = NONE | STATE | FULL
futureIdeaImpact    = NONE | CAPTURE | PROMOTE
```

These are independent decisions.

Future-idea lifecycle:

`PROPOSED → ADOPTED_FOR_FUTURE → SCHEDULED → IMPLEMENTED`

Canonical future-intent surfaces:

- `docs/IDEA_INBOX.md` — useful future concepts not yet scheduled/implemented;
- `docs/ROADMAP.md` — adopted/scheduled future work and promotion conditions.

Hard boundaries:

- idea/roadmap entries create zero implementation authority;
- they do not describe current accepted behavior or accepted architecture;
- only canonical Architect dispatches authorize work;
- only independently accepted implementation may promote an idea to `IMPLEMENTED` and move resulting truth into Current State/Architecture/History;
- Rony-stated future direction must be durably preserved when materially intended;
- casual brainstorming, trivial alternatives, and duplicates should not be persisted.

Current adopted future item:

`IDEA-0001 — Deterministic Architect documentation-closure marker` = `ADOPTED_FOR_FUTURE`.

It is deliberately deferred until the core unattended Orchestrator transport reaches production-candidate qualification and creates no implementation authority today.

## Governing documentation set

Current documentation-governance set:

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.3
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.4
- `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.4
- `docs/IDEA_INBOX.md`
- `docs/ROADMAP.md`

## Proven foundations relevant to current transport seam

- ORCH-000153 — exactly-once Executor forward delivery.
- ORCH-000163 — exactly-once Architect wake.
- ORCH-000165 — accepted source, `817/817` deterministic suite.
- ORCH-000166/167 — persistent-host idle and automatic newer-dispatch observation.
- ORCH-000173 — prior expired lease closed.
- ORCH-000177/178 — corrected HTTP status mapping and accepted lease acquire/release proven.
- ORCH-000179 — preparation reached and proved transient `actionKind=WORKER_DELIVERY` requirement.

## ORCH-000181 — BLOCKED

Decision:

`GH-DEC-181-WORKER-DELIVERY-IN-PROCESS-PREFLIGHT-EXPIRED-LEASE-BLOCKED`

Architect verified:

- one epoch-189 worker-delivery lease was acquired and indexed;
- transient `actionKind=WORKER_DELIVERY` was constructed;
- preparation call count remained `0` because the process terminated first;
- delivery `000014` remains absent;
- browser contact/send `0/0`;
- lease expired before normal release;
- lease remains indexed ACTIVE at revision `377`;
- target revision `000002` is absent;
- no blind retry or expiry reconciliation occurred;
- accepted source remains unchanged.

Decision rationale:

`IN_PROCESS_ATTEMPT_ACQUIRED_AND_INDEXED_EPOCH_189_AND_CONSTRUCTED_ACTION_KIND_WORKER_DELIVERY_BUT_TERMINATED_BEFORE_PREPARATION_AND_LEFT_THE_EXPIRED_LEASE_ACTIVE_IN_INDEX_REVISION_377`.

## Current next authority — ORCH-000182

ORCH-000182 is recovery-only. It authorizes exactly one expired-lease reconciliation for:

`MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0 / epoch 189 / revision 1`

Expected closure:

`revision 000002=EXPIRED → index 377→378 → nextLeaseEpoch=190 → activeLeases=[]`

No new lease, preparation, delivery mutation, browser, host, Architect trigger, tracked source, or protected-resource activity is authorized.

After ORCH-000182 is reviewed, Architect must independently apply both:

- the fixed documentation semantic test → `NONE | STATE | FULL`;
- the future-idea test → `NONE | CAPTURE | PROMOTE`;

before any next mutating implementation dispatch.