Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000193 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source did not change through ORCH-000193.

## 2. Permanent recovery contracts

- mutation-lease index entries are reduced locators; hydrate and verify the full immutable lease before full-schema reconciliation;
- canonical semantic SHA-256 and Git blob SHA are separately typed identities and must never be compared directly;
- the ORCH-000187-proven reconciliation caller uses one object containing full immutable `lease`, exact `reconciliationBinding`, and integer `nowMs`;
- accepted `createJson` uses precheck → at most one PUT → exact post-write readback, with durable readback as final outcome authority;
- bounded adapter/projector/await diagnostics should remain in the target execution context rather than requiring a separate prerequisite external evidence write;
- GitHub contents read adapters used in recovery must preserve semantic HTTP status, including `404 → NOT_FOUND`;
- historical ORCH-000185 exact causation remains unknown because its launcher is absent.

## 3. ORCH-000191 / ORCH-000192 — final transport diagnosis before recovery

ORCH-000191 consumed one real reconciliation call but stopped before target mutation because its disposable `gh` subprocess lost semantic HTTP `404`, causing the absent revision-`000002` precheck to normalize as `GITHUB_API_ERROR / CREATE_PRECHECK_FAILED`.

ORCH-000192 then proved with GET-only probes that:

- revision `000001` returns HTTP `200` with parseable JSON;
- absent revision `000002` returns HTTP `404`;
- the corrected direct awaited GitHub Contents adapter preserves that status and maps `404 → NOT_FOUND`;
- accepted client normalization is correct;
- accepted source requires no patch.

Decision:

`GH-DEC-192-DISPOSABLE-ADAPTER-404-MAPPING-DEFECT-ACCEPTED`

## 4. ORCH-000193 — ACCEPTED epoch-189 recovery

Executor terminal:

`GH-PUB-193-EXPIRED-LEASE-STATUS-PRESERVING-RECONCILIATION-000001`

Architect decision:

`GH-DEC-193-EXPIRED-WORKER-LEASE-RECOVERY-ACCEPTED`

Verified recovery result:

- preconditions passed;
- read-adapter gate passed: existing revision → `200 / EXISTING_JSON`, absent target → `404 / NOT_FOUND`;
- typed-hash gate valid;
- pure projection gate valid;
- `reconcileExpiredMutationLease` called exactly once;
- runtime outcome `EXPIRED_RECONCILED`;
- immutable revision `000002` exists and is valid `leaseRevision=2 / state=EXPIRED`;
- `previousRecordSha256=320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069`;
- lease index advanced exactly `377 → 378`;
- `activeLeases=[]`;
- `nextLeaseEpoch=190` unchanged;
- latest delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger remains `ARCH-TRIGGER-9333-000005/SENT`;
- no retry, new lease, browser, host-process, worker-delivery, Architect-trigger, source, AFFOTECH, or Drive mutation occurred beyond the two authorized lease-state writes.

Epoch-189 recovery is complete. The stale worker-delivery lease no longer blocks forward qualification.

## 5. Current durable boundary

Fresh verified state after ORCH-000193:

- mutation-lease index revision `378`;
- `nextLeaseEpoch=190`;
- `activeLeases=[]`;
- epoch-189 immutable revision `000002` is `EXPIRED`;
- latest worker delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger remains `ARCH-TRIGGER-9333-000005/SENT`;
- accepted source remains GH-PUB-165.

## 6. Next legal action — ORCH-000194

Resume the worker-delivery qualification path at the durable **PREPARED but not sent** boundary for the next delivery identity:

`WORKER-DELIVERY-EXECUTOR-000014`.

The milestone must remain zero-browser and must not send the prepared delivery. It should:

1. require index revision `378`, `nextLeaseEpoch=190`, and zero active leases;
2. acquire at most one new `WORKER_DELIVERY` mutation lease (expected epoch `190`) under the new ORCH-000194 authority;
3. construct the action-specific transient authorization with `actionKind=WORKER_DELIVERY` and explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` without mutating the durable lease record semantics;
4. call accepted `prepareWorkerDeliveryIntent` at most once;
5. require durable `WORKER-DELIVERY-EXECUTOR-000014` intent state `PREPARED` with exact readback;
6. prove no browser contact/send and no worker-delivery result publication;
7. close/release the bounded mutation lease cleanly if the accepted preparation flow permits completion after durable PREPARED state; otherwise stop and report the exact lease state without inventing a release path;
8. do not continue to browser delivery in the same milestone.

No AFFOTECH, Drive, deployment, tenant, business, or private-data access is authorized.

## 7. Documentation / future intent

ORCH-000193: `documentationImpact=STATE`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification and creates no current implementation authority.
