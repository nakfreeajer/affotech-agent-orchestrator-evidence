# ORCH-000198 Executor Terminal

## Current topology

```text
Architect durable dispatch
  -> manual user message / locator handoff
  -> Codex terminal runtime in VS Code
  -> direct GitHub evidence reads and publication
  -> durable Executor terminal/report/receipt
  -> Architect review
```

The current Codex runtime is proven by this execution's workspace (`C:\Users\nitro\Projects\affotech-agent-orchestrator`), Node/Codex process metadata, and the current dispatch being resolved and executed here. The current inbound edge is manual user-message delivery; no automatic GitHub-to-Codex launcher, webhook, extension, wrapper, or host bridge was found in the inspected project source/config/evidence.

The outbound terminal path is direct Codex-side GitHub evidence publication. `src/evidence/publish-evidence.js` defines immutable report/receipt and pointer publication, while the current Executor workflow publishes directly to the evidence repository. No Orchestrator observation or BrowserRelay return hop was found.

The accepted `src/browser-relay/worker-relay.js` proves the locator protocol and Git-object authority resolution, but not a Codex runtime bridge. Durable registration `WORKER-REG-EXECUTOR-000001` / authority `WORKER-AUTH-EXECUTOR-000001` binds the historical control-plane target to port 9444. Read-only OS inspection found no 9444 listener or owner at reconciliation; port 9333 is a separate Architect Brave session. Therefore BrowserRelay is historical/legacy and not required by the current Codex path.

Classification: `CODEX_DIRECT_OR_MANUAL_DELIVERY_PATH_CONFIRMED`. The smallest next step is an Architect-authorized decision and bounded contract qualification for direct Codex delivery or retirement/supersession of the historical 9444 registration. Delivery 000015 remains unsafe and was not retried.

All lease, worker-delivery, browser, process, registration, source, documentation, AFFOTECH, Drive, and deployment mutations were zero.
