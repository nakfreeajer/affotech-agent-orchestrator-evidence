# AFFOTECH Orchestrator MVP — Local Python Watcher Architecture

**Authority:** Rony Finster, final human authority  
**Decision date:** 2026-09-04  
**Status:** CANONICAL  
**Supersedes:** ORCH-000208 runtime/transport assumptions that require GitHub dispatch transport or Codex-owned Orchestrator protocol behavior.

## Purpose

The Orchestrator exists only to reduce Rony's manual relay work while AFFOTECH is being developed.

The governing metric is:

> Does Rony spend less time manually carrying prompts/results between ChatGPT Architect and Codex Executor?

The Orchestrator is a small local Python watcher, not a platform.

## Frozen responsibility split

### ChatGPT Architect

Owns:
- AFFOTECH architecture and reasoning;
- verification of Executor results;
- classification and next bounded AFFOTECH instruction;
- Architect handover content;
- final operational response markers required by the Python watcher.

Does not:
- execute AFFOTECH source changes;
- control GAS/OOPIF runtime directly;
- own local process supervision.

### Python Orchestrator

Runs locally in its own Python terminal.

Owns only deterministic supervision/transport:
- control the dedicated ChatGPT Architect browser using Python Playwright;
- submit Codex results to Architect;
- detect whether Architect is still generating or has finished;
- extract only the bounded Executor prompt from Architect;
- launch/invoke the local Codex Executor using the existing authenticated Codex CLI;
- monitor whether the Codex child is still running or has stopped;
- capture Codex output/exit state;
- pass Codex result to Architect;
- handle basic local states such as RUNNING / NOT_YET / COMPLETED / BLOCKED / STALLED;
- detect simple deterministic Architect loop patterns;
- rotate the Architect session after 30 real Executor-prompt cycles;
- keep minimal local durable state needed to survive a watcher restart.

The Python watcher must not become an AI agent and must not reason about AFFOTECH business logic.

### Codex Executor

The Codex Executor's operational objective is AFFOTECH coding.

Codex owns:
- receive the full bounded AFFOTECH Executor instruction;
- edit/wire AFFOTECH code;
- run tests;
- perform AFFOTECH validation;
- return a concise final result.

Codex does not need to know or implement the Orchestrator transport protocol.

Codex must not be required to:
- publish Orchestrator transport terminals;
- understand worker delivery, leases, relay protocol, Architect browser state, polling, retry state, or handover rotation;
- decide whether the Architect is looping.

### Rony

Rony remains final human authority.

The target is that Rony can leave the Python watcher running while away from the computer and does not manually copy Architect prompts to Codex or Codex results back to Architect.

## Runtime topology

```text
ChatGPT Architect browser
        ⇅
Python Orchestrator (Playwright + local subprocess supervision)
        ⇅
Codex Executor (`codex exec` or the proven local CLI invocation)
        ↓
AFFOTECH repository/runtime
```

GitHub remains available for source/evidence where the AFFOTECH workflow requires it, but GitHub is not required as the live Orchestrator transport between Architect and Codex.

## Browser-control rule

### Architect browser

Python uses **Playwright** to control only the dedicated ChatGPT Architect browser/session.

Python may:
- find the current Architect page;
- submit the Executor result;
- observe generation state;
- read the latest Architect response;
- open a fresh Architect conversation during scheduled handover;
- close the old Architect page only after the new Architect is confirmed ready.

Python must not use this Playwright control path for AFFOTECH GAS validation.

### AFFOTECH GAS browser

When AFFOTECH validation requires the Google Apps Script runtime/OOPIF/userCodeAppPanel path, the **Codex Executor uses RAW CDP**.

Reason: the proven GAS/OOPIF runtime requires RAW-CDP handling.

Permanent separation:

```text
Python → ChatGPT Architect browser = Playwright
Python → Codex = local process / Codex CLI
Codex → AFFOTECH GAS/OOPIF browser = RAW CDP
```

Python must not interfere with the Codex-owned AFFOTECH validation browser.

## Minimal watcher state machine

Required states:

- `RUNNING` — active child/browser generation is still in progress.
- `NOT_YET` — no final result exists yet; keep watching without sending duplicate work.
- `COMPLETED` — Codex stopped and produced usable output.
- `BLOCKED` — process/browser action failed or Codex stopped with a clear failure.
- `STALLED` — Codex stopped but no usable result was captured.
- `LOOP_SUSPECTED` — a deterministic repeat condition is detected; do not forward the repeated prompt.

No blind automatic retry after a Codex child has started.

## Codex supervision

Preferred model:

1. Python receives a fresh bounded Executor prompt from Architect.
2. Python starts one Codex child in the AFFOTECH repository using the proven existing authenticated CLI route.
3. While `process.poll()` indicates the child is alive, state is `RUNNING`/`NOT_YET`.
4. When the child exits:
   - capture final output/stdout/stderr as supported by the proven CLI route;
   - capture exit code and timeout state;
   - if usable output exists, send it once to Architect;
   - if exit is non-zero, include the exact exit/error result once and do not retry automatically;
   - if no usable output exists, report `STALLED` once and wait for Architect/human direction.

The Python watcher does not interpret AFFOTECH correctness.

## Architect completion detection

Use two layers:

