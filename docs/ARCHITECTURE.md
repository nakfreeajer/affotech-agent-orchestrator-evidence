Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000183 Architect review
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

## 8. Proven lease/reconciliation seams

ORCH-000173 proved the accepted expired-lease path can close an expired worker-delivery lease with bounded request-level instrumentation: revision create/readback followed by one lease-index CAS/readback.

ORCH-000177/178 proved HTTP semantic status must remain separate from `ghExitCode`, plus normal worker-delivery lease acquisition/release.

ORCH-000179 reached preparation and proved the transient action-kind requirement.

ORCH-000181 left epoch `189` expired while still indexed ACTIVE. ORCH-000182 produced no durable reconciliation effect. ORCH-000183 then reached a deterministic accepted-path denial before mutation: `EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`.

No lasting architectural conclusion is drawn from that reason code until the exact projection validation condition is diagnosed. The architecture invariant remains: an expired indexed lease must be reconciled/closed before any new conflicting lease or worker-delivery preparation is allowed.

Live recovery details and the next legal action belong in `docs/CURRENT_STATE.md`, not in Architecture; this avoids treating transient recovery state as accepted system architecture.

## 9. Adopted future architecture idea

`IDEA-0001 — Deterministic Architect documentation-closure marker` is `ADOPTED_FOR_FUTURE` only. It is not part of accepted architecture today.

## 10. Protected boundaries

Architect session `9333`; Executor session `9444`; AFFOTECH protected ports `9222/9223`. AFFOTECH source/worktrees, relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
