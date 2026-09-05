# Local Python watcher startup history retrieval repair

Classification: `LOCAL_PYTHON_WATCHER_STARTUP_HISTORY_RETRIEVAL_REPAIR`

The Architect Playwright boundary now performs a bounded older-history scan when the mounted assistant DOM contains no fresh valid Executor prompt. It scrolls eligible conversation containers upward, then rescans assistant responses newest-to-oldest. Completion-marker and exactly-one-Executor-block validation remain unchanged, as do last-forwarded and in-flight hash suppression and the existing Codex exactly-once state path.

Startup diagnostics now distinguish `STARTUP_SCAN_MOUNTED count=<n>` from `STARTUP_HISTORY_SCAN`. No user message is sent to expose history.

Focused watcher tests: 19 passed, 0 failed. Python compilation: PASS. Relevant deterministic Node suite: 157 passed, 0 failed. Tests cover mounted prompts, virtualized prompts exposed by bounded loading, newer no-block responses, forwarded/in-flight suppression, bounded scanning, and no live Codex launch.

The pending AFFOTECH OCR task was not executed. No live Codex child, Architect browser, BrowserRelay/9444, AFFOTECH, Drive, deployment, production/private-data, or protected-port access occurred. No durable authority/current pointer was changed.
