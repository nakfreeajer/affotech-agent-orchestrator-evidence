# AFFOTECH Agent Orchestrator Evidence

This repository is the machine-authoritative control/evidence plane for `affotech-agent-orchestrator`. Durable GitHub prompts, dispatches, Architect decisions, Executor terminals, transport records, source snapshots, host events, and current pointers are authority. Human-readable documentation is maintained directly by Architect and never overrides machine evidence.

## Active model

```text
Rony (final human authority)
  ↕
Architect AI — govern / verify / decide / document — port 9333
  ↓ durable dispatch
Persistent deterministic Orchestrator
  ↓ exact lease + durable intent + exact delivery
Executor AI — bounded work — port 9444
  ↓ durable terminal
Persistent deterministic Orchestrator
  ↓ durable trigger + exact wake
Architect AI
```

The Orchestrator is deterministic transport, not an AI decision-maker. Documentation policy is `ARCHITECT_DIRECT`; Curator is not an active required role.

## Current accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Decision: `GH-DEC-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-ACCEPTED`.

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## Proven foundations

- ORCH-000153: exactly-once Executor forward delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT`.
- ORCH-000163: exactly-once Architect wake `ARCH-TRIGGER-9333-000005 / SENT`.
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: persistent host automatically detected a newer Architect dispatch without manual forwarding.
- ORCH-000170: preparation failure classified `COMPOSITION_ADAPTER_DEFECT`; host `000027` omitted accepted `workerDeliveryId`; no tracked source repair is currently required.

## ORCH-000173 — ACCEPTED lease closure

Architect decision:

`GH-DEC-173-EXPIRED-WORKER-DELIVERY-LEASE-INSTRUMENTED-RECONCILIATION-ACCEPTED`

One exact instrumented `reconcileExpiredMutationLease` call succeeded without changing accepted request semantics.

Durable proof:

- revision `000002` exists and reads back as `EXPIRED` with exact ORCH-000169 lineage;
- `previousRecordSha256` binds exactly to revision `000001`;
- lease-index revision advanced exactly `369 → 370`;
- only the target lease was removed;
- `activeLeases=[]`;
- no new lease, browser, host, delivery, trigger, or source side effect occurred.

The instrumented transport observed an initial expected GET 404 for absent revision `000002`, then a successful PUT and exact readback. The previous ambiguity is closed.

## Current next — ORCH-000174

`DISPATCH-000174` is a zero-browser worker-delivery preparation preflight.

It explicitly injects:

`workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`

It may acquire one new worker-delivery lease, call accepted `prepareWorkerDeliveryIntent` once, and must prove durable `PREPARED` intent creation/readback with exact ORCH-000174 / DISPATCH-000174 lineage.

Without contacting any browser, it must then reconcile delivery `000014` as `PROVEN_NOT_SENT / NOT_SENT`, keep `LATEST_DELIVERY=WORKER-DELIVERY-EXECUTOR-000013/SENT`, release the lease normally before expiry, and finish with `activeLeases=[]`.

No host process action, browser contact/send, Architect trigger, tracked source patch, AFFOTECH, Drive, deployment, tenant, or private-data mutation is authorized.

Only after this preparation composition is proven may a fresh persistent host be armed.

## Protected boundary

AFFOTECH System V2 Hybrid, the existing AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
