# AFFOTECH Agent Orchestrator Evidence

This repository is the machine-authoritative control/evidence plane for `affotech-agent-orchestrator`. Immutable prompts, dispatches, Architect decisions, Executor terminals, delivery/trigger records, source snapshots/manifests, host events, and current pointers are durable authority. Human-readable documentation is maintained directly by Architect and never overrides machine evidence.

## Active model

The Orchestrator is a **deterministic messenger, not an AI agent**.

```text
Rony (final human authority)
  ↕
Architect AI — govern / verify / decide / document — port 9333
  ↓ durable dispatch
Persistent deterministic Orchestrator
  ↓ exact governed delivery
Executor AI — bounded work — port 9444
  ↓ durable terminal
Persistent deterministic Orchestrator
  ↓ exact one-way wake
Architect AI
```

Documentation policy is `ARCHITECT_DIRECT`; Curator is not an active required role.

## Current accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Decision: `GH-DEC-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-ACCEPTED`.

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## Proven foundations

- ORCH-000153 proved exactly-once forward delivery: `WORKER-DELIVERY-EXECUTOR-000013 / SENT`.
- ORCH-000163 proved exactly-once Architect wake: `ARCH-TRIGGER-9333-000005 / SENT`.
- ORCH-000166 accepted persistent host `HOST-INSTANCE-SANDBOX-000026 / HOST-GEN-SANDBOX-000026`: one process start, three valid idle polls, bootstrap dispatch suppressed three times, zero transport side effects, PID `16880` alive at terminal publication, `leaveRunning=true`.

## First unattended-cycle probe — ORCH-000167 BLOCKED before delivery

Decision:

`GH-DEC-167-AUTOMATIC-HOST-WORKER-DELIVERY-INTENT-PREPARATION-BLOCKED`

The important success: host `000026` **automatically detected `DISPATCH-000167` without manual forwarding**.

Durable host events then show:

- `LEASE_REQUIRED` for `WORKER_DELIVERY`;
- `LEASE_ACQUIRED` telemetry;
- host reached `HOST_DELIVERY_READY`;
- `nextAction=PREPARE_WORKER_DELIVERY_INTENT`;
- stop state `RECONCILIATION_REQUIRED`;
- reason `WORKER_DELIVERY_INTENT_PREPARATION_REQUIRED`.

`WORKER-DELIVERY-EXECUTOR-000014` was never created, browser send remained `0`, Executor terminal remained ORCH-000166, Architect trigger remained `000005/SENT`, and active mutation leases are currently empty.

This means automatic durable **dispatch observation is proven**, but the running composition does not yet automatically execute the durable worker-delivery-intent preparation step required before BrowserRelay send.

## Current next — ORCH-000168

`DISPATCH-000168` is a manual read-only Executor diagnostic. It must identify whether the missing intent-preparation step is:

- a host-000026 launcher/composition wiring defect;
- an accepted-source automation gap;
- a dispatch lease-authority metadata error;
- or a combination.

No source, host, browser, delivery, trigger, lease, AFFOTECH, Drive, deployment, tenant, or private-data mutation is authorized by the diagnostic.

## Protected boundary

AFFOTECH System V2 Hybrid, the existing AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, and tenant resources remain separate and unauthorized unless Rony explicitly authorizes a later integration milestone.
