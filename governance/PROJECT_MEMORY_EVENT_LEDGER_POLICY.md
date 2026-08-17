# AFFOTECH Agent Orchestrator Project Memory and Curator Projection Policy

**Version:** 1.0  
**Status:** Rony-approved governing project addendum  
**Project:** `affotech-agent-orchestrator`  
**Inherits:** `governance/ORCHESTRATOR_BOOTSTRAP.md` and `governance/PROJECT_ORCHESTRATION_POLICY.md`  
**Human Final Authority:** Rony Finster

## 1. Purpose

This addendum hardens project memory and documentation continuity without changing the permanent authority chain:

`Rony → Architect → Executor → Architect`

Documentation Curator remains optional/on-demand. Curator is not project memory, is not a mandatory workflow hop, and is not an acceptance authority.

The durable GitHub evidence plane is project memory. The event ledger is a chronological projection/index over that evidence. Curator consumes those durable events to maintain human-readable documentation.

## 2. Separation of truth, memory, work, and documentation

- **Rony** owns final human authority.
- **Architect** owns project truth, interpretation, architecture, acceptance, next-action authority, and promotion of material human instructions into durable project state.
- **Executor** owns bounded implementation/runtime/test work and publishes first-hand execution evidence.
- **Durable evidence + event ledger** own reconstructable project memory.
- **Curator** owns only bounded documentation projection when dispatched.

No downstream role recreates another role's authoritative event merely to summarize it.

## 3. Event producer rule

The component with first-hand authority for a fact publishes the corresponding event through the common project event recorder/ledger contract.

Minimum producer ownership:

- Architect: material human directives, governance changes, architecture/requirement decisions, Architect classifications, accepted root cause/countermeasure decisions, canonical dispatch publication, mission/pause/resume/stop decisions.
- Executor: execution start/checkpoint/terminal outcome, validation result, blocker/failure evidence, mutation accounting, implementation-side external mutation outcomes.
- Reconciliation component/worker: reconciliation started/resolved/inconclusive evidence for the operation it reconciles.
- GitHub/CI/release adapter where later authorized: commit/PR/merge/CI/release/deployment observations that the adapter directly observes.
- Curator: Curator run started/completed/blocked, documentation preservation result, and cursor advancement only.

Architect MUST NOT duplicate Executor facts as Architect-authored execution events. Architect instead publishes the Architect decision that interprets those facts.

Curator MUST NOT rewrite or supersede source events. Corrections are new superseding events.

## 4. Human conversation promotion rule

ChatGPT conversation history is supplementary context, never durable machine authority.

Architect MUST promote a human statement into durable project evidence/event when it materially changes or establishes project truth, including at minimum:

- governance or authority;
- architecture or interfaces;
- functional/non-functional requirements;
- business rules;
- scope or priority;
- protected-resource or privacy rules;
- security/safety policy;
- deployment/release policy;
- accepted interpretation of ambiguous behavior;
- stop/pause/exception authority;
- durable future direction that constrains implementation.

Routine conversational acknowledgements, brainstorming that is not adopted, and non-authoritative explanation need not be persisted.

A promoted human event MUST identify Rony as human authority when Rony supplied the directive, and MUST reference the durable Architect decision/policy/record that makes the directive operational when such a record exists.

## 5. Evidence-first event model

Existing immutable evidence classes remain authoritative and MUST NOT be replaced by a flat event log.

The event ledger is additive. Each event is a small chronological record that references authoritative detailed evidence rather than duplicating it.

Canonical future path:

`evidence/events/<eventId>.json`

A current sequence/index pointer MAY be introduced only under a separately tested CAS/serialization contract. Historical event records are immutable create-once records.

Minimum event envelope:

- `schemaVersion`
- `recordType = PROJECT_EVENT`
- `eventId`
- `projectId`
- `eventType`
- `producerRole` / producer identity
- `eventSequence` or equivalent deterministic ordering identity
- `createdAt` from caller-supplied time where applicable
- `messageId`, `dispatchId`, `milestoneId`, `missionId` when applicable
- `subjectId` / operation/result identity where applicable
- `detailsRef`
- `detailsSha256` when the referenced artifact has a stable content hash
- `previousEventId` or equivalent chain/sequence binding when used
- `documentationImpact` hints when deterministically known
- authority boundary stating that the event itself creates no authority beyond the referenced authoritative record.

No event may contain assistant-response text, credentials/tokens, browser DOM dumps, private business/customer data, or unnecessary sensitive payloads.

## 6. Required project event classes

The implementation must support a typed allowlist/registry rather than arbitrary free-form event types. Initial classes must cover at least:

- `HUMAN_PROJECT_DIRECTIVE`
- `GOVERNANCE_CHANGED`
- `ARCHITECT_DECISION`
- `ARCHITECT_DISPATCH_PUBLISHED`
- `ROOT_CAUSE_CONFIRMED`
- `COUNTERMEASURE_ADOPTED`
- `EXECUTOR_STARTED`
- `EXECUTOR_CHECKPOINT`
- `EXECUTOR_TERMINAL_PUBLISHED`
- `VALIDATION_PASSED`
- `VALIDATION_FAILED`
- `BLOCKER_DETECTED`
- `RECONCILIATION_STARTED`
- `RECONCILIATION_RESOLVED`
- `RECONCILIATION_INCONCLUSIVE`
- `SOURCE_ACCEPTED`
- `RELEASE_CREATED` when release integration is later authorized
- `MISSION_PAUSED`
- `MISSION_RESUMED`
- `MISSION_COMPLETE`
- `CURATOR_UPDATE_STARTED`
- `CURATOR_UPDATE_COMPLETED`
- `CURATOR_UPDATE_BLOCKED`
- `CURATOR_CURSOR_ADVANCED`

