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
- ORCH-000166/167: persistent host idle and automatic newer-dispatch observation proven.
- ORCH-000170: preparation needs explicit disposable `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`.
- ORCH-000173: prior expired lease durably reconciled.
- ORCH-000177/178: HTTP-status mapping corrected; accepted lease acquisition and normal release proven.
- ORCH-000179: preparation reached and proved transient transport authorization requires `actionKind=WORKER_DELIVERY`.

## ORCH-000181 — BLOCKED with expired active lease

Decision:

`GH-DEC-181-WORKER-DELIVERY-IN-PROCESS-PREFLIGHT-EXPIRED-LEASE-BLOCKED`

The in-process attempt acquired and indexed epoch-189 lease `MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0` and constructed transient `actionKind=WORKER_DELIVERY`, but the process terminated before `prepareWorkerDeliveryIntent` was called.

No delivery `000014` intent/result or browser contact occurred. By durable readback the lease had expired, so normal release was correctly not attempted.

Current durable boundary:

- lease index revision `377`;
- `nextLeaseEpoch=190`;
- exactly one indexed ACTIVE lease: the expired ORCH-000181 epoch-189 lease;
- target revision `000001=ACTIVE` exists;
- target revision `000002` is absent;
- latest delivery remains `000013/SENT`;
- Architect trigger remains `000005/SENT`;
- source unchanged.

The action-kind-enriched preparation remains untested because preparation call count was `0`.

## Current next — ORCH-000182

`DISPATCH-000182` is recovery-only. It authorizes exactly one accepted `reconcileExpiredMutationLease` call against the exact ORCH-000181 lease binding and index revision `377`.

Success requires target revision `000002=EXPIRED`, one index CAS `377→378`, `nextLeaseEpoch=190`, and `activeLeases=[]`.

No new lease, preparation, delivery `000014`, browser, host, Architect trigger, tracked source patch, AFFOTECH, Drive, deployment, tenant, or private-data activity is authorized.

Only after this exact lease is closed may Architect authorize another preparation proof.

## Protected boundary

AFFOTECH System V2 Hybrid, AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
