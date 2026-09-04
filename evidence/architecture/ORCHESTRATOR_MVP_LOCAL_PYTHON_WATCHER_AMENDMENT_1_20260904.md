# AFFOTECH Orchestrator MVP — Local Python Watcher Amendment 1

**Authority:** Rony Finster, final human authority  
**Decision date:** 2026-09-04  
**Status:** CANONICAL AMENDMENT  
**Applies to:** `evidence/architecture/ORCHESTRATOR_MVP_LOCAL_PYTHON_WATCHER_20260904.md`

## 1. Codex terminal/process ownership on Windows

The preferred supervision model is that Python launches the Codex Executor itself rather than scraping a visible VS Code terminal.

On Windows, Python may invoke the existing authenticated Codex CLI through PowerShell / the installed `codex.ps1` entrypoint when that is the proven local route.

Python owns:
- child process start;
- process-alive / stopped detection;
- stdout/stderr or supported final-output capture;
- exit code;
- timeout state.

A visible PowerShell or VS Code terminal is optional for human observation and is not the machine authority for completion.

Codex still owns AFFOTECH implementation and, when required, uses RAW CDP for GAS/OOPIF validation.

## 2. Documentation update triggers

Python does not write or reason about AFFOTECH documentation.

After every materially reviewed Executor result, the Architect classifies:
- `documentationImpact = NONE`
- `documentationImpact = STATE`
- `documentationImpact = FULL`

`NONE` means no documentation mutation is needed.

`STATE` means the Architect updates only the canonical documents affected by the newly accepted project truth, such as current state, history, handover, decisions, or roadmap as actually applicable. Do not rewrite all documents for every small milestone.

`FULL` is reserved for major architecture/workflow changes, release/closure, or the mandatory pre-handover reconciliation below.

## 3. Mandatory documentation closure before 30-cycle Architect rotation

When 30 fresh Executor prompts have completed and no Codex child is in flight, Python must NOT immediately rotate the Architect session.

First Python sends one fixed maintenance request requiring the current Architect to reconcile canonical AFFOTECH documentation and GitHub state with the accepted project truth.

The Architect must complete the documentation closure and return:

`DOCUMENTATION_SYNC_COMPLETE`

followed by:

`ARCHITECT_RESPONSE_COMPLETE`

Only after those markers are observed may Python request the cold-start Architect handover.

If documentation closure is blocked or incomplete:
- keep the current Architect session open;
- do not rotate;
- do not reset the cycle counter;
- surface the exact blocker.

This ensures a new Architect is handed current durable truth rather than relying on stale conversation memory.

## 4. Handover sequence after documentation closure

The rotation sequence is therefore:

```text
cycle 30 complete
→ no Codex child in flight
→ FULL documentation/GitHub closure
→ DOCUMENTATION_SYNC_COMPLETE
→ request ARCHITECT_HANDOVER_BEGIN/END
→ open fresh Architect conversation
→ submit handover
→ wait for ARCHITECT_SESSION_READY
→ only then close old Architect session
→ reset cycle counter to 0
```

No additional scheduler, documentation agent, database, queue, or framework is authorized by this amendment.
