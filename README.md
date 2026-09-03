# AFFOTECH Agent Orchestrator Evidence

This repository is the machine-authoritative control/evidence plane for `affotech-agent-orchestrator`. Durable prompts, dispatches, Architect decisions, Executor terminals, transport records, host/lease state, source snapshots, and current pointers are authority. Human-readable documentation is maintained directly by Architect and never overrides machine evidence.

## Active authority model

The currently accepted production path remains:

```text
Rony / Architect durable dispatch
  ↓
manual user locator/message
  ↓
Codex Executor terminal/runtime in VS Code
  ↓ direct GitHub authority reads
bounded work
  ↓ direct GitHub terminal/report/receipt publication
Architect review
```

There is no active Curator role. Manual inbound remains production authority until direct-Codex transport is live-qualified.

## Direct Codex status

- ORCH-000199: supported non-interactive `codex exec` accepted.
- ORCH-000200: authenticated one-shot child primitive accepted.
- ORCH-000201: governed direct-Codex adapter and persistent-host direct route source accepted.
- ORCH-000202: first live adapter qualification **INCONCLUSIVE** before child spawn.
- ORCH-000203: read-only create/readback ambiguity diagnostic **ACCEPTED**.

Current accepted source:

`GH-PUB-201-GOVERNED-DIRECT-CODEX-ADAPTER-READY-000001`

Qualification: 103 files; focused `95/95`; full deterministic `833/833`; manifest `42f37c4fcd4b291e2edf4c14725b03287dc0150e9e2e4cca614d0f56ea2239b8`; archive `b6d87a5a041be0615a143965bb2cc8c5c35080633c74d70e4600d636a4503878`.

## Current live blocker

ORCH-000202 left a direct-Codex invocation intent durably `ARMED` but created no result, published no probe terminal, and spawned no child/model process.

The accepted ORCH-000203 diagnosis found that the durable parent evidence did not preserve the production `createJson` status/reason or the exact post-write readback outcome, so the original ambiguity cannot be assigned to a specific create-vs-readback phase without guessing.

Permanent rule:

> Durable create/readback boundaries that control process spawn must preserve typed create status, sanitized reason code, readback attempted/status, exact-value match, and ambiguity phase. Generic `AMBIGUOUS` evidence is insufficient for safe later reconciliation.

The existing create contract remains:

`precheck → at most one PUT → exact post-write readback → normalized result`.

## Critical identity rule

`Executor role ≠ Codex runtime ≠ direct-Codex transport ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Historical `WORKER-REG-EXECUTOR-000001` and relay port `9444` remain historical evidence, not current transport authority. Historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000015` must never be reused as a direct-Codex identity.

## Canonical governance

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.3
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.5
- `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.4

## Current legal next boundary

The next bounded milestone is ORCH-000204: source/test repair of direct-Codex pre-spawn create/readback observability.

It must keep live child/model invocation at zero, preserve fail-closed/no-retry semantics, and leave the stranded ORCH-000202 intent/result namespace untouched.

Only after that source repair is independently accepted may Architect separately authorize stranded-invocation reconciliation and a fresh live qualification.

For exact state use `docs/CURRENT_STATE.md`.

## Protected boundary

AFFOTECH System V2 Hybrid, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, historical BrowserRelay state, and unrelated protected project resources remain unauthorized absent explicit later authority.
