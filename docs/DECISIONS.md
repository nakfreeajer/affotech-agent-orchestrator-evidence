Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000203 Architect acceptance on 2026-09-03
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence, governing policy, immutable Architect decisions, and explicit current Rony authority as defined by precedence

# Architect Decisions

Architect classifications are exactly `ACCEPTED`, `BLOCKED`, `INCONCLUSIVE`, `NO NEW REPORT`. Executor PASS/READY is evidence only.

## Permanent authority decisions

- Rony is final human authority.
- Architect governs, verifies, decides, defines next bounded authority, and owns canonical documentation.
- Executor performs bounded runtime/source/validation work and publishes first-hand evidence.
- The operational Executor runtime is the Codex terminal/runtime in VS Code unless later durable authority explicitly replaces it.
- Orchestrator is deterministic transport/state infrastructure, never semantic authority.
- GitHub durable evidence is machine authority.
- No blind retry after ambiguous external mutation, delivery, create/readback, or child-process boundary.
- Historical evidence is immutable in meaning.
- AFFOTECH and protected resources remain separate until explicitly authorized.

## Permanent identity-separation decision

`role identity ≠ execution runtime ≠ transport adapter ≠ browser/session identity ≠ network endpoint`

Historical BrowserRelay registration is not proof of current Codex transport authority.

## Accepted direct-Codex chain

- `GH-DEC-198-CODEX-DIRECT-MANUAL-TOPOLOGY-ACCEPTED` — current manual-to-Codex/direct-GitHub topology accepted.
- `GH-DEC-199-CODEX-NONINTERACTIVE-CAPABILITY-DISCOVERY-ACCEPTED` — supported `codex exec` capability accepted.
- `GH-DEC-200-CODEX-DIRECT-AUTH-REUSE-QUALIFICATION-ACCEPTED` — one authenticated child primitive accepted.
- `GH-DEC-201-GOVERNED-DIRECT-CODEX-ADAPTER-ACCEPTED` — governed direct-Codex adapter source accepted.

Current accepted source:

`GH-PUB-201-GOVERNED-DIRECT-CODEX-ADAPTER-READY-000001`

103 files; focused `95/95`; full deterministic `833/833`; manifest `42f37c4fcd4b291e2edf4c14725b03287dc0150e9e2e4cca614d0f56ea2239b8`; archive `b6d87a5a041be0615a143965bb2cc8c5c35080633c74d70e4600d636a4503878`.

## ORCH-000202 — INCONCLUSIVE live adapter qualification

Decision:

`GH-DEC-202-DIRECT-CODEX-LIVE-INTENT-AMBIGUOUS-INCONCLUSIVE`

Verified: the direct invocation intent exists as `ARMED`, result is absent, expected probe terminal is absent, child/model invocation count is `0`, duplicate replay count is `0`, and no retry is authorized. ORCH-000202 must not be rerun.

## ORCH-000203 — ACCEPTED observability diagnostic

Decision:

`GH-DEC-203-DIRECT-CODEX-INTENT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`

Executor terminal:

`GH-PUB-203-DIRECT-CODEX-INTENT-AMBIGUITY-DIAGNOSTIC-000001`

Architect classification: `ACCEPTED`.

Accepted facts:

- stranded ORCH-000202 intent remains exact `ARMED`;
- result absent;
- expected probe terminal absent;
- child-spawn boundary not reached;
- child/model invocation count `0`;
- accepted call chain is `createCodexDirectTransport.send → client.createJson → client.readJsonCurrent → spawnChild`;
- only `CREATED`, `IDEMPOTENT`, or `OK` create statuses advance to exact readback;
- durable ORCH-000202 evidence recorded only the normalized `INTENT_AMBIGUOUS` outcome and did not preserve the production `createJson` status/reason or exact post-write readback outcome;
- mutation-disabled reproduction confirms an ambiguous create response yields `INTENT_AMBIGUOUS` with zero spawn while exact created+readback proceeds to the spawn boundary.

Therefore the exact original root cause is not reconstructible from current durable evidence. The diagnostic itself is accepted; a root-cause claim is not.

Permanent create/readback observability requirement:

> A process-spawn decision that depends on durable create/readback must preserve the normalized create status, sanitized reason code, whether exact post-write readback was attempted, the readback status/exception class, exact-value match, and the ambiguity phase. This evidence must be available without requiring a retry.

The existing durable-create governance contract remains authoritative:

`precheck → at most one PUT → exact post-write readback → normalized result`.

## Stranded invocation decision

For `CODEX-DIRECT-INVOCATION-EXECUTOR-DISPATCH-000202-PROBE-000001`:

- do not mutate/overwrite/delete the intent;
- do not synthesize a result;
- do not invoke a child;
- do not replay ORCH-000202;
- do not reconcile until separately authorized after source observability repair.

## Next decision boundary — ORCH-000204

Architect authorizes bounded source/test implementation of the direct-Codex pre-spawn create/readback observability repair.

Required properties:

- preserve typed create status and sanitized reason;
- preserve exact readback attempted/status/match information;
- preserve an explicit ambiguity phase;
- keep all existing fail-closed and no-blind-retry behavior;
- deterministic tests only; no live Codex/model invocation;
- no stranded ORCH-000202 intent/result mutation;
- no host start, BrowserRelay, worker-delivery, registration, lease, AFFOTECH, or Drive activity.

Only after ORCH-000204 implementation is independently accepted may Architect authorize a separate reconciliation of the stranded invocation and a later fresh live qualification.

Documentation decision for ORCH-000203:

- `documentationImpact=FULL`;
- `futureIdeaImpact=NONE`.