1. UI state:
   - visible generation/Stop control or changing assistant content means `RUNNING`;
   - generation control gone and composer usable indicates generation may be complete.

2. Deterministic completion marker:
   - every completed operational Architect response must end with exactly:

`ARCHITECT_RESPONSE_COMPLETE`

Python must not treat the Architect response as complete until this marker is present.

Do not depend on fragile generated CSS class names; prefer stable/semantic Playwright locators and the completion marker.

## Architect prompt envelope

When Architect has a new Codex Executor task, it must include exactly one bounded block:

```text
EXECUTOR_PROMPT_BEGIN
<complete AFFOTECH Executor instruction>
EXECUTOR_PROMPT_END
ARCHITECT_RESPONSE_COMPLETE
```

If there is no new Executor work, Architect omits the Executor block and still ends with `ARCHITECT_RESPONSE_COMPLETE`.

Python forwards only the text inside the Executor prompt block to Codex.

This is the only transport convention Codex indirectly experiences; Codex receives the inner prompt only.

## Basic Architect classification handling

Python does not decide Architect classifications.

It may recognize visible states such as:
- `ACCEPTED`
- `BLOCKED`
- `INCONCLUSIVE`
- `NO NEW REPORT`

If no `EXECUTOR_PROMPT_BEGIN/END` block exists, Python does not start Codex.

`NOT_YET` is primarily a Python supervision state and should not create repeated messages while either side is still working.

## Simple deterministic loop detection

Python must not semantically replace the Architect.

It may pause forwarding when a basic deterministic pattern proves repetition, including:
- normalized Executor prompt is exactly the same as the immediately prior prompt;
- same explicit milestone/dispatch identity is being sent again after the same blocked result with no new result/evidence;
- the same command is repeated after a prior result explicitly prohibited retry;
- no new Codex result exists between two identical Architect Executor prompts.

On detection:
- do not launch a new Codex child;
- mark `LOOP_SUSPECTED`;
- send one warning to the Architect;
- wait for a materially new Architect prompt or human intervention.

Do not build embeddings, an LLM loop judge, or a generalized replay framework.

## 30-cycle Architect session rotation

A cycle increments only when Python forwards a **fresh Executor prompt** to Codex.

Do not increment for:
- status checks;
- `NO NEW REPORT`;
- `NOT_YET`;
- clarification;
- Architect messages with no Executor prompt.

After 30 real cycles are complete and no Codex task is in flight:

1. Python sends the current Architect a fixed maintenance instruction to prepare a complete cold-start handover.
2. Architect returns the handover only between:

```text
ARCHITECT_HANDOVER_BEGIN
...
ARCHITECT_HANDOVER_END
ARCHITECT_RESPONSE_COMPLETE
```

3. Python captures the handover.
4. Python opens a fresh ChatGPT Architect conversation using Playwright in the authenticated Architect browser context.
5. Python pastes the handover into the new conversation.
6. The handover instructs the new Architect to reply exactly:

`ARCHITECT_SESSION_READY`

7. Python waits for that exact readiness marker.
8. Only after readiness is confirmed may Python close the old Architect conversation/page.
9. Reset cycle counter to 0 and continue.

Fail-safe:
- if the new Architect does not become ready, keep the old Architect session open;
- do not discard the captured handover;
- do not continue with a second Codex task until the Architect session state is unambiguous.

## Minimal durable local state

Use one small local state file only if required for restart safety. It may contain:
- current cycle count;
- current/last Executor prompt hash;
- last Codex result hash;
- whether a Codex child is in flight;
- current Architect page/session identity if safely representable;
- pending handover state.

No database, queue, lease service, worker registry, or distributed state machine.

## Strictly out of scope

Do not restore or add:
- BrowserRelay Executor transport / port 9444;
- worker delivery protocol;
- worker registration;
- mutation leases for the watcher;
- GitHub-as-live-relay requirement between Architect and Codex;
- child-owned Orchestrator terminal publication;
- generalized reconciliation/replay framework;
- scheduler/queue/database/dashboard/telemetry platform;
- multi-agent routing;
- Playwright replacement of RAW CDP for AFFOTECH GAS/OOPIF validation;
- AI/LLM reasoning inside Python;
- speculative infrastructure.

## Bootstrap rule

Until the Python watcher is working, one final manual bootstrap may be needed to implement and launch it.

That bootstrap must be kept separate from the normal Codex operational role.

After bootstrap acceptance, Codex returns to its intended role: **AFFOTECH Executor**.

## MVP finish line

The Orchestrator MVP is complete when one live cycle proves:

1. Python observes/receives a fresh Architect Executor prompt.
2. Python extracts the full prompt.
3. Python starts exactly one Codex Executor child in the AFFOTECH repository.
4. Python can tell RUNNING/NOT_YET while it is active.
5. Codex stops and returns a bounded result.
6. Python captures the result and passes it to Architect.
7. Architect completes with `ARCHITECT_RESPONSE_COMPLETE`.
8. Python can extract the next Executor prompt without Rony copying anything.
9. No BrowserRelay/9444, worker-delivery, lease, or GitHub live-transport dependency is required.
10. Codex remains focused on AFFOTECH work and uses RAW CDP for GAS/OOPIF validation when needed.

Once this cycle works, stop Orchestrator development and return focus to AFFOTECH. Further hardening is allowed only in response to an observed real failure.
