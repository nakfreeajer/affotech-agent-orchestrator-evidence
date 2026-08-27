Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000167 and canonical ORCH-000168
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Decision: `GH-DEC-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-ACCEPTED`.

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 2. Proven foundations

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005 / SENT` exactly once.
- ORCH-000166: persistent host `HOST-INSTANCE-SANDBOX-000026 / HOST-GEN-SANDBOX-000026` accepted as armed after one process start, three valid idle polls, bootstrap suppression x3, zero browser/delivery/trigger/lease side effects, PID `16880` alive at publication and intentionally left running.

## 3. ORCH-000167 full-cycle probe — BLOCKED before worker delivery

Decision:

`GH-DEC-167-AUTOMATIC-HOST-WORKER-DELIVERY-INTENT-PREPARATION-BLOCKED`

What is now proven:

- host `000026` automatically observed `DISPATCH-000167` with no manual forwarding;
- host required a WORKER_DELIVERY lease;
- a lease-acquired telemetry event exists;
- host reached `HOST_DELIVERY_READY`.

Exact stop:

- `nextAction=PREPARE_WORKER_DELIVERY_INTENT`;
- event type `RECONCILIATION_REQUIRED`;
- reason `WORKER_DELIVERY_INTENT_PREPARATION_REQUIRED`.

What did not happen:

- `WORKER-DELIVERY-EXECUTOR-000014` intent/result: absent;
- Executor browser send: `0`;
- Executor terminal: remains ORCH-000166;
- `ARCH-TRIGGER-9333-000006`: absent;
- Architect wake send: `0`.

Current mutation-lease index has `activeLeases=[]`, so there is no active lease blocker.

This is a clean pre-send block, not an ambiguous browser send.

## 4. Current authority — ORCH-000168

Milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.WORKER.DELIVERY.INTENT.PREPARATION.SEAM.DIAGNOSTIC.1A`

Dispatch:

`DISPATCH-000168`

Purpose: diagnose read-only whether the missing automatic `prepareWorkerDeliveryIntent` execution is a source automation gap, host-000026 launcher/composition wiring defect, dispatch lease-metadata issue, or multiple causes.

The diagnostic must inspect accepted source and local host-000026 launcher/logs, identify the exact call/action chain and smallest repair boundary, and publish only diagnostic terminal/report/receipt evidence.

No source/test/config/docs mutation by Executor, no host mutation, no browser contact/send, no delivery/trigger/lease mutation, no accepted-source change, and no AFFOTECH/Drive/deployment/private/protected-port activity are authorized.

Because host `000026` cannot yet prepare a worker-delivery intent automatically, ORCH-000168 requires manual diagnostic dispatch to Executor.

## 5. Documentation ownership

Policy: `ARCHITECT_DIRECT`. Architect directly updates materially affected human-readable documentation. Curator is not an active required role.

## 6. Boundaries

- Architect session: `9333`.
- Executor session: `9444`.
- protected AFFOTECH ports: `9222/9223`.
- AFFOTECH System V2 Hybrid, AFFOTECH relay, Drive/business/private data, deployments and tenant resources remain separate and unauthorized.
