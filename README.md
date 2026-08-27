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

## ORCH-000170 — accepted diagnostic

Architect decision:

`GH-DEC-170-PREPARATION-AND-EXPIRED-LEASE-DIAGNOSTIC-ACCEPTED`

The two ORCH-000169 blockers are independent.

### Preparation

Classification: `COMPOSITION_ADAPTER_DEFECT`.

The accepted transport resolves a worker-delivery ID from `snapshot.pointers.dispatch.expectedFreshWorkerDeliveryId` or the factory option `workerDeliveryId`. Host `000027` supplied neither; the dispatch exposed `expectedDeliveryId`. The accepted preparation path therefore failed with stable reason `WORKER_DELIVERY_ID_REQUIRED` before persistence or browser contact.

Smallest later repair: disposable launcher injection of `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` and stable reason-code logging. No tracked source repair is currently proven necessary.

### Expired lease

Classification: `RECONCILIATION_RECORD_CREATION_AMBIGUOUS`.

The ORCH-000169 expiry-reconciliation binding was correct, but revision `000002` was not durably created/read back. The index therefore correctly remains fail-closed with the expired revision-1 lease active. Revision `000002` is still absent and the current index remains revision `369`.

## Current next — ORCH-000171

`DISPATCH-000171` authorizes **only one exact accepted expired-lease reconciliation** for:

`MUTATION-LEASE-HOST-97e204bd87c1b341df79b1d787987f98`

No new lease, preparation retry, delivery `000014`, host process action, browser contact, source patch, trigger action, or AFFOTECH/Drive/deployment activity is authorized.

Success requires durable revision `000002`, exact lineage/readback, one index CAS removing only that lease, and `activeLeases=[]`.

Only after the lease is clean may Architect authorize the separate disposable preparation/host retry.

## Protected boundary

AFFOTECH System V2 Hybrid, the existing AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
