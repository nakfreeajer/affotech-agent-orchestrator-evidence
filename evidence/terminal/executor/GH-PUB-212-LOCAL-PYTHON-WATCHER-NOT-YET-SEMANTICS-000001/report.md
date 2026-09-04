# ORCH-000212 Executor repair report

Classification: `LOCAL_PYTHON_WATCHER_CODEX_CHILD_EXIT_NONZERO`

The watcher’s NOT_YET semantics repair passed focused tests 6/6 and the existing relevant deterministic suite passed 157/157. The live probe attached to the dedicated Architect page at `http://127.0.0.1:9333`, confirmed the new user probe turn, observed a new completed Architect response with `ARCHITECT_RESPONSE_COMPLETE`, and extracted the bounded Executor block.

Exactly one Codex child was launched through the installed `codex.ps1` route in read-only sandbox mode and was observed running. It exited with code 1, timed out false, and did not produce `ORCH212_CODEX_SENTINEL`. The result was therefore not submitted back to Architect. No retry or second child was started.

No AFFOTECH, BrowserRelay/9444, worker, registration, lease, GitHub live-relay, Drive, deployment, private-data, or protected-port activity occurred. The old Architect page was not closed and assistant response text was not read.
