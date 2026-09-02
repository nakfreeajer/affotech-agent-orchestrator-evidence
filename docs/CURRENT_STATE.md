Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000198 Architect acceptance on 2026-09-02
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source did not change through ORCH-000198.

## 2. ORCH-000198 — ACCEPTED current Codex topology

Executor terminal:

`GH-PUB-198-CODEX-TOPOLOGY-RECONCILIATION-000001`

Architect decision:

`GH-DEC-198-CODEX-DIRECT-MANUAL-TOPOLOGY-ACCEPTED`

Accepted current topology:

```text
Architect durable dispatch
  → manual user locator/message
  → Codex terminal/runtime in VS Code
  → direct GitHub authority reads
  → bounded Executor work
  → direct GitHub terminal/report/receipt publication
  → Architect review
```

Accepted scope:

- operational Executor runtime is `CODEX_TERMINAL_RUNTIME_IN_VSCODE`;
- current inbound path is manual user-message/locator handoff and is proven by ORCH-000198 execution;
- current outbound terminal path is direct Codex-side GitHub evidence publication and is proven by ORCH-000198 publication;
- no persistent automatic GitHub/Orchestrator → Codex bridge was proven;
- BrowserRelay `9444` is historical/legacy relative to this proven current path and is not required for the current manual Codex handoff;
- the historical registration remains ACTIVE but is a change candidate only; no registration mutation has been authorized;
- BrowserRelay restoration remains unauthorized;
- delivery `000015` retry remains unauthorized.

## 3. Durable state

- lease index revision `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- latest successful historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- delivery `000014/PROVEN_NOT_SENT` preserved;
- delivery `000015` intent/result absent;
- worker registration `WORKER-REG-EXECUTOR-000001` remains ACTIVE historical control-plane evidence;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 4. Historical 9444 correction

ORCH-000195 through ORCH-000197 remain valid historical diagnostics of the old BrowserRelay target. They do not define the current Codex execution path.

Permanent rule:

`Executor role ≠ Codex runtime ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Do not restore `9444` merely because the historical registration remains ACTIVE.

## 5. Current blocker / missing capability

The missing capability is no longer ambiguous:

`UNATTENDED_DIRECT_CODEX_INVOCATION_CONTRACT_NOT_YET_PROVEN`

The manual handoff works. The return publication works. What is missing is a proven supported mechanism for the persistent Orchestrator to invoke the Codex Executor directly without Rony manually forwarding the dispatch.

## 6. Required next action

The next legal technical milestone is read-only discovery/qualification of the installed Codex runtime's direct non-interactive invocation surface.

It must determine without invoking a second model run or mutating runtime/source:

1. which Codex executable/runtime is actually installed and active;
2. whether a supported non-interactive command exists (for example an `exec`-class interface if present);
3. how it accepts prompt/locator input, working directory, model/config, and exit/result semantics;
4. whether the current authenticated user/session can use that interface without a separate API-key architecture;
5. whether the persistent Orchestrator can safely spawn it under exactly-once intent/result governance;
6. the smallest bounded live qualification needed afterward.

Until that discovery is accepted:

- manual user handoff remains current;
- do not restore Brave/BrowserRelay `9444`;
- do not mutate/supersede the historical registration;
- do not create/retry delivery `000015`.

## 7. Documentation / future intent

ORCH-000198: `documentationImpact=FULL`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
