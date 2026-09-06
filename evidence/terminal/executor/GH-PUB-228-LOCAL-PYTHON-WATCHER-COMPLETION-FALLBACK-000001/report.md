# Executor terminal report

The watcher now accepts a structurally valid Executor envelope as complete when the explicit `ARCHITECT_RESPONSE_COMPLETE` marker is absent, but only after generation is not visible and the complete response hash is identical on two consecutive polls. Explicit completion remains supported and takes the preferred path. Malformed, nested, or duplicate envelopes remain rejected.

The fallback is wired into startup recovery and steady-state response dispatch. The exact normalized inner prompt hash remains the exactly-once key; no sentinel or AFFOTECH-specific logic was added.

Validation: focused Python tests 39 passed, 0 failed; deterministic Node suite 157 passed, 0 failed; Python compile passed.

Read-only live observations on Architect port 9333 found three mounted assistant responses. The existing AFFOTECH-looking response had BEGIN and END, no completion marker, stable full hash across two snapshots, but also had a duplicate BEGIN and was therefore correctly rejected by the malformed-envelope guard. A real production startup run with `_execute_prompt` intercepted reached `EXECUTOR_PROMPT_READY`; no Codex child was invoked, no Architect message was sent, and no AFFOTECH task was executed.

The live validation did not consume or forward the pending AFFOTECH prompt. No port 9222, Drive, deployment, BrowserRelay/9444, worker, lease, or GitHub live-relay access occurred.
