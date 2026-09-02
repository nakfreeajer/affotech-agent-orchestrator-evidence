Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000200 Architect acceptance on 2026-09-02
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Bugs and Lessons

## Permanent governance lessons

- Executor PASS/READY is evidence, never Architect acceptance.
- Never blind-retry an ambiguous external mutation or child-process boundary; reconcile durable state first.
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

## ORCH-000198 lesson — prove both directions

Topology recovery must trace inbound and outbound paths independently. A transport is not current merely because it is registered.

## ORCH-000199 lesson — discover supported runtime surfaces before inventing transport

The installed Codex runtime already exposes supported non-interactive `codex exec`.

Permanent lesson:

> Before designing a custom relay or browser bridge for an AI worker, inspect the worker runtime's supported non-interactive invocation surface. Prefer a directly supported process/API contract when it can be governed safely.

Capability discovery alone was not enough: parent login status did not prove a separately spawned child reused authentication.

## ORCH-000200 lesson — qualify process boundaries with durable correlation

ORCH-000200 proved the child-process boundary correctly:

- write/read back immutable intent first;
- bind a unique exact correlation token;
- invoke at most one child;
- bind workdir and read-only sandbox explicitly;
- use ephemeral execution;
- capture machine-observable exit/output;
- require exact output correlation;
- persist/read back immutable result;
- do not retry on timeout/auth/nonzero/mismatch/ambiguity;
- clean only the exact same-milestone disposable temp output after durable result readback.

The child successfully reused ChatGPT authentication, exited `0`, matched the exact token, and required no retry.

Permanent lesson:

> A successful CLI capability is not a governed transport until intent precedes spawn, the spawn is at-most-once, outcome is durably reconciled, and ambiguous boundaries cannot trigger blind retries.

Also preserve ordering semantics when interpreting counters: the immutable ORCH-000200 result recorded temp deletion `0` because cleanup happened after result readback; the later terminal/receipt correctly recorded one authorized deletion. Snapshot timing is part of evidence meaning.

## Namespace lesson — do not reuse historical transport identities

`WORKER-DELIVERY-EXECUTOR-000015` belongs to the historical BrowserRelay delivery path. A direct-Codex adapter must use a distinct invocation namespace/identity rather than repurposing a never-sent BrowserRelay delivery ID.

## Full immutable lease lesson — ORCH-000184

The `activeLeases` index entry is a reduced locator/projection. Full-schema work must hydrate the exact immutable revision first.

## Corrected caller / observability lesson — ORCH-000187

The proven reconciliation caller shape is full immutable lease + exact binding + integer `nowMs`; preserve caller/projection/await/mutation-boundary observability.

## Typed hash lesson — ORCH-000188

Treat every hash as a typed value. Never compare Git blob SHA to project canonical SHA-256 merely because both are named `sha`.

## Pre-call evidence transport lesson — ORCH-000189 / ORCH-000190

Accepted `createJson` is `precheck → at most one PUT → exact post-write readback → normalized result`. Durable readback, not PUT response alone, is final authority.

## GitHub Contents semantic 404 lesson — ORCH-000191 / ORCH-000192

Treat process failure and semantic HTTP absence as different states. Preserve HTTP status explicitly and map `404 → NOT_FOUND`.

## Current development ordering

1. preserve lease/hash/GitHub ambiguity contracts;
2. preserve role/runtime/transport identity separation;
3. preserve ORCH-000198 current manual-to-Codex/direct-GitHub topology until replacement is accepted;
4. treat ORCH-000199 `codex exec` support as accepted capability;
5. treat ORCH-000200 one-shot authenticated child invocation as accepted runtime primitive;
6. implement/test a dedicated governed direct-Codex adapter with fresh identity, durable intent/result and exactly-once spawn semantics;
7. live-qualify the implemented adapter end-to-end under a separate bounded milestone;
8. only after replacement transport acceptance decide whether to supersede/retire historical `9444` registration;
9. prove unattended Codex-delivery → durable-terminal → Architect-wake loop.
