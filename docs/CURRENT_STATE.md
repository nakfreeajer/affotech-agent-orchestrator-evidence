Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000173 and canonical ORCH-000174
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 2. Proven foundations

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005 / SENT` exactly once.
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: automatic newer-dispatch observation proved.
- ORCH-000170: preparation blocker classified `COMPOSITION_ADAPTER_DEFECT`; accepted source does not currently require repair for that seam.

## 3. ORCH-000173 — ACCEPTED

Decision:

`GH-DEC-173-EXPIRED-WORKER-DELIVERY-LEASE-INSTRUMENTED-RECONCILIATION-ACCEPTED`

Publication:

`GH-PUB-173-EXPIRED-LEASE-INSTRUMENTED-RECONCILED-000001`

Verified lease closure:

- revision `000002` exists and reads back as `EXPIRED`;
- exact ORCH-000169 lineage/scope/envelope and previous-record hash preserved;
- index revision advanced `369 → 370` exactly once;
- only the target lease was removed;
- current `activeLeases=[]`;
- no new lease acquisition;
- browser contact/send `0/0`;
- no host, worker-delivery, Architect-trigger, or tracked-source mutation.

The expired ORCH-000169 lease ambiguity is closed.

## 4. Current transport baseline

- `LATEST_DELIVERY = WORKER-DELIVERY-EXECUTOR-000013 / SENT`.
- delivery `000014` absent before ORCH-000174 execution.
- `LATEST_ARCHITECT_TRIGGER = ARCH-TRIGGER-9333-000005 / SENT`.
- trigger `000006` absent.
- mutation-lease index revision `370`, active lease count `0`.
- no accepted persistent host is currently running.

## 5. Current authority — ORCH-000174

Milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.WORKER.DELIVERY.PREPARATION.EXPLICIT.ID.ZERO.BROWSER.PREFLIGHT.1A`

ORCH-000174 must prove the corrected disposable preparation composition with exact:

`workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`

It may acquire one worker-delivery lease, prepare one durable intent, reconcile it as `PROVEN_NOT_SENT / NOT_SENT` without browser contact, and release the lease normally.

Success requires:

- `PREPARED` and `durableRecorded=true` exactly once;
- durable intent/result for delivery `000014` with exact ORCH-000174 / DISPATCH-000174 lineage;
- attempted/confirmed sends `0/0`;
- browser contact/send `0/0`;
- `LATEST_DELIVERY` remains `000013/SENT`;
- final `activeLeases=[]`;
- source unchanged.

No host process action or Architect trigger is authorized.

## 6. Documentation ownership

Policy: `ARCHITECT_DIRECT`.
