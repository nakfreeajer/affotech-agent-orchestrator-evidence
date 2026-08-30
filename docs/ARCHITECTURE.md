Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000181 and canonical ORCH-000182
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

Known disposable composition requirements remain:

- factory option `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`;
- transient transport authorization `actionKind=WORKER_DELIVERY` while leaving the durable lease record immutable.

## 5. Proven lease and adapter seams

ORCH-000177/178 proved HTTP semantic status must remain separate from `ghExitCode`, and proved accepted lease acquisition plus normal release durably.

ORCH-000179 reached preparation and failed closed only because the disposable continuation omitted transient `actionKind=WORKER_DELIVERY`.

## 6. ORCH-000181 — process terminated before preparation

ORCH-000181 acquired and indexed epoch `189` and constructed transient `actionKind=WORKER_DELIVERY`, but the in-process execution terminated before `prepareWorkerDeliveryIntent` was invoked.

Therefore ORCH-000181 does not test whether the corrected action-kind-enriched preparation succeeds.

Durable post-state is fail-closed:

- index revision `377`;
- next epoch `190`;
- one active indexed lease, epoch `189`;
- the lease is expired;
- immutable revision `000001=ACTIVE` exists;
- revision `000002` is absent;
- delivery `000014` absent;
- browser contact/send `0/0`.

## 7. Current authority — ORCH-000182

Before any further preparation attempt, ORCH-000182 must reconcile only the exact expired ORCH-000181 lease through accepted `reconcileExpiredMutationLease` semantics.

Required success:

`revision 000002=EXPIRED → exact readback → one index CAS 377→378 → nextEpoch remains 190 → activeLeases=[]`.

No new lease, preparation, delivery, browser, host, Architect trigger, or source mutation is authorized in this recovery milestone.

After recovery is independently accepted, the next preparation qualification should avoid creating another bespoke execution boundary that can terminate between ACTIVE readback and the already-known preparation call.

## 8. Protected boundaries

Architect session `9333`; Executor session `9444`; AFFOTECH protected ports `9222/9223`. AFFOTECH source/worktrees, relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
