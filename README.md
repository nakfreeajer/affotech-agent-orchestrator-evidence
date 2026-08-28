# AFFOTECH Agent Orchestrator Evidence

This repository is the machine-authoritative control/evidence plane for `affotech-agent-orchestrator`. Durable prompts, dispatches, Architect decisions, Executor terminals, transport records, host/lease state, source snapshots, and current pointers are authority. Human-readable documentation is maintained directly by Architect and never overrides machine evidence.

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

Documentation policy is `ARCHITECT_DIRECT`; Curator is not an active required role.

## Current accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## Proven foundations

- ORCH-000153: exactly-once Executor forward delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT`.
- ORCH-000163: exactly-once Architect wake `ARCH-TRIGGER-9333-000005 / SENT`.
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: persistent host automatically detected a newer Architect dispatch without manual forwarding.
- ORCH-000170: preparation defect isolated to missing disposable `workerDeliveryId`; no tracked source repair required.
- ORCH-000173: expired ORCH-000169 lease durably closed; index `369→370`, `activeLeases=[]`.
- ORCH-000175: no orphan ORCH-000174 lease candidate exists; acquisition ambiguity classified `ERROR_PROPAGATION_ONLY_GAP`.

## ORCH-000176 — BLOCKED at instrumented acquisition

Architect decision:

`GH-DEC-176-WORKER-DELIVERY-INSTRUMENTED-ACQUISITION-TRACE-PERSISTENCE-BLOCKED`

One fresh instrumented worker-delivery lease acquisition was attempted from the clean revision-370 boundary. It again returned `AMBIGUOUS` before preparation.

Durable post-state remains clean:

- candidate revision absent;
- lease-index CAS count `0`;
- index revision `370`;
- `nextLeaseEpoch=186`;
- `activeLeases=[]`;
- delivery `000014` absent;
- latest delivery `000013/SENT`;
- browser/host/trigger/source side effects zero.

The disposable wrapper did collect bounded diagnostics in memory, but the launcher converted the result to `LEASE_AMBIGUOUS` and exited before flushing the trace or reconciliation descriptor. The lower GitHub request result therefore remains unrecoverable from ORCH-000176.

## Current next — ORCH-000177

`DISPATCH-000177` first qualifies **durable trace flush** on a harmless read-only GitHub request through the same disposable wrapper. Acquisition is forbidden unless that trace is flushed and read back successfully before result interpretation.

Only then may it perform one fresh instrumented lease acquisition. If the lease becomes durably ACTIVE and indexed, the same bounded milestone may continue to exact `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, durable PREPARED intent, zero-browser PROVEN_NOT_SENT result, and normal lease release.

Any ambiguity stops without retry, but this time the safe trace and reconciliation descriptor must already be durable before exit.

No host process, browser contact/send, Architect trigger, tracked source patch, AFFOTECH, Drive, deployment, tenant, or private-data activity is authorized.

## Protected boundary

AFFOTECH System V2 Hybrid, AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
