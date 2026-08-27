Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000168 and canonical ORCH-000169
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
- ORCH-000166: persistent host `HOST-INSTANCE-SANDBOX-000026 / HOST-GEN-SANDBOX-000026` accepted as armed after one process start, three valid idle polls, self-echo suppression, zero transport side effects, PID `16880` alive at publication.
- ORCH-000167: running host `000026` automatically observed a strictly newer Architect dispatch without manual forwarding.

## 3. ORCH-000167 — BLOCKED before delivery

Decision:

`GH-DEC-167-AUTOMATIC-HOST-WORKER-DELIVERY-INTENT-PREPARATION-BLOCKED`

Durable host events prove `DISPATCH-000167` reached `HOST_DELIVERY_READY / PREPARE_WORKER_DELIVERY_INTENT`, then stopped with `RECONCILIATION_REQUIRED / WORKER_DELIVERY_INTENT_PREPARATION_REQUIRED`.

No delivery `000014` intent/result was created, browser send remained zero, no ORCH-000167 terminal was published, no trigger `000006` was created, and active leases returned to zero.

## 4. ORCH-000168 diagnostic — ACCEPTED

Decision:

`GH-DEC-168-WORKER-DELIVERY-INTENT-PREPARATION-COMPOSITION-DIAGNOSTIC-ACCEPTED`

Executor publication:

`GH-PUB-168-WORKER-DELIVERY-INTENT-PREPARATION-SEAM-DIAGNOSTIC-000001`

Accepted finding:

- accepted `persistent-host-runner.js` automatically calls `ports.prepareWorkerDeliveryIntent` after lease acquisition;
- accepted `browser-relay-transport-ports.js` supplies the preparation method and requires durable create/readback through its injected worker-persistence adapter;
- `sendWorkerDelivery` was never reached;
- host-000026 launcher statically bound the preparation function, but the effective injected persistence composition did not return a durably read-back `PREPARED` intent;
- the runner safely released/reconciled before browser contact;
- exact lower-level preparation failure was not durably propagated by the current runner event;
- worker-delivery lease requirement is action-derived by the accepted host contract; the earlier dispatch lease booleans were metadata-inconsistent and must not weaken that requirement.

This classifies the immediate root cause as `COMPOSITION_WIRING_DEFECT`, not a proven accepted-source automation gap.

Host `000026` / PID `16880` was still running at the diagnostic and is not authorized for further mutation except the exact retirement governed by ORCH-000169.

Current latest delivery remains `WORKER-DELIVERY-EXECUTOR-000013 / SENT`; delivery `000014` is absent; latest Architect trigger remains `ARCH-TRIGGER-9333-000005 / SENT`; active leases are zero at the verified boundary.

## 5. Current authority — ORCH-000169

Milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.PREPARATION.COMPOSITION.REPAIR.AND.FRESH.HOST.ARM.1A`

Dispatch:

`DISPATCH-000169`

ORCH-000169 must:

1. verify and stop only exact stuck host `000026` at a zero-lease boundary;
2. repair only disposable untracked host-launcher/persistence composition;
3. prepare delivery `WORKER-DELIVERY-EXECUTOR-000014` durably through the exact accepted preparation method with zero browser contact/send;
4. require `PREPARED` and exact readback lineage;
5. reconcile the preflight delivery to `PROVEN_NOT_SENT`, leaving `LATEST_DELIVERY=000013/SENT`;
6. release the lease and return active lease count to zero;
7. start fresh host `000027` exactly once using the same corrected composition;
8. complete at least two valid idle polls with `DISPATCH-000169` suppressed;
9. leave host `000027` running for a strictly newer dispatch.

Tracked source changes are prohibited. Failure of composition-only repair must return `SOURCE_CONTRACT_REPAIR_REQUIRED` rather than patching source in place.

Because the old automatic host cannot yet prepare durable worker intent, ORCH-000169 remains a manual Executor dispatch.

## 6. Documentation ownership

Policy: `ARCHITECT_DIRECT`. Architect directly updates materially affected human-readable documentation. Curator is not an active required role.

## 7. Boundaries

- Architect session: `9333`.
- Executor session: `9444`.
- protected AFFOTECH ports: `9222/9223`.
- AFFOTECH System V2 Hybrid, AFFOTECH relay, Drive/business/private data, deployments and tenant resources remain separate and unauthorized.
