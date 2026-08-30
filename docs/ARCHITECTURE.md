Project: affotech-agent-orchestrator
Documentation sync boundary: through Rony future-idea governance directive and canonical ORCH-000182
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

The project intentionally separates five semantic surfaces:

```text
CURRENT_STATE = what is true/current now
ARCHITECTURE  = accepted system design/contracts
IDEA_INBOX    = useful future concepts that may be built later
ROADMAP       = adopted/scheduled intended future work
DISPATCH      = what is authorized to execute now
```

This prevents future ideas from contaminating accepted/current architecture.

`docs/IDEA_INBOX.md` and `docs/ROADMAP.md` are Architect-owned future-intent projections. They create zero implementation authority and never prove that a capability exists.

Only accepted implementation may promote an idea into this Architecture document.

## 5. Architect documentation and future-idea closure

Governance is v1.3:

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.3
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.3
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.3

After every Architect review/material Rony discussion, Architect independently classifies:

```text
documentationImpact = NONE | STATE | FULL
futureIdeaImpact    = NONE | CAPTURE | PROMOTE
```

For `STATE`/`FULL`, required documentation is updated/read back before the next mutating implementation dispatch.

For `CAPTURE`/`PROMOTE`, future intent is preserved separately through the idea/roadmap lifecycle:

`PROPOSED → ADOPTED_FOR_FUTURE → SCHEDULED → IMPLEMENTED`

Promotion to `IMPLEMENTED` requires independently accepted implementation evidence; it is not achieved merely by being placed on the roadmap.

The current source does not yet require machine documentation-closure or idea-index records. A future accepted source milestone may introduce deterministic marker/index contracts, but Orchestrator must still never interpret prose or decide which ideas/documents matter.

## 6. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 7. Worker-delivery chain

Accepted target order:

`observe dispatch → acquire WORKER_DELIVERY lease → construct transient action-specific authorization → prepareWorkerDeliveryIntent → durable PREPARED intent/readback → send/reconcile result → release/reconcile lease`

For zero-browser preflight, send is replaced by accepted PROVEN_NOT_SENT reconciliation.

Known disposable composition requirements:

- explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`;
- transient transport authorization `actionKind=WORKER_DELIVERY` while leaving the durable lease record unchanged.

## 8. Proven lease and adapter seams

ORCH-000177/178 proved the corrected disposable GitHub adapter preserves HTTP semantic status separately from `ghExitCode`, and accepted worker-delivery lease acquire/release works durably.

ORCH-000179 reached preparation and failed closed because the disposable continuation omitted transient `actionKind=WORKER_DELIVERY`.

ORCH-000180 acquired/released cleanly but stopped before preparation; it provided no negative evidence about action-kind enrichment.

ORCH-000181 acquired epoch `189` and constructed actionKind, but terminated before the preparation call. The lease expired while indexed ACTIVE.

## 9. Current authority — ORCH-000182

ORCH-000182 is recovery-only.

Target lease:

`MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0 / epoch 189 / revision 1`

Current boundary:

- lease-index revision `377`;
- `nextLeaseEpoch=190`;
- exactly one indexed ACTIVE lease, now expired;
- delivery `000014` absent;
- latest delivery `000013/SENT`;
- latest Architect trigger `000005/SENT`.

Authorized recovery is exactly one expired-lease reconciliation. Expected final boundary is index revision `378`, next epoch `190`, active leases `0`, immutable revision `000002=EXPIRED`.

No preparation retry or new lease is authorized until this recovery closes.

## 10. Adopted future architecture idea

`IDEA-0001 — Deterministic Architect documentation-closure marker` is `ADOPTED_FOR_FUTURE` only.

It proposes a future machine-readable closure contract so Orchestrator can mechanically gate later mutating dispatches on an Architect closure marker after the core unattended transport is production-candidate qualified.

It is **not part of accepted architecture today** and is therefore documented here only as a cross-reference to future intent, not as an implemented component. Authoritative future-intent details live in `docs/IDEA_INBOX.md` and `docs/ROADMAP.md`.

## 11. Protected boundaries

Architect session `9333`; Executor session `9444`; AFFOTECH protected ports `9222/9223`. AFFOTECH source/worktrees, relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
