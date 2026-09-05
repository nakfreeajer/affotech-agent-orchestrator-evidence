# Local Python watcher virtualized DOM snapshot race repair

Classification: `LOCAL_PYTHON_WATCHER_VIRTUALIZED_DOM_SNAPSHOT_RACE_REPAIR`

Assistant history observation now uses one browser-side DOM snapshot operation for the mounted assistant set, returning connected-node IDs and text atomically. It no longer performs per-node Playwright `get_attribute` or `inner_text` calls during history traversal. Whole-snapshot transient failures are retried at most three times, boundedly.

Focused Python tests: 25 passed, 0 failed. Relevant deterministic Node suite: 157 passed, 0 failed. Python compilation: PASS. Tests cover virtualized node replacement, disappearing nodes, continued traversal, later-window prompt discovery, and zero live Codex launches.

Live read-only production startup on Architect port 9333 completed 22 adaptive history steps, observed intermediate assistant-window changes, and reached `STARTUP_HISTORY_EXHAUSTED reason=TOP_REACHED steps=22`. No Locator timeout occurred. No pending OCR prompt was discovered in this traversal. Codex execution was intercepted before launch.

No ChatGPT message was sent. No AFFOTECH, Drive, deployment, production/private-data, BrowserRelay/9444, worker, lease, or protected-port access occurred. No durable authority/current pointer was changed.