Unknown event types or unsupported major schema versions fail closed.

## 7. Event recorder boundary

Use one deterministic event-recorder contract so roles do not invent incompatible JSON shapes.

The recorder owns schema validation, deterministic event identity/ordering, immutable create/readback semantics, sanitization, project/producer binding, hash/reference validation, and duplicate/conflict behavior.

The producer owns the factual assertion and referenced authoritative evidence.

Exact duplicate publication may be idempotent only when readback proves byte/semantic identity. A conflicting event at the same immutable identity fails closed. No hidden retry after ambiguous GitHub mutation; reconcile read-only first.

## 8. Curator `update` contract

The normal Curator wake instruction may be exactly:

`update`

Its governed meaning is:

1. resolve exact project/Curator registration and current accepted documentation baseline;
2. read the durable Curator cursor;
3. obtain one coherent GitHub source ref for the catch-up input boundary;
4. read every valid project event after the cursor through the selected stable boundary;
5. follow referenced authoritative evidence as required;
6. reconstruct causal milestone/incident/decision chains rather than documenting every event independently;
7. classify documentation impact through deterministic routing rules plus bounded semantic reasoning;
8. mutate only the explicitly authorized documentation envelope;
9. validate resulting documentation against accepted project truth;
10. publish an immutable Curator terminal/result record;
11. durably preserve/read back the documentation mutation;
12. advance the cursor only after successful preservation and Architect-required acceptance conditions are met by the active Curator milestone contract.

Curator may be offline for any duration. Catch-up correctness depends on the durable event boundary/cursor, not continuous process uptime.

## 9. Curator cursor semantics

Canonical future pointer:

`evidence/current/curator/CURATOR_CURSOR.json`

The cursor is a convenience pointer, not historical authority. Immutable Curator run records must make cursor reconstruction possible.

Cursor state binds at minimum:

- projectId
- Curator identity/registration when applicable
- lastProcessedEventId / sequence
- input boundary ref/hash
- last successful Curator run/result
- last documentation preservation commit/ref
- updatedAt

Rules:

- never advance before successful documentation preservation/readback;
- a failed/blocked/ambiguous Curator run leaves the prior cursor authoritative;
- cursor CAS conflict fails closed;
- no event may be silently skipped;
- no event may be considered consumed solely because documentation files happened to change;
- replay of an already processed immutable input range must be idempotent or fail closed before duplicate semantic insertion.

## 10. Documentation projection rules

Curator reconstructs chains and applies documentation routing. It must not create one documentation mutation per low-level event.

Initial routing policy:

- governance/authority change → project policy / decisions / history as applicable;
- architecture/interface change → architecture / decisions / current state;
- accepted feature/source change → current state / history / release notes when applicable;
- root cause/countermeasure → bugs-and-lessons / decisions / runbook / architecture where materially affected;
- deployment/release change → deployment / runbook / releases;
- user-visible behavior change → user guide plus current state;
- roadmap/scope change → roadmap / decisions;
- transient execution start/checkpoint with no durable outcome → normally no documentation mutation.

`CURRENT_STATE`-class documentation may change canonical implementation truth only from Architect-accepted evidence, never from Executor PASS alone.

Significant failed paths that produce reusable engineering knowledge must remain in history/lessons even after a later repair is accepted. Current-state docs should describe the accepted present state without preserving obsolete attempts as current behavior.

## 11. Architect semantic ownership

Architect remains semantic owner of architecture, governance, accepted current state, and decision rationale.

Curator may physically edit those documents only under an Architect-issued bounded documentation dispatch. Curator output returns to Architect for verification/acceptance where the milestone requires semantic acceptance.

Automatic projection does not create Architect authority and cannot change project policy merely because an event exists.

## 12. Existing journal migration rule

Existing `evidence/journal/**`, prompts, dispatches, decisions, terminal results, deliveries, reconciliations, trigger evidence, artifacts, and historical Curator records remain immutable in meaning.

Do NOT rewrite historical records into the new event schema.

The future project event ledger starts from an explicitly recorded bootstrap/cutover event binding:

- the accepted source baseline at cutover;
- the current Architect decision/prompt/dispatch state;
- the chosen historical journal boundary;
- the first new event sequence.

Historical evidence remains queryable by reference. A bounded backfill index may later be authorized, but it must reference old records without changing their meaning.

## 13. Automation posture

Initial Curator operation remains manually/Architect triggered by `update`.

Do not make Curator a permanent terminal, daemon, approval hop, or watcher merely to preserve information. Information preservation is the responsibility of producer-owned durable evidence/events.

A future milestone may automatically wake Curator after stable documentation-worthy boundaries, but only after cursor/replay/idempotency semantics are qualified. Even then Curator remains a projection worker, not project memory or acceptance authority.

## 14. Hard invariants

- Project memory must survive Architect, Executor, Curator, browser, terminal, and machine restarts.
- First-hand producer owns the factual event; downstream roles do not recreate it.
- Durable detailed evidence remains authority; events index/reference it.
- Human directives that materially change project truth are promoted by Architect.
- Curator may be completely offline without information loss.
- `update` means catch up from durable cursor, not ask humans to restate history.
- Curator cursor advances only after successful durable documentation preservation.
- Executor PASS never directly changes canonical current-state documentation.
- Historical failure/ambiguity is never rewritten as success.
- Event and documentation projection failures never grant mutation/retry/Architect authority.
- Curator remains optional/on-demand.
