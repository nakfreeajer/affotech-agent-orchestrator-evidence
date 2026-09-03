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

Manual inbound remains production authority until direct-Codex transport is live-qualified.

## Direct Codex status

- ORCH-000199: supported non-interactive `codex exec` accepted.
- ORCH-000200: authenticated one-shot child primitive accepted.
- ORCH-000201: governed direct-Codex adapter and persistent-host direct route source accepted.
- ORCH-000202: first live adapter qualification **INCONCLUSIVE** before child spawn.
- ORCH-000203: create/readback ambiguity diagnostic **ACCEPTED**.
- ORCH-000204: typed pre-spawn create/readback observability repair **ACCEPTED**.
- ORCH-000205: abandoned ORCH-000202 invocation zero-spawn reconciliation **ACCEPTED**.

## Current accepted source

`GH-PUB-204-DIRECT-CODEX-INTENT-OBSERVABILITY-REPAIR-READY-000001`

Decision:

`GH-DEC-204-DIRECT-CODEX-INTENT-OBSERVABILITY-REPAIR-ACCEPTED`

Qualification:

- 103 files;
- focused/relevant `142/142`;
- full deterministic `844/844`;
- manifest SHA-256 `ee7aca2665853e8ebb9d0e0de99b510d84b7fa41282ebed88a1fa6b3c49bf3bf`;
- archive SHA-256 `34c4dd17b3475932de7513a4f0f395b0cb285229413128b357a6566da0134521`.

## Durable create/readback rule

The governing contract is:

`precheck → at most one PUT → exact post-write readback → normalized result`

ORCH-000204 adds durable typed observability for create status/reason/HTTP status, readback attempted/status/reason/match, and exact ambiguity phase. This does not weaken fail-closed behavior and does not authorize blind retry.

## Reconciled historical invocation

`CODEX-DIRECT-INVOCATION-EXECUTOR-DISPATCH-000202-PROBE-000001` is now durably closed for reuse under:

`GH-DEC-205-DIRECT-CODEX-STRANDED-INVOCATION-RECONCILIATION-ACCEPTED`

Its immutable intent remains unchanged. Its result records `RECONCILIATION_REQUIRED`, zero child spawn, no terminal observation and no retry. ORCH-000202 remains historically INCONCLUSIVE; reconciliation is not successful execution.

## Critical identity rule

`Executor role ≠ Codex runtime ≠ direct-Codex transport ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Historical `WORKER-REG-EXECUTOR-000001` and relay port `9444` remain historical evidence, not current transport authority. Historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000015` must never be reused as a direct-Codex identity.

## Canonical governance

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.3
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.5
- `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.4

## Current legal next boundary

ORCH-000206 is the next bounded milestone: a fresh live direct-Codex adapter qualification with a new probe dispatch and new invocation identity.

It must prove exactly one real authenticated child on first-call success, typed create/readback observability, exact durable probe terminal observation, exact result readback, and duplicate replay with zero second spawn. It must not start the persistent host yet.

Only after ORCH-000206 acceptance may the project qualify automatic persistent-host dispatch observation → direct Codex.

For exact state use `docs/CURRENT_STATE.md`.

## Protected boundary

AFFOTECH System V2 Hybrid, ports `9222/9223`, Drive/business/private data, deployments, tenant resources, historical BrowserRelay state, and unrelated protected resources remain unauthorized absent explicit later authority.
