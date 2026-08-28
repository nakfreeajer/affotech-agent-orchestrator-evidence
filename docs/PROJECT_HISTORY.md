Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000174 and canonical ORCH-000175
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted milestones:

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005 / SENT` exactly once.
- ORCH-000165: legacy worker-delivery lineage compatibility repair accepted with full deterministic `817/817`.

Documentation ownership is `ARCHITECT_DIRECT`.

## ORCH-000166 through ORCH-000173

ORCH-000166 safely armed persistent host `000026`.

ORCH-000167 proved automatic observation of a newer Architect dispatch but stopped before durable worker-intent preparation.

ORCH-000168 proved accepted source already executes the preparation action and isolated the effective persistence/composition seam.

ORCH-000169 attempted composition-first recovery and fresh host `000027`; preparation still failed before intent creation and an expired worker-delivery lease remained active after ambiguous reconciliation.

ORCH-000170 diagnosed preparation as `COMPOSITION_ADAPTER_DEFECT`: host `000027` omitted accepted `workerDeliveryId`.

ORCH-000171 / 172 isolated the expired-lease create/readback ambiguity; ORCH-000173 then closed that lease under one instrumented accepted reconciliation. Revision `000002` became durable `EXPIRED`, index revision advanced `369→370`, and active lease count became zero.

Architect accepted:

`GH-DEC-173-EXPIRED-WORKER-DELIVERY-LEASE-INSTRUMENTED-RECONCILIATION-ACCEPTED`.

## ORCH-000174 — preparation preflight BLOCKED at lease acquisition

ORCH-000174 was intentionally smaller than a host restart and explicitly targeted `WORKER-DELIVERY-EXECUTOR-000014`.

Its clean pre-state passed, but the single authorized worker-delivery lease acquisition returned `AMBIGUOUS` before preparation.

Durable post-state:

- preparation calls `0`;
- delivery `000014` intent/result absent;
- no proven-not-sent reconciliation;
- index revision still `370`;
- `activeLeases=[]`;
- latest delivery remains `000013/SENT`;
- browser/host/trigger/source side effects zero.

Architect classified:

`GH-DEC-174-WORKER-DELIVERY-PREFLIGHT-LEASE-ACQUISITION-BLOCKED`.

The explicit worker-delivery ID fix remains unproven because execution never reached `prepareWorkerDeliveryIntent`.

## ORCH-000175 — current acquisition ambiguity diagnostic

The next milestone is read-only. It must determine the exact lease acquisition function/binding, proposed lease ID/epoch, whether an ORCH-000174 immutable revision record exists outside the current index, the exact create/readback/index-CAS failure stage, and the smallest safe next boundary.

No acquisition retry or other mutation is authorized.

## Current target

`automatic dispatch observation → exact lease → durable worker intent → Executor exactly once → durable terminal → automatic terminal observation → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected.
