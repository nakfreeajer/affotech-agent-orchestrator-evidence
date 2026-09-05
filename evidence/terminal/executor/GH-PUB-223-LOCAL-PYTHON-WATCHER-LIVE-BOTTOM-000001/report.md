# Local Python watcher live-bottom restore repair

Classification: `LOCAL_PYTHON_WATCHER_LIVE_BOTTOM_RESTORE_REPAIR`

After startup history traversal, the watcher now restores the qualified conversation viewport to its effective bottom, waits for rendering, atomically snapshots the mounted assistant window, and establishes the steady-state baseline there. A fresh candidate found after restoration is routed through the existing exactly-once execution path rather than being baselined away.

Focused Python tests: 26 passed, 0 failed. Relevant deterministic Node suite: 157 passed, 0 failed. Python compilation: PASS. Tests cover historical-top traversal, bottom restoration, latest-window appearance, prompts arriving during history, post-IDLE prompts, suppression, and one-child execution.

Live read-only startup on Architect port 9333 reached `STARTUP_HISTORY_EXHAUSTED reason=TOP_REACHED steps=1`, restored `scrollTop=0` to `50381.6`, emitted `LIVE_BOTTOM_READY assistants=6`, and entered `STATE=IDLE`. No locator timeout occurred. No pending OCR prompt was discovered. Codex execution was intercepted before launch.

No ChatGPT message was sent. No AFFOTECH, Drive, deployment, production/private-data, BrowserRelay/9444, worker, lease, or protected-port access occurred. No durable authority/current pointer was changed.
