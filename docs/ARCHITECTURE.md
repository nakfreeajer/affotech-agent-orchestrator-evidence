Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000180 and canonical ORCH-000181
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Architecture

## 1. Core purpose

AFFOTECH Agent Orchestrator is a governed deterministic message-routing and durable-state layer. AI roles think; the Orchestrator carries exact governed envelopes and observes durable state. It does not approve work, interpret business semantics, scrape assistant decisions, or synthesize authority from browser text.

## 2. Active topology

```text
Architect 9333
  ↓ durable dispatch
Persistent deterministic Orchestrator
  ↓ exact lease + durable worker intent + exact delivery
Executor 9444
  ↓ durable terminal
Persistent deterministic Orchestrator
  ↓ durable Architect trigger + exact wake
Architect 9333
```

Documentation policy is `ARCHITECT_DIRECT`.

## 3. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 4. Worker-delivery chain

Accepted target order:

`observe dispatch → acquire exact WORKER_DELIVERY lease → construct transient action-specific transport authorization → prepareWorkerDeliveryIntent → durable PREPARED intent/readback → send/reconcile result → release/reconcile lease`.

For zero-browser preflight, send is replaced by accepted PROVEN_NOT_SENT reconciliation.

Two disposable composition requirements are now known:

- factory option `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`;
- transient transport authorization `actionKind=WORKER_DELIVERY` while leaving the durable lease record unchanged.

## 5. Proven lease and adapter seams

ORCH-000177/178 proved the corrected disposable GitHub adapter preserves HTTP semantic status separately from `ghExitCode`, and the accepted acquire/release paths work durably.

ORCH-000179 reached preparation and failed only because its direct disposable continuation omitted the runner-equivalent transient `actionKind=WORKER_DELIVERY` binding.

## 6. ORCH-000180 — operational execution boundary

ORCH-000180 intended to test the action-kind-enriched preparation path. It acquired epoch `188` and read back the ACTIVE lease, but the bounded disposable process stopped before any preparation request was issued.

It then released the lease normally. Final state:

- index revision `376`;
- next epoch `189`;
- active leases `0`;
- delivery `000014` absent;
- browser contact/send `0/0`.

Architectural conclusion: ORCH-000180 provides no negative evidence about the action-kind fix. The remaining problem is the disposable execution boundary between successful acquisition and preparation.

## 7. Current authority — ORCH-000181

ORCH-000181 requires one in-process state-machine execution:

`ACQUIRE → actionKind enrichment → PREPARE → PROVEN_NOT_SENT → RELEASE`.

No child process, shell timeout, polling wrapper, or external bounded launcher may exist between ACTIVE readback and preparation. The same process must immediately construct the transient authorization and call `prepareWorkerDeliveryIntent` once using explicit delivery ID `000014`.

Success requires durable PREPARED intent, zero browser contact, durable PROVEN_NOT_SENT/NOT_SENT result, normal release, final active leases zero, and latest delivery still `000013/SENT`.

## 8. Protected boundaries

Architect session `9333`; Executor session `9444`; AFFOTECH protected ports `9222/9223`. AFFOTECH source/worktrees, relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
