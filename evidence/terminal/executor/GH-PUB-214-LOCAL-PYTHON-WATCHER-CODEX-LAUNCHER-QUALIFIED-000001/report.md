# ORCH-000214 Executor launcher qualification report

Classification: `LOCAL_PYTHON_WATCHER_FINAL_LIVE_ROUNDTRIP_QUALIFIED`

The Windows launcher inspection found `codex`, `codex.cmd`, and `codex.ps1`. `codex.cmd` resolved to `node_modules/@openai/codex/bin/codex.js`; the npm-local Node executable was absent, so the selected discovered form was system `C:/Program Files/nodejs/node.EXE` plus the installed Codex CLI script. Codex version: `codex-cli 0.151.0`. Arguments were `exec --ephemeral --sandbox read-only -C <safe-project> -o <unique-last-message-file> -`, with the full prompt on stdin.

Focused tests passed 8/8 and the relevant deterministic suite passed 157/157. The single synthetic round trip attached to the dedicated Architect browser on `http://127.0.0.1:9333`, confirmed the new user probe turn, observed the new marked response, extracted the Executor block, launched exactly one Codex child, observed it running, and captured exit code 0 with no timeout. The unique last-message file existed and contained the expected sentinel `ORCH214_CODEX_SENTINEL`; stdout was 23 bytes and stderr was 440 bytes of non-secret diagnostic output.

The captured result was submitted once to Architect, the result user turn was confirmed, and a new post-result Architect response ending `ARCHITECT_RESPONSE_COMPLETE` was observed. No retry or second child occurred. No child-owned terminal, BrowserRelay/9444, worker delivery, registration, lease, GitHub live relay, AFFOTECH, Drive, deployment, private-data, or protected-port activity occurred. The old Architect page was not closed before readiness.
