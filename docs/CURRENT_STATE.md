Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000175 and canonical ORCH-000176
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
- ORCH-000170: preparation blocker classified `COMPOSITION_ADAPTER_DEFECT`.
- ORCH-000173: expired ORCH-000169 lease durably reconciled and removed; index revision `370`, `activeLeases=[]`.

## 3. ORCH-000174 — BLOCKED

The clean preflight boundary passed, but the single authorized worker-delivery lease acquisition returned `AMBIGUOUS` before preparation.

Verified post-state:

- preparation calls `0`;
- delivery `000014` absent;
- index revision `370`;
- `nextLeaseEpoch=186`;
- `activeLeases=[]`;
- latest delivery `000013/SENT`;
- browser contact/send `0/0`;
- no host/trigger/source mutation.

Decision: `GH-DEC-174-WORKER-DELIVERY-PREFLIGHT-LEASE-ACQUISITION-BLOCKED`.

## 4. ORCH-000175 — ACCEPTED diagnostic

Decision:

`GH-DEC-175-WORKER-DELIVERY-LEASE-ACQUISITION-ERROR-PROPAGATION-DIAGNOSTIC-ACCEPTED`

Publication:

`GH-PUB-175-WORKER-DELIVERY-LEASE-ACQUISITION-AMBIGUITY-DIAGNOSTIC-000001`

Accepted conclusion: `ERROR_PROPAGATION_ONLY_GAP`.

The diagnostic found:

- no durable ORCH-000174 candidate lease revision;
- no successful candidate readback;
- no lease-index CAS;
- no orphan immutable lease record;
- current index remains revision `370` with zero active leases;
- ORCH-000174's disposable launcher discarded the accepted reconciliation descriptor/lower request details.

No source patch, manual index edit, or cleanup mutation is currently required.

## 5. Current transport baseline

- `LATEST_DELIVERY = WORKER-DELIVERY-EXECUTOR-000013 / SENT`.
- delivery `000014` absent before ORCH-000176 execution.
- `LATEST_ARCHITECT_TRIGGER = ARCH-TRIGGER-9333-000005 / SENT`.
- trigger `000006` absent.
- lease index revision `370`; `nextLeaseEpoch=186`; active lease count `0`.
- no accepted persistent host is currently running.

## 6. Current authority — ORCH-000176

Milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.WORKER.DELIVERY.INSTRUMENTED.LEASE.ACQUISITION.EXPLICIT.ID.PREFLIGHT.1A`

ORCH-000176 authorizes one fresh instrumented worker-delivery lease acquisition. Only if acquisition is durably proven ACTIVE/indexed may it proceed to exact disposable preparation option:

`workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`

Success requires durable `PREPARED`, durable `PROVEN_NOT_SENT / NOT_SENT` with browser contact/send `0/0`, `LATEST_DELIVERY` still `000013/SENT`, normal lease release, final `activeLeases=[]`, and source unchanged.

No host process action or Architect trigger is authorized.

## 7. Documentation ownership

Policy: `ARCHITECT_DIRECT`.
