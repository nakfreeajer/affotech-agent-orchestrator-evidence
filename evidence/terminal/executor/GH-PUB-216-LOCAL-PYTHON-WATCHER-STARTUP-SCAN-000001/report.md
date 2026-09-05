# Local Python watcher startup scan repair

Classification: `LOCAL_PYTHON_WATCHER_STARTUP_PENDING_PROMPT_SCAN_REPAIR`

The watcher now scans the existing Architect assistant DOM newest-to-oldest at startup. It selects the newest completed response ending `ARCHITECT_RESPONSE_COMPLETE` with exactly one bounded Executor block. Newer completed assistant responses without an Executor block do not hide an older pending valid block.

The selected prompt is normalized and hashed. A matching `last_prompt_hash` or persisted `in_flight_prompt_hash` is suppressed. A fresh prompt becomes one launch candidate and uses the existing Codex runner/exactly-once state path; tests use a fake runner and launch no live child. The in-flight hash is persisted before the child boundary and cleared after capture.

Focused watcher tests: 17 passed, 0 failed. Python compilation: PASS. Relevant deterministic Node suite: 157 passed, 0 failed.

No live Codex child was launched. The pending AFFOTECH OCR prompt was not executed. No Architect browser was contacted during repair testing. No BrowserRelay/9444, AFFOTECH, Drive, deployment, production/private-data, or protected-port access occurred. No authority/current pointers were changed by this publication.
