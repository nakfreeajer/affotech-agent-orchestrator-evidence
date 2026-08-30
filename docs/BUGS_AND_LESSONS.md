Project: affotech-agent-orchestrator
Documentation sync boundary: through Rony future-idea governance directive and canonical ORCH-000182
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Bugs and Lessons

## Permanent governance lessons

- Executor PASS is evidence, never acceptance.
- Never blind-retry an ambiguous external mutation; reconcile read-only first.
- Historical evidence remains immutable in meaning.
- Architect owns canonical documentation directly under `ARCHITECT_DIRECT`.
- Architect also owns material future-intent preservation separately from current truth.
- Curator is eliminated from the active model; historical Curator evidence remains history only.
- Orchestrator is independent deterministic transport/state infrastructure; it never reads Architect assistant decisions for authority or interprets documentation/idea semantics.
- Local git commit/push is not runtime state transport.

## Documentation persistence lesson

A correct documentation owner is insufficient if documentation completeness depends on that owner's memory.

Rony identified the failure mode: Architect has the richest project context and therefore produces more accurate documentation than a downstream Curator, but Architect can still omit documentation unless closure is a protocol invariant.

Permanent countermeasure:

- every Architect review/material Rony directive receives documentation impact `NONE`, `STATE`, or `FULL`;
- `NONE` avoids unnecessary document churn;
- `STATE` updates the smallest current-state/recovery projection needed to prevent misleading continuation;
- `FULL` updates all materially affected governance/architecture/current-state/decision/history/lesson/entrypoint material;
- required `STATE`/`FULL` documents must be written and read back before the next mutating implementation dispatch is published;
- documentation write/readback failure cannot be silently ignored;
- no Curator terminal is required;
- future Orchestrator enforcement may check a machine closure marker only after an accepted schema exists; Orchestrator still does not decide prose meaning.

## Future-idea persistence lesson

Correct current-state documentation is not enough if useful future ideas can disappear with Architect/session cold start.

The opposite failure is also dangerous: placing unimplemented ideas into Current State or Architecture makes future intent look like accepted behavior.

Permanent countermeasure under governance v1.3:

```text
documentationImpact = NONE | STATE | FULL
futureIdeaImpact    = NONE | CAPTURE | PROMOTE
```

These decisions are independent.

Architect captures/promotes future ideas only when they have material continuity value, such as explicit Rony future direction, meaningful risk reduction/capability, architectural simplification, a useful improvement revealed outside the current bounded milestone, or something a cold-start Architect would materially regret losing.

Do not persist casual brainstorming, trivial alternatives, or duplicates.

Lifecycle:

`PROPOSED → ADOPTED_FOR_FUTURE → SCHEDULED → IMPLEMENTED`

Semantic separation:

- `CURRENT_STATE` = true/current now;
- `ARCHITECTURE` = accepted system design;
- `IDEA_INBOX` = useful future concepts;
- `ROADMAP` = adopted/scheduled future intent;
- `DISPATCH` = authorized work now.

Idea/roadmap entries create zero implementation authority. A future idea becomes current truth only after independent implementation acceptance.

This rule is durable in bootstrap/project/memory policy v1.3 and in `docs/IDEA_INBOX.md` / `docs/ROADMAP.md`, so future Architect sessions do not depend on chat memory.

## Preparation composition lessons

Accepted worker-delivery preparation currently requires both:

- explicit `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` in disposable composition;
- transient BrowserRelay transport authorization with `actionKind=WORKER_DELIVERY`.

The durable mutation lease itself remains immutable; `actionKind` belongs to the transient authorization used for preparation.

## Transport-status lesson

Process exit code and HTTP semantic status are different fields. ORCH-000177/178 proved an actual GitHub HTTP `404` must remain semantic `404`/NOT_FOUND while `ghExitCode=1` remains diagnostics only.

## Process timeout is not semantic failure

ORCH-000180 acquired epoch `188` successfully but stopped before any preparation request. Therefore it supplied no evidence against the action-kind fix. The lease was normally released and state returned clean.

Lesson: a process-level termination before a function call provides no evidence about that function's corrected semantic contract.

## ORCH-000181 — expired lease after pre-preparation termination

ORCH-000181 acquired/indexed epoch `189` and constructed transient `actionKind=WORKER_DELIVERY`, but again terminated before preparation call count advanced above `0`.

Unlike ORCH-000180, the lease expired before normal release. Accepted release semantics correctly did not attempt a normal release after expiry.

Current durable state before ORCH-000182 recovery:

- index revision `377`;
- next epoch `190`;
- one indexed ACTIVE lease, already expired;
- target revision `000002` absent;
- delivery `000014` absent;
- browser contact/send `0/0`.

Lesson: once an active lease expires, do not force normal release or acquire another lease. Reconcile that exact expired lease under separately bounded authority first.

## Recovery ordering

1. ORCH-000182 exactly reconciles the expired epoch-189 lease;
2. Architect verifies recovery and applies both v1.3 impact decisions;
3. return to preparation proof from a clean lease index;
4. avoid multiplying disposable launcher layers if the failure is harness-only;
5. once PREPARED + zero-browser PROVEN_NOT_SENT is accepted, arm a fresh persistent host;
6. prove the full unattended Executor-delivery → terminal-observation → Architect-wake cycle;
7. after core production-candidate qualification, revisit adopted future `IDEA-0001` rather than implementing it prematurely.

## Current success criterion

`Architect durable dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
