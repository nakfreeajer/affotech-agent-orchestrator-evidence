Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000176 and canonical ORCH-000177
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted milestones:

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once.
- ORCH-000165: legacy worker-delivery lineage compatibility repair accepted with full deterministic `817/817`.

Documentation ownership is `ARCHITECT_DIRECT`.

## ORCH-000166 through ORCH-000173

ORCH-000166 safely armed persistent host `000026`.

ORCH-000167 proved automatic observation of a newer Architect dispatch but stopped before durable worker-intent preparation.

ORCH-000168 proved accepted source already executes the preparation action and isolated the effective persistence/composition seam.

ORCH-000169 attempted composition-first recovery and fresh host `000027`; preparation failed before intent creation and an expired worker-delivery lease remained active after ambiguous reconciliation.

ORCH-000170 diagnosed preparation as `COMPOSITION_ADAPTER_DEFECT`: the disposable composition omitted accepted `workerDeliveryId`.

ORCH-000171/172 isolated the expired-lease create/readback ambiguity. ORCH-000173 then closed that lease under one instrumented accepted reconciliation: revision `000002` became durable `EXPIRED`, index advanced `369→370`, and active leases became zero.

## ORCH-000174 / ORCH-000175 — acquisition ambiguity isolated

ORCH-000174 attempted the zero-browser preparation preflight but its single worker-delivery lease acquisition returned `AMBIGUOUS` before preparation. No delivery `000014` or active lease resulted.

ORCH-000175 read-only diagnosis proved there was no orphan immutable candidate and no index CAS. Classification: `ERROR_PROPAGATION_ONLY_GAP`; the disposable launcher had discarded lower request/reconciliation details.

## ORCH-000176 — instrumented acquisition still BLOCKED

Architect authorized one fresh instrumented acquisition from the unchanged clean boundary.

Execution again returned `AMBIGUOUS`. Durable readback proved:

- no candidate revision;
- no index CAS;
- index remains `370`;
- next epoch remains `186`;
- active leases remain zero;
- preparation calls `0`;
- delivery `000014` absent;
- no browser/host/trigger/source side effect.

The new evidence identified why instrumentation still failed operationally: the wrapper accumulated its trace only in process memory and the launcher exited on `LEASE_AMBIGUOUS` before the trace or reconciliation descriptor was flushed durably.

Architect classified:

`GH-DEC-176-WORKER-DELIVERY-INSTRUMENTED-ACQUISITION-TRACE-PERSISTENCE-BLOCKED`.

## ORCH-000177 — current durable-trace preflight

Before any acquisition, ORCH-000177 must prove the same disposable wrapper can synchronously append+flush+read back safe diagnostics on a harmless read-only GitHub request.

Only then may one acquisition run. If it succeeds, the milestone may continue to exact `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, PREPARED intent, zero-browser PROVEN_NOT_SENT result, and normal lease release.

If acquisition remains ambiguous, the already-flushed diagnostics and safe reconciliation descriptor must survive process exit and become Architect evidence. No retry is allowed.

## Current target

`automatic dispatch observation → exact lease → durable worker intent → Executor exactly once → durable terminal → automatic terminal observation → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected.
