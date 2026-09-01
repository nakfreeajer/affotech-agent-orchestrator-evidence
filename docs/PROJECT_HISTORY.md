Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000192 Architect review
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

## ORCH-000189 / ORCH-000190 — pre-call evidence ambiguity and accepted semantics

ORCH-000189 passed typed-hash and pure-projection gates but its separate pre-call `createJson` evidence write returned `AMBIGUOUS`; fresh readback showed that path absent, so real reconciliation was not invoked.

ORCH-000190 then established accepted `createJson` semantics as `precheck → at most one PUT → exact post-write readback`, and the permanent countermeasure to avoid separate prerequisite evidence writes that can themselves become ambiguity blockers.

Decision: `GH-DEC-190-PRECALL-CREATEJSON-TRANSPORT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`.

## ORCH-000191 — one real call consumed; revision precheck failed before mutation

ORCH-000191 moved diagnostics in-memory and invoked accepted `reconcileExpiredMutationLease` exactly once after passing preconditions, typed-hash validation, and pure projection.

The revision-`000002` precheck used a disposable `gh` subprocess that surfaced process exit code `1` without semantic HTTP status. The adapter normalized the expected absent contents path to `GITHUB_API_ERROR`; accepted `createJson` therefore returned `CREATE_PRECHECK_FAILED`. No revision PUT or index CAS occurred.

Decision: `GH-DEC-191-REVISION-PRECHECK-TRANSPORT-INCONCLUSIVE`.

The ORCH-000191 real-call budget was consumed, but durable lease/index state remained unchanged.

## ORCH-000192 — disposable adapter 404 mapping defect accepted

ORCH-000192 ran strictly read-only and compared the same known-existing/known-absent GitHub Contents paths.

Executor terminal:

`GH-PUB-192-REVISION-PRECHECK-GITHUB-READ-ADAPTER-DIAGNOSTIC-000001`

Proven observations:

- revision `000001` GET → HTTP `200`, parseable JSON;
- absent revision `000002` GET → HTTP `404`, parseable JSON error;
- the recovered ORCH-000191 `gh` subprocess shape does not expose the semantic `404`;
- the corrected direct awaited GitHub Contents request preserves HTTP status and maps `404 → NOT_FOUND`;
- accepted client then normalizes existing content as `EXISTING_JSON` and absent content as `NOT_FOUND`;
- classification `DISPOSABLE_ADAPTER_404_MAPPING_DEFECT`;
- corrected read-adapter shape proven `true`;
- `sourcePatchRequired=false`;
- minimal repair scope is the disposable read adapter only;
- ORCH-000192 made zero external mutation requests and zero reconciliation calls.

Architect accepted the diagnosis under:

`GH-DEC-192-DISPOSABLE-ADAPTER-404-MAPPING-DEFECT-ACCEPTED`.

Permanent rule: preserve semantic HTTP status in GitHub Contents read adapters; map `404` to `NOT_FOUND` rather than collapsing it into generic subprocess/API failure.

`documentationImpact=FULL`; `futureIdeaImpact=NONE`.

## Current target

The next legal milestone is ORCH-000193: one new separately authorized epoch-189 reconciliation attempt using the ORCH-000187-proven caller and the ORCH-000192-proven status-preserving read adapter.

Before mutation it must prove with GET-only gates that revision `000001` normalizes as existing content and absent revision `000002` normalizes as `NOT_FOUND`. Then it may call real reconciliation exactly once.

Pre-state remains:

- index revision `377`;
- `nextLeaseEpoch=190`;
- one ACTIVE-but-expired epoch-189 lease;
- revision `000002` absent;
- delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- Architect trigger `ARCH-TRIGGER-9333-000005/SENT`;
- accepted source GH-PUB-165.

Success requires valid EXPIRED revision `000002` plus index CAS `377 → 378`, `activeLeases=[]`, `nextLeaseEpoch=190`.

If the real result is ambiguous, failed, or process completion is unobservable, no second real call is authorized under ORCH-000193.

After clean epoch-189 recovery is independently accepted, the project may return to worker-delivery preparation, fresh persistent-host arm, and the full unattended canary:

`Architect durable dispatch → persistent Orchestrator → durable worker intent → Executor exactly once → durable terminal → persistent Orchestrator → durable Architect trigger → Architect wake exactly once`.

AFFOTECH remains separate/protected until later explicit Rony-authorized integration.
