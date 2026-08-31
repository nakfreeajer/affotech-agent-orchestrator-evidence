Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000185 Architect review
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

## Mutation-lease projection vs immutable-record lesson

ORCH-000184 established a permanent contract:

1. the `activeLeases` entry in `MUTATION_LEASE_INDEX.json` is a reduced locator/projection; and
2. the canonical immutable revision under `mutation-leases/<leaseId>/revisions/<revision>.json` is the full `MUTATION_LEASE` record.

A reduced index entry may locate and bind the immutable record, but must not substitute for it when a validator/projector/reconciliation path requires the full lease schema. Hydrate, verify, then pass the immutable record.

Accepted source patch was not required for that defect.

## ORCH-000185 — full hydration did not fully resolve the denial

ORCH-000185 used the corrected authority and full immutable epoch-189 lease record. The terminal reports the full record was hydrated/validated and accepted reconciliation was invoked exactly once, yet it still returned:

`DENIED / EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`

before the external mutation boundary.

Durable post-state proves zero side effects: revision `000002` absent, index `377`, one expired ACTIVE target, no lease/index writes, no delivery/browser/host/trigger/source/AFFOTECH/Drive mutation.

Lesson at this stage:

**a proven correction to one caller argument does not justify assuming it was the only defect. When the corrected call still fails before mutation, preserve the accepted contract and diagnose the remaining invocation/projector inputs rather than repeating the mutation.**

No new permanent root cause beyond the ORCH-000184 full-record contract has yet been accepted. Therefore ORCH-000185 is a `STATE` documentation change, not a new architecture/source conclusion.

The Executor suggestion `safeSingleRetry=true` does not authorize retry. Architect authority remains required.

## Async/invocation diagnostic requirement

The next read-only diagnostic must distinguish pure projection/preflight semantics from the actual asynchronous reconciliation invocation. It must inspect:

- exact function signature/argument shape;
- full lease object equality;
- `nowMs` / expiry time;
- releaser / releasedBy / operationReference;
- previous-record hash;
- index/CAS binding;
- project/lineage/scope/envelope fields;
- whether the pure projection gate actually ran and its exact result;
- sync throw vs Promise rejection/resolve;
- whether the caller awaited the Promise;
- exact caught error/inner reason before outer reason-code normalization.

Do not authorize another reconciliation call until the first deterministic difference is identified.

## Pointer lesson

ORCH-000182 temporarily left terminal/milestone convenience pointers divergent. ORCH-000183 onward restored normal advancement. Verification must still read the complete mandatory pointer set and underlying immutable evidence.

## Recovery ordering

1. read-only diagnose ORCH-000185 invocation/projection parity with reconciliation calls `0`;
2. Architect verifies the exact remaining cause and applies the fixed documentation/future-idea tests;
3. only then authorize the smallest safe correction and one bounded recovery attempt if justified;
4. require epoch-189 lease closure before any new worker-delivery lease/preparation;
5. return to PREPARED + zero-browser PROVEN_NOT_SENT proof;
6. arm a fresh persistent host;
7. prove the full unattended Executor-delivery → terminal-observation → Architect-wake cycle;
8. after core production-candidate qualification, revisit adopted future `IDEA-0001`.

## Current success criterion

`Architect durable dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
