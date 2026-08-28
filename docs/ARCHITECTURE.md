Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000174 and canonical ORCH-000175
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

ORCH-000170 proved the known preparation composition defect: the disposable host composition must supply exact factory option `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` when the dispatch does not expose accepted `expectedFreshWorkerDeliveryId`.

However ORCH-000174 never reached preparation. Its one authorized worker-delivery lease acquisition returned `AMBIGUOUS` first.

## 5. Lease baseline after ORCH-000173

The expired ORCH-000169 lease recovery is closed. Revision `000002` is durably `EXPIRED`, the lease index advanced `369 → 370`, and current `activeLeases=[]`.

This clean index is the starting boundary for new worker-delivery lease acquisition.

## 6. ORCH-000174 acquisition block

ORCH-000174 verified the clean pre-state but stopped at its first mutation:

- one lease-acquisition call;
- outcome `AMBIGUOUS`;
- preparation calls `0`;
- delivery `000014` absent;
- index remained revision `370` with `activeLeases=[]`;
- browser/host/trigger/source side effects zero.

Architectural conclusion: the explicit worker-delivery ID composition remains unproven because lease acquisition failed before the preparation boundary.

## 7. Current authority — ORCH-000175

ORCH-000175 is read-only. It traces the accepted lease-acquisition path and determines:

- exact function/input binding and proposed lease identity/epoch;
- whether revision `000001` for the attempted ORCH-000174 lease exists as an orphan outside the index;
- whether ambiguity occurred at revision create/readback, index CAS/readback, binding, disposable request wrapper, or accepted source contract;
- the smallest safe next boundary.

No acquisition retry, lease/index/revision mutation, worker-delivery preparation, host process, browser, trigger, source, or protected-resource mutation is authorized.

## 8. Protected boundaries

Architect session: `9333`; Executor session: `9444`; protected AFFOTECH ports: `9222/9223`. AFFOTECH source/worktrees, relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
