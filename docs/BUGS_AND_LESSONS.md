Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000184 Architect review
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

ORCH-000184 provided a live enforcement example: a first decision marked the review `STATE`, but the accepted diagnosis established a permanent root cause/caller contract. The fixed semantic test therefore required a superseding `FULL` decision. The earlier durable record was preserved rather than rewritten.

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

## Mutation-lease projection vs immutable-record lesson

ORCH-000184 established the exact root cause of ORCH-000183's `EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID` denial.

There are two different lease representations:

1. the `activeLeases` entry in `MUTATION_LEASE_INDEX.json`, which is a reduced locator/projection; and
2. the canonical immutable `MUTATION_LEASE` revision stored under the lease's `revisions/<revision>.json` path.

The reduced index entry does not contain the full lifecycle schema required by `validateMutationLease`. In the epoch-189 case the full immutable revision contains fields such as `acquiredAt`, `releasedAt`, `previousRecordSha256`, and `releasedBy`; the reduced index entry does not.

ORCH-000183 passed the reduced index entry directly to the expiry projection/reconciliation path. `validateMutationLease` therefore returned `RECORD_FIELDS_INVALID` before any EXPIRED projection was constructed.

Historical ORCH-000169/ORCH-000173 proved the correct pattern: use the full immutable ACTIVE revision and project it to a full EXPIRED revision preserving identity, lineage, scope/envelope bindings, lifecycle fields, and previous-record binding.

Permanent rule:

**an index entry may locate and bind an immutable lease record, but it must not substitute for that record when a downstream validator/projector requires the full lease schema. Hydrate, verify, then pass the immutable record.**

Accepted source patch is not required for this defect. The repair belongs to caller/composition.

## Expired-lease recovery lessons

ORCH-000173 proved the accepted expired-lease reconciliation path can succeed when request-level transport is instrumented and durable revision/index readback determines the outcome.

ORCH-000182 later invoked the same logical reconciliation once for epoch `189`, but its disposable launcher produced no observable completion output. Architect independently proved both authorized durable effects absent. This established that unobservable process completion is not itself external-mutation ambiguity when the complete durable mutation surface can be read back and shown unchanged.

ORCH-000183 made one new separately authorized attempt and was deterministically denied before mutation because of the caller-argument defect described above.

Permanent recovery rule:

**when an accepted mutation path denies its transition before mutation, diagnose the exact contract first; once a caller defect is proven, correct the caller and re-authorize one bounded attempt rather than patching accepted source without evidence.**

## Pointer lesson

ORCH-000182 advanced `LATEST_EXECUTOR_TERMINAL` but left `LATEST_MILESTONE` on ORCH-000181. ORCH-000183 and ORCH-000184 restored normal terminal/milestone pointer advancement. Verification must always read the complete mandatory pointer set and underlying immutable evidence rather than trusting one convenience pointer alone.

## Recovery ordering

1. close documentation for the accepted ORCH-000184 caller-contract/root-cause diagnosis;
2. authorize one corrected reconciliation from index revision `377` using a hydrated, verified full immutable epoch-189 revision `000001`;
3. require pure EXPIRED projection/validation to pass before external mutation;
4. call accepted reconciliation exactly once and require durable `revision 000002=EXPIRED`, index `377→378`, `nextLeaseEpoch=190`, `activeLeases=[]`;
5. only after Architect accepts clean lease recovery return to PREPARED + zero-browser PROVEN_NOT_SENT proof;
6. arm a fresh persistent host;
7. prove the full unattended Executor-delivery → terminal-observation → Architect-wake cycle;
8. after core production-candidate qualification, revisit adopted future `IDEA-0001`.

## Current success criterion

`Architect durable dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
