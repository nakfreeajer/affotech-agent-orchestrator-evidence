# Local Python watcher Codex child completion accounting repair

Classification: `LOCAL_PYTHON_WATCHER_CODEX_CHILD_COMPLETION_ACCOUNTING_REPAIR`

Codex supervision now captures the real child PID, invokes the launch callback, explicitly waits after `communicate()`, requires an integer return code, and emits `CODEX_COMPLETED` only after genuine termination. Timeout paths emit `CODEX_STALLED` with the bounded result and do not submit a result as completion. `RESULT_SENT_TO_ARCHITECT` is reachable only after a terminal integer result.

Focused Python tests: 33 passed, 0 failed. Relevant deterministic Node suite: 157 passed, 0 failed. Python compilation: PASS. Tests cover running/None return codes, exit 0, nonzero exit preservation, timeout/stalled behavior, state timing, and successful result submission.

A real harmless Codex child ran against the sandbox project only: PID 22548 was observed running, terminated with integer exit 0, did not time out, and produced exactly `ORCH_CODEX_CHILD_TERMINAL_SENTINEL_PASS`. No Architect result submission was performed for this isolated child-accounting probe.

No AFFOTECH/OCR task was executed. No Architect message, BrowserRelay/9444, Drive, deployment, production/private-data, worker, lease, or protected-port access occurred. No durable authority/current pointer was changed.
