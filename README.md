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

## ORCH-000171 — INCONCLUSIVE exact lease recovery

Architect decision:

`GH-DEC-171-EXPIRED-WORKER-DELIVERY-LEASE-RECONCILIATION-INCONCLUSIVE`

One exact accepted `reconcileExpiredMutationLease` call was executed after all preconditions passed. It again returned:

`AMBIGUOUS / EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`.

Post-readback proves:

- revision `000002` remains absent;
- lease-index revision remains `369`;
- the same expired ORCH-000169 lease remains indexed `ACTIVE`;
- active lease count remains `1`;
- no new lease, host action, browser contact, delivery mutation, trigger mutation, or source mutation occurred.

Transport baseline remains `WORKER-DELIVERY-EXECUTOR-000013/SENT` and `ARCH-TRIGGER-9333-000005/SENT`.

Because the single recovery call produced no durable side effect and repeated the same ambiguity, a second blind reconciliation is forbidden.

## Current next — ORCH-000172

`DISPATCH-000172` is manual and read-only. It diagnoses the concrete revision-`000002` GitHub create/readback seam used by ORCH-000169 and ORCH-000171.

It must identify the exact client implementation, command/API method, payload/path, lower-level failure or error-propagation branch, compare it with known-good durable GitHub creates, and determine whether the smallest repair belongs to disposable adapter wiring, accepted runtime createJson logic, GitHub transport/auth, path/payload, or error propagation.

No lease/index/revision mutation, reconciliation call, host action, browser contact, delivery/trigger mutation, tracked source patch, AFFOTECH, Drive, deployment, tenant, or private-data mutation is authorized.

## Protected boundary

AFFOTECH System V2 Hybrid, the existing AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
