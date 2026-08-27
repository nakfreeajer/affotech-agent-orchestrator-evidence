Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000165 and canonical ORCH-000166
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source baseline

Current Architect-accepted source is:

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Architect decision:

`GH-DEC-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-ACCEPTED`

Qualification:

- source files: `101`;
- focused tests: `65/65`;
- GitHub runtime ports: `43/43`;
- BrowserRelay transport ports: `22/22`;
- full deterministic suite: `817/817`;
- manifest SHA-256: `3a5f046056cf1b94b6ec1685d3c18b754625727eb296f3a07df298f9732abf28`;
- archive SHA-256: `e07ef7e0775de6e500568d3e813800a2750c5b4e0e56befb676ce3d259cd80ba`.

ORCH-000165 supersedes ORCH-000130 as the accepted source baseline.

## 2. Proven transport legs

### Forward delivery — ORCH-000153

`WORKER-DELIVERY-EXECUTOR-000013 / SENT` is Architect-accepted exactly-once forward-delivery evidence. Exactly one browser send occurred; duplicate replay additional send was `0`; retry remained false.

### Architect wake — ORCH-000163

`ARCH-TRIGGER-9333-000005 / SENT` is Architect-accepted return-path evidence. USER count advanced `2→3`, attempted/confirmed was `1/1`, second send `0`, and assistant response text/DOM was not read.

## 3. ORCH-000164 unattended-host bootstrap — BLOCKED

Decision:

`GH-DEC-164-UNATTENDED-HOST-BOOTSTRAP-LINEAGE-CONFLICT-BLOCKED`

The bootstrap boundary for `DISPATCH-000164` was created/read back, but durable snapshot hydration rejected the historical delivery `000013` result because it lacked explicit `messageId`/`dispatchId`. The host failed closed before browser contact/send and was stopped.

Zero side effects on browser sends, worker delivery, Architect trigger, leases, AFFOTECH, Drive, deployments, or protected ports were preserved.

## 4. ORCH-000165 repair — ACCEPTED

ORCH-000165 repaired the exact reader/writer compatibility seam without rewriting historical evidence.

Accepted behavior:

- legacy result lineage may hydrate only from the exact immutable intent;
- exact `intentSha256`, delivery ID, and worker-role binding are required;
- explicit lineage conflicts remain fail-closed;
- future worker-delivery results persist explicit `messageId` and `dispatchId`;
- historical delivery `000013` remains unchanged.

Read-only live compatibility verification resolved delivery `000013` to:

- state `SENT`;
- message `ORCH-000153`;
- dispatch `DISPATCH-000153`;
- writes `0`.

## 5. Current authority — ORCH-000166

Milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.PERSISTENT.HOST.BOOTSTRAP.ARM.RETRY.1B`

Dispatch:

`DISPATCH-000166`

Fresh host:

`HOST-INSTANCE-SANDBOX-000026 / HOST-GEN-SANDBOX-000026`

ORCH-000166 must first repeat the read-only real-000013 hydration probe, then establish `DISPATCH-000166` as already handled, make exactly one OS host-process creation attempt, complete at least two valid idle polls with zero browser contact/send, and leave the process running.

It may claim readiness only if the accepted running composition can also observe a newer durable dispatch, deliver it exactly once, observe the corresponding Executor terminal, and invoke the proven Architect doorbell path.

If ORCH-000166 is accepted, the next dispatch after `000166` must be picked up automatically by the host; no manual relay should be used.

## 6. Documentation ownership

Policy: `ARCHITECT_DIRECT`.

Architect directly updates all materially affected human-readable project documentation. Curator is not an active required role.

## 7. Boundaries

- Architect control session: port `9333`.
- Executor control session: port `9444`.
- protected AFFOTECH ports: `9222/9223`.
- AFFOTECH System V2 Hybrid, existing AFFOTECH relay, Drive/business/private data, deployments and tenant resources remain separate and unauthorized.
