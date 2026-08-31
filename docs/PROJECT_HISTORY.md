Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000186 Architect review
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

ORCH-000182 invoked expiry reconciliation once but produced unobservable launcher completion. Architect independently proved revision `000002` absent and index `377` unchanged, so no durable side effect occurred.

ORCH-000183 made one separately authorized instrumented attempt. Accepted reconciliation returned `DENIED / EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID` before mutation, leaving durable state unchanged.

## ORCH-000184 — caller argument contract accepted

ORCH-000184 diagnosed the ORCH-000183 denial as `CALLER_ARGUMENT_DEFECT`:

- immutable epoch-189 revision `000001` is a valid full `MUTATION_LEASE`;
- the lease index stores a reduced `activeLeases` locator/projection;
- ORCH-000183 passed the reduced index entry where expiry projection required full `validateMutationLease`-compatible input;
- the reduced entry failed with `RECORD_FIELDS_INVALID` before EXPIRED projection construction;
- historical ORCH-000169/173 succeeded using the full immutable lease record;
- accepted source patch required `false`.

Architect accepted the permanent caller contract under:

`GH-DEC-184-EXPIRED-LEASE-CALLER-ARGUMENT-CONTRACT-ACCEPTED`.

Permanent rule: hydrate and verify the exact immutable lease revision referenced by the index before passing it to a full-schema validator/projector/reconciliation operation.

## ORCH-000185 — full immutable input still denied before mutation

ORCH-000185 was published with the corrected ORCH-000184 authority and required full immutable lease hydration plus a pre-mutation pure projection gate.

Commit chronology proves the corrected ORCH-000185 prompt and immutable dispatch existed before the terminal publication.

Executor terminal:

`GH-PUB-185-EXPIRED-LEASE-RECONCILIATION-PRE-MUTATION-DENIED-000001`

Reported/verified outcome:

- full immutable epoch-189 revision `000001` hydrated and validated;
- accepted reconciliation invoked exactly once;
- result remained `DENIED / EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`;
- external mutation boundary not reached;
- lease revision writes `0`;
- index CAS writes `0`;
- revision `000002` absent;
- index revision `377`, `nextLeaseEpoch=190`, same sole expired ACTIVE lease;
- latest delivery `000013/SENT` and Architect trigger `000005/SENT` unchanged;
- no browser/host/source/AFFOTECH/Drive effects.

Architect classified:

`GH-DEC-185-FULL-IMMUTABLE-RECONCILIATION-PREMUTATION-DENIAL-BLOCKED`.

The ORCH-000184 full-record contract remains accepted, but a second invocation/projection mismatch remained unresolved. Executor's suggestion that a future single retry is safe was not authorization.

## ORCH-000186 — invocation parity diagnostic accepted

ORCH-000186 was a strictly read-only, mutation-disabled diagnostic intended to determine whether the accepted pure projection path itself was defective or whether durable ORCH-000185 evidence was insufficient to reconstruct the actual call.

Executor terminal:

`GH-PUB-186-EXPIRED-LEASE-INVOCATION-PARITY-DIAGNOSTIC-000001`

Architect decision:

`GH-DEC-186-INVOCATION-PARITY-OBSERVABILITY-INSUFFICIENT-ACCEPTED`

Accepted findings:

- the full immutable epoch-189 revision `000001` validated in the pure harness;
- the accepted pure projector produced a valid revision `000002` projection with `state=EXPIRED` when supplied the expected previous-record SHA, integer `nowMs`, and canonical EXPIRED releaser;
- therefore the accepted schema/projector is not shown defective;
- the actual ORCH-000185 reconciliation invocation could not be reconstructed field-by-field from durable evidence;
- unpreserved details include the exact lease argument, previous-record hash, `nowMs`, releaser, await resolution, and inner failure;
- classification `OBSERVABILITY_INSUFFICIENT`;
- accepted source patch required `false`;
- safe reconciliation retry remains `false`;
- ORCH-000186 made zero real reconciliation calls and zero lease/browser/host/source/AFFOTECH/Drive mutations.

The recovery problem therefore narrowed from "projection invalid" to a bounded caller-observability gap. No source defect and no retry authority were established.

## Documentation-governance evolution — 2026-08-30/31

Rony eliminated Curator from the active model and made Architect directly responsible for canonical documentation. Governance now includes:

- `documentationImpact = NONE | STATE | FULL`;
- `futureIdeaImpact = NONE | CAPTURE | PROMOTE`;
- mandatory fixed semantic test `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0;
- documentation write/readback closure before the next mutating implementation dispatch when required.

ORCH-000184 was a live example of fixed-test enforcement: an earlier STATE classification was superseded by FULL because a permanent caller contract/root cause had been established.

ORCH-000186 is `documentationImpact=STATE`: the legal recovery boundary advanced, but no additional lasting architecture/contract/capability/root cause was accepted.

## Current target

The next legal milestone is ORCH-000187 / DISPATCH-000187, a read-only caller-observability capture diagnostic. It must reproduce the ORCH-000185 caller composition under deterministic mutation-disabled stubs, capture the exact reconciliation arguments/projector path/await result and first would-be external mutation boundary, and identify the first deterministic mismatch if possible.

No real reconciliation retry is authorized yet. Epoch `189` remains ACTIVE-but-expired at index revision `377`, revision `000002` remains absent, and accepted source remains ORCH-000165.

Only after the exact mismatch is proven and a later Architect decision explicitly authorizes retry may the project safely close epoch `189`. After clean lease recovery is accepted, the project may return to worker-delivery preparation, fresh persistent-host arm, and the full unattended canary:

`Architect durable dispatch → persistent Orchestrator → durable worker intent → Executor exactly once → durable terminal → persistent Orchestrator → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected until later explicit Rony-authorized integration.