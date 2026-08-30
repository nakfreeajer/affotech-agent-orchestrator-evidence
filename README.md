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

- ORCH-000153: exactly-once Executor forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`.
- ORCH-000163: exactly-once Architect wake `ARCH-TRIGGER-9333-000005/SENT`.
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: persistent host automatically detected a newer Architect dispatch.
- ORCH-000170: preparation needs explicit disposable `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`.
- ORCH-000173: prior expired lease durably closed.
- ORCH-000177/178: disposable HTTP-status mapping fixed; accepted lease acquisition and normal release proven.
- ORCH-000179: continuous preflight reached preparation and proved the transient transport authorization must contain `actionKind=WORKER_DELIVERY`.

## ORCH-000180 — BLOCKED before preparation

Decision:

`GH-DEC-180-WORKER-DELIVERY-ACTION-KIND-PREFLIGHT-OPERATIONAL-TIMEOUT-BLOCKED`

ORCH-000180 acquired epoch-188 lease `MUTATION-LEASE-HOST-45c37592c9ad9e65788ea26e50d0fa9b` exactly once and read it back ACTIVE, but its bounded disposable process stopped before any preparation request was issued. Therefore the action-kind-enriched preparation fix was not actually tested.

The lease was released exactly once through the accepted normal path. Final durable state is clean:

- lease index revision `376`;
- `nextLeaseEpoch=189`;
- `activeLeases=[]`;
- delivery `000014` absent;
- latest delivery `000013/SENT`;
- Architect trigger `000005/SENT`;
- browser/host/source side effects zero.

## Current next — ORCH-000181

`DISPATCH-000181` removes only the artificial execution boundary. One in-process state machine must perform:

`ACQUIRE → transient actionKind=WORKER_DELIVERY enrichment → PREPARE → PROVEN_NOT_SENT → RELEASE`

No child process, shell timeout, polling wrapper, or external bounded launcher may intervene between ACTIVE readback and `prepareWorkerDeliveryIntent`.

Preparation uses exact `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`. Success requires a durable PREPARED intent, zero browser contact, a durable PROVEN_NOT_SENT/NOT_SENT result, normal release, final `activeLeases=[]`, and `LATEST_DELIVERY=000013/SENT`.

No host process, browser send, Architect trigger, tracked source patch, AFFOTECH, Drive, deployment, tenant, or private-data activity is authorized.

## Protected boundary

AFFOTECH System V2 Hybrid, AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
