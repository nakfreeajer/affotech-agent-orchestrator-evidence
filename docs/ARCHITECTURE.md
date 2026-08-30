Project: affotech-agent-orchestrator
Documentation sync boundary: through Rony documentation-governance directive and canonical ORCH-000182
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Architecture

## 1. Core purpose

AFFOTECH Agent Orchestrator is a governed deterministic message-routing and durable-state layer. AI roles think; the Orchestrator carries exact governed envelopes and observes durable state. It does not approve work, interpret business semantics, scrape assistant decisions, or synthesize authority from browser text.

## 2. Active topology

```text
Rony — final human authority
  ↕
Architect 9333 — think / govern / verify / decide / document
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
- **Architect:** project truth, verification, classification, architecture, bounded next authority, and canonical documentation projection.
- **Executor:** bounded source/runtime/test/validation work and first-hand terminal evidence.
- **Orchestrator:** deterministic observation, eligibility, lease/intent/result transport, duplicate suppression, reconciliation routing, and role wake-up.
- **Curator:** not part of the active model. Historical Curator evidence remains history only.

Orchestrator never becomes a governor: it does not decide ACCEPTED/BLOCKED/INCONCLUSIVE, broaden scope, author documentation, or infer project meaning.

## 4. Architect documentation closure

Documentation policy is `ARCHITECT_DIRECT` under bootstrap/project policy v1.2.

After every Architect review or material Rony directive, Architect classifies documentation impact:

`NONE | STATE | FULL`

For `STATE` or `FULL`, the sequence is:

`durable evidence → Architect verification/decision → documentation impact → update affected docs → durable write/readback → next mutating implementation dispatch`

Therefore documentation correctness no longer depends on a separate Curator terminal and must not depend on Architect remembering informally. The duty is a governing closure invariant.

The current source does not yet require a dedicated machine `DOCUMENTATION_CLOSURE` record. A future accepted source milestone may add a deterministic marker so Orchestrator can enforce marker presence/identity; Orchestrator still must not interpret prose or choose documents.

## 5. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 6. Worker-delivery chain

Accepted target order:

`observe dispatch → acquire WORKER_DELIVERY lease → construct transient action-specific authorization → prepareWorkerDeliveryIntent → durable PREPARED intent/readback → send/reconcile result → release/reconcile lease`

For zero-browser preflight, send is replaced by accepted PROVEN_NOT_SENT reconciliation.

Known disposable composition requirements:

- explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`;
- transient transport authorization `actionKind=WORKER_DELIVERY` while leaving the durable lease record unchanged.

## 7. Proven lease and adapter seams

ORCH-000177/178 proved the corrected disposable GitHub adapter preserves HTTP semantic status separately from `ghExitCode`, and accepted worker-delivery lease acquire/release works durably.

ORCH-000179 reached preparation and failed closed because the disposable continuation omitted transient `actionKind=WORKER_DELIVERY`.

ORCH-000180 acquired/released cleanly but stopped before preparation; it provided no negative evidence about action-kind enrichment.

ORCH-000181 acquired epoch `189` and constructed actionKind, but terminated before the preparation call. The lease expired while indexed ACTIVE.

## 8. Current authority — ORCH-000182

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

## 9. Protected boundaries

Architect session `9333`; Executor session `9444`; AFFOTECH protected ports `9222/9223`. AFFOTECH source/worktrees, relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
