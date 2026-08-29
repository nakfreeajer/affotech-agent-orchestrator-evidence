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
- ORCH-000167: persistent host automatically detected a newer Architect dispatch without manual forwarding.
- ORCH-000170: preparation requires explicit disposable `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`; no tracked source repair is required for that seam.
- ORCH-000173: prior expired lease durably closed.
- ORCH-000177: exact disposable HTTP-status mapping defect identified.

## ORCH-000178 — BLOCKED only at continuation

Decision:

`GH-DEC-178-WORKER-DELIVERY-LEASE-ACQUISITION-ACCEPTED-CONTINUATION-BLOCKED`

ORCH-000178 corrected the disposable adapter so actual GitHub HTTP `404` remained semantic status `404` while `ghExitCode=1` remained diagnostics. The read-only qualification passed.

The accepted lease path then succeeded:

- one acquisition became durable `ACTIVE` at epoch `186`;
- lease `MUTATION-LEASE-HOST-553f5ff7a8db44a8bf8bbf091309bb19` revision `000001` reads back `ACTIVE`;
- the lease was released exactly once through the accepted normal path;
- revision `000002` reads back `RELEASED`;
- index advanced to revision `372`;
- `nextLeaseEpoch=187`;
- `activeLeases=[]`.

The milestone remained BLOCKED because the temporary launcher terminated after successful acquisition instead of continuing to `prepareWorkerDeliveryIntent`. Preparation count stayed `0`; delivery `000014` remains absent; browser contact/send remained `0/0`; latest delivery remains `000013/SENT`.

No tracked-source repair is indicated.

## Current next — ORCH-000179

`DISPATCH-000179` uses one continuous disposable launcher for:

`ACQUIRE → PREPARE → PROVEN_NOT_SENT → RELEASE`

It starts from the clean boundary `index=372 / nextEpoch=187 / activeLeases=[]`, reuses the proven HTTP-status-preserving adapter, acquires exactly one worker-delivery lease, and must continue immediately after successful acquisition into exact `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` preparation.

Success requires one durable PREPARED intent, zero browser contact, one durable PROVEN_NOT_SENT/NOT_SENT result, one normal lease release, final `activeLeases=[]`, and `LATEST_DELIVERY=000013/SENT`.

No host process, browser send, Architect trigger, tracked source patch, AFFOTECH, Drive, deployment, tenant, or private-data activity is authorized.

## Protected boundary

AFFOTECH System V2 Hybrid, AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
