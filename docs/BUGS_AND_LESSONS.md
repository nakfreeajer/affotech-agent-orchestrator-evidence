Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000183 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Bugs and Lessons

## Permanent governance lessons

- Executor PASS is evidence, never acceptance.
- Never blind-retry an ambiguous external mutation; reconcile read-only first.
- Historical evidence remains immutable in meaning.
- Architect owns canonical documentation directly under `ARCHITECT_DIRECT`.
- Curator is eliminated from the active model; historical Curator evidence remains history only.
- Orchestrator is independent deterministic transport/state infrastructure and never interprets documentation/idea semantics.

## Documentation decision lesson

Documentation completeness must not depend on Architect memory, and document mutation must not be triggered by status/activity alone.

Permanent countermeasure:

- apply `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md`;
- TEST-1 asks whether current truth would become false/incomplete/stale/misleading if docs stayed unchanged;
- TEST-2 separates state-only recovery changes (`STATE`);
- TEST-3 identifies lasting truth (`FULL`);
- then test each candidate file independently;
- `FULL` never means rewrite every Markdown file;
- `STATE`/`FULL` selected files must be written/read back before the next mutating implementation dispatch.

## Future-idea persistence lesson

Useful future intent is preserved separately from current truth:

`futureIdeaImpact = NONE | CAPTURE | PROMOTE`

with lifecycle:

`PROPOSED → ADOPTED_FOR_FUTURE → SCHEDULED → IMPLEMENTED`.

`IDEA_INBOX`/`ROADMAP` create zero implementation authority.

## Preparation composition lessons

Accepted worker-delivery preparation requires both:

- explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` in qualification composition;
- transient BrowserRelay authorization with `actionKind=WORKER_DELIVERY`.

The durable mutation lease remains immutable; `actionKind` belongs to transient authorization.

## Transport-status lesson

Process exit code and HTTP semantic status are different fields. Actual GitHub HTTP `404` must remain semantic 404/NOT_FOUND while `ghExitCode=1` remains diagnostic only.

## Expired-lease recovery lessons

ORCH-000173 proved the accepted expired-lease reconciliation path can succeed when request-level transport is instrumented and durable revision/index readback determines the outcome.

ORCH-000182 later invoked the same logical reconciliation once for epoch `189`, but its disposable launcher produced no observable completion output. Architect independently proved both authorized durable effects absent. This established that unobservable process completion is not itself external-mutation ambiguity when the complete durable mutation surface can be read back and shown unchanged.

ORCH-000183 then made one new separately authorized attempt. This time the accepted call returned deterministically before mutation:

`DENIED / EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`.

Revision `000002` remained absent and index revision `377` unchanged.

No permanent root cause is recorded yet. The reason code identifies the validation stage, not the exact invalid field/condition. Therefore the correct next step is read-only comparison of the ORCH-000183 projection/call shape with accepted ORCH-000165 source and successful ORCH-000173 input semantics before authorizing another reconciliation attempt.

Permanent recovery rule remains:

**when an accepted mutation path denies its projected transition before mutation, diagnose the exact projection contract first; do not convert a stable denial into repeated mutation attempts.**

## Pointer lesson

ORCH-000182 advanced `LATEST_EXECUTOR_TERMINAL` but left `LATEST_MILESTONE` on ORCH-000181. ORCH-000183 restored normal terminal/milestone pointer advancement. Verification must always read the complete mandatory pointer set and underlying immutable evidence rather than trusting one convenience pointer alone.

## Recovery ordering

1. read-only diagnose `EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID` by comparing accepted source, successful ORCH-000173 reconciliation semantics, ORCH-000183 call shape, and the exact epoch-189 lease/index projection;
2. Architect verifies the exact cause and applies the fixed documentation/future-idea tests;
3. only then authorize the smallest safe repair/reconciliation path;
4. require the epoch-189 lease to close durably before any new worker-delivery lease/preparation;
5. return to PREPARED + zero-browser PROVEN_NOT_SENT proof;
6. arm a fresh persistent host;
7. prove the full unattended Executor-delivery → terminal-observation → Architect-wake cycle;
8. after core production-candidate qualification, revisit adopted future `IDEA-0001`.

## Current success criterion

`Architect durable dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
