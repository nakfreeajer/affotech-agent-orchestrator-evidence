# Executor terminal report

Production prompt discovery now uses the durable `affotech-agent-relay` Git repository. Each cycle refreshes `origin/main`, captures one ref, reads the current Architect prompt pointer and immutable manifest with Git object reads, validates pointer/manifest identity, the relay canonical stable-body SHA-256, recipient role, READY status, Windows Codex target, and non-empty prompt, then passes the exact manifest prompt to the existing Executor path.

Relay-specific `publicationId:contentSha256` state distinguishes completed and in-flight work. Repeated publications remain idle; new publications are eligible once; unresolved in-flight work fails closed as `RECOVERY_REQUIRED`. No DOM prompt discovery, history scanning, assistant snapshot, or Architect completion parsing is called by the relay production path. Architect browser access remains only for the existing result-submission mechanism.

Live read-only qualification detected publication `PUB-e90356a8ceca44428a31090b042e80b4`, matched content SHA `278d71853e5d16a71ac61b3ca172ca420ce8c3a6a15039b55fc8cdd4c3531e03`, validated the manifest, and reached `EXECUTOR_PROMPT_READY` with the Codex boundary intercepted. Codex was not launched and the real AFFOTECH publication remains pending/unconsumed.

Focused Python tests: 45 passed, 0 failed. Node deterministic suite: 157 passed, 0 failed. Python compile passed. The visible Windows Executor launcher and real PID/exit/result accounting remain preserved.

No AFFOTECH, port 9222, Drive, deployment, business/private data, BrowserRelay/9444, worker, lease, or Architect message mutation occurred.
