Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000182 Architect review
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

## Expired-lease recovery lesson

ORCH-000173 proved the accepted expired-lease reconciliation path can succeed when request-level transport is instrumented and durable revision/index readback determines the outcome.

ORCH-000182 later invoked the same logical reconciliation once for epoch `189`, but its disposable launcher produced no observable completion output. Executor therefore reported INCONCLUSIVE.

Architect then independently read GitHub and proved both authorized durable side effects were absent:

- revision `000002` did not exist;
- lease index remained revision `377` with the same target lease ACTIVE.

Lesson:

**unobservable launcher/process completion is not itself proof of external mutation ambiguity when the complete authorized durable mutation surface can be independently read back and both effects are proven absent.**

After that read-only reconciliation, a separately authorized new attempt is not a blind retry. It must still be exactly once under new authority.

The next attempt should reuse the ORCH-000173 proven request instrumentation and must not rely on stdout as the authoritative success signal; durable GitHub state is authority.

## Pointer lesson

ORCH-000182 advanced `LATEST_EXECUTOR_TERMINAL` but left `LATEST_MILESTONE` on ORCH-000181. Convenience pointers can therefore diverge even when immutable terminal evidence exists. Verification must always read the mandatory pointer set and underlying immutable evidence rather than trusting one pointer alone. Later normal terminal publication should supersede the stale milestone pointer; historical evidence must not be rewritten merely to make pointers look cleaner.

## Recovery ordering

1. perform one newly authorized instrumented expired-lease reconciliation from index revision `377` after fresh pre-state verification;
2. require durable `revision 000002=EXPIRED` and index `377→378`, leaving `nextLeaseEpoch=190` and `activeLeases=[]`;
3. Architect verifies recovery and applies the fixed documentation/future-idea tests;
4. return to preparation proof from the clean lease index;
5. once PREPARED + zero-browser PROVEN_NOT_SENT is accepted, arm a fresh persistent host;
6. prove the full unattended Executor-delivery → terminal-observation → Architect-wake cycle;
7. after core production-candidate qualification, revisit adopted future `IDEA-0001`.

## Current success criterion

`Architect durable dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
