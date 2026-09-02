Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000198 Architect acceptance on 2026-09-02
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

Historical BrowserRelay records used `workerRole=executor`, a ChatGPT conversation, and relay endpoint `9444`. Architect treated that as proof that the current Executor itself was browser-based and that restoring `9444` was required.

Rony corrected the operating reality: the Executor is the **Codex terminal/runtime in VS Code**.

The BrowserRelay was real historical transport. The error was allowing a historical transport registration to substitute for current architecture/topology proof.

### Permanent countermeasure

> Never diagnose or restore a missing transport from the role label alone. First prove what runtime executes the work, what transport currently reaches it, who owns each endpoint, whether that transport is still required, and the exact runtime↔transport binding.

Mandatory cold-start equation:

`Executor role ≠ Codex runtime ≠ BrowserRelay ≠ ChatGPT conversation ≠ CDP/relay port`

Additional rules:

- `workerRole=executor` is not runtime proof;
- historical `ACTIVE` registration is not proof of current necessity;
- a successful historical BrowserRelay milestone proves that historical path only;
- do not invent a browser/CDP port from a relay port;
- do not restore a missing component until its place in the current topology is proven.

## ORCH-000198 confirmation lesson — prove both directions

ORCH-000198 showed the correct way to recover from a topology assumption error: trace the actual current path end-to-end and label every edge by evidence strength.

Accepted current facts:

- inbound: manual user locator/message → Codex terminal;
- authority resolution: Codex reads durable GitHub dispatch/prompt evidence;
- outbound: Codex directly publishes terminal/report/receipt to GitHub;
- historical `9444` BrowserRelay: legacy relative to this proven current path;
- automatic Orchestrator/GitHub → Codex invocation: not yet proven.

Permanent lesson:

> A transport is not “current” merely because it is registered. Current topology requires a proven execution edge. Prove inbound and outbound paths separately.

A legacy ACTIVE registration should be treated as a cleanup/change candidate, not silently mutated, until the replacement/current contract is accepted.

## Full immutable lease lesson — ORCH-000184

The `activeLeases` index entry is a reduced locator/projection. When a full-schema validator/projector/reconciliation path is called:

`index locator → hydrate immutable revision → verify exact binding → pass full immutable record`.

A reduced index entry must not substitute for the immutable record.

## Corrected caller / observability lesson — ORCH-000187

The proven reconciliation caller shape is one object containing the full immutable lease, exact `reconciliationBinding`, and integer `nowMs`. Preserve caller input, projection, await outcome, and mutation-boundary observability around any real attempt.

## Typed hash lesson — ORCH-000188

Treat every hash as a typed value. Never compare Git blob SHA to project canonical SHA-256 merely because both are named `sha`.

## Pre-call evidence transport lesson — ORCH-000189 / ORCH-000190

Accepted `createJson` is:

`precheck → at most one PUT → exact post-write readback → normalized result`

Durable readback, not PUT response alone, is final authority.

Do not make a separate prerequisite external evidence write whose ambiguity can block the target operation. Buffer bounded non-sensitive diagnostics in memory, execute the target operation at most once, and reconcile from durable target-state readback.

## GitHub Contents semantic 404 lesson — ORCH-000191 / ORCH-000192

Treat process failure and semantic HTTP absence as different states. Preserve HTTP status explicitly and map `404 → NOT_FOUND`; keep authentication, transport, and other non-success failures distinct.

## Current recovery / development ordering

1. preserve full immutable caller and typed-hash contracts;
2. preserve semantic GitHub read/write and ambiguity rules;
3. keep lease namespace clean;
4. preserve role/runtime/transport identity separation;
5. treat ORCH-000198 manual-to-Codex/direct-GitHub path as current accepted topology;
6. discover a supported direct non-interactive Codex invocation mechanism without model invocation or runtime mutation;
7. separately qualify that mechanism under durable intent/result and exactly-once semantics;
8. only after replacement/direct transport acceptance decide whether to supersede/retire the historical `9444` registration;
9. prove the unattended Codex-delivery → durable-terminal → Architect-wake loop.
