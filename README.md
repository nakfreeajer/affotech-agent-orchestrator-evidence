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

There is no active Curator role.

Manual inbound remains production authority until the new direct-Codex adapter is live-qualified.

## Direct Codex status

ORCH-000199 accepted supported non-interactive `codex exec` on `codex-cli 0.151.0`.

ORCH-000200 proved one child `codex exec` can reuse the current ChatGPT-authenticated session with exact bounded exit/output correlation and no retry.

ORCH-000201 implemented and accepted the governed direct-Codex adapter.

Decision:

`GH-DEC-201-GOVERNED-DIRECT-CODEX-ADAPTER-ACCEPTED`

The accepted adapter provides:

- deterministic `CODEX-DIRECT-INVOCATION-EXECUTOR-<DISPATCH_ID>` identities;
- exact compact GitHub dispatch locators;
- durable intent before spawn;
- at-most-one child spawn;
- duplicate suppression;
- reconciliation-required intent-without-result handling;
- explicit workdir/sandbox/ephemeral/timeout controls;
- exact durable Executor-terminal observation before transport success;
- durable result readback;
- distinct fail-closed outcome classes;
- no blind retry;
- persistent-host direct-Codex routing without BrowserRelay dependency.

ORCH-000201 was deterministic implementation/testing only; real child Codex/model invocation count was zero.

## Critical identity rule

`Executor role ≠ Codex runtime ≠ direct-Codex transport ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Historical `WORKER-REG-EXECUTOR-000001` and relay port `9444` remain historical evidence, not current transport authority.

Historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000015` must never be reused as a direct-Codex identity.

## Canonical governance

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.3
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.5
- `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.4

## Current accepted source

`GH-PUB-201-GOVERNED-DIRECT-CODEX-ADAPTER-READY-000001`

Qualification:

- 103 files;
- focused `95/95`;
- full deterministic `833/833`;
- manifest SHA-256 `42f37c4fcd4b291e2edf4c14725b03287dc0150e9e2e4cca614d0f56ea2239b8`;
- archive SHA-256 `b6d87a5a041be0615a143965bb2cc8c5c35080633c74d70e4600d636a4503878`.

Immutable accepted-source artifact:

- `evidence/artifacts/orch-000201/manifest.json`
- `evidence/artifacts/orch-000201/source.tar.gz`

## Proven foundations

- ORCH-000153: historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once.
- ORCH-000193: epoch-189 stale lease recovery closed.
- ORCH-000194: zero-browser prepare/reconcile/release capability accepted.
- ORCH-000198: current manual-to-Codex/direct-GitHub topology accepted.
- ORCH-000199: supported direct `codex exec` capability accepted.
- ORCH-000200: authenticated one-shot child primitive accepted.
- ORCH-000201: governed direct-Codex adapter and persistent-host route source accepted.

## Current legal next boundary

The next bounded milestone is ORCH-000202: one live direct-Codex adapter qualification using a harmless dedicated child probe dispatch.

It must prove one real authenticated child spawn, exact durable child terminal observation, durable adapter result readback, and duplicate replay with second spawn count zero. It must not start the persistent host yet.

Only after ORCH-000202 acceptance may the project qualify automatic persistent-host dispatch observation → direct Codex.

For exact state use `docs/CURRENT_STATE.md`.

## Protected boundary

AFFOTECH System V2 Hybrid, ports `9222/9223`, Drive/business/private data, deployments, tenant resources and unrelated protected project resources remain unauthorized absent explicit later authority.
