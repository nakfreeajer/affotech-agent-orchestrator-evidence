Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000199 / DISPATCH-000199 publication on 2026-09-02
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source did not change through ORCH-000199 dispatch publication.

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
- current inbound path is manual user-message/locator handoff;
- current outbound terminal path is direct Codex-side GitHub evidence publication;
- no persistent automatic GitHub/Orchestrator → Codex bridge is yet proven;
- historical BrowserRelay `9444` is legacy relative to the proven current manual Codex path;
- historical worker registration remains ACTIVE but is a change candidate only;
- BrowserRelay restoration and delivery `000015` retry remain unauthorized.

## 3. Durable state

- lease index revision `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- latest successful historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- delivery `000014/PROVEN_NOT_SENT` preserved;
- delivery `000015` intent/result absent;
- worker registration `WORKER-REG-EXECUTOR-000001` remains ACTIVE historical control-plane evidence;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`.

## 4. Permanent identity guard

`Executor role ≠ Codex runtime ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Do not restore `9444` merely because the historical registration remains ACTIVE.

## 5. Current missing capability

`UNATTENDED_DIRECT_CODEX_INVOCATION_CONTRACT_NOT_YET_PROVEN`

The manual handoff works. The return publication works. What remains is a supported mechanism for the persistent Orchestrator to invoke Codex directly without Rony manually forwarding the dispatch.

## 6. ORCH-000199 — current legal milestone

Current canonical prompt/dispatch:

- `ORCH-000199`
- `DISPATCH-000199`
- milestone `ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.CODEX.DIRECT.NONINTERACTIVE.INVOCATION.CAPABILITY.DISCOVERY.2R`
- operation class `READ_ONLY_CODEX_INVOCATION_DISCOVERY`
- dispatch state `MANUAL_TRIGGER_REQUIRED`

ORCH-000199 must discover, without starting a second Codex/model execution:

1. the exact Codex executable/runtime identity and version;
2. whether a supported non-interactive interface exists, including `codex exec` or equivalent if present;
3. documented prompt/input, working-directory, model/config, sandbox/approval, output/result and exit semantics;
4. sanitized authentication-reuse status without reading credentials;
5. whether the accepted Orchestrator already has a suitable child-process abstraction or needs a bounded direct-Codex adapter;
6. whether a separately authorized one-shot live direct-Codex qualification would be safe.

It explicitly forbids:

- any child/new Codex model invocation;
- BrowserRelay/Brave restoration or contact;
- delivery `000015` creation/retry;
- lease/registration/source/docs mutation by Executor;
- secret/credential reads;
- AFFOTECH/Drive access.

## 7. Current required action

Run in the current Codex terminal:

`execute github dispatch nakfreeajer/affotech-agent-orchestrator-evidence DISPATCH-000199`

After its terminal/report/receipt is published, return to Architect with `verify & next`.

Until ORCH-000199 is independently reviewed:

- manual user handoff remains current;
- do not restore Brave/BrowserRelay `9444`;
- do not mutate/supersede the historical registration;
- do not create/retry delivery `000015`.

## 8. Documentation / future intent

ORCH-000198 acceptance: `documentationImpact=FULL`; `futureIdeaImpact=NONE`.

ORCH-000199 publication: `documentationImpact=STATE`; `futureIdeaImpact=NONE`.

`IDEA-0001 — Deterministic Architect documentation-closure marker` remains `ADOPTED_FOR_FUTURE`, deferred until core unattended transport reaches production-candidate qualification.
