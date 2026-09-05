# Local Python watcher production generation-visible atomic repair

Classification: `LOCAL_PYTHON_WATCHER_PRODUCTION_GENERATION_VISIBLE_ATOMIC_REPAIR`

The remaining steady-state `generation_visible()` Locator fallback was removed. Generation visibility now uses one bounded browser-side page evaluation and returns a boolean; the steady-state `wait_for_new_response` path remains atomic-snapshot-only. A static regression guard confirms no `.count()` or `.locator()` call is reachable in the generation/wait observer methods. The existing Playwright runtime is disconnected in the entrypoint finally path.

Focused Python tests: 29 passed, 0 failed. Relevant deterministic Node suite: 157 passed, 0 failed. Python compilation: PASS.

Live production validation on Architect port 9333 reached IDLE, then observed one harmless fresh sentinel without manual scrolling. The real path emitted `ARCHITECT_NEW_RESPONSE` and `EXECUTOR_PROMPT_READY`; Codex was intercepted immediately before launch. A normal bounded shutdown completed with no pending Locator task and no closed-pipe/shutdown traceback. The pending AFFOTECH OCR task was not executed.

One harmless Architect user message was sent solely for validation. No AFFOTECH, Drive, deployment, production/private-data, BrowserRelay/9444, worker, lease, or protected-port access occurred. No durable authority/current pointer was changed.
