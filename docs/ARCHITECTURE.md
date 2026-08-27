Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000171 and canonical ORCH-000172
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

ORCH-000170 proved the host-000027 preparation blocker is composition-only: accepted worker-ID resolution requires `expectedFreshWorkerDeliveryId` or factory option `workerDeliveryId`; the launcher supplied neither and failed with `WORKER_DELIVERY_ID_REQUIRED`. No source repair is currently proven necessary for preparation.

## 5. Expired-lease recovery contract and current failure seam

The target lease remains:

`MUTATION-LEASE-HOST-97e204bd87c1b341df79b1d787987f98`, epoch `185`, revision `1`, bound to `ORCH-000169 / DISPATCH-000169`, expired but indexed `ACTIVE` at index revision `369`.

ORCH-000170 proved the recovery binding itself is correct and classified the original ambiguity as `RECONCILIATION_RECORD_CREATION_AMBIGUOUS`.

ORCH-000171 then exercised the accepted recovery path exactly once under unchanged preconditions. The call again returned `AMBIGUOUS / EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`; revision `000002` remained absent and the index did not move.

Architectural conclusion: the next unresolved seam is not lease lineage. It is the concrete durable create/readback path for projected reconciliation revision `000002`.

No second reconciliation is safe until that seam is diagnosed.

## 6. Current authority — ORCH-000172

ORCH-000172 is read-only and traces:

- accepted `reconcileExpiredMutationLease` call flow;
- the concrete client used for `createJson` of revision `000002`;
- actual API/CLI method, stdin/input, repository/ref/path, payload and return normalization;
- lower-level error propagation;
- comparison with known-good durable GitHub creates.

It must classify the root cause and name the smallest repair boundary without mutating the lease, index, source, host, browser, delivery, or trigger state.

## 7. Protected boundaries

Architect session: `9333`; Executor session: `9444`; protected AFFOTECH ports: `9222/9223`. AFFOTECH source/worktrees, AFFOTECH relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
