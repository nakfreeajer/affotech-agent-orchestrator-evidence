Project: affotech-agent-orchestrator
Documentation sync boundary: through ORCH-000198 Architect acceptance on 2026-09-02
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence, governing policy, and Architect decisions

# Architecture

## 1. Core purpose

AFFOTECH Agent Orchestrator is a governed deterministic message-routing and durable-state layer. AI roles think; the Orchestrator carries exact governed envelopes and observes durable state. It does not approve work, infer authority from browser text, or interpret project semantics.

## 2. Proven current authority topology

ORCH-000198 accepted the currently proven execution path:

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

The current Executor execution engine is the Codex terminal/runtime in VS Code.

The inbound edge is currently manual. An unattended GitHub/Orchestrator → Codex invocation edge is **not yet proven**.

The outbound edge is direct Codex-side GitHub evidence publication and is proven by ORCH-000198 itself.

## 3. Permanent identity-separation contract

These identities are distinct:

- role identity: `executor`;
- execution runtime: the process/session that performs bounded work;
- transport adapter: e.g. BrowserRelay when actually required;
- browser/session identity: a ChatGPT/browser conversation used by a transport;
- network endpoint: listener/CDP/relay port owned by a particular component.

Permanent rule:

`Executor role ≠ Codex runtime ≠ BrowserRelay transport ≠ browser conversation ≠ CDP/relay port`

Before any transport repair/restart/restoration/retry, Architect must prove the current runtime, intended delivery path, endpoint ownership, continued necessity, and exact runtime↔transport binding.

## 4. Historical BrowserRelay path

Historical accepted transport work remains valid evidence:

- ORCH-000153 proved exactly-once worker forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` through the then-registered BrowserRelay path;
- ORCH-000194 proved zero-browser preparation/reconciliation for delivery `000014`;
- ORCH-000195 through ORCH-000197 investigated missing port `9444` under the then-assumption that the historical BrowserRelay target was still the active Executor path.

The durable registration `WORKER-REG-EXECUTOR-000001` remains ACTIVE and binds the historical ChatGPT control-plane target to port `9444`, but ORCH-000198 accepted that this registration is **legacy control-plane evidence not required by the proven current manual Codex path**.

Therefore BrowserRelay/9444 is not to be restored merely because the historical registration remains ACTIVE.

## 5. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

Accepted source has not changed through ORCH-000198.

## 6. Historical BrowserRelay exactly-once contract

Accepted historical ordering:

`observe dispatch → acquire WORKER_DELIVERY lease → construct transient action-specific authorization → prepareWorkerDeliveryIntent → durable intent readback → send/reconcile result → durable result readback → release/reconcile lease`

This contract remains valid for a BrowserRelay path when that path is explicitly selected and proven. It does **not** authorize applying delivery `000015` to the current Codex path.

Delivery `000015` remains absent and retry is unauthorized.

## 7. Current unattended-transport gap

The current missing capability is precise:

`durable Architect/Orchestrator dispatch → unattended direct Codex invocation`

ORCH-000198 found no proven persistent automatic Codex bridge. The next architecture work must discover whether the installed Codex runtime exposes a safe, supported non-interactive invocation contract that can be called by the persistent Orchestrator without BrowserRelay.

Until that contract is proven:

- manual user message remains the inbound Codex handoff;
- BrowserRelay restoration is unauthorized;
- historical worker registration remains untouched;
- delivery `000015` remains unsafe to retry.

## 8. Lease and GitHub transport contracts

- index `activeLeases` entries are reduced locators; full-schema work hydrates the exact immutable revision first;
- canonical semantic SHA-256 and Git blob SHA remain separate typed identities;
- GitHub Contents adapters preserve semantic HTTP status and map `404 → NOT_FOUND`;
- accepted `createJson` uses `precheck → at most one PUT → exact post-write readback`;
- durable readback is final mutation authority;
- no blind retry after ambiguous external mutation or send.

## 9. Current durable state

- lease index `382`;
- `nextLeaseEpoch=192`;
- `activeLeases=[]`;
- latest successful historical BrowserRelay delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`;
- delivery `000014/PROVEN_NOT_SENT` preserved;
- delivery `000015` absent;
- latest Architect trigger `ARCH-TRIGGER-9333-000005/SENT`;
- current accepted topology decision `GH-DEC-198-CODEX-DIRECT-MANUAL-TOPOLOGY-ACCEPTED`.

## 10. Documentation governance

Architect directly owns canonical human-readable documentation. `documentationImpact=NONE|STATE|FULL`; future intent is separately classified `NONE|CAPTURE|PROMOTE`.

ORCH-000198 is `documentationImpact=FULL` because it establishes lasting current architecture truth: manual inbound Codex handoff, direct GitHub outbound publication, and historical/legacy status of the 9444 BrowserRelay path relative to the proven current Codex route.

## 11. Protected boundaries

Architect BrowserRelay/session port `9333`, where used, remains separate from AFFOTECH protected ports `9222/9223`. Historical `9444` is not a Codex runtime/CDP identity. AFFOTECH source/worktrees, Drive, Apps Script, tenant resources, deployments, and business/private data remain unauthorized absent explicit authority.
