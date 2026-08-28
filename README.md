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

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## Proven foundations

- ORCH-000153: exactly-once Executor forward delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT`.
- ORCH-000163: exactly-once Architect wake `ARCH-TRIGGER-9333-000005 / SENT`.
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: persistent host automatically detected a newer Architect dispatch without manual forwarding.
- ORCH-000170: preparation defect isolated to missing disposable `workerDeliveryId`; no tracked source repair currently required.
- ORCH-000173: expired ORCH-000169 lease durably closed; index `369 → 370`; `activeLeases=[]`.

## ORCH-000174 — BLOCKED before preparation

The intended explicit delivery ID was `WORKER-DELIVERY-EXECUTOR-000014`, but the single worker-delivery lease acquisition returned `AMBIGUOUS` before `prepareWorkerDeliveryIntent` ran. Durable post-state stayed clean: no delivery `000014`, no active lease, index revision `370`, browser contact/send `0/0`, and no host/trigger/source mutation.

Architect decision:

`GH-DEC-174-WORKER-DELIVERY-PREFLIGHT-LEASE-ACQUISITION-BLOCKED`

## ORCH-000175 — ACCEPTED acquisition diagnostic

Architect decision:

`GH-DEC-175-WORKER-DELIVERY-LEASE-ACQUISITION-ERROR-PROPAGATION-DIAGNOSTIC-ACCEPTED`

The accepted acquisition path creates the immutable candidate before index activation and may return `AMBIGUOUS` when candidate creation or its reconciliation cannot be proven. ORCH-000174's disposable launcher discarded the accepted reconciliation descriptor and lower request diagnostics.

Read-only GitHub state proves:

- no ORCH-000174 / DISPATCH-000174 / delivery-000014 lease candidate was durably created;
- no candidate readback succeeded;
- no lease-index CAS occurred;
- no orphan immutable lease record exists;
- index revision remains `370`;
- `nextLeaseEpoch=186`;
- `activeLeases=[]`.

Classification: `ERROR_PROPAGATION_ONLY_GAP`. No tracked source patch or manual index edit is currently required.

## Current next — ORCH-000176

`DISPATCH-000176` authorizes one fresh **instrumented** worker-delivery lease acquisition at the clean revision-370 boundary. Instrumentation may preserve bounded non-sensitive request/reconciliation diagnostics but may not alter accepted request semantics.

Only if acquisition is durably proven ACTIVE/indexed may the milestone continue to the already-diagnosed explicit preparation fix:

`workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`

It must then prove durable `PREPARED`, reconcile delivery `000014` as `PROVEN_NOT_SENT / NOT_SENT` with zero browser contact, release the lease normally, keep `LATEST_DELIVERY=000013/SENT`, and finish with `activeLeases=[]`.

No host process action, browser send, Architect trigger, tracked source patch, AFFOTECH, Drive, deployment, tenant, or private-data mutation is authorized.

## Protected boundary

AFFOTECH System V2 Hybrid, the existing AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
