# Local Python watcher atomic assistant snapshot repair

Classification: `LOCAL_PYTHON_WATCHER_VIRTUALIZED_DOM_SNAPSHOT_RACE_REPAIR`

The production assistant-history path now uses only a page-level atomic DOM snapshot when a Playwright evaluator is available. Connected assistant nodes are queried and mapped to IDs/text in one browser-side operation; no per-node `Locator.get_attribute` or `Locator.inner_text` calls are used. Transient snapshot failures retry the whole operation at most three times.

Focused Python tests: 25 passed, 0 failed. Relevant deterministic Node suite: 157 passed, 0 failed. Python compilation: PASS.

Live read-only startup on Architect port 9333 completed 64 bounded history steps, with intermediate assistant-window changes, and terminated normally at `STARTUP_HISTORY_EXHAUSTED reason=SAFETY_CAP steps=64`. No Locator timeout occurred. No pending OCR prompt was discovered. Codex execution was intercepted before launch.

No ChatGPT message was sent. No AFFOTECH, Drive, deployment, production/private-data, BrowserRelay/9444, worker, lease, or protected-port access occurred. No durable authority/current pointer was changed.
