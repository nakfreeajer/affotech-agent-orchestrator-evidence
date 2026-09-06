# Executor terminal report

The Windows presentation change launches the actual qualified Codex process in a newly opened visible console. The console displayed the real Codex output and remained open after completion. The watcher polled a temporary status record, captured the real child PID and integer exit code, and returned without waiting for the post-completion presentation window.

Live result: visible console `true`; real Codex child `true`; PID `8700`; exit `0`; result file captured `true`; orchestrator caller returned `true`. The requested sentinel was not byte-exact in the captured result: Codex returned additional explanatory text. This is recorded as BLOCKED rather than being normalized or special-cased.

Deterministic validation: focused Python tests 40 passed, 0 failed; Node suite 157 passed, 0 failed; Python compile passed. The qualified command, exact stdin prompt transport, unique result file, PID/exit accounting, timeout handling, and non-blocking post-completion window are covered/preserved.

No AFFOTECH, port 9222, Drive, deployment, business/private data, BrowserRelay/9444, worker, lease, or GitHub live-relay access occurred.
