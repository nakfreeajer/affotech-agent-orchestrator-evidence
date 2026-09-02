Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000201 Architect acceptance on 2026-09-02
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

Manual inbound handoff remains production authority until the new direct-Codex adapter is live-qualified.

## 3. Qualified direct Codex runtime primitive

ORCH-000199 accepted supported non-interactive `codex exec` on `codex-cli 0.151.0`.

ORCH-000200 accepted one isolated child invocation proving:

- current ChatGPT authentication is reusable by the child;
- exactly one child can run under a durable pre-bound correlation intent;
- read-only sandbox, explicit workdir and ephemeral execution work;
- exit status and exact bounded output are machine-observable;
- timeout/auth/nonzero/mismatch ambiguity stops without retry.

Decision:

`GH-DEC-200-CODEX-DIRECT-AUTH-REUSE-QUALIFICATION-ACCEPTED`

## 4. Governed direct-Codex adapter — IMPLEMENTED AND SOURCE-ACCEPTED

ORCH-000201 implemented and deterministically validated the direct-Codex transport adapter.

Decision:

`GH-DEC-201-GOVERNED-DIRECT-CODEX-ADAPTER-ACCEPTED`

Accepted implementation properties:

1. direct-Codex identities use the namespace `CODEX-DIRECT-INVOCATION-EXECUTOR-<DISPATCH_ID>` and do not reuse BrowserRelay worker-delivery IDs;
2. the child locator is the compact canonical GitHub dispatch locator, not a copied full prompt;
3. immutable durable intent must be created/read back before spawn;
4. at most one child spawn is allowed for one invocation identity;
5. an existing valid result suppresses duplicate spawn;
6. intent-without-result is reconciliation-required and suppresses spawn;
7. explicit workdir, sandbox, ephemeral execution and bounded timeout are bound at the transport boundary;
8. child process exit is transport evidence only, never Architect acceptance;
9. transport success requires exact durable Executor-terminal observation with message/dispatch lineage and `requiresArchitectDecision=true`;
10. durable result readback is final transport authority;
11. auth, timeout, nonzero exit, process error, terminal absence, terminal mismatch, intent ambiguity and result-lineage conflict remain distinct failure classes;
12. no blind retry is allowed after an ambiguous child-process boundary;
13. persistent-host composition can route Executor dispatches through direct Codex without BrowserRelay;
14. BrowserRelay remains historical/compatible but is not required by direct-Codex mode.

ORCH-000201 used only deterministic fake/injected child launchers. Real child Codex/model invocation count was zero.

## 5. Permanent identity-separation contract

`Executor role ≠ Codex runtime ≠ direct-Codex transport ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Historical registration or endpoint state is never proof of current transport identity.

## 6. Historical BrowserRelay path

Historical evidence remains valid:

- ORCH-000153 proved exactly-once BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- ORCH-000194 proved zero-browser preparation/reconciliation for delivery `000014`;
- ORCH-000195 through ORCH-000197 diagnosed the missing historical `9444` path.

`WORKER-REG-EXECUTOR-000001` remains historical ACTIVE evidence. Do not restore or mutate it merely because it exists.

`WORKER-DELIVERY-EXECUTOR-000015` belongs to the historical BrowserRelay delivery namespace and must not be repurposed for direct Codex.

## 7. Current accepted source

`GH-PUB-201-GOVERNED-DIRECT-CODEX-ADAPTER-READY-000001`

Accepted qualification:

- 103 source-tree files;
- focused direct/host tests `95/95`;
- full deterministic suite `833/833`, zero failed/skipped/cancelled;
- manifest SHA-256 `42f37c4fcd4b291e2edf4c14725b03287dc0150e9e2e4cca614d0f56ea2239b8`;
- archive SHA-256 `b6d87a5a041be0615a143965bb2cc8c5c35080633c74d70e4600d636a4503878`.

Accepted changed paths:

- `src/host/codex-direct-transport.js` — new;
- `src/host/persistent-host-runner.js` — modified;
- `src/host/github-runtime-ports.js` — modified;
- `test/codex-direct-transport.test.js` — new.

Immutable accepted-source artifact:

- `evidence/artifacts/orch-000201/manifest.json`
- `evidence/artifacts/orch-000201/source.tar.gz`

## 8. Current live-qualification boundary

Implementation acceptance does not equal unattended production acceptance.

The next required proof is one bounded live direct-Codex adapter qualification that must establish:

- one fresh direct-Codex invocation identity;
- durable intent before the only real child spawn;
- exactly one authenticated `codex exec` child;
- the child resolves a bounded canonical GitHub probe dispatch;
- the child publishes the exact durable Executor terminal required by the adapter;
- the adapter observes that exact terminal and persists/readbacks its result;
- a bounded duplicate replay produces second spawn count `0`;
- timeout/auth/process/terminal ambiguity causes no retry;
- BrowserRelay, historical worker delivery `000015`, registration, AFFOTECH and Drive remain untouched.

Persistent-host automatic observation is a later proof after the adapter itself is live-qualified.

## 9. Durable protected state

Current host mutation-lease state remains index `382`, `nextLeaseEpoch=192`, `activeLeases=[]`.

Historical BrowserRelay delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT` and Architect trigger remains `ARCH-TRIGGER-9333-000005/SENT`.

AFFOTECH System V2 Hybrid, ports `9222/9223`, Drive/business/private data, deployments and tenant resources remain outside authority absent explicit later approval.

## 10. Documentation governance

ORCH-000201 has `documentationImpact=FULL` because accepted source and durable architecture changed from “adapter not implemented” to “adapter implemented/tested, live qualification pending.”
