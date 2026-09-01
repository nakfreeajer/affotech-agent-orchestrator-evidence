Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000189 Architect review
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

ORCH-000186 proved the full immutable epoch-189 lease and pure expiry projector are valid, but ORCH-000185 durable evidence did not contain enough caller-level details to reconstruct the actual invocation field-by-field.

Classification `OBSERVABILITY_INSUFFICIENT` was accepted under `GH-DEC-186-INVOCATION-PARITY-OBSERVABILITY-INSUFFICIENT-ACCEPTED`.

## ORCH-000187 — corrected caller proven through mutation boundary

ORCH-000187 ran a mutation-disabled reproduction with deterministic external-write stubs. The corrected runtime call used full immutable revision `000001`, exact reconciliation binding, and integer `nowMs`; validation succeeded, the projector produced a valid EXPIRED revision `000002` projection, and awaited execution reached the first would-be external mutation.

Architect accepted ORCH-000187 under `GH-DEC-187-CORRECTED-CALLER-PROJECTION-BOUNDARY-ACCEPTED` and authorized one instrumented real reconciliation call.

## ORCH-000188 — false precondition drift from hash namespace mismatch

ORCH-000188 stopped before reconciliation because a precondition compared the project canonical SHA-256 `320a5ba0...d83069` with the Git blob SHA `514e37fd...26c28`.

Architect proved there was no real lease drift and classified the milestone `BLOCKED` under `GH-DEC-188-PRECONDITION-HASH-NAMESPACE-MISMATCH-BLOCKED`.

Permanent rule: canonical semantic/content SHA-256 and Git blob SHA are distinct typed identities and must not be compared directly.

The real reconciliation call budget remained unconsumed.

## ORCH-000189 — typed-hash repair passed; pre-call snapshot ambiguous

ORCH-000189 correctly separated the two hash namespaces and passed all preconditions plus the pure projection gate.

Executor terminal:

`GH-PUB-189-TYPED-HASH-CORRECTED-CALLER-RECONCILIATION-INCONCLUSIVE-000001`

Observed sequence:

- canonical lease SHA-256 matched exactly;
- Git blob SHA was separately tracked;
- pure projection produced a valid EXPIRED revision;
- before reconciliation, the mandated durable pre-call snapshot `createJson` returned `AMBIGUOUS`;
- fresh GitHub readback found the exact pre-call path absent;
- real reconciliation was therefore not invoked;
- real reconciliation calls `0`;
- revision `000002` absent;
- index remains `377`, `nextLeaseEpoch=190`, one expired ACTIVE epoch-189 lease;
- delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` unchanged;
- Architect trigger `ARCH-TRIGGER-9333-000005/SENT` unchanged;
- protected side effects remained zero.

Architect classified ORCH-000189 `INCONCLUSIVE` under:

`GH-DEC-189-PRECALL-EVIDENCE-WRITE-AMBIGUOUS-INCONCLUSIVE`.

The one-real-reconciliation-call budget remains unconsumed, but no further external mutation attempt is authorized until the pre-call evidence write ambiguity is diagnosed.

`documentationImpact=STATE`; `futureIdeaImpact=NONE`.

## Documentation-governance evolution

Curator was eliminated from the active model and Architect directly owns canonical documentation. Governance requires independent `documentationImpact=NONE|STATE|FULL` and `futureIdeaImpact=NONE|CAPTURE|PROMOTE` classification, plus durable write/readback closure before a mutating dispatch when documentation is required.

## Current target

The next legal milestone is ORCH-000190: a strictly mutation-disabled diagnostic of the ORCH-000189 pre-call snapshot publication path.

It must determine the first deterministic reason the authorized `createJson` returned `AMBIGUOUS` while the exact path was absent on durable readback. The diagnostic should inspect accepted request construction and response/status/body normalization, Promise/await behavior, and compare with accepted successful GitHub write semantics without performing another external mutation attempt.

Only after that cause is independently reviewed may Architect decide whether a source repair, caller/composition repair, or reissued one-shot reconciliation is justified.

After clean epoch-189 recovery is eventually accepted, the project may return to worker-delivery preparation, fresh persistent-host arm, and the full unattended canary:

`Architect durable dispatch → persistent Orchestrator → durable worker intent → Executor exactly once → durable terminal → persistent Orchestrator → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected until later explicit Rony-authorized integration.
