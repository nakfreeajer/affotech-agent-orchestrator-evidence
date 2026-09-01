Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000190 Architect review
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

## Full immutable lease lesson — ORCH-000184

The `activeLeases` index entry is a reduced locator/projection. When a full-schema validator/projector/reconciliation path is called:

`index locator → hydrate immutable revision → verify exact binding → pass full immutable record`.

A reduced index entry must not substitute for the immutable record.

## Corrected caller / observability lesson — ORCH-000187

The proven reconciliation caller shape is one object containing the full immutable lease, exact `reconciliationBinding`, and integer `nowMs`. Preserve caller input, projection, await outcome, and mutation-boundary observability around any real attempt.

The historical ORCH-000185 launcher is absent. Do not infer an exact historical root cause from later successful corrected reproductions.

## Typed hash lesson — ORCH-000188

Treat every hash as a typed value. Never compare Git blob SHA to project canonical SHA-256 merely because both are named `sha`.

- canonical SHA-256 = immutable semantic/content binding;
- Git blob SHA = GitHub object identity/CAS metadata.

## Pre-call evidence transport lesson — ORCH-000189 / ORCH-000190

ORCH-000189 passed typed hash and pure projection gates but its prerequisite pre-call `createJson` returned `AMBIGUOUS`; the exact target was absent on fresh readback, so the real reconciliation was not invoked.

ORCH-000190 mutation-disabled diagnosis established accepted `createJson` semantics:

`precheck → one PUT → exact post-write readback → normalized result`

The PUT response body does not determine success. Exact durable readback does. A missing/throwing/non-success PUT can still end `CREATED` when readback matches; an absent post-write readback can normalize to `AMBIGUOUS / POST_MUTATION_ABSENT` for multiple transport branches.

Because ORCH-000189 did not preserve the live adapter throw/status/readback details, its exact ambiguity branch remains unobservable. This does not establish a source defect.

Permanent countermeasure:

> Do not make a separate prerequisite external evidence write whose own ambiguity can block the target operation. For a one-shot authorized mutation, buffer bounded non-sensitive adapter/projector/await diagnostics in memory, execute the target operation at most once, and then reconcile outcome from durable target-state readback. If completion is ambiguous, do not issue a second target call.

## Recovery ordering

1. preserve full immutable caller and typed-hash contracts;
2. use in-memory bounded diagnostics rather than a prerequisite external pre-call snapshot;
3. invoke real expired-lease reconciliation at most once under explicit authority;
4. determine outcome from immutable revision/index readback;
5. if ambiguous, stop with no second real call;
6. require epoch-189 lease closure before any new worker-delivery lease/preparation;
7. resume PREPARED + zero-browser PROVEN_NOT_SENT qualification;
8. arm a fresh persistent host and prove the full unattended Executor-delivery → terminal-observation → Architect-wake cycle.

## Current success criterion

`Architect durable dispatch → persistent Orchestrator → durable intent → Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
