Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000203 Architect acceptance on 2026-09-03
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Bugs and Lessons

## Permanent governance lessons

- Executor PASS/READY is evidence, never Architect acceptance.
- Never blind-retry an ambiguous external mutation, delivery, durable-create, or child-process boundary; reconcile durable state first.
- Historical evidence remains immutable in meaning.
- Architect owns canonical documentation directly.
- Curator is eliminated from the active model.
- Orchestrator is deterministic transport/state infrastructure and never interprets project semantics.
- Role identity, execution-runtime identity, transport identity, browser/session identity and endpoint identity are distinct.

## Role/runtime/transport identity collapse

Historical BrowserRelay records used an Executor role label, ChatGPT conversation and `9444` relay endpoint. That was incorrectly treated as proof that BrowserRelay remained the active Executor transport.

Permanent countermeasure:

> Prove runtime, transport, endpoint ownership, continued necessity and exact runtime↔transport binding independently. Never restore a historical transport merely because its registration remains durable.

## ORCH-000199 — inspect supported runtime surfaces first

The installed Codex runtime already provided supported non-interactive `codex exec`.

> Before inventing a browser bridge or custom relay for an AI worker, inspect the runtime's supported process/API surface and prefer it when it can be governed safely.

## ORCH-000200 — qualify process boundaries with durable correlation

A child process is not qualified merely because a parent CLI is authenticated.

Proven ordering:

1. create/read back immutable intent;
2. bind unique correlation;
3. invoke at most one child;
4. bind explicit workdir/read-only sandbox/ephemeral mode;
5. capture exit/output;
6. persist/read back result;
7. no retry on auth/nonzero/timeout/mismatch/ambiguity;
8. clean only exact same-milestone disposable output after result readback.

## ORCH-000201 — transport success is not process success

Permanent distinction:

`child process success ≠ Executor terminal success ≠ Architect acceptance`

A `codex exec` exit `0` is only process evidence. Transport success requires the exact durable Executor terminal for expected message/dispatch lineage with `requiresArchitectDecision=true`.

Direct Codex uses its own deterministic namespace:

`CODEX-DIRECT-INVOCATION-EXECUTOR-<DISPATCH_ID>`

Never repurpose historical BrowserRelay delivery IDs such as `WORKER-DELIVERY-EXECUTOR-000015`.

## ORCH-000202 — fail closed before spawn

The first live adapter qualification produced a durable `ARMED` intent but returned `INTENT_AMBIGUOUS` with child invocation count `0`.

This validates an important safety property: an uncertain durable-create/readback boundary must stop before process spawn. A durable intent existing later does not retroactively prove which create/readback branch the caller observed.

Do not infer that the child ran merely because an intent exists. First-hand boundary evidence matters.

## ORCH-000203 — observability must survive ambiguity

The read-only diagnostic could not reconstruct the exact ORCH-000202 root cause because durable evidence omitted the production `createJson` status/reason and exact post-write readback outcome.

Accepted call chain:

`send → createJson → readJsonCurrent → spawnChild`.

Mutation-disabled reproduction showed:

- ambiguous create return → `INTENT_AMBIGUOUS`, spawn `0`;
- `CREATED` + exact readback → spawn boundary reachable.

Permanent countermeasure:

> Any durable create/readback boundary that controls an external process spawn must preserve typed observability for the create status, sanitized reason code, whether post-write readback was attempted, readback status/exception class, exact-value match, and the phase that caused ambiguity. A generic `AMBIGUOUS` outcome is not enough for later reconciliation.

This complements the existing accepted create contract:

`precheck → at most one PUT → exact post-write readback → normalized result`.

PUT response alone is not final authority, and post-write existence alone does not explain what the caller observed.

## Ambiguity and reconciliation lesson

Intent-without-result is not permission to retry. It means the spawn boundary may be uncertain and requires reconciliation.

For ORCH-000202, first-hand evidence specifically proves child invocation count `0`, but the stranded intent still must not be mutated or terminalized until Architect separately authorizes reconciliation after the observability repair.

## Dependency-injection lesson

Transport adapters that cross process boundaries must be deterministic-testable without invoking the real worker. Source repair/diagnostic milestones must use injected/fake process and GitHub clients and keep live child/model invocation at zero unless explicitly authorized.

## Full immutable lease lesson — ORCH-000184

The active-leases index is a locator/projection. Full-schema work hydrates the exact immutable revision first.

## Typed hash lesson — ORCH-000188

Canonical SHA-256 and Git blob SHA are different typed identities and must never be compared merely because both are named `sha`.

## Create/readback lesson — ORCH-000189 / ORCH-000190

Accepted durable create is `precheck → at most one PUT → exact post-write readback → normalized result`. Durable readback, not PUT response alone, is final authority.

## Semantic GitHub 404 lesson — ORCH-000191 / ORCH-000192

Preserve semantic HTTP status. Map `404 → NOT_FOUND`; do not collapse expected absence into generic subprocess/API failure.

## Current development ordering

1. preserve lease/hash/GitHub ambiguity contracts;
2. preserve role/runtime/transport identity separation;
3. preserve manual-to-Codex production path until replacement is live accepted;
4. preserve ORCH-000201 governed direct-Codex source acceptance;
5. implement ORCH-000204 typed create/readback observability repair with zero live child execution;
6. independently accept that source repair;
7. separately reconcile the stranded ORCH-000202 intent using first-hand zero-spawn evidence;
8. live-qualify a fresh direct-Codex invocation identity;
9. qualify persistent-host automatic dispatch observation → direct Codex;
10. only then consider retirement/supersession of historical BrowserRelay registration.
