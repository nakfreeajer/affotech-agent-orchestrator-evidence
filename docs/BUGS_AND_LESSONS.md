Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000199 Architect acceptance on 2026-09-02
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

Historical BrowserRelay records used `workerRole=executor`, a ChatGPT conversation and relay endpoint `9444`. Architect treated that as proof that the current Executor itself was browser-based and that restoring `9444` was required.

Rony corrected the operating reality: the Executor is the **Codex terminal/runtime in VS Code**.

Permanent countermeasure:

> Never diagnose or restore a missing transport from the role label alone. First prove what runtime executes the work, what transport currently reaches it, who owns each endpoint, whether that transport is still required, and the exact runtime↔transport binding.

Mandatory cold-start equation:

`Executor role ≠ Codex runtime ≠ BrowserRelay ≠ ChatGPT conversation ≠ CDP/relay port`

## ORCH-000198 confirmation lesson — prove both directions

ORCH-000198 proved that topology recovery must trace inbound and outbound paths independently.

Accepted current facts:

- inbound: manual user locator/message → Codex terminal;
- authority resolution: Codex reads durable GitHub dispatch/prompt evidence;
- outbound: Codex directly publishes terminal/report/receipt to GitHub;
- historical `9444` BrowserRelay: legacy relative to this path;
- automatic Orchestrator/GitHub → Codex invocation: not yet proven.

A transport is not current merely because it is registered.

## ORCH-000199 lesson — discover supported runtime surfaces before inventing transport

ORCH-000199 read-only discovery proved that the installed Codex runtime already exposes a supported non-interactive interface: `codex exec`.

Accepted facts include prompt argument/stdin input, working-directory control, model/profile/config controls, sandbox/approval controls, structured output surfaces and ephemeral execution. The current CLI reports ChatGPT login.

Permanent lesson:

> Before designing a custom relay or browser bridge for an AI worker, inspect the worker runtime's supported non-interactive invocation surface. Prefer a directly supported process/API contract over an indirect browser transport when it can be governed and qualified safely.

But capability discovery is not execution qualification. Parent-session login status does not prove that a separately spawned child process reuses authentication. That must be proven with one separately authorized child invocation.

For live child-process qualification:

- bind a unique correlation token before invocation;
- allow at most one child/model run;
- use a harmless deterministic prompt;
- bind working directory and read-only sandbox explicitly;
- prefer ephemeral/non-persistent session behavior;
- capture machine-observable exit and bounded output;
- no blind retry on timeout, ambiguous exit, auth failure or mismatch;
- keep project/source/config/registration/protected-resource mutation at zero.

## Full immutable lease lesson — ORCH-000184

The `activeLeases` index entry is a reduced locator/projection. Full-schema work must hydrate the exact immutable revision first.

## Corrected caller / observability lesson — ORCH-000187

The proven reconciliation caller shape is full immutable lease + exact binding + integer `nowMs`; preserve caller/projection/await/mutation-boundary observability.

## Typed hash lesson — ORCH-000188

Treat every hash as a typed value. Never compare Git blob SHA to project canonical SHA-256 merely because both are named `sha`.

## Pre-call evidence transport lesson — ORCH-000189 / ORCH-000190

Accepted `createJson` is `precheck → at most one PUT → exact post-write readback → normalized result`. Durable readback, not PUT response alone, is final authority.

Do not make a prerequisite external evidence write whose ambiguity can block the target operation.

## GitHub Contents semantic 404 lesson — ORCH-000191 / ORCH-000192

Treat process failure and semantic HTTP absence as different states. Preserve HTTP status explicitly and map `404 → NOT_FOUND`.

## Current development ordering

1. preserve lease/hash/GitHub ambiguity contracts;
2. preserve role/runtime/transport identity separation;
3. treat ORCH-000198 manual-to-Codex/direct-GitHub topology as current accepted reality;
4. treat ORCH-000199 `codex exec` support as accepted capability, not yet unattended execution;
5. qualify exactly one isolated child `codex exec` for ChatGPT-auth reuse and machine-observable exit/output;
6. if accepted, design/implement a dedicated governed direct-Codex adapter with durable correlation and exactly-once semantics;
7. only after replacement/direct transport acceptance decide whether to supersede/retire the historical `9444` registration;
8. prove the unattended Codex-delivery → durable-terminal → Architect-wake loop.
