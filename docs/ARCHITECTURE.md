Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000200 Architect acceptance on 2026-09-02
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence, governing policy, and Architect decisions

# Architecture

## 1. Core purpose

AFFOTECH Agent Orchestrator is a governed deterministic message-routing and durable-state layer. AI roles think; the Orchestrator carries exact governed envelopes and observes durable state. It does not approve work, infer authority from browser text, or interpret project semantics.

## 2. Proven current execution topology

```text
Rony / Architect durable dispatch
  ↓
manual user locator/message
  ↓
Codex Executor terminal/runtime in VS Code
  ↓ direct GitHub authority reads
bounded Executor work
  ↓ direct GitHub terminal/report/receipt publication
Durable Executor terminal
  ↓
Architect review
```

The Executor execution engine is the Codex terminal/runtime in VS Code. The current production inbound edge remains manual; the outbound durable evidence edge is direct Codex→GitHub.

## 3. Direct Codex non-interactive primitive — QUALIFIED

ORCH-000199 established the supported non-interactive surface `codex exec` on `codex-cli 0.151.0`.

ORCH-000200 then qualified one isolated child invocation under durable correlation authority:

- immutable qualification intent was durably ARMED before child invocation;
- exactly one child `codex exec` was invoked;
- the child reused the current ChatGPT-authenticated CLI session successfully;
- child exit code was `0`;
- timeout=false and termination count=0;
- exact bounded correlation output matched;
- retry count=0;
- read-only sandbox and ephemeral execution were used;
- project/source/config/registration/BrowserRelay/AFFOTECH/Drive mutations remained zero.

Architect decision:

`GH-DEC-200-CODEX-DIRECT-AUTH-REUSE-QUALIFICATION-ACCEPTED`

Therefore direct child `codex exec` is now a **qualified one-shot runtime transport primitive** for this environment.

It is not yet a production unattended adapter. The missing capability is a dedicated governed Orchestrator→Codex adapter that applies durable intent/result, at-most-once spawn, duplicate suppression, timeout/ambiguity reconciliation, explicit workdir/sandbox binding, and no blind retry.

## 4. Permanent identity-separation contract

`Executor role ≠ Codex runtime ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Before any transport repair/restart/restoration/retry, Architect must prove the current runtime, intended delivery path, endpoint ownership, continued necessity, and exact runtime↔transport binding.

## 5. Historical BrowserRelay path

Historical accepted transport work remains valid evidence:

- ORCH-000153 proved exactly-once forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` through the then-registered BrowserRelay path;
- ORCH-000194 proved zero-browser preparation/reconciliation for delivery `000014`;
- ORCH-000195 through ORCH-000197 diagnosed the missing historical `9444` path.

The durable historical registration `WORKER-REG-EXECUTOR-000001` remains ACTIVE but is legacy relative to the accepted Codex path. ORCH-000200 strengthens the replacement direction by proving direct authenticated `codex exec` invocation works without BrowserRelay.

Do not restore `9444` merely because the historical registration remains ACTIVE.

Historical delivery `000015` belongs to the BrowserRelay delivery namespace/path and must not be reused as a direct-Codex invocation identity.

## 6. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source has not changed through ORCH-000200.

The accepted source artifact is preserved under `evidence/artifacts/orch-000165/`, with canonical source paths including `src/host/persistent-host-runner.js`, `src/host/github-runtime-ports.js`, `src/recovery/exactly-once.js`, `src/evidence/publish-evidence.js`, and matching `test/` paths.

## 7. Required governed direct-Codex adapter contract

Before unattended dispatch is accepted, the implementation must provide:

1. a fresh direct-Codex invocation identity distinct from BrowserRelay delivery IDs;
2. immutable durable intent before any child spawn;
3. at most one child `codex exec` spawn per invocation identity;
4. explicit prompt/canonical-dispatch correlation;
5. explicit project working directory;
6. explicit sandbox/approval policy and ephemeral execution;
7. bounded machine-observable exit/output capture;
8. immutable durable result and exact readback;
9. duplicate suppression with second-spawn count `0`;
10. separate outcomes for authentication failure, timeout, nonzero exit, output mismatch and ambiguity;
11. no blind retry after an ambiguous child-process boundary;
12. integration with persistent-host dispatch observation without BrowserRelay;
13. preservation of existing lease/GitHub evidence authority contracts.

## 8. Durable state and protected boundaries

Current lease state remains index `382`, `nextLeaseEpoch=192`, `activeLeases=[]`.

Latest historical BrowserRelay delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`; delivery `000014/PROVEN_NOT_SENT` remains preserved; delivery `000015` remains absent.

Architect BrowserRelay/session port `9333`, where used, remains separate from AFFOTECH protected ports `9222/9223`. AFFOTECH source/worktrees, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit authority.

## 9. Documentation governance

Architect directly owns canonical human-readable documentation. ORCH-000200 is `documentationImpact=FULL` because it proves a lasting authenticated direct-Codex invocation primitive and changes the next implementation boundary from capability qualification to governed adapter implementation.
