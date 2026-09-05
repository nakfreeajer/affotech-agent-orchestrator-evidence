# Local Python watcher adaptive history envelope repair

Classification: `LOCAL_PYTHON_WATCHER_ADAPTIVE_HISTORY_ENVELOPE_REPAIR`

The arbitrary eight-step history limit was replaced with adaptive bounded traversal. The existing conversation viewport is moved upward one step at a time; after each bounded rendering wait, assistant identities are rescanned and a fresh valid Executor prompt is checked immediately. Traversal stops on FOUND, TOP_REACHED, NO_PROGRESS, or the 64-step/90-second safety envelope. The normal production path reports step numbers and an explicit exhaustion reason.

Deterministic validation: 23 focused Python tests passed, 0 failed; Python compilation passed; the relevant Node suite passed 157/157. Coverage includes prompts beyond the old eight-step boundary, intermediate virtualized windows, top/no-progress/safety-cap termination, suppression guards, and no live Codex launch.

Live read-only production startup on Architect port 9333 began with five mounted assistant nodes, traversed 12 bounded steps, observed intermediate assistant-window changes, and reached `STARTUP_HISTORY_EXHAUSTED reason=TOP_REACHED steps=12`. No pending OCR prompt was discovered in the complete bounded traversal. Codex execution was intercepted before launch; no child or OCR task ran.

No ChatGPT message was sent. No AFFOTECH, Drive, deployment, production/private-data, BrowserRelay/9444, worker, lease, or protected-port access occurred. No durable authority/current pointer was changed.
