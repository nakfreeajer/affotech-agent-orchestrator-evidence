# Architect Documentation Fixed Semantic Test

**File:** `ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md`  
**Version:** 1.0  
**Status:** Governing project-specific semantic decision procedure  
**Project:** `affotech-agent-orchestrator`  
**Human Final Authority:** Rony Finster  
**Applies to:** Architect documentation-impact classification and per-document routing

## 1. Purpose

This document removes informal judgment from the question **“does documentation need to be updated?”**

Architect remains the semantic decision-maker, but it MUST apply this fixed test after every Architect review and every material Rony directive before publishing the next mutating implementation dispatch.

This test governs current-truth documentation only. Future ideas are evaluated separately under `futureIdeaImpact = NONE | CAPTURE | PROMOTE`.

## 2. Required inputs

Before classification, Architect MUST fresh-read the durable authority relevant to the reviewed boundary, including the current Architect decision/prompt/dispatch, newest valid Executor terminal/milestone where applicable, accepted-source pointer, current operational/reconciliation state, and any exact evidence needed to determine what became true.

Executor `PASS`, chat summaries, browser-visible assistant text, and stale Markdown are not sufficient authority.

## 3. Fixed semantic classification test

Architect MUST ask the following questions in order.

### TEST-1 — Did durable/current project truth materially change?

Ask:

> If all current-truth documentation were left exactly unchanged, would any canonical document now be false, materially incomplete, materially stale, or likely to cause a fresh Architect/Executor to misunderstand the current system, repeat a solved problem, or take the wrong/illegal next action?

If **NO**:

`documentationImpact = NONE`

Stop the current-truth documentation test. Do not create ceremonial document churn.

If **YES**, continue to TEST-2.

### TEST-2 — Is the change only a current operational/recovery boundary?

Ask whether the material change is limited to current operating position, for example:

- active blocker or reconciliation requirement;
- lease/lock/control state;
- current recovery boundary;
- next legal action;
- currently permitted/prohibited continuation;
- temporary operational state whose omission could mislead immediate continuation;

and **does not** establish a lasting accepted capability, architecture, contract, governance rule, production behavior, or reusable engineering truth.

If **YES**:

`documentationImpact = STATE`

Update only the smallest current-state/handover/recovery surfaces required to prevent misleading continuation.

If **NO**, continue to TEST-3.

### TEST-3 — Did lasting project truth change?

Classify `FULL` when one or more durable categories materially changed:

- governance, authority, role ownership, or safety boundary;
- accepted architecture, interface, API/data/transport contract, or invariant;
- accepted source/runtime capability or user-visible behavior;
- deployment, release, production, persistence, or operational model;
- security/privacy/protected-resource rule;
- accepted business/product rule that constrains implementation;
- permanent root cause, countermeasure, failure mode, or reusable engineering lesson;
- accepted scope/priority/current requirement whose omission would mislead implementation;
- other lasting project truth that a cold-start Architect must know to reason correctly.

If any applies:

`documentationImpact = FULL`

If none applies but TEST-1 was YES, Architect must re-evaluate the evidence. It MUST NOT force `FULL` merely because a milestone was ACCEPTED/BLOCKED.

## 4. Status is not the documentation decision

Architect MUST NOT classify documentation impact from Executor/Architect status alone.

Canonical examples:

- `ACCEPTED` + repeated validation/no new lasting truth → `NONE`.
- `BLOCKED` + state returned clean/no lasting lesson → normally `NONE`.
- `BLOCKED` + next legal recovery action changed → `STATE`.
- `BLOCKED` + permanent root cause/countermeasure discovered → `FULL`.
- `ACCEPTED` + new capability/contract/architecture/governance truth → `FULL`.

Activity is not truth. Test execution, retries, diagnostics, process starts/stops, and repeated confirmations do not by themselves require documentation.

## 5. Fixed per-document selection test

After `STATE` or `FULL`, Architect MUST evaluate every plausible document independently.

For each candidate document ask:

> If this specific document is left unchanged, will it contain a false statement, omit a material fact required for its purpose, present obsolete state as current, misrepresent accepted architecture/governance, hide a reusable lesson it is responsible for preserving, or materially mislead cold-start/recovery/implementation?

If **YES** → update that document.

If **NO** → do not update that document.

Therefore `FULL` does **not** mean “rewrite every Markdown file.” It means “evaluate every materially relevant canonical document and update only those that fail the per-document test.”

## 6. Canonical routing hints

These are routing hints after the semantic test, not substitutes for the test:

- governance/authority → bootstrap, project policy, decisions, history, README where materially affected;
- architecture/interface/contract → architecture, decisions, current state;
- accepted feature/runtime behavior → current state, history, README/user guide/release notes where applicable;
- permanent root cause/countermeasure → bugs-and-lessons, decisions, architecture where materially affected;
- deployment/release/production model → deployment/runbook/releases/current state where those surfaces exist;
- recovery/next legal action only → current state/handover/recovery surfaces only;
- no durable/current truth change → no current-truth documentation mutation.

## 7. Future ideas remain a separate test

A new future concept does not become current truth merely because it is valuable.

After this documentation test, Architect separately applies:

`futureIdeaImpact = NONE | CAPTURE | PROMOTE`

Useful future concepts belong in `docs/IDEA_INBOX.md` and adopted/scheduled future work in `docs/ROADMAP.md`. They create zero implementation authority and must not be inserted into Current State/accepted Architecture as if already implemented.

A review may legitimately produce:

`documentationImpact = NONE`  
`futureIdeaImpact = CAPTURE`

## 8. Required decision trace

For every Architect review/material Rony directive, Architect should make the result reconstructable with at least:

- `documentationImpact = NONE | STATE | FULL`;
- short `documentationImpactReason` tied to TEST-1/2/3;
- list of documents selected by the per-document test when `STATE`/`FULL`;
- `futureIdeaImpact = NONE | CAPTURE | PROMOTE` independently.

A dedicated machine schema for these fields may be implemented later. Until then, the governing requirement is semantic application of this test plus direct document write/readback ordering required by project policy.

## 9. Cold-start invariant

A fresh Architect must never ask only “was the milestone accepted?” to decide documentation.

It must ask:

1. Did current project truth materially change?
2. If yes, is it only current operational/recovery state?
3. If not, what lasting project truth changed?
4. Which specific documents would become false, incomplete, obsolete, or misleading if left unchanged?
5. Separately, was a material future idea discovered or promoted?

This fixed semantic test is mandatory project governance and remains subordinate only to explicit current Rony authority and higher-precedence governance.