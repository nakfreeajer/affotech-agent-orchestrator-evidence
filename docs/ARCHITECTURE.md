Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000177 and canonical ORCH-000178
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

ORCH-000170 proved preparation requires exact disposable factory option `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` when no accepted fresh-delivery ID is otherwise supplied. That fix remains unproven because later preflights have stopped at lease acquisition first.

## 5. Lease baseline

ORCH-000173 closed the prior expired lease. Current clean baseline remains:

- lease-index revision `370`;
- `nextLeaseEpoch=186`;
- `activeLeases=[]`.

No later preflight has produced a candidate revision or index CAS.

## 6. ORCH-000177 — exact disposable adapter defect

ORCH-000177 successfully proved the durable diagnostic trace lifecycle before mutation. Its one acquisition call then exposed the precise failure:

- candidate-path GET returned HTTP `404`;
- `gh` process exit code was `1`;
- disposable adapter supplied semantic status `1` to the accepted client;
- accepted `notFound()` predicate therefore returned false;
- `createJson` normalized to `CREATE_PRECHECK_FAILED`;
- `acquireMutationLease` returned `AMBIGUOUS`;
- candidate PUT and index CAS were never issued.

Architectural conclusion: accepted lease-acquisition semantics are not proven defective. The immediate defect is the disposable request adapter conflating transport-process exit status with HTTP semantic status.

## 7. Current authority — ORCH-000178

ORCH-000178 changes only the disposable adapter boundary. It must preserve:

- HTTP semantic status/statusCode `404` for an actual GitHub 404;
- `ghExitCode=1` separately as diagnostic metadata;
- durable trace flush before result interpretation.

A harmless read-only missing-path probe must prove accepted NOT_FOUND recognition before any mutation.

Only then may one `acquireMutationLease` call run. If that lease becomes durably ACTIVE and indexed, the milestone may continue to exact `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, one durable PREPARED intent, zero-browser PROVEN_NOT_SENT result, and one normal lease release.

No tracked source patch, host process, browser, Architect trigger, or protected-resource mutation is authorized.

## 8. Protected boundaries

Architect session `9333`; Executor session `9444`; AFFOTECH protected ports `9222/9223`. AFFOTECH source/worktrees, relay, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit Rony authority.
