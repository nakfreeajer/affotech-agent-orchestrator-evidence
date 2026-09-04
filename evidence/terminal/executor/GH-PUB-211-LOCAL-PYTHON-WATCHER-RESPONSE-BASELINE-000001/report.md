# ORCH-000211 Executor repair report

Classification: `LOCAL_PYTHON_WATCHER_ARCHITECT_RESPONSE_NOT_READY`

The watcher now records a pre-submit baseline using the stable assistant-message locator `[data-message-author-role="assistant"]`, its count, and the latest assistant text hash. It accepts completion only from a changed post-submit assistant response with `ARCHITECT_RESPONSE_COMPLETE`; the old unmarked response cannot satisfy a new submission. The documentation-closure-before-handover gate remains intact.

Focused watcher tests passed 5/5. The existing relevant deterministic suite passed 157/157. The dedicated Architect browser attached successfully through `http://127.0.0.1:9333` with one page and semantic controls. The prior response had no completion marker. After one benign synthetic probe submission, no new completed response with the required marker became observable within the bounded window. The probe stopped at that first blocker.

No Codex child was launched, no result was submitted, and no retry was attempted. The old Architect page was not closed. No AFFOTECH, BrowserRelay/9444, worker, registration, lease, GitHub live-relay, Drive, deployment, private-data, or assistant-response-text activity occurred.
