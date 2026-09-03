Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000204 Architect acceptance on 2026-09-03
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

## 3. Permanent identity-separation contract

`Executor role ≠ Codex runtime ≠ direct-Codex transport ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Historical BrowserRelay `9444`, `WORKER-REG-EXECUTOR-000001`, and historical worker-delivery records are not proof of current Codex transport authority. `WORKER-DELIVERY-EXECUTOR-000015` must never be repurposed as a direct-Codex identity.

## 4. Accepted direct-Codex foundation

- ORCH-000198 accepted the current manual-to-Codex/direct-GitHub topology.
- ORCH-000199 accepted supported non-interactive `codex exec` on `codex-cli 0.151.0`.
- ORCH-000200 accepted one authenticated child invocation with exact durable correlation and no retry.
- ORCH-000201 accepted the governed direct-Codex adapter and persistent-host direct route source.
- ORCH-000203 accepted the diagnosis that the first live attempt lacked sufficient typed create/readback observability.
- ORCH-000204 accepted the typed create/readback observability repair.

## 5. Current accepted source

`GH-PUB-204-DIRECT-CODEX-INTENT-OBSERVABILITY-REPAIR-READY-000001`

Architect decision:

`GH-DEC-204-DIRECT-CODEX-INTENT-OBSERVABILITY-REPAIR-ACCEPTED`

Qualification:

- 103 source-tree files;
- focused/relevant tests `142/142`;
- full deterministic suite `844/844`, zero failed/skipped/cancelled;
- manifest SHA-256 `ee7aca2665853e8ebb9d0e0de99b510d84b7fa41282ebed88a1fa6b3c49bf3bf`;
- archive SHA-256 `34c4dd17b3475932de7513a4f0f395b0cb285229413128b357a6566da0134521`.

Accepted ORCH-000204 changed paths:

- `src/host/codex-direct-transport.js`;
- `src/host/github-contents-runtime-client.js`;
- `test/codex-direct-transport.test.js`.

No real Codex/model invocation occurred in ORCH-000204.

## 6. Governing durable-create contract

The accepted create contract remains:

`precheck → at most one PUT → exact post-write readback → normalized result`

PUT response alone is never final authority. Semantic HTTP status preservation and `404 → NOT_FOUND` behavior remain required. No blind retry is permitted after an ambiguous durable mutation or process boundary.

## 7. Accepted direct-Codex pre-spawn observability contract

ORCH-000204 permanently adds typed evidence to every direct-Codex pre-spawn create/readback decision.

The adapter/runtime boundary now preserves, when available:

- normalized create status;
- sanitized create reason code;
- create HTTP status;
- whether create is accepted for exact readback;
- whether post-write readback was attempted;
- readback status or sanitized failure class;
- readback reason code;
- exact intent-match boolean;
- explicit ambiguity phase, including `PRECHECK`, `CREATE`, `READBACK`, `LINEAGE`, or `NONE` as applicable.

Safety semantics remain unchanged:

- non-authoritative create status → child spawn `0`;
- absent/exceptional/malformed/mismatched readback → child spawn `0`;
- existing intent without result → reconciliation-required, child spawn `0`;
- no second create and no blind retry;
- eventual durable existence may not be rewritten into an originally observed success.

## 8. ORCH-000202 stranded invocation

The first live adapter attempt ORCH-000202 remains **INCONCLUSIVE** under:

`GH-DEC-202-DIRECT-CODEX-LIVE-INTENT-AMBIGUOUS-INCONCLUSIVE`

Stranded invocation:

`CODEX-DIRECT-INVOCATION-EXECUTOR-DISPATCH-000202-PROBE-000001`

Verified historical facts:

- intent exists as `ARMED`;
- result absent;
- expected probe terminal absent;
- first-hand ORCH-000202 child/model invocation count `0`;
- child-spawn boundary was not crossed;
- no retry/replay occurred.

ORCH-000204 did not mutate this invocation.

## 9. Current reconciliation boundary

The abandoned ORCH-000202 identity must be terminalized or otherwise durably reconciled before a fresh live qualification is attempted, so it can never be accidentally reused.

A reconciliation milestone may use the first-hand zero-spawn evidence only under explicit Architect authority. It must not invoke a child, publish the old probe terminal, modify the immutable intent, reuse the old invocation as a live attempt, or infer Architect acceptance from reconciliation.

Only after reconciliation is accepted may Architect authorize a **fresh** live direct-Codex probe with a new invocation identity and the ORCH-000204 observability contract active.

## 10. Durable protected state

Mutation-lease state remains index `382`, `nextLeaseEpoch=192`, `activeLeases=[]`. Historical BrowserRelay delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`; Architect trigger remains `ARCH-TRIGGER-9333-000005/SENT`.

AFFOTECH System V2 Hybrid, ports `9222/9223`, Drive/business/private data, deployments and tenant resources remain outside authority absent explicit later approval.

## 11. Documentation governance

ORCH-000204 has `documentationImpact=FULL`; `futureIdeaImpact=NONE` because accepted source and the durable pre-spawn observability contract changed.
