Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000170 and canonical ORCH-000171
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

```text
observe dispatch
→ derive/acquire exact WORKER_DELIVERY lease
→ HOST_DELIVERY_READY / PREPARE_WORKER_DELIVERY_INTENT
→ persistent-host-runner calls ports.prepareWorkerDeliveryIntent
→ browser-relay transport resolves worker-delivery ID
→ create + durably read back canonical intent
→ require PREPARED
→ only then sendWorkerDelivery
```

ORCH-000170 clarified the exact ID contract. `browser-relay-transport-ports.js` resolves the worker-delivery ID from either:

- `request.snapshot?.pointers?.dispatch?.expectedFreshWorkerDeliveryId`, or
- factory option `workerDeliveryId`.

Host `000027` composition supplied neither; the dispatch used `expectedDeliveryId`. The resulting accepted failure was `WORKER_DELIVERY_ID_REQUIRED` before persistence. This is `COMPOSITION_ADAPTER_DEFECT`, not a proven source automation/persistence defect.

The smallest later preparation repair is disposable launcher injection of `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, while preserving the accepted GitHub create/readback adapter. Source repair is not currently required.

## 5. Expired-lease reconciliation contract

ORCH-000170 classified the ORCH-000169 lease blocker as `RECONCILIATION_RECORD_CREATION_AMBIGUOUS`.

The supplied expiry-reconciliation binding was exact. Accepted reconciliation attempted to create revision `000002`, but no valid record was durably created/read back. The index correctly stayed fail-closed on the expired ACTIVE revision `000001`.

Safe recovery order is therefore:

1. fresh-read exact immutable revision `000001` and current index;
2. require revision `000002` absent;
3. require unchanged lease/index binding and `nowMs > expiresAt`;
4. invoke accepted `reconcileExpiredMutationLease` exactly once;
5. durably create/read back revision `000002`;
6. CAS the index once to remove only the reconciled lease;
7. read back `activeLeases=[]`.

No blind retry is allowed after an ambiguous result.

## 6. Current authority — ORCH-000171

ORCH-000171 performs only the exact lease-reconciliation chain above. It must not prepare delivery `000014`, acquire a new lease, start/stop a host, contact a browser, mutate source/tests/config/docs/governance, or create an Architect trigger.

Only after this lease is durably closed may the preparation/host composition be retried under a later fresh authority.

## 7. Protected boundaries

Architect session: `9333`; Executor session: `9444`; protected AFFOTECH ports: `9222/9223`. AFFOTECH source/worktrees, AFFOTECH relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
