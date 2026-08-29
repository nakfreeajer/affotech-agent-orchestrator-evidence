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
- ORCH-000175: no orphan ORCH-000174 lease candidate exists; acquisition ambiguity was an error-propagation gap.

## ORCH-000177 — BLOCKED with concrete acquisition cause

Architect decision:

`GH-DEC-177-WORKER-DELIVERY-ACQUISITION-HTTP-STATUS-ADAPTER-BLOCKED`

The durable trace qualification passed. The single acquisition then failed before any mutation because the disposable request adapter supplied `status=1` from the `gh` process exit code even though the actual GitHub response was HTTP `404 Not Found`.

Accepted `createJson` correctly treats a missing candidate as normal only when it sees accepted NOT_FOUND semantics such as HTTP/status `404`. Because the adapter overwrote that semantic status, `createJson` returned `CREATE_PRECHECK_FAILED` and `acquireMutationLease` returned `AMBIGUOUS` before candidate PUT or index CAS.

Durable post-state is clean:

- candidate revision absent;
- index remains `370`, `nextLeaseEpoch=186`, `activeLeases=[]`;
- delivery `000014` absent;
- latest delivery `000013/SENT`;
- browser/host/trigger/source side effects zero.

No accepted-source repair is proven necessary.

## Current next — ORCH-000178

`DISPATCH-000178` corrects only the disposable adapter mapping. It must preserve HTTP semantic status independently from `ghExitCode` so a real HTTP `404` is presented to the accepted client as `404`/NOT_FOUND while `ghExitCode=1` remains diagnostic metadata only.

After a read-only qualification of this mapping, exactly one fresh acquisition is permitted. Only if the lease is durably ACTIVE and indexed may the milestone continue to exact `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, durable PREPARED intent, zero-browser PROVEN_NOT_SENT result, and normal lease release.

No host process, browser contact/send, Architect trigger, tracked source patch, AFFOTECH, Drive, deployment, tenant, or private-data activity is authorized.

## Protected boundary

AFFOTECH System V2 Hybrid, AFFOTECH relay, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, and protected project boundaries remain unauthorized absent explicit later authority.
