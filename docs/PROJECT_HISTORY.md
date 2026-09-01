Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000188 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Project History

## Foundation through ORCH-000165

The project established Rony as final authority, Architect as governor/decision-maker, Executor as bounded worker, GitHub as durable evidence authority, exact lineage, no blind retry, and separation from AFFOTECH.

Key accepted milestones:

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once.
- ORCH-000165: lineage compatibility repair accepted with full deterministic `817/817`.

## ORCH-000166 through ORCH-000179

ORCH-000166/167 established persistent-host idle/bootstrap and automatic newer-dispatch observation. ORCH-000173 proved instrumented expired-lease reconciliation can close a lease. ORCH-000177/178 proved correct HTTP semantic-status handling and lease acquire/release. ORCH-000179 reached worker-delivery preparation and proved transient `actionKind=WORKER_DELIVERY` is required.

## ORCH-000180 / ORCH-000181

ORCH-000180 acquired/released epoch `188` but stopped before preparation. ORCH-000181 acquired/indexed epoch `189` and constructed `actionKind=WORKER_DELIVERY`, but terminated before preparation; the lease expired while still indexed ACTIVE at revision `377`.

## ORCH-000182 / ORCH-000183

ORCH-000182 attempted expiry reconciliation but produced unobservable launcher completion. Durable GitHub state proved revision `000002` absent and index `377` unchanged.

ORCH-000183 made one separately authorized instrumented attempt and returned `DENIED / EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID` before external mutation.

## ORCH-000184 — full immutable caller contract

ORCH-000184 diagnosed ORCH-000183's defect: the reduced `activeLeases` index projection had been passed where the full immutable lease schema was required. Architect accepted the permanent rule:

`index locator → hydrate exact immutable revision → verify binding → pass full immutable record`.

Decision: `GH-DEC-184-EXPIRED-LEASE-CALLER-ARGUMENT-CONTRACT-ACCEPTED`.

## ORCH-000185 — full immutable input still denied

ORCH-000185 used corrected authority and reportedly hydrated/validated full immutable epoch-189 revision `000001`, but real reconciliation still returned `EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID` before external mutation.

Durable state remained unchanged. Decision: `GH-DEC-185-FULL-IMMUTABLE-RECONCILIATION-PREMUTATION-DENIAL-BLOCKED`.

## ORCH-000186 — pure projection valid, historical invocation unobservable

ORCH-000186 ran strictly read-only. It proved the full immutable epoch-189 lease and pure expiry projector are valid, but ORCH-000185 durable evidence did not contain enough caller-level details to reconstruct the actual invocation field-by-field.

Classification `OBSERVABILITY_INSUFFICIENT` was accepted. No source patch and no retry authority followed.

Decision: `GH-DEC-186-INVOCATION-PARITY-OBSERVABILITY-INSUFFICIENT-ACCEPTED`.

## ORCH-000187 — corrected caller proven through mutation boundary

ORCH-000187 ran a mutation-disabled reproduction with deterministic external-write stubs.

Accepted findings:

- historical `orch-000185-reconcile.mjs` launcher absent;
- corrected runtime call used full immutable revision `000001`, exact reconciliation binding, and integer `nowMs`;
- captured canonical lease SHA-256 `320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069` semantically equaled revision `000001`;
- validation succeeded;
- projector produced a valid EXPIRED revision `000002` projection;
- awaited execution reached the first would-be external mutation: creation of immutable revision `000002`;
- stub intercepted that write and real reconciliation/lease/index mutations remained zero;
- classification `PROJECTION_SUCCEEDS_WITH_STUBBED_REAL_CALLER`;
- `sourcePatchRequired=false`.

Architect accepted ORCH-000187 under `GH-DEC-187-CORRECTED-CALLER-PROJECTION-BOUNDARY-ACCEPTED` and authorized one instrumented real reconciliation call.

## ORCH-000188 — false precondition drift from hash namespace mismatch

ORCH-000188 was the one-shot real-reconciliation milestone, but it stopped before the pure projection gate, pre-call snapshot, and real reconciliation because the Executor believed immutable revision `000001` had changed.

Executor terminal:

`GH-PUB-188-FAILED-BEFORE-MUTATION-PRECONDITION-DRIFT-000001`

Reported values:

- expected hash `320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069`;
- observed GitHub `sha` `514e37fddd80cfceae87d260e73acebd34526c28`;
- index still advertised `320a5ba0...d83069`.

Architect independently verified that this was not lease drift. The values are different hash types:

- `320a5ba0...d83069` = project canonical SHA-256 of the parsed immutable lease using compact accepted serialization in stored field order;
- `514e37fd...26c28` = Git blob SHA returned by GitHub Contents API.

The canonical SHA-256 recomputes exactly to the index/ORCH-000187 value. Therefore ORCH-000188's precondition comparator conflated hash namespaces.

Architect classified ORCH-000188:

`GH-DEC-188-PRECONDITION-HASH-NAMESPACE-MISMATCH-BLOCKED`.

Durable safety was preserved:

- real reconciliation calls `0`;
- revision `000002` absent;
- index `377` unchanged;
- one expired ACTIVE epoch-189 lease remains;
- delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` unchanged;
- Architect trigger `ARCH-TRIGGER-9333-000005/SENT` unchanged;
- no source/browser/host/AFFOTECH/Drive mutation.

ORCH-000188 established the permanent typed-hash rule: canonical SHA-256 and Git blob SHA are distinct protocol identities and must never be compared directly.

`documentationImpact=FULL`; `futureIdeaImpact=NONE`.

## Documentation-governance evolution

Curator was eliminated from the active model and Architect directly owns canonical documentation. Governance requires independent `documentationImpact=NONE|STATE|FULL` and `futureIdeaImpact=NONE|CAPTURE|PROMOTE` classification, plus durable write/readback closure before a mutating dispatch when documentation is required.

## Current target

The next legal milestone is ORCH-000189: reissue the one-real-call epoch-189 reconciliation with the same ORCH-000187-proven caller shape but a corrected precondition that treats:

- `canonicalLeaseSha256=320a5ba0...d83069` as the protocol/index semantic hash; and
- `gitBlobSha=514e37fd...26c28` as the Git object identity.

The one-real-call budget remains unconsumed because ORCH-000188 invoked reconciliation zero times.

Pre-state remains index revision `377`, `nextLeaseEpoch=190`, one ACTIVE-but-expired epoch-189 target, revision `000002` absent, delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`, Architect trigger `ARCH-TRIGGER-9333-000005/SENT`, and accepted source GH-PUB-165.

Success requires full immutable revision `000002` with `state=EXPIRED`, exact lineage to revision `000001`, and one index CAS `377 → 378` leaving `activeLeases=[]` and `nextLeaseEpoch=190`.

No second reconciliation call is authorized if the real call is ambiguous or fails.

After clean epoch-189 recovery is accepted, the project may return to worker-delivery preparation, fresh persistent-host arm, and the full unattended canary:

`Architect durable dispatch → persistent Orchestrator → durable worker intent → Executor exactly once → durable terminal → persistent Orchestrator → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected until later explicit Rony-authorized integration.
