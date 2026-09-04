# AFFOTECH Orchestrator MVP — Accepted Production Candidate

**Authority:** Rony Finster, final human authority  
**Acceptance date:** 2026-09-05  
**Status:** ACCEPTED / ORCHESTRATOR DEVELOPMENT CLOSED

## Accepted purpose

The Orchestrator exists only to remove Rony from manual prompt/result carrying between ChatGPT Architect and Codex Executor while AFFOTECH is being developed.

The Orchestrator is a small local Python watcher, not a platform.

## Accepted control split

```text
ChatGPT Architect browser
        ⇅
Python Orchestrator
  - Playwright for Architect browser only
  - deterministic watcher/state logic
  - local Codex process supervision
        ⇅
Codex Executor
  - AFFOTECH coding/tests/validation
  - RAW CDP for GAS/OOPIF/userCodeAppPanel when required
```

Python does not reason about AFFOTECH business logic. Codex does not need to understand Orchestrator transport protocol.

## Qualified live behavior

ORCH-000214 qualified one complete synthetic live round trip:

1. Python attached to the dedicated Architect browser on `http://127.0.0.1:9333`.
2. Python submitted a new user turn and confirmed it appeared.
3. Python handled healthy waiting as `NOT_YET` and generation as `RUNNING`.
4. Python observed a new Architect response ending `ARCHITECT_RESPONSE_COMPLETE`.
5. Python extracted only the bounded `EXECUTOR_PROMPT_BEGIN` / `EXECUTOR_PROMPT_END` block.
6. Python launched exactly one Codex child.
7. The Codex child was observed running, exited `0`, did not time out, and produced a unique last-message file containing `ORCH214_CODEX_SENTINEL`.
8. Python submitted the captured Codex result once back to Architect.
9. Python confirmed the result user turn and observed a new post-result Architect response ending `ARCHITECT_RESPONSE_COMPLETE`.
10. No automatic retry occurred.

Focused tests: `8/8` passed.  
Relevant deterministic tests: `157/157` passed.

## Qualified Windows Codex launcher

Do not use the previously failing `powershell.exe -> codex.ps1` child boundary for watcher-launched Codex work.

The qualified launcher is the actually discovered installed Codex CLI entrypoint:

```text
C:/Program Files/nodejs/node.EXE
C:/Users/nitro/AppData/Roaming/npm/node_modules/@openai/codex/bin/codex.js
```

with arguments equivalent to:

```text
exec --ephemeral --sandbox <milestone-authorized-sandbox> -C <project> -o <unique-last-message-file> -
```

and the complete Executor prompt delivered on stdin.

For the synthetic qualification the sandbox was read-only. Normal AFFOTECH execution must use only the mutation/sandbox authority explicitly granted by the Architect task; do not silently force read-only when the task requires authorized source mutation.

## Architect completion protocol

Normal operational Architect responses end with:

`ARCHITECT_RESPONSE_COMPLETE`

When a new Executor task exists, the full task is emitted only between:

```text
EXECUTOR_PROMPT_BEGIN
...
EXECUTOR_PROMPT_END
```

Python forwards only the inner block to Codex.

## Watcher states

- `RUNNING` — active Architect generation or Codex child.
- `NOT_YET` — expected result not available yet while the relevant process/browser is healthy; keep watching.
- `COMPLETED` — Codex stopped and returned usable output.
- `BLOCKED` — explicit process/browser failure or clear Executor blocker.
- `STALLED` — Codex stopped with no usable result.
- `LOOP_SUSPECTED` — deterministic repeat condition; do not blindly forward.

No blind automatic retry after a Codex child starts.

## Loop guard

Keep only small recent history and pause forwarding for obvious deterministic repeats, such as:
- identical Executor prompt with no new Codex evidence;
- same milestone/blocker/requested action repeated without new evidence;
- retry after an explicit no-retry result.

Python does not judge architecture correctness.

## Documentation trigger

After materially reviewed Executor results, Architect classifies:
- `documentationImpact = NONE`
- `documentationImpact = STATE`
- `documentationImpact = FULL`

Python does not write AFFOTECH documentation by itself.

At 30 real implementation cycles, and only when no Codex task is in flight, Python first requires full documentation/GitHub closure and waits for:

`DOCUMENTATION_SYNC_COMPLETE`

then `ARCHITECT_RESPONSE_COMPLETE`.

Only after successful documentation closure may Python request the Architect handover.

## 30-cycle Architect rotation

A cycle increments only when a fresh implementation Executor prompt is actually forwarded to Codex.

After cycle 30 and documentation closure:
1. current Architect returns a cold-start handover between `ARCHITECT_HANDOVER_BEGIN` and `ARCHITECT_HANDOVER_END`;
2. Python opens a fresh ChatGPT Architect conversation;
3. Python submits the handover;
4. new Architect replies exactly `ARCHITECT_SESSION_READY`;
5. only then may Python close the old Architect page;
6. cycle counter resets to 0.

Never close the old Architect session before the new session is confirmed ready.

## Permanent browser separation

- Python -> ChatGPT Architect browser = **Playwright**.
- Python -> Codex = **local child process using the qualified Node + Codex CLI entrypoint**.
- Codex -> AFFOTECH GAS/OOPIF = **RAW CDP** when required.

Python must not take over AFFOTECH GAS/OOPIF validation.

## Permanently out of the MVP path

Do not restore or require:
- BrowserRelay / port 9444;
- worker delivery protocol;
- worker registration;
- mutation leases for the watcher;
- GitHub as live Architect/Codex relay;
- child-owned Orchestrator terminal publication;
- generalized replay/reconciliation framework;
- queues/databases/dashboards/telemetry platforms;
- multi-agent routing;
- Playwright replacement of RAW CDP for AFFOTECH GAS/OOPIF.

Historical evidence remains immutable and may be consulted only when needed.

## Operational activation

Normal watcher launch command from the Orchestrator project root:

```text
python local_orchestrator_watcher.py
```

Once the watcher is running, Codex returns to its normal role: **AFFOTECH Executor**.

## Closure rule

ORCH-000214 satisfies the MVP finish line. Do not create another Orchestrator implementation milestone unless a real production failure is observed. The default next work is AFFOTECH development, not further Orchestrator hardening.
