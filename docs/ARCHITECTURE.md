Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000184 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Architecture

## 1. Core purpose

AFFOTECH Agent Orchestrator is a governed deterministic message-routing and durable-state layer. AI roles think; the Orchestrator carries exact governed envelopes and observes durable state. It does not approve work, interpret business semantics, scrape assistant decisions, or synthesize authority from browser text.

## 2. Active topology

```text
Rony — final human authority
  ↕
Architect 9333 — think / govern / verify / decide / document / preserve future intent
  ↓ durable dispatch
Persistent deterministic Orchestrator — independent control-plane service
  ↓ exact lease + durable worker intent + exact delivery
Executor 9444 — bounded work
  ↓ durable terminal
Persistent deterministic Orchestrator
  ↓ durable Architect trigger + exact wake
Architect 9333
```

The Orchestrator is operationally independent once qualified. Architect does not manually direct each transport step; it publishes durable authority and later interprets evidence. Orchestrator independently executes accepted deterministic routing/state-machine rules.

## 3. Role boundaries

- **Rony:** final human authority.
- **Architect:** project truth, verification, classification, architecture, bounded next authority, canonical documentation projection, and future-intent preservation/promotion.
- **Executor:** bounded source/runtime/test/validation work and first-hand terminal evidence.
- **Orchestrator:** deterministic observation, eligibility, lease/intent/result transport, duplicate suppression, reconciliation routing, and role wake-up.
- **Curator:** not part of the active model. Historical Curator evidence remains history only.

Orchestrator never becomes a governor: it does not decide ACCEPTED/BLOCKED/INCONCLUSIVE, broaden scope, author documentation/ideas, or infer project meaning.

## 4. Knowledge-plane separation

```text
CURRENT_STATE = what is true/current now
ARCHITECTURE  = accepted system design/contracts
IDEA_INBOX    = useful future concepts that may be built later
ROADMAP       = adopted/scheduled intended future work
DISPATCH      = what is authorized to execute now
```

Idea/roadmap entries create zero implementation authority. Only accepted implementation may promote an idea into accepted architecture/current truth.

## 5. Architect documentation and future-idea closure

Governing set:

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.3
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.4
- `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.4

Architect must apply the fixed semantic test before deciding `documentationImpact=NONE|STATE|FULL`; milestone status alone is never the documentation decision. For `STATE`/`FULL`, each plausible file is independently tested and only stale/misleading files are updated/read back before the next mutating implementation dispatch.

Future intent is independently classified `NONE|CAPTURE|PROMOTE` and remains separate from current truth.

## 6. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 7. Worker-delivery chain

Accepted target order:

`observe dispatch → acquire WORKER_DELIVERY lease → construct transient action-specific authorization → prepareWorkerDeliveryIntent → durable PREPARED intent/readback → send/reconcile result → release/reconcile lease`

For zero-browser preflight, send is replaced by accepted PROVEN_NOT_SENT reconciliation.

Known composition requirements:

- explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` in the qualification composition;
- transient transport authorization `actionKind=WORKER_DELIVERY` while leaving the durable lease record unchanged.

## 8. Mutation-lease index vs immutable lease contract

The mutation-lease index and immutable mutation-lease records are different representations with different purposes.

The `activeLeases` entry in the index is a **reduced locator/projection**. It may identify lease ID/epoch/revision, record path/hash, holder, lineage, scope/hash, envelope hash, expiry, and state, but it is not itself the canonical full `MUTATION_LEASE` revision.

The immutable revision under:

`evidence/host-runtime/mutation-leases/<leaseId>/revisions/<revision>.json`

is the full lease record and includes the complete schema required by `validateMutationLease`, including lifecycle fields such as `acquiredAt`, `releasedAt`, `previousRecordSha256`, and `releasedBy`.

Permanent caller rule accepted at ORCH-000184:

> When an operation such as `reconcileExpiredMutationLease` / `projectMutationLeaseExpiryReconciliation` requires a `validateMutationLease`-compatible lease argument, the caller MUST hydrate the exact immutable revision referenced by the index, verify its identity/revision/hash/lineage against the index and authority, and pass that full record. A reduced index entry MUST NOT be substituted for the immutable record.

ORCH-000184 diagnosed ORCH-000183's `EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID` as a `CALLER_ARGUMENT_DEFECT`: the reduced active-index entry was passed directly and failed `validateMutationLease` with `RECORD_FIELDS_INVALID` before EXPIRED projection construction. Accepted source does not require a patch.

The historical ORCH-000169/ORCH-000173 control confirms the correct shape: a full immutable ACTIVE revision was projected into a full immutable EXPIRED revision while preserving lease identity/lineage and lifecycle fields.

## 9. Expired-lease recovery invariant

An expired indexed lease must be reconciled/closed before any new conflicting worker-delivery lease or preparation is allowed.

A corrected recovery caller should:

1. read the reduced index entry;
2. hydrate the exact immutable current revision from `recordPath`;
3. verify the immutable record matches the index binding and expected content hash/lineage;
4. run pure projection/validation before external mutation when practical;
5. invoke the accepted reconciliation path at most once under bounded authority;
6. determine outcome from durable revision/index readback, not process stdout alone.

Live recovery details and the next legal action belong in `docs/CURRENT_STATE.md`, not in Architecture.

## 10. Adopted future architecture idea

`IDEA-0001 — Deterministic Architect documentation-closure marker` is `ADOPTED_FOR_FUTURE` only. It is not part of accepted architecture today.

## 11. Protected boundaries

Architect session `9333`; Executor session `9444`; AFFOTECH protected ports `9222/9223`. AFFOTECH source/worktrees, relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
