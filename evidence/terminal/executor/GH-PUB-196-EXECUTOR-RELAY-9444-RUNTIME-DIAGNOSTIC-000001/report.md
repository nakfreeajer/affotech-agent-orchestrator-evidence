# ORCH-000196 Executor Terminal

Durable worker authority and registration bindings are valid: `WORKER-AUTH-EXECUTOR-000001` and `WORKER-REG-EXECUTOR-000001` are ACTIVE, related by the exact authority hash, and target conversation `6a80a082-3398-83ec-8336-dd73d62e848e` on relay port 9444.

Read-only OS inspection found no TCP listener on `127.0.0.1:9444`, no owning process, and no Executor relay/browser process command line for the registered target. The only identified relay browser is the separate Architect session on port 9333. Classification: `EXECUTOR_RELAY_PROCESS_NOT_RUNNING`.

Restoration requires the dedicated Executor relay/runtime and its browser session to be made available by manual user action. No registration refresh or source patch is required. No lease, delivery, browser application, process, source, AFFOTECH, Drive, or deployment mutation occurred.
