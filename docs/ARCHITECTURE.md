Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000199 Architect acceptance on 2026-09-02
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

The Executor execution engine is the Codex terminal/runtime in VS Code. The current inbound edge is manual; the outbound durable evidence edge is direct Codex→GitHub.

## 3. Direct Codex non-interactive capability

ORCH-000199 accepted that the installed runtime exposes a supported non-interactive interface:

`codex exec`

Accepted capability surface:

- CLI version `codex-cli 0.151.0`;
- prompt by argument or stdin;
- working-directory control via `-C/--cd`;
- model/profile/config controls;
- sandbox and approval controls;
- machine-observable output through JSONL, output-schema and last-message surfaces;
- ephemeral/non-persistent execution support;
- parent/current CLI reports `Logged in using ChatGPT`.

The architectural candidate for unattended inbound delivery is therefore **direct Orchestrator → child `codex exec`**, not BrowserRelay.

However, child-process reuse of the current ChatGPT authentication is not yet proven. No production/direct Codex adapter is accepted yet.

## 4. Permanent identity-separation contract

`Executor role ≠ Codex runtime ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Before any transport repair/restart/restoration/retry, Architect must prove the current runtime, intended delivery path, endpoint ownership, continued necessity, and exact runtime↔transport binding.

## 5. Historical BrowserRelay path

Historical accepted transport work remains valid evidence:

- ORCH-000153 proved exactly-once worker forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` through the then-registered BrowserRelay path;
- ORCH-000194 proved zero-browser preparation/reconciliation for delivery `000014`;
- ORCH-000195 through ORCH-000197 diagnosed the missing historical `9444` path.

The durable historical registration `WORKER-REG-EXECUTOR-000001` remains ACTIVE, but ORCH-000198 accepted that it is legacy relative to the proven current manual Codex path. ORCH-000199 further establishes a direct Codex CLI capability that makes BrowserRelay restoration unnecessary for the next qualification chain.

Do not restore `9444` merely because the historical registration remains ACTIVE.

## 6. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source has not changed through ORCH-000199.

## 7. Direct-Codex qualification contract under development

Before a persistent Orchestrator may spawn Codex unattended, the following must be proven separately:

1. a one-shot child `codex exec` can reuse the current authenticated ChatGPT session;
2. the invocation is bounded to exactly one child process/model run;
3. prompt correlation is durable and unique before invocation;
4. working directory and sandbox are explicitly bound;
5. exit status and bounded structured output are machine-observable;
6. timeout/ambiguous/auth/output failure produces no blind retry;
7. project/source/config/registration/protected-resource mutation remains zero during qualification;
8. only after qualification may a dedicated direct-Codex adapter be implemented and tested.

Historical delivery `000015` is not reused for this direct-Codex qualification because it belongs to the BrowserRelay delivery namespace/path.

## 8. Durable state and protected boundaries

Current lease state remains index `382`, `nextLeaseEpoch=192`, `activeLeases=[]`.

Latest historical BrowserRelay delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`; delivery `000014/PROVEN_NOT_SENT` remains preserved; delivery `000015` remains absent.

Architect BrowserRelay/session port `9333`, where used, remains separate from AFFOTECH protected ports `9222/9223`. AFFOTECH source/worktrees, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit authority.

## 9. Documentation governance

Architect directly owns canonical human-readable documentation. ORCH-000199 is `documentationImpact=FULL` because it establishes a lasting supported Codex invocation capability and changes the intended unattended transport direction from browser restoration to direct Codex qualification.
