Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000187 Architect review
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Bugs and Lessons

## Permanent governance lessons

- Executor PASS/READY is evidence, never Architect acceptance.
- Never blind-retry an ambiguous external mutation; reconcile durable state first.
- Historical evidence remains immutable in meaning.
- Architect owns canonical documentation directly.
- Curator is eliminated from the active model.
- Orchestrator is deterministic transport/state infrastructure and never interprets project semantics.

## Documentation decision lesson

Use `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` to classify `documentationImpact=NONE|STATE|FULL`. `FULL` means lasting truth changed, not that every Markdown file must be rewritten. Every selected STATE/FULL document must be durably written/read back before the next mutating dispatch.

## Mutation-lease projection vs immutable-record lesson — ORCH-000184

The `activeLeases` index entry is a reduced locator/projection. The canonical immutable revision is the full `MUTATION_LEASE` record. When a full-schema validator/projector/reconciliation path is called:

`index locator → hydrate immutable revision → verify exact binding → pass full immutable record`.

A reduced index entry must not substitute for the immutable record.

## ORCH-000185 / ORCH-000186 lesson

ORCH-000185 showed that merely reporting full-record hydration was not enough to prove why the real reconciliation still returned `EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`. ORCH-000186 proved the pure projector itself succeeds with the exact immutable lease, but durable ORCH-000185 evidence did not preserve the actual call field-by-field.

Lesson:

> When a corrected call still fails before mutation, preserve exact invocation arguments, projector input/output, Promise resolution/rejection, and innermost reason before considering another retry.

## Corrected-caller reproduction lesson — ORCH-000187

ORCH-000187 closed the observability gap far enough to prove the corrected runtime path without performing external mutation.

The accepted mutation-disabled reproduction used one object containing:

- full immutable lease revision `000001`;
- exact `reconciliationBinding`;
- integer `nowMs`.

The captured lease SHA-256 was `320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069` and semantically equaled immutable revision `000001`.

The accepted runtime validated the lease, constructed a valid EXPIRED revision `000002` projection, awaited the path, and reached the first would-be external mutation:

`createJson(.../revisions/000002.json)`.

The deterministic stub stopped there; therefore real reconciliation calls and lease/index mutations remained zero.

Permanent countermeasure:

> Before a real retry, preserve the ORCH-000187-proven full-immutable one-object caller shape and bounded observability around caller input, projection result, await outcome, first external mutation, and durable post-state.

Accepted source patch remains unnecessary for this recovery path.

## Historical evidence limitation lesson

The historical `orch-000185-reconcile.mjs` launcher is absent. Its exact arguments cannot be reconstructed.

Do not infer an exact ORCH-000185 root cause from ORCH-000187's successful corrected reproduction. The valid conclusion is narrower: the corrected caller shape succeeds through projection and reaches the mutation boundary.

This distinction is permanent because missing historical evidence cannot be recreated honestly.

## Recovery ordering

1. accept the proven corrected caller contract;
2. authorize at most one real reconciliation under a precise mutation envelope;
3. preserve field-level caller/projector/await observability;
4. determine success only from durable revision/index readback;
5. if ambiguous, stop with no retry;
6. require epoch-189 lease closure before any new worker-delivery lease/preparation;
7. resume PREPARED + zero-browser PROVEN_NOT_SENT qualification;
8. arm a fresh persistent host and prove the full unattended Executor-delivery → terminal-observation → Architect-wake cycle.

## Current success criterion

`Architect durable dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
