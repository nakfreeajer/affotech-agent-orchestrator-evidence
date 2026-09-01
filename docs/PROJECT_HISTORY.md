Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000190 Architect review
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

## ORCH-000188 — typed-hash correction

ORCH-000188 stopped before reconciliation because a precondition compared project canonical SHA-256 with Git blob SHA. Architect proved there was no lease drift and established the permanent typed-hash rule.

Decision: `GH-DEC-188-PRECONDITION-HASH-NAMESPACE-MISMATCH-BLOCKED`.

## ORCH-000189 — pre-call evidence write ambiguity

ORCH-000189 correctly separated the hash namespaces and passed pure projection. Before reconciliation, its mandatory pre-call `createJson` evidence publication returned `AMBIGUOUS`; fresh readback found that path absent. Real reconciliation was therefore not invoked.

Decision: `GH-DEC-189-PRECALL-EVIDENCE-WRITE-AMBIGUOUS-INCONCLUSIVE`.

Durable state remained index `377`, next epoch `190`, one expired ACTIVE epoch-189 lease, revision `000002` absent, delivery `000013/SENT`, trigger `000005/SENT`.

## ORCH-000190 — createJson ambiguity semantics accepted

ORCH-000190 ran strictly mutation-disabled against accepted source and deterministic stubs.

Executor terminal:

`GH-PUB-190-PRECALL-CREATEJSON-AMBIGUITY-DIAGNOSTIC-000001`

Accepted findings:

- accepted `createJson` path is `precheck → one PUT → exact post-write readback`;
- PUT response body is not final creation authority;
- matching readback yields `CREATED` even if the immediate PUT result is missing/throws;
- absent post-write readback may yield `AMBIGUOUS / POST_MUTATION_ABSENT` for multiple live transport branches;
- ORCH-000189 did not preserve the live adapter throw/status/readback details, so its exact branch remains unobservable;
- classification `PRECALL_CREATEJSON_TRANSPORT_AMBIGUITY_WITHOUT_DURABLE_EFFECT`;
- `sourcePatchRequired=false`;
- ORCH-000190 made zero external target mutations and zero real reconciliation calls;
- the real reconciliation budget remains unconsumed.

Architect accepted the diagnostic under:

`GH-DEC-190-PRECALL-CREATEJSON-TRANSPORT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`.

Permanent countermeasure: do not make a separate prerequisite external evidence write whose own ambiguity can block the target one-shot mutation. Buffer bounded adapter/projector/await diagnostics in the same execution context and determine mutation outcome from durable target-state readback.

`documentationImpact=FULL`; `futureIdeaImpact=NONE`.

## Current target

The next legal milestone is ORCH-000191: one real epoch-189 reconciliation using the ORCH-000187-proven caller shape, with no separate pre-call `createJson` evidence publication.

Pre-state remains:

- index revision `377`;
- `nextLeaseEpoch=190`;
- one ACTIVE-but-expired epoch-189 lease;
- revision `000002` absent;
- delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- Architect trigger `ARCH-TRIGGER-9333-000005/SENT`;
- accepted source GH-PUB-165.

ORCH-000191 may buffer bounded non-sensitive diagnostics in memory, call real reconciliation exactly once, and must then fresh-read revision `000002` and the lease index. Success requires valid EXPIRED revision `000002` plus index CAS `377 → 378`, `activeLeases=[]`, `nextLeaseEpoch=190`.

If the real result is ambiguous, failed, or process completion is unobservable, no second real call is authorized.

After clean epoch-189 recovery is independently accepted, the project may return to worker-delivery preparation, fresh persistent-host arm, and the full unattended canary:

`Architect durable dispatch → persistent Orchestrator → durable worker intent → Executor exactly once → durable terminal → persistent Orchestrator → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected until later explicit Rony-authorized integration.
