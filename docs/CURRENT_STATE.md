Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000180 and canonical ORCH-000181
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 2. Proven foundations

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once.
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: automatic newer-dispatch observation proved.
- ORCH-000170: preparation needs explicit disposable worker-delivery ID.
- ORCH-000173: prior expired lease closed.
- ORCH-000177/178: HTTP-status adapter plus accepted lease acquisition/release proven.
- ORCH-000179: preparation reached; transient BrowserRelay authorization requires `actionKind=WORKER_DELIVERY`.

## 3. ORCH-000180 — BLOCKED before preparation

Decision:

`GH-DEC-180-WORKER-DELIVERY-ACTION-KIND-PREFLIGHT-OPERATIONAL-TIMEOUT-BLOCKED`

Verified facts:

- one epoch-188 lease acquisition succeeded;
- ACTIVE revision readback passed;
- preparation call count `0`;
- action-kind-enriched preparation was therefore not tested;
- delivery `000014` intent/result absent;
- browser contact/send `0/0`;
- exact lease released once normally;
- final index revision `376`;
- nextLeaseEpoch `189`;
- active leases `0`;
- latest delivery `000013/SENT`;
- Architect trigger `000005/SENT`;
- source unchanged.

Classification: `DISPOSABLE_CONTINUOUS_LAUNCHER_OPERATIONAL_TIMEOUT`.

## 4. Current authority — ORCH-000181

Milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.WORKER.DELIVERY.IN.PROCESS.ACTION.KIND.ENRICHED.PREFLIGHT.1A`

Starting boundary:

- index revision `376`;
- nextLeaseEpoch `189`;
- `activeLeases=[]`;
- delivery `000014` absent;
- latest delivery `000013/SENT`;
- trigger `000005/SENT`.

One in-process execution must perform:

`ACQUIRE → transient actionKind=WORKER_DELIVERY → PREPARE → PROVEN_NOT_SENT → RELEASE`.

No child-process or shell timeout may intervene between ACTIVE readback and preparation. Preparation uses exact `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`.

Success requires durable PREPARED intent, durable PROVEN_NOT_SENT/NOT_SENT result, browser contact/send `0/0`, normal release, final active leases `0`, latest delivery still `000013/SENT`, and source unchanged.

## 5. Documentation ownership

Policy: `ARCHITECT_DIRECT`.
