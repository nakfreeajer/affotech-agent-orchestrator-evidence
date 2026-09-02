Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000199 Architect acceptance on 2026-09-02
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source did not change through ORCH-000199.

## 2. Accepted current Codex topology

ORCH-000198 remains accepted under:

`GH-DEC-198-CODEX-DIRECT-MANUAL-TOPOLOGY-ACCEPTED`

Proven current path:

```text
Architect durable dispatch
  → manual user locator/message
  → Codex terminal/runtime in VS Code
  → direct GitHub authority reads
  → bounded Executor work
  → direct GitHub terminal/report/receipt publication
  → Architect review
```

Historical BrowserRelay `9444` remains legacy relative to this proven path and is not to be restored merely because its old registration remains ACTIVE.

## 3. ORCH-000199 — ACCEPTED Codex non-interactive capability discovery

Executor terminal:

`GH-PUB-199-CODEX-NONINTERACTIVE-CAPABILITY-DISCOVERY-000001`

Architect decision:

`GH-DEC-199-CODEX-NONINTERACTIVE-CAPABILITY-DISCOVERY-ACCEPTED`

Accepted facts:

- installed runtime: `codex-cli 0.151.0`;
- executable binding: `C:\Users\nitro\AppData\Roaming\npm\codex.ps1 -> codex-cli`;
- supported non-interactive interface: `codex exec`;
- prompt may be supplied as an argument or via stdin;
- working directory is controllable with `-C/--cd`;
- model/profile/config and sandbox/approval controls are exposed;
- machine-observable output surfaces include JSONL, output schema and last-message output;
- `--ephemeral` is available for non-persistent execution;
- current CLI reports `Logged in using ChatGPT`;
- whether a separately spawned child `codex exec` reuses that authenticated ChatGPT session remains unproven because ORCH-000199 correctly invoked no child/model run;
- accepted Orchestrator source has no dedicated Codex child-process adapter yet;
- BrowserRelay restoration remains unnecessary for this capability path.

## 4. Durable state

- lease index revision `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- latest successful historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- delivery `000014/PROVEN_NOT_SENT` preserved;
- delivery `000015` intent/result absent and retry unauthorized;
- worker registration `WORKER-REG-EXECUTOR-000001` remains ACTIVE historical control-plane evidence; no mutation authorized;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 5. Permanent identity guard

`Executor role ≠ Codex runtime ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Current Codex capability must be qualified directly; do not route this work back through `9444`.

## 6. Current missing proof

The remaining narrow proof is:

`CHILD_CODEX_EXEC_CHATGPT_AUTH_REUSE_AND_OBSERVABLE_EXIT_OUTPUT_NOT_YET_PROVEN`

Discovery established the supported interface. It did not prove that a one-shot child `codex exec` launched by a parent process can reuse the current ChatGPT login and return a clean, correlatable success result.

## 7. Required next action

The next legal milestone is ORCH-000200: one isolated, exactly-once direct `codex exec` authentication-reuse qualification.

It must:

1. execute at most one child `codex exec`;
2. use a harmless deterministic prompt unrelated to project implementation;
3. use read-only sandboxing and ephemeral/non-persistent execution where supported;
4. bind an exact correlation token before invocation;
5. capture exit code and bounded output without relying on human-visible terminal text;
6. prove whether the child reused current ChatGPT authentication;
7. perform zero project/source/config/registration/BrowserRelay/AFFOTECH/Drive mutation;
8. stop without retry on timeout, ambiguous exit, auth failure, or output mismatch.

This qualification does not authorize a production Codex adapter or unattended implementation dispatch yet.

Until ORCH-000200 is accepted:

- manual user handoff remains the current inbound execution path;
- do not restore Brave/BrowserRelay `9444`;
- do not mutate/supersede the historical registration;
- do not create/retry delivery `000015`.

## 8. Documentation / future intent

ORCH-000199: `documentationImpact=FULL`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
