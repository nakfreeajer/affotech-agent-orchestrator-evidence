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

Architect decision:

`GH-DEC-174-WORKER-DELIVERY-PREFLIGHT-LEASE-ACQUISITION-BLOCKED`

The clean post-ORCH-000173 boundary was verified and the preflight used the intended explicit delivery ID `WORKER-DELIVERY-EXECUTOR-000014`, but the single authorized worker-delivery lease acquisition returned `AMBIGUOUS` before `prepareWorkerDeliveryIntent` was called.

Durable post-state remains clean:

- preparation call count `0`;
- delivery `000014` intent/result absent;
- `LATEST_DELIVERY=WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- lease-index revision `370`;
- `activeLeases=[]`;
- browser contact/send `0/0`;
- no host, trigger, or source mutation.

Therefore the explicit-ID preparation fix is still unproven. No acquisition retry is authorized yet.

## Current next — ORCH-000175

`DISPATCH-000175` is manual and read-only. It diagnoses the ORCH-000174 acquisition ambiguity and checks whether an orphan immutable lease revision was created even though the current index stayed clean.

It must identify the exact acquisition function/binding, proposed lease identity/epoch, the failing create/readback/index-CAS stage, any lower-level GitHub/gh error or error-propagation loss, and the smallest safe next recovery/repair boundary.

No lease/index mutation, acquisition retry, preparation call, delivery `000014`, host action, browser contact, Architect trigger, tracked source patch, AFFOTECH, Drive, deployment, tenant, or private-data mutation is authorized.

## Protected boundary

AFFOTECH System V2 Hybrid, the existing AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
