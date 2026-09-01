Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000194 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source did not change through ORCH-000194.

## 2. Closed epoch-189 recovery

ORCH-000193 was accepted under:

`GH-DEC-193-EXPIRED-WORKER-LEASE-RECOVERY-ACCEPTED`

Durable closure:

- epoch-189 revision `000002` is valid `EXPIRED`;
- lease index advanced `377 → 378`;
- `activeLeases=[]`;
- `nextLeaseEpoch=190`.

Permanent contracts remain: hydrate full immutable leases; keep canonical SHA-256 and Git blob SHA typed separately; preserve GitHub semantic HTTP status including `404 → NOT_FOUND`; use durable readback as final mutation authority; never blind-retry an ambiguous mutation.

## 3. ORCH-000194 — ACCEPTED zero-browser worker-delivery preflight

Executor terminal:

`GH-PUB-194-WORKER-DELIVERY-000014-PREFLIGHT-COMPLETE-000001`

Architect decision:

`GH-DEC-194-WORKER-DELIVERY-000014-PREFLIGHT-ACCEPTED`

Verified sequence:

1. status-preserving read gate passed;
2. one epoch-190 WORKER_DELIVERY lease was acquired;
3. lease index advanced `378 → 379` and next epoch `190 → 191`;
4. transient transport authorization added `actionKind=WORKER_DELIVERY` without rewriting the durable lease;
5. accepted preparation returned `PREPARED` for `WORKER-DELIVERY-EXECUTOR-000014` and the immutable ARMED intent was durably read back;
6. browser contact/send remained `0/0`;
7. durable result `PROVEN_NOT_SENT` was created with attempted/confirmed sends `0/0`;
8. the lease was normally released exactly once;
9. final index advanced `379 → 380`, `nextLeaseEpoch=191`, `activeLeases=[]`;
10. `LATEST_DELIVERY` correctly remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
11. Architect trigger remains `ARCH-TRIGGER-9333-000005/SENT`;
12. source, host-process, Architect-trigger, AFFOTECH, and Drive mutations remained zero.

This proves the recovered current system can complete the full zero-browser qualification path:

`ACQUIRE → transient actionKind enrichment → PREPARE → PROVEN_NOT_SENT → RELEASE`

in one in-process execution.

Delivery `000014` is terminal evidence for the zero-send proof and must not be reused for a live send.

## 4. Current durable boundary

- mutation-lease index revision `380`;
- `nextLeaseEpoch=191`;
- `activeLeases=[]`;
- latest successful worker delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- preflight delivery `WORKER-DELIVERY-EXECUTOR-000014/PROVEN_NOT_SENT` exists durably;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`;
- accepted source GH-PUB-165 unchanged.

## 5. Next legal action — ORCH-000195

Run one separately bounded live Executor-browser delivery qualification using a fresh identity:

`WORKER-DELIVERY-EXECUTOR-000015`.

The milestone must preserve the accepted ordering:

`ACQUIRE → transient actionKind=WORKER_DELIVERY → PREPARE intent → pre-send observation → exactly one Executor browser send → durable SENT result → LATEST_DELIVERY advance → normal RELEASE → duplicate-suppression replay`

Required boundaries:

- use a fresh epoch-191 lease;
- exactly one browser USER send to Executor port `9444` maximum;
- attempted/confirmed sends must be `1/1` for success;
- durable result must be `SENT` before advancing `LATEST_DELIVERY`;
- duplicate replay must produce second send count `0`;
- no Architect-browser contact or trigger;
- no source/test/config/package/docs-by-Executor/AFFOTECH/Drive/deployment/private-data mutation.

After this live delivery qualification is independently accepted, the next phase may arm a fresh persistent host and prove the full unattended delivery → terminal observation → Architect wake cycle.

## 6. Documentation / future intent

ORCH-000194: `documentationImpact=FULL`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
