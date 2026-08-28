Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000176 and canonical ORCH-000177
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

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 4. Worker-delivery chain

Accepted order:

`observe dispatch → acquire exact WORKER_DELIVERY lease → prepareWorkerDeliveryIntent → durable PREPARED intent/readback → sendWorkerDelivery → durable result → release/reconcile lease`.

ORCH-000170 proved preparation itself requires exact factory option `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` in the disposable composition when no accepted fresh-delivery ID is otherwise provided.

That preparation fix remains unproven because ORCH-000174 and ORCH-000176 both stopped at lease acquisition first.

## 5. Lease baseline

ORCH-000173 closed the previous expired lease. Current clean baseline remains:

- lease-index revision `370`;
- `nextLeaseEpoch=186`;
- `activeLeases=[]`.

ORCH-000175 proved ORCH-000174 left no orphan immutable lease candidate and no index CAS. Its ambiguity was `ERROR_PROPAGATION_ONLY_GAP`.

## 6. ORCH-000176 — instrumentation lifecycle defect

ORCH-000176 attempted one fresh instrumented acquisition from the same clean boundary.

Observed:

- acquisition result `AMBIGUOUS`;
- no candidate revision;
- no index CAS;
- index still `370`, next epoch still `186`, zero active leases;
- no preparation call;
- delivery `000014` absent;
- no browser/host/trigger/source side effect.

The disposable wrapper collected request diagnostics in memory, but the launcher interpreted `AMBIGUOUS`, converted it to `LEASE_AMBIGUOUS`, and exited before the trace or reconciliation descriptor was durably flushed.

Architectural conclusion: accepted acquisition semantics are still not proven defective. The immediate defect is the disposable diagnostic lifecycle: observability must be persisted **before** result interpretation/throw.

## 7. Current authority — ORCH-000177

ORCH-000177 first qualifies durable trace flush using a harmless read-only GitHub request through the exact disposable wrapper planned for acquisition.

Required ordering:

`read-only probe → append+flush trace → read back trace → only then one acquireMutationLease call`.

For acquisition-related calls, request diagnostics and any safe reconciliation descriptor must be synchronously flushed before control returns to result interpretation.

If acquisition becomes durably ACTIVE, the milestone may continue to:

- explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`;
- one durable PREPARED intent;
- zero-browser PROVEN_NOT_SENT result;
- one normal lease release;
- final `activeLeases=[]`.

No retry after ambiguity and no host/browser/Architect-trigger/source mutation are authorized.

## 8. Protected boundaries

Architect session `9333`; Executor session `9444`; AFFOTECH protected ports `9222/9223`. AFFOTECH source/worktrees, relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
