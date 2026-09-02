Project: affotech-agent-orchestrator
Documentation sync boundary: through Rony transport-identity correction on 2026-09-02; no new ORCH dispatch after ORCH-000197
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
- **Role identity, execution-runtime identity, transport identity, browser/session identity, and endpoint identity are distinct.**

## Role/runtime/transport identity collapse — 2026-09-02

### Failure

The project had durable historical BrowserRelay records with `workerRole=executor`, a registered ChatGPT conversation, and relay endpoint `9444`. Architect treated that as proof that the current Executor itself was browser-based and that restoring `9444` was required.

Rony corrected the actual operating reality: the Executor is the **Codex terminal/runtime in VS Code**.

The BrowserRelay was a real historical transport component; the error was not that it never existed. The error was allowing a historical transport registration to substitute for a current architecture/topology proof.

This led ORCH-000195 through ORCH-000197 to troubleshoot/restore a transport boundary before proving that the current Codex execution path still depended on it.

### Root governance defect

The project-specific policy literally described the registered `9444` session as “Executor browser/session authority,” collapsing:

`role → runtime → browser/session → relay endpoint`

into one identity.

The universal bootstrap had already modeled worker runtime identity and transport endpoint as separate fields; the project specialization had weakened that distinction.

### Permanent countermeasure

> Never diagnose a missing port from the role label alone. Before repairing/restarting/restoring/retrying a worker transport, first prove what runtime actually executes the work, what transport is currently intended to reach it, who owns each endpoint, whether that transport is still required, and the exact binding between runtime and transport.

Mandatory cold-start equation:

`Executor role ≠ Codex runtime ≠ BrowserRelay ≠ ChatGPT conversation ≠ CDP/relay port`

Additional rules:

- `workerRole=executor` is not execution-runtime proof;
- historical `ACTIVE` registration is not proof of current necessity;
- a successful historical BrowserRelay milestone proves that historical path only;
- do not invent a browser/CDP port from a relay port;
- do not start Brave on a BrowserRelay port or a relay on a browser CDP port without explicit ownership evidence;
- do not restore a missing component until its place in the current topology is proven;
- when Rony's current operating reality conflicts with an older lower-precedence next-action assumption, preserve history but supersede the future action in governing/current documentation.

Project policy v1.5 adds a mandatory runtime/transport topology reconciliation gate.

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

Accepted `createJson` is:

`precheck → at most one PUT → exact post-write readback → normalized result`

The PUT response body does not determine success. Exact durable readback does. A missing/throwing/non-success PUT can still end `CREATED` when readback matches; an absent post-write readback can normalize to `AMBIGUOUS / POST_MUTATION_ABSENT` for multiple transport branches.

Permanent countermeasure:

> Do not make a separate prerequisite external evidence write whose own ambiguity can block the target operation. Buffer bounded non-sensitive adapter/projector/await diagnostics in memory, execute the target operation at most once, and then reconcile outcome from durable target-state readback.

## GitHub Contents semantic 404 lesson — ORCH-000191 / ORCH-000192

ORCH-000191 consumed one authorized real reconciliation call but failed before any target mutation. The revision-`000002` precheck used a disposable `gh` subprocess that surfaced only process exit code `1`, not semantic HTTP status. The adapter therefore emitted `GITHUB_API_ERROR`; accepted `createJson` returned `CREATE_PRECHECK_FAILED`; revision PUT and index CAS both remained `0`.

ORCH-000192 proved the exact root cause with GET-only probes:

- existing revision `000001` returns HTTP `200` with parseable JSON;
- absent revision `000002` returns HTTP `404` with parseable JSON error;
- the ORCH-000191 subprocess shape does not expose the `404`;
- a direct awaited HTTP-capable GitHub Contents request preserves status and lets the accepted client normalize `404` to `NOT_FOUND`.

Permanent countermeasure:

> Treat process failure and semantic HTTP absence as different states. A disposable wrapper must not collapse `404 Not Found` into a generic process/API error. Preserve HTTP status explicitly and map `404 → NOT_FOUND`; keep authentication, transport, and other non-success failures distinct.

No accepted-source patch is required for this defect; the repair scope is the disposable read adapter composition.

## Recovery ordering

1. preserve full immutable caller and typed-hash contracts;
2. use a status-preserving GitHub Contents read adapter with semantic `404 → NOT_FOUND`;
3. use in-memory bounded diagnostics rather than a prerequisite external pre-call snapshot;
4. invoke real expired-lease reconciliation at most once under each explicit bounded authority;
5. determine outcome from immutable revision/index readback;
6. if ambiguous, stop with no second real call under the same authority;
7. require stale-lease closure before any new worker-delivery lease/preparation;
8. prove current role/runtime/transport topology before any live delivery or transport restoration;
9. only then qualify the actual active unattended Executor-delivery → terminal-observation → Architect-wake path.

## Current success criterion

The intended outcome remains:

`Architect durable dispatch → persistent Orchestrator → proven current delivery path → Codex Executor exactly once → durable terminal → persistent Orchestrator → durable trigger → Architect wake exactly once`

The phrase **proven current delivery path** is mandatory. Historical BrowserRelay qualification does not automatically satisfy it.

AFFOTECH, Drive, deployment, tenant, and business/private-data mutation are not required to prove the transport loop.
