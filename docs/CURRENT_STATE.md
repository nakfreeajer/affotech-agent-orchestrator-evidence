Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000164 and canonical ORCH-000165 repair dispatch
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source baseline

Current Architect-accepted source remains:

`GH-PUB-130-PROVEN-NOT-SENT-DELIVERY-RECONCILIATION-CONTRACT-REPAIR-READY-000001`

Accepted qualification:

- source files: `101`;
- worker relay: `148`;
- BrowserRelay transport ports: `21`;
- persistent host runner: `36`;
- GitHub runtime ports: `40`;
- full sharded suite: `813 passed / 0 failed / 0 skipped / 0 cancelled`;
- manifest SHA-256: `0f8916a74a1275be90f2ff1a10704f8f9c79793e1a63d8da81c7906e318ee5ad`;
- archive SHA-256: `79c36abd1ea108003baa737550210a71008a9a70a887c9a14c04aa533235f103`.

No later runtime milestone has yet advanced the accepted-source pointer.

## 2. Proven transport legs

### Forward delivery — ORCH-000153

Architect-accepted decision:

`GH-DEC-153-FRESH-EXECUTOR-FORWARD-DELIVERY-000013-ACCEPTED`

Proven state:

- host `HOST-INSTANCE-SANDBOX-000024`;
- delivery `WORKER-DELIVERY-EXECUTOR-000013`;
- delivery state `SENT`;
- durable intent/result;
- exactly one Executor browser send;
- duplicate replay additional send `0`;
- retry unauthorized;
- active lease count returned to zero.

`WORKER-DELIVERY-EXECUTOR-000013 / SENT` remains the latest worker-delivery pointer.

### Architect wake — ORCH-000163

Architect-accepted decision:

`GH-DEC-163-AUTOMATIC-ARCHITECT-DOORBELL-TRIGGER-000005-ACCEPTED`

Proven state:

- trigger `ARCH-TRIGGER-9333-000005 / SENT`;
- exact payload `verify & next`;
- USER message count `2 → 3`;
- matching payload count `1 → 2`;
- attempted/confirmed `1/1`;
- second send `0`;
- duplicate replay additional send `0`;
- retry false;
- reconciliation false;
- assistant response text/DOM not read.

The dedicated Brave Architect relay on port `9333` remains the accepted return-path transport target.

## 3. ORCH-000164 unattended-host bootstrap — BLOCKED

Architect decision:

`GH-DEC-164-UNATTENDED-HOST-BOOTSTRAP-LINEAGE-CONFLICT-BLOCKED`

Executor publication:

`GH-PUB-164-AUTOMATIC-HOST-000025-BOOTSTRAP-BLOCKED-LINEAGE-CONFLICT-000001`

Verified facts:

- bootstrap host identity `HOST-INSTANCE-SANDBOX-000025` was created;
- explicit bootstrap boundary `DISPATCH-000164` was created/read back;
- one polling iteration was reached;
- zero valid polling iterations completed;
- host was stopped and is not running;
- browser contact/send: `0/0`;
- worker-delivery mutation: `0`;
- Architect-trigger mutation: `0`;
- lease acquisition: `0`;
- source/test/config/docs/governance mutation by Executor: `0`;
- protected AFFOTECH/Drive/deployment/ports remained untouched.

The exact blocker is:

`WORKER_DELIVERY_LINEAGE_CONFLICT`

The immutable delivery `WORKER-DELIVERY-EXECUTOR-000013` has a correctly bound intent containing:

- `messageId = ORCH-000153`;
- `dispatchId = DISPATCH-000153`;
- `intentSha256 = 579ffd5c1b37aa9990e85060deff29c76f2c1f71d844ca97fefc242f86e23f03`.

Its immutable `SENT` result binds to the exact same `intentSha256`, delivery ID, and worker role, but does not contain explicit `messageId` or `dispatchId`. The accepted durable-snapshot hydrator currently requires those explicit result fields and therefore rejects the otherwise exact historical binding.

Historical delivery evidence must not be rewritten.

## 4. Current repair authority — ORCH-000165

Canonical next milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.WORKER.DELIVERY.LEGACY.RESULT.LINEAGE.HYDRATION.REPAIR.1A`

Dispatch:

`DISPATCH-000165`

Purpose:

1. add fail-closed backward-compatible hydration for legacy worker-delivery results that omit explicit message/dispatch lineage but are exactly bound to their immutable intent by `intentSha256`, delivery ID, and worker role;
2. preserve explicit-lineage mismatch as a hard conflict;
3. make future worker-delivery results persist explicit `messageId` and `dispatchId`;
4. leave all historical delivery records unchanged;
5. validate read-only hydration of real delivery `000013`;
6. publish a complete immutable candidate source snapshot for Architect review.

ORCH-000165 authorizes source/test work only. Browser contact, host start, delivery/trigger mutation, lease mutation, documentation mutation by Executor, and accepted-source pointer mutation are all zero.

## 5. Remaining operational trajectory

After ORCH-000165 is independently verified and accepted, the unattended-host bootstrap may be retried under a fresh host identity and fresh dispatch.

The target cycle remains:

`Architect decision/dispatch → persistent deterministic Orchestrator → Executor exactly once → durable Executor terminal → Orchestrator → Architect wake exactly once → Architect decision → next cycle`

Do not retry ORCH-000164 directly. Do not rewrite delivery `000013`. Do not reopen the proven 9333 browser-repair chain without regression evidence.

## 6. Documentation ownership

Current documentation policy: `ARCHITECT_DIRECT`.

Architect directly updates all materially affected human-readable project documentation. Curator is not an active required role or transport leg.

## 7. Role/session and protected boundaries

- Architect registered control session: port `9333`.
- Executor registered control session: port `9444`.
- Protected AFFOTECH ports: `9222`, `9223`.
- AFFOTECH System V2 Hybrid, the existing AFFOTECH relay, Drive/business/private data, deployments, and tenant resources remain separate and unauthorized.
