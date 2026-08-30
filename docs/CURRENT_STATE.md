Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000179 and canonical ORCH-000180
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
- ORCH-000170: explicit worker-delivery ID requirement diagnosed.
- ORCH-000173: prior expired lease closed.
- ORCH-000177: exact HTTP-status/gh-exit adapter defect isolated.
- ORCH-000178: corrected adapter and accepted lease acquire/release path proven.

## 3. ORCH-000179 — BLOCKED at preparation authorization

Decision:

`GH-DEC-179-WORKER-DELIVERY-PREPARATION-LEASE-ACTION-KIND-BINDING-BLOCKED`

Publication:

`GH-PUB-179-WORKER-DELIVERY-CONTINUOUS-PREFLIGHT-BLOCKED-000001`

Verified facts:

- one epoch-187 worker-delivery lease acquired successfully;
- ACTIVE lease readback succeeded;
- continuous launcher reached preparation;
- preparation called exactly once;
- result `FAILED_BEFORE_SEND` with reason `HOST_AUTHORIZATION_INVALID`;
- disposable continuation passed persisted lease directly;
- accepted runner normally adds transient `actionKind=WORKER_DELIVERY` before preparation;
- delivery `000014` intent/result absent;
- browser contact/send `0/0`;
- exact lease normally released once;
- final index revision `374`;
- nextLeaseEpoch `188`;
- `activeLeases=[]`;
- latest delivery remains `000013/SENT`;
- Architect trigger remains `000005/SENT`;
- source unchanged.

## 4. Current authority — ORCH-000180

Milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.WORKER.DELIVERY.TRANSPORT.LEASE.ACTION.KIND.ENRICHED.CONTINUOUS.PREFLIGHT.1A`

Start boundary:

- lease index `374`;
- next epoch `188`;
- active leases `0`;
- delivery `000014` absent;
- latest delivery `000013/SENT`.

One continuous process must:

`ACQUIRE → transient actionKind=WORKER_DELIVERY enrichment → PREPARE → PROVEN_NOT_SENT → RELEASE`.

The durable lease stays immutable. Preparation uses explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` and the transient action-kind-enriched transport authorization. Success requires durable PREPARED intent, zero-browser PROVEN_NOT_SENT/NOT_SENT result, normal release, final active leases `0`, and latest delivery still `000013/SENT`.

No host process action, browser contact/send, Architect trigger, tracked-source patch, AFFOTECH, Drive, deployment, tenant, or private-resource mutation is authorized.

## 5. Documentation ownership

Policy: `ARCHITECT_DIRECT`.
