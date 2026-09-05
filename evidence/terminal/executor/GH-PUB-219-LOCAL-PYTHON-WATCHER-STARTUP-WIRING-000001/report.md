# Local Python watcher production startup wiring repair

Classification: `LOCAL_PYTHON_WATCHER_STARTUP_HISTORY_WIRING_REPAIR`

Confirmed cause: production startup entered `STARTUP_HISTORY_SCAN` but called the already-repaired loader without forwarding the production emitter. The loader therefore ran without visible `HISTORY_SCROLL_CONTAINER` / `HISTORY_SCROLL_STEP` diagnostics. The fix passes the emitter through the production `run_forever` → `startup_candidate` → `load_older_history` path and reports `STARTUP_HISTORY_EXHAUSTED` before `STATE=IDLE`.

Focused Python tests: 22 passed, 0 failed. Relevant deterministic Node suite: 157 passed, 0 failed. Python compilation: PASS.

Real production startup validation on Architect port 9333 printed `ARCHITECT_CONNECTED`, `STARTUP_SCAN_MOUNTED count=3`, `STARTUP_HISTORY_SCAN`, eight container/step diagnostic pairs, `STARTUP_HISTORY_EXHAUSTED steps=8`, and `STATE=IDLE`. The selected live container was the repaired conversation viewport. No pending OCR prompt was discovered in this bounded envelope. The Codex boundary was intercepted before launch; no live child or OCR execution occurred.

No ChatGPT message was sent. No AFFOTECH, Drive, deployment, production/private-data, BrowserRelay/9444, worker, lease, or protected-port access occurred. No durable authority/current pointer was changed.
