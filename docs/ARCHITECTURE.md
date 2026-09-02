Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000203 Architect acceptance on 2026-09-03
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence, governing policy, and Architect decisions

# Architecture

## 1. Core purpose

AFFOTECH Agent Orchestrator is a governed deterministic message-routing and durable-state layer. AI roles think; the Orchestrator carries exact governed envelopes and observes durable state. It does not approve work, infer semantic acceptance from process output, or replace Architect authority.

## 2. Current accepted production topology

The currently proven production path remains:

```text
Rony / Architect durable dispatch
  ↓
manual user locator/message
  ↓
Codex Executor terminal/runtime in VS Code
  ↓ direct GitHub authority reads
bounded Executor work
  ↓ direct GitHub terminal/report/receipt publication
Architect review
```

Manual inbound handoff remains production authority until direct-Codex transport is live-qualified.

## 3. Accepted direct-Codex foundation

- ORCH-000199 accepted supported non-interactive `codex exec` on `codex-cli 0.151.0`.
- ORCH-000200 accepted one authenticated child invocation with exact durable correlation, exit/output observability, and no retry.
- ORCH-000201 accepted the governed direct-Codex adapter and persistent-host direct route source.

Current accepted source:

`GH-PUB-201-GOVERNED-DIRECT-CODEX-ADAPTER-READY-000001`

Qualification: 103 files; focused `95/95`; full deterministic `833/833`; manifest `42f37c4fcd4b291e2edf4c14725b03287dc0150e9e2e4cca614d0f56ea2239b8`; archive `b6d87a5a041be0615a143965bb2cc8c5c35080633c74d70e4600d636a4503878`.

Accepted adapter contract includes:

1. direct identities `CODEX-DIRECT-INVOCATION-EXECUTOR-<DISPATCH_ID>`;
2. compact canonical GitHub dispatch locator;
3. immutable intent before child spawn;
4. at-most-one child spawn per invocation identity;
5. duplicate suppression and intent-without-result reconciliation-required behavior;
6. explicit workdir/sandbox/ephemeral/timeout controls;
7. exact durable Executor-terminal observation before transport success;
8. immutable result readback as final transport authority;
9. distinct auth/nonzero/timeout/process/terminal/lineage/ambiguity outcomes;
10. no blind retry;
11. no BrowserRelay dependency for direct-Codex mode.

## 4. ORCH-000202 live qualification boundary

ORCH-000202 attempted the first live adapter qualification and is **INCONCLUSIVE** under:

`GH-DEC-202-DIRECT-CODEX-LIVE-INTENT-AMBIGUOUS-INCONCLUSIVE`

Verified facts:

- invocation `CODEX-DIRECT-INVOCATION-EXECUTOR-DISPATCH-000202-PROBE-000001`;
- immutable intent exists as `ARMED`;
- direct-Codex result absent;
- child probe terminal absent;
- child/model invocation count `0`;
- adapter outcome `INTENT_AMBIGUOUS`;
- no replay and no retry.

The child-process boundary was not crossed.

## 5. ORCH-000203 accepted observability diagnosis

ORCH-000203 is accepted under:

`GH-DEC-203-DIRECT-CODEX-INTENT-AMBIGUITY-DIAGNOSTIC-ACCEPTED`

The accepted source call chain is:

`createCodexDirectTransport.send → client.createJson(intentPath,intent) → client.readJsonCurrent(intentPath) → spawnChild(command)`.

The durable ORCH-000202 evidence did not preserve the production `createJson` return status/reason or the exact post-write readback outcome. Therefore the precise cause cannot be distinguished between:

- an ambiguous post-write GitHub transport/create result; and
- an exact readback normalization/observation failure.

Permanent observability rule:

> Every durable pre-spawn create boundary must preserve enough typed evidence to distinguish create transport status, reason code, exact post-write readback status/match, and the phase that caused ambiguity before any process spawn decision.

The accepted `createJson` governance contract remains:

`precheck → at most one PUT → exact post-write readback → normalized result`.

PUT response alone is never final authority.

## 6. Stranded ORCH-000202 invocation

The ORCH-000202 intent must remain immutable and untouched until a separately authorized reconciliation action:

`evidence/codex-direct-invocations/executor/CODEX-DIRECT-INVOCATION-EXECUTOR-DISPATCH-000202-PROBE-000001/intent.json`

Current state: `ARMED`; result absent; probe terminal absent; first-hand child invocation count `0`.

No retry or result synthesis is authorized merely from these facts.

## 7. Permanent identity-separation contract

`Executor role ≠ Codex runtime ≠ direct-Codex transport ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Historical `9444`/BrowserRelay evidence remains historical and is not current direct-Codex authority. `WORKER-DELIVERY-EXECUTOR-000015` must never be repurposed as a direct-Codex identity.

## 8. Current repair boundary

Before any further live qualification, source/test repair must make the pre-spawn intent boundary durably observable without changing fail-closed behavior.

Minimum repair scope:

- preserve `createJson` normalized status and sanitized reason code;
- preserve whether exact post-write readback was attempted;
- preserve readback status/exception class without secrets;
- preserve exact intent-match boolean;
- preserve ambiguity phase (`CREATE`, `READBACK`, or equivalent typed phase);
- keep child spawn count zero whenever create/readback authority is not exact;
- add deterministic tests for ambiguous-create-with-eventual-intent and exact-created/readback paths.

A source repair does not itself reconcile the stranded ORCH-000202 intent and does not authorize a live child run.

## 9. Durable protected state

Mutation-lease state remains index `382`, `nextLeaseEpoch=192`, `activeLeases=[]`. Historical BrowserRelay delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`; Architect trigger remains `ARCH-TRIGGER-9333-000005/SENT`.

AFFOTECH System V2 Hybrid, ports `9222/9223`, Drive/business/private data, deployments and tenant resources remain outside authority absent explicit later approval.

## 10. Documentation governance

ORCH-000203 has `documentationImpact=FULL`; `futureIdeaImpact=NONE` because it establishes a lasting observability requirement at the durable pre-spawn boundary and changes the next implementation action.
