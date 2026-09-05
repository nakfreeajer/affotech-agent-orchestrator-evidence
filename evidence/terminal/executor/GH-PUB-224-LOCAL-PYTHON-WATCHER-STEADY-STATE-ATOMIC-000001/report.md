# Local Python watcher steady-state atomic polling repair

Classification: `LOCAL_PYTHON_WATCHER_STEADY_STATE_ATOMIC_POLLING_REPAIR`

Steady-state assistant polling now reuses the atomic page-level assistant snapshot. It no longer calls `Locator.count`, `Locator.get_attribute`, or `Locator.inner_text` for assistant observation. Generation-state detection also uses a bounded page evaluation when available. The attached Playwright runtime is closed in the entrypoint finally path on normal manual shutdown.

Focused Python tests: 28 passed, 0 failed. Relevant deterministic Node suite: 157 passed, 0 failed. Python compilation: PASS. Tests cover unchanged snapshots, fresh responses, generation-in-progress, completion markers, exact-one Executor extraction, virtualized replacement, and no live Codex child.

Live validation on Architect port 9333 restored the bottom window, reached IDLE, and—without manual scrolling—detected a harmless fresh sentinel as `ARCHITECT_NEW_RESPONSE`. The pre-Codex interception confirmed `EXECUTOR_PROMPT_READY` and prevented child launch. No Locator timeout occurred. The pending AFFOTECH OCR task was not executed.

One harmless Architect user message was sent solely for this validation. No other ChatGPT message was sent. No AFFOTECH, Drive, deployment, production/private-data, BrowserRelay/9444, worker, lease, or protected-port access occurred. No durable authority/current pointer was changed.
