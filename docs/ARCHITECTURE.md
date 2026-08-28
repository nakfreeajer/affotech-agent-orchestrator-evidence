Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000173 and canonical ORCH-000174
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Architecture

## 1. Core purpose

AFFOTECH Agent Orchestrator is a governed deterministic message-routing and durable-state layer. AI roles think; the Orchestrator carries exact governed envelopes and observes durable state. It does not approve work, interpret business semantics, scrape assistant decisions, or synthesize authority from browser text.

## 2. Active topology

```text
Architect 9333
  ↓ durable dispatch
Persistent deterministic Orchestrator
  ↓ exact lease + durable worker intent + exact delivery
Executor 9444
  ↓ durable terminal
Persistent deterministic Orchestrator
  ↓ durable Architect trigger + exact wake
Architect 9333
```

Documentation policy is `ARCHITECT_DIRECT`.

## 3. Accepted source

Current accepted source:

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 4. Worker-delivery preparation contract

Accepted action chain:

`observe dispatch → derive/acquire exact WORKER_DELIVERY lease → HOST_DELIVERY_READY → prepareWorkerDeliveryIntent → durable canonical intent/readback → PREPARED → sendWorkerDelivery`.

ORCH-000170 proved host `000027` failed because its disposable composition supplied neither `expectedFreshWorkerDeliveryId` nor factory `workerDeliveryId`; accepted preparation returned `WORKER_DELIVERY_ID_REQUIRED` before persistence.

The smallest repair remains composition-only: explicitly inject `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` while preserving the accepted GitHub-backed persistence adapter.

## 5. Expired-lease recovery is closed

ORCH-000173 is accepted under:

`GH-DEC-173-EXPIRED-WORKER-DELIVERY-LEASE-INSTRUMENTED-RECONCILIATION-ACCEPTED`.

One exact instrumented accepted reconciliation:

- created/read back lease revision `000002` as `EXPIRED`;
- preserved exact epoch/lineage/scope/envelope and previous-record hash;
- advanced the lease index exactly `369 → 370`;
- removed only the target lease;
- left `activeLeases=[]`;
- produced zero browser, host, worker-delivery, Architect-trigger, or source side effects.

The earlier ambiguity did not prove a path/schema/runtime defect; instrumentation showed the revision PUT/readback can succeed with unchanged accepted semantics.

## 6. Current preparation proof — ORCH-000174

ORCH-000174 is deliberately smaller than a host restart.

It must:

1. begin from index revision `370` with zero active leases;
2. acquire at most one new worker-delivery lease;
3. use the accepted preparation path with explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`;
4. require `PREPARED`, `durableRecorded=true`, exact immutable intent/readback, and exact ORCH-000174 / DISPATCH-000174 lineage;
5. keep browser contact/send exactly zero;
6. reconcile the prepared preflight as accepted `PROVEN_NOT_SENT / NOT_SENT` without sending;
7. keep `LATEST_DELIVERY=WORKER-DELIVERY-EXECUTOR-000013/SENT`;
8. release the lease normally before expiry and finish with `activeLeases=[]`.

No host process may be started or stopped in ORCH-000174. A fresh host may be armed only after this composition is independently proven.

## 7. Protected boundaries

Architect session: `9333`; Executor session: `9444`; protected AFFOTECH ports: `9222/9223`. AFFOTECH source/worktrees, relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
