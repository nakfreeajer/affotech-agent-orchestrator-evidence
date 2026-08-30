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
- ORCH-000167: automatic newer-dispatch observation proved.
- ORCH-000170: preparation requires explicit disposable `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`.
- ORCH-000173: prior expired lease closed.
- ORCH-000177: disposable HTTP-status mapping defect identified.
- ORCH-000178: corrected adapter plus accepted lease ACQUIRE/RELEASE lifecycle proven.

## ORCH-000179 — BLOCKED at transport authorization binding

Decision:

`GH-DEC-179-WORKER-DELIVERY-PREPARATION-LEASE-ACTION-KIND-BINDING-BLOCKED`

ORCH-000179 successfully ran one continuous launcher far enough to:

- acquire one epoch-187 worker-delivery lease;
- read the ACTIVE revision back;
- call `prepareWorkerDeliveryIntent` exactly once.

Preparation failed closed with `HOST_AUTHORIZATION_INVALID` because the disposable continuation passed the persisted lease record directly. The accepted persistent runner enriches the preparation-only transport authorization with `actionKind=WORKER_DELIVERY`; the persisted lease itself does not carry that transient field.

No delivery `000014` intent/result was created and browser contact/send remained `0/0`. The exact lease was normally released. Final lease index is revision `374`, next epoch `188`, `activeLeases=[]`, and `LATEST_DELIVERY` remains `000013/SENT`.

No tracked-source repair is indicated.

## Current next — ORCH-000180

`DISPATCH-000180` keeps the proven adapter, continuous control flow, lease acquisition/release, and explicit delivery ID. After durable acquisition it creates a transient transport authorization from the exact lease plus:

`actionKind=WORKER_DELIVERY`

The durable lease must not be rewritten merely to add this transient field.

Success requires one durable PREPARED intent for delivery `000014`, zero-browser PROVEN_NOT_SENT/NOT_SENT reconciliation, normal release, final `activeLeases=[]`, and `LATEST_DELIVERY=000013/SENT`.

No host process, browser send, Architect trigger, tracked source patch, AFFOTECH, Drive, deployment, tenant, or private-data activity is authorized.

## Protected boundary

AFFOTECH System V2 Hybrid, AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
