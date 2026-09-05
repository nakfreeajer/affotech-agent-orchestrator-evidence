# ORCH-000215 live DOM observation repair report

Classification: `LOCAL_PYTHON_WATCHER_STEADY_STATE_PASSIVE_DOM_REPAIR`

Live inspection of the existing Architect page on port 9333 found multiple assistant message nodes using `data-message-author-role="assistant"` and distinct `data-message-id` values. The prior observer fingerprinted only the final matching node, so an externally-added or changed assistant node could be missed when another matching node remained last.

The repair fingerprints the ordered set of all assistant nodes, including message IDs and text, and selects the newly added or changed node for completion-marker and Executor-block evaluation. Startup still baselines without replay, generation-in-progress remains a wait state, completion still requires `ARCHITECT_RESPONSE_COMPLETE`, extraction requires exactly one bounded Executor block, and the exact-repeat guard is preserved. The persistent entrypoint still attaches to the current Architect page and idles continuously.

Deterministic regression suite: 13 passed, 0 failed, 0 skipped. Python compilation: PASS. No live Codex child was launched. AFFOTECH mutation: 0. BrowserRelay/9444 contact: 0. Worker/registration/lease mutation: 0. GitHub live-relay dependency: false.