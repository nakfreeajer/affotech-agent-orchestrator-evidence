Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000201 Architect acceptance on 2026-09-02
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Bugs and Lessons

## Permanent governance lessons

- Executor PASS/READY is evidence, never Architect acceptance.
- Never blind-retry an ambiguous external mutation, delivery or child-process boundary; reconcile durable state first.
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

Permanent lesson:

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

ORCH-000200 proved the child reused ChatGPT authentication and completed correctly.

## ORCH-000201 — transport success is not process success

The direct-Codex adapter establishes an important permanent distinction:

`child process success ≠ Executor terminal success ≠ Architect acceptance`

A `codex exec` exit code of `0` is only process evidence. Direct transport success requires observing the exact durable Executor terminal for the expected message/dispatch lineage with `requiresArchitectDecision=true`. Architect acceptance remains a later independent decision.

Permanent transport ordering:

1. deterministic direct-Codex invocation identity;
2. pre-read intent/result;
3. if exact valid result exists, return it with zero spawn;
4. if intent exists without result, reconciliation required and zero spawn;
5. only absent intent+result may create/read back intent;
6. only after exact intent readback may the child spawn;
7. at most one child spawn;
8. observe exact durable Executor terminal;
9. persist/read back immutable transport result;
10. duplicate replay must spawn zero children.

## Namespace lesson

`WORKER-DELIVERY-EXECUTOR-000015` belongs to the historical BrowserRelay delivery path.

Direct Codex uses its own deterministic namespace:

`CODEX-DIRECT-INVOCATION-EXECUTOR-<DISPATCH_ID>`

Never repurpose a historical transport identity just because it was never sent.

## Ambiguity lesson

Intent-without-result is not permission to retry. It means the spawn boundary may already have been crossed and must fail closed into reconciliation-required state.

Likewise, child exit with no exact durable terminal is not success and must not trigger blind re-spawn.

## Dependency-injection lesson

Transport adapters that cross process boundaries must be deterministic-testable without invoking the real worker. ORCH-000201 accepted fake/injected child launchers and host ports while keeping real child/model invocation at zero.

Live qualification is a separate milestone from deterministic implementation acceptance.

## Full immutable lease lesson — ORCH-000184

The active-leases index is a locator/projection. Full-schema work hydrates the exact immutable revision first.

## Typed hash lesson — ORCH-000188

Canonical SHA-256 and Git blob SHA are different typed identities and must never be compared merely because both are named `sha`.

## Create/readback lesson — ORCH-000189 / ORCH-000190

Accepted durable create is `precheck → at most one PUT → exact post-write readback → normalized result`. PUT response alone is not final authority.

## Semantic GitHub 404 lesson — ORCH-000191 / ORCH-000192

Preserve semantic HTTP status. Map `404 → NOT_FOUND`; do not collapse expected absence into generic subprocess/API failure.

## Current development ordering

1. preserve lease/hash/GitHub ambiguity contracts;
2. preserve role/runtime/transport identity separation;
3. preserve the current manual-to-Codex production path until replacement is live accepted;
4. treat ORCH-000200 as accepted authenticated child primitive;
5. treat ORCH-000201 as accepted governed direct-Codex implementation;
6. live-qualify the adapter with one real child probe and zero second spawn;
7. then qualify persistent-host automatic dispatch observation → direct Codex;
8. only after replacement transport acceptance decide whether historical BrowserRelay registration should be superseded/retired;
9. prove the unattended durable-terminal → Architect review/wake continuation chain.
