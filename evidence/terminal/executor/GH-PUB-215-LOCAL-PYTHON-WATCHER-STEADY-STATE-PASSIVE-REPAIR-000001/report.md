# ORCH-000215 Executor repair report

Classification: `LOCAL_PYTHON_WATCHER_STEADY_STATE_PASSIVE_PROMPT_REPAIR`

The local watcher now attaches to the existing Architect Playwright page, baselines the latest assistant response at startup, remains in a persistent idle polling loop, and observes externally-created assistant responses without replaying historical prompts. Completed responses require the completion marker and exactly one bounded Executor block. Responses without an Executor block advance the baseline and remain idle. Generation-in-progress remains a wait state, and the existing exact-repeat loop guard remains active.

Visible status transitions implemented: `ARCHITECT_CONNECTED`, `STATE=IDLE`, `ARCHITECT_NEW_RESPONSE`, `EXECUTOR_PROMPT_READY`, `CODEX_STARTED pid=<pid>`, `CODEX_COMPLETED exit=<code>`, and `RESULT_SENT_TO_ARCHITECT`.

Focused and relevant deterministic tests: 12 passed, 0 failed, 0 skipped. Python compilation passed. The test harness launched no Codex child. AFFOTECH mutation, BrowserRelay/9444 contact, worker/registration/lease mutation, and GitHub live-relay dependency were all zero/false.