# ORCH-000213 Executor parity repair report

Classification: `LOCAL_PYTHON_WATCHER_CODEX_CHILD_EXIT_NONZERO`

The watcher now invokes the proven Windows-shaped Codex route: `codex exec --ephemeral --sandbox read-only -C <safe-project> -o <unique-last-message-file> -`, with the full Executor prompt on stdin. It separately tracks process liveness, exit code, timeout, stdout/stderr, and last-message-file presence, preferring the last-message file for usable output. Focused tests passed 7/7 and the relevant deterministic suite passed 157/157.

The final synthetic probe attached to the Architect page on `127.0.0.1:9333`, confirmed the new user turn, observed the new completed marked response, and extracted the Executor block. Exactly one Codex child was observed running, then exited with code 1 and no timeout. The unique last-message file was absent and no sentinel was captured. The result was not submitted to Architect. No retry or second child was started.

No stderr bytes were available to the bounded parent after the nonzero exit. No AFFOTECH, BrowserRelay/9444, worker, registration, lease, GitHub live-relay, Drive, deployment, private-data, or protected-port activity occurred. Assistant response text was not read.
