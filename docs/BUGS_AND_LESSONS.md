Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000204 Architect acceptance on 2026-09-03
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Bugs and Lessons

## Permanent governance lessons

- Executor PASS/READY is evidence, never Architect acceptance.
- Never blind-retry an ambiguous external mutation, delivery, durable-create, readback, or child-process boundary; reconcile durable state first.
- Historical evidence remains immutable in meaning.
- Architect owns canonical documentation directly.
- Orchestrator is deterministic transport/state infrastructure and never interprets project semantics.
- Role identity, execution-runtime identity, transport identity, browser/session identity and endpoint identity are distinct.

## Role/runtime/transport identity collapse

Historical BrowserRelay records used an Executor role label, ChatGPT conversation and `9444` relay endpoint. That was incorrectly treated as proof that BrowserRelay remained the active Executor transport.

Permanent countermeasure:

> Prove runtime, transport, endpoint ownership, continued necessity and exact runtime↔transport binding independently. Never restore a historical transport merely because its registration remains durable.

## Direct-Codex runtime lesson — ORCH-000199 / ORCH-000200

Before inventing a browser bridge or custom relay for an AI worker, inspect the runtime's supported process/API surface and prefer it when it can be governed safely.

A child process is not qualified merely because a parent CLI is authenticated. Durable correlation, explicit sandbox/workdir, exit/output capture, no retry, and exact result readback are required.

## Transport-success lesson — ORCH-000201

Permanent distinction:

`child process success ≠ Executor terminal success ≠ Architect acceptance`

A `codex exec` exit `0` is process evidence only. Transport success requires the exact durable Executor terminal for expected message/dispatch lineage with `requiresArchitectDecision=true`.

Direct Codex uses:

`CODEX-DIRECT-INVOCATION-EXECUTOR-<DISPATCH_ID>`

Never repurpose historical BrowserRelay delivery IDs such as `WORKER-DELIVERY-EXECUTOR-000015`.

## Fail closed before spawn — ORCH-000202

The first live adapter qualification produced a durable `ARMED` intent but returned `INTENT_AMBIGUOUS` with child invocation count `0`.

This proves a safety property: uncertainty at a durable-create/readback boundary must stop before process spawn. A durable intent existing later does not retroactively prove which create/readback branch the caller observed.

Do not infer that the child ran merely because an intent exists. First-hand boundary evidence matters.

## Observability must survive ambiguity — ORCH-000203

The original live evidence omitted the production `createJson` status/reason and exact post-write readback outcome, so the specific create-vs-readback root cause was not reconstructible without guessing.

Permanent countermeasure:

> Any durable create/readback boundary that controls an external process spawn must preserve typed create status, sanitized reason code, available HTTP status, whether exact readback was attempted, readback status/failure class, exact-value match, and the phase that caused ambiguity.

A generic `AMBIGUOUS` outcome is not sufficient for later reconciliation.

## Typed pre-spawn observability repair — ORCH-000204

ORCH-000204 made that countermeasure part of accepted source.

The accepted adapter/runtime client now preserve typed create/readback evidence and explicit ambiguity phase while retaining:

`precheck → at most one PUT → exact post-write readback → normalized result`.

Permanent safety rules:

- PUT response alone is not final authority;
- non-authoritative create status means zero spawn;
- missing/exceptional/malformed/mismatched readback means zero spawn;
- intent-without-result remains reconciliation-required and zero spawn;
- no second PUT and no blind retry;
- eventual durable existence must not be rewritten into an originally observed success;
- semantic HTTP status and `404 → NOT_FOUND` behavior must be preserved.

## Reconciliation lesson

Intent-without-result is not permission to retry.

For ORCH-000202, first-hand evidence proves the child/model invocation count was `0`, but the immutable intent still must not be modified or erased. The abandoned identity must be durably reconciled under separate authority before a fresh live probe uses a new invocation identity.

A reconciliation result must never convert an inconclusive live attempt into a PASS. It records closure of an abandoned transport identity, not successful execution.

## Dependency-injection lesson

Transport adapters that cross process boundaries must be deterministic-testable without invoking the real worker. Source repair/diagnostic milestones must use injected/fake process and GitHub clients and keep live child/model invocation at zero unless explicitly authorized.

## Full immutable lease lesson — ORCH-000184

The active-leases index is a locator/projection. Full-schema work hydrates the exact immutable revision first.

## Typed hash lesson — ORCH-000188

Canonical SHA-256 and Git blob SHA are different typed identities and must never be compared merely because both are named `sha`.

## Durable create/readback lesson — ORCH-000189 / ORCH-000190

Accepted durable create is `precheck → at most one PUT → exact post-write readback → normalized result`. Durable readback, not PUT response alone, is final authority.

## Semantic GitHub 404 lesson — ORCH-000191 / ORCH-000192

Preserve semantic HTTP status. Map `404 → NOT_FOUND`; do not collapse expected absence into generic subprocess/API failure.

## Current development ordering

1. preserve role/runtime/transport identity separation;
2. preserve lease/hash/GitHub ambiguity contracts;
3. preserve manual-to-Codex production path until replacement is live accepted;
4. treat GH-PUB-204 as the accepted direct-Codex source baseline;
5. reconcile the stranded ORCH-000202 identity with zero child execution;
6. independently accept reconciliation;
7. live-qualify a fresh direct-Codex invocation identity with typed observability active;
8. qualify persistent-host automatic dispatch observation → direct Codex;
9. only then consider retirement/supersession of historical BrowserRelay registration.
