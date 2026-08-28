Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000175 and canonical ORCH-000176
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

ORCH-000170 proved the preparation composition must supply exact factory option `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` when accepted dispatch metadata does not expose `expectedFreshWorkerDeliveryId`.

ORCH-000174 did not test this fix because lease acquisition failed first.

## 5. Lease acquisition ambiguity from ORCH-000174

ORCH-000175 read-only diagnosis proved the acquisition ambiguity did not leave durable mutation state:

- no candidate lease revision matching ORCH-000174 / DISPATCH-000174 / delivery `000014` exists;
- candidate readback did not succeed;
- lease-index CAS was not attempted/completed;
- no orphan immutable lease record exists;
- index remains revision `370`, `nextLeaseEpoch=186`, `activeLeases=[]`.

The accepted acquisition path can normalize an unproven candidate create/reconciliation to `AMBIGUOUS`. The ORCH-000174 disposable launcher then discarded the accepted reconciliation descriptor and lower request diagnostics.

Architect classification: `ERROR_PROPAGATION_ONLY_GAP`. No accepted-source lease contract defect is currently proven.

## 6. Current authority — ORCH-000176

ORCH-000176 performs one instrumented fresh worker-delivery lease acquisition from the unchanged clean boundary. Instrumentation is semantically inert and preserves bounded request/reconciliation diagnostics.

The milestone may continue past acquisition only if one epoch-186 lease is durably ACTIVE and indexed under exact ORCH-000176 / DISPATCH-000176 binding.

If acquisition succeeds, the same bounded preflight then:

1. injects `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`;
2. calls accepted preparation once and requires durable `PREPARED`;
3. keeps browser contact/send zero;
4. reconciles the prepared delivery as `PROVEN_NOT_SENT / NOT_SENT`;
5. leaves `LATEST_DELIVERY=000013/SENT`;
6. normally releases the lease and requires final `activeLeases=[]`.

If any ambiguous external mutation occurs, no retry is permitted.

## 7. Protected boundaries

Architect session: `9333`; Executor session: `9444`; protected AFFOTECH ports: `9222/9223`. AFFOTECH source/worktrees, relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
