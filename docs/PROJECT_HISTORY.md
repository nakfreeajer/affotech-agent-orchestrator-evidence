Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000193 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted milestones:

- ORCH-000153: worker forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once.
- ORCH-000165: lineage compatibility repair accepted with full deterministic `817/817`.

## ORCH-000166 through ORCH-000181

ORCH-000166/167 established persistent-host idle/bootstrap and automatic newer-dispatch observation. ORCH-000173 proved instrumented expired-lease reconciliation can close a lease. ORCH-000177/178 proved correct HTTP semantic-status handling and lease acquire/release. ORCH-000179 reached worker-delivery preparation. ORCH-000181 acquired epoch `189` but terminated before preparation; the lease expired while indexed ACTIVE at revision `377`.

## ORCH-000182 through ORCH-000187

ORCH-000182/183 attempted recovery but durable state remained unchanged. ORCH-000184 established that reduced index entries cannot replace full immutable leases. ORCH-000185 still failed before mutation with full hydration, and ORCH-000186 proved the pure projector valid while historical ORCH-000185 invocation detail was insufficient.

ORCH-000187 then proved a corrected mutation-disabled caller using the full immutable lease, exact reconciliation binding, and integer `nowMs`; validation/projector succeeded and execution reached the first would-be creation of revision `000002`. Decision: `GH-DEC-187-CORRECTED-CALLER-PROJECTION-BOUNDARY-ACCEPTED`.

## ORCH-000188 through ORCH-000190 — precondition and evidence-transport repairs

ORCH-000188 stopped before reconciliation because a precondition compared project canonical SHA-256 with Git blob SHA. Architect established the permanent typed-hash rule.

ORCH-000189 then passed typed-hash and pure-projection gates but its separate pre-call `createJson` evidence write returned `AMBIGUOUS`; fresh readback showed that path absent, so real reconciliation was not invoked.

ORCH-000190 established accepted `createJson` semantics as `precheck → at most one PUT → exact post-write readback`, with durable readback as final authority, and removed the separate prerequisite evidence write from the next real attempt.

Decision: `GH-DEC-190-PRECALL-CREATEJSON-TRANSPORT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`.

## ORCH-000191 / ORCH-000192 — disposable read-adapter diagnosis

ORCH-000191 moved diagnostics in-memory and invoked accepted `reconcileExpiredMutationLease` once, but the revision-`000002` precheck used a disposable `gh` subprocess that surfaced process exit code `1` without semantic HTTP status. The adapter normalized the expected absent path to `GITHUB_API_ERROR`, so accepted `createJson` returned `CREATE_PRECHECK_FAILED`. No revision PUT or index CAS occurred.

Decision: `GH-DEC-191-REVISION-PRECHECK-TRANSPORT-INCONCLUSIVE`.

ORCH-000192 ran strictly read-only and proved:

- revision `000001` GET → HTTP `200`;
- absent revision `000002` GET → HTTP `404`;
- the recovered ORCH-000191 subprocess shape does not expose the semantic `404`;
- a direct awaited GitHub Contents request preserves status and maps `404 → NOT_FOUND`;
- accepted client normalization is correct;
- `sourcePatchRequired=false`;
- repair scope is the disposable adapter only.

Architect accepted the diagnosis under:

`GH-DEC-192-DISPOSABLE-ADAPTER-404-MAPPING-DEFECT-ACCEPTED`.

## ORCH-000193 — epoch-189 lease recovery completed

ORCH-000193 used the proven status-preserving read adapter and the ORCH-000187 caller shape.

Executor terminal:

`GH-PUB-193-EXPIRED-LEASE-STATUS-PRESERVING-RECONCILIATION-000001`

Verified sequence:

- existing/absent adapter gate passed as `200 / EXISTING_JSON` and `404 / NOT_FOUND`;
- typed-hash gate passed;
- pure projection gate passed;
- accepted `reconcileExpiredMutationLease` was called exactly once;
- runtime returned `EXPIRED_RECONCILED`;
- immutable revision `000002` was created as valid `leaseRevision=2 / state=EXPIRED`;
- `previousRecordSha256` linked exactly to canonical revision `000001`;
- lease index advanced exactly `377 → 378`;
- `activeLeases=[]`;
- `nextLeaseEpoch=190` remained unchanged;
- delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` and Architect trigger `ARCH-TRIGGER-9333-000005/SENT` remained unchanged;
- no retry or unrelated protected mutation occurred.

Architect accepted the recovery under:

`GH-DEC-193-EXPIRED-WORKER-LEASE-RECOVERY-ACCEPTED`.

The ORCH-000181 stale lease incident is closed. `documentationImpact=STATE`; `futureIdeaImpact=NONE`.

## Current target

The next legal milestone is ORCH-000194: resume worker-delivery qualification at a **durable PREPARED, provably not sent** boundary for `WORKER-DELIVERY-EXECUTOR-000014`.

Pre-state:

- lease index revision `378`;
- `nextLeaseEpoch=190`;
- `activeLeases=[]`;
- latest delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- latest Architect trigger remains `ARCH-TRIGGER-9333-000005/SENT`;
- accepted source remains GH-PUB-165.

The milestone may acquire one new `WORKER_DELIVERY` lease, construct the required transient action-specific authorization with `actionKind=WORKER_DELIVERY` and explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, and prepare the new durable intent exactly once. It must prove the intent is `PREPARED` while browser contact/send and result publication remain zero.

It must not continue to actual delivery/send in the same dispatch.

After PREPARED + zero-browser `PROVEN_NOT_SENT` qualification is independently accepted, the project may proceed to the separately bounded delivery qualification and then to a fresh persistent-host full unattended canary:

`Architect durable dispatch → persistent Orchestrator → durable worker intent → Executor exactly once → durable terminal → persistent Orchestrator → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected until later explicit Rony-authorized integration.
