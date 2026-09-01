Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000188 Architect review
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

ORCH-000187 proved the corrected runtime path without performing external mutation.

The accepted mutation-disabled reproduction used one object containing the full immutable lease, exact `reconciliationBinding`, and integer `nowMs`. It validated the lease, produced a valid EXPIRED revision `000002` projection, awaited the path, and reached the first would-be external mutation:

`createJson(.../revisions/000002.json)`.

Permanent countermeasure:

> Before a real retry, preserve the ORCH-000187-proven full-immutable one-object caller shape and bounded observability around caller input, projection result, await outcome, first external mutation, and durable post-state.

Accepted source patch remains unnecessary for this recovery path.

## Historical evidence limitation lesson

The historical `orch-000185-reconcile.mjs` launcher is absent. Its exact arguments cannot be reconstructed.

Do not infer an exact ORCH-000185 root cause from ORCH-000187's successful corrected reproduction. The valid conclusion is narrower: the corrected caller shape succeeds through projection and reaches the mutation boundary.

## Hash namespace mismatch lesson — ORCH-000188

ORCH-000188 failed closed before mutation because a precondition check compared unlike hash identities:

- expected/index-advertised project canonical SHA-256: `320a5ba0e85ac77a5c0f6f6314b9d32d7aafb08b676688d316b4918fd2d83069`;
- observed GitHub Contents API blob SHA: `514e37fddd80cfceae87d260e73acebd34526c28`.

The mismatch did **not** prove immutable-record drift. Independent verification of the parsed immutable revision using compact JSON serialization in its stored field order reproduces the canonical SHA-256 `320a5ba0...d83069` exactly.

Permanent countermeasure:

> Treat every hash as a typed value. Never compare a Git blob SHA to a project canonical SHA-256 merely because both are called `sha`. Use explicit names such as `canonicalLeaseSha256` and `gitBlobSha`, and verify each only against the authority belonging to that namespace.

The 40-character Git blob SHA belongs to Git object identity/CAS semantics. The 64-character canonical SHA-256 belongs to immutable semantic/content binding in the Orchestrator protocol.

Because ORCH-000188 stopped before the pure projection gate and real reconciliation, its real-call budget remains unconsumed.

## Recovery ordering

1. preserve the ORCH-000187 corrected caller shape;
2. verify canonical lease SHA-256 and Git blob SHA as separate typed values;
3. publish/read back the bounded pre-call snapshot;
4. authorize at most one real reconciliation under a precise mutation envelope;
5. preserve field-level caller/projector/await/request observability;
6. determine success only from durable revision/index readback;
7. if ambiguous, stop with no second real call;
8. require epoch-189 lease closure before any new worker-delivery lease/preparation;
9. resume PREPARED + zero-browser PROVEN_NOT_SENT qualification;
10. arm a fresh persistent host and prove the full unattended Executor-delivery → terminal-observation → Architect-wake cycle.

## Current success criterion

`Architect durable dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
