# AFFOTECH Agent Orchestrator Project Memory and Documentation Projection Policy

**Version:** 1.3  
**Status:** Rony-approved governing project addendum  
**Project:** `affotech-agent-orchestrator`  
**Inherits:** `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.3 and `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.3  
**Human Final Authority:** Rony Finster

## 1. Purpose

This addendum hardens project memory, documentation continuity, and future-idea continuity without changing the permanent authority chain:

`Rony → Architect → Executor → Architect`

For this project, documentation and future-intent projection are **Architect-direct**. A separate Documentation Curator is not required for normal project continuity, project closure, documentation catch-up, future-idea preservation, or cold-start recovery.

The durable GitHub evidence plane is project memory. Human-readable documentation is an Architect-maintained projection of durable accepted/project truth. Future ideas are maintained in separate Architect-owned surfaces so intended future work cannot be confused with current truth or implementation authority.

## 2. Separation of truth, memory, work, documentation, and future intent

- **Rony** owns final human authority.
- **Architect** owns project truth, interpretation, architecture, acceptance, next-action authority, promotion of material human instructions into durable project state, documentation-impact classification, future-idea-impact classification, canonical documentation, and future-intent projection.
- **Executor** owns bounded implementation/runtime/test work and publishes first-hand execution evidence.
- **Orchestrator** owns deterministic routing/state-machine execution only; it does not interpret documentation or future-idea semantics.
- **Durable evidence + event ledger** own reconstructable project memory.
- **Historical Curator evidence** remains valid historical evidence but does not define the current workflow.

No downstream role recreates another role's authoritative event merely to summarize it.

## 3. Event producer rule

The component with first-hand authority for a fact publishes the corresponding event through the common project event recorder/ledger contract.

Minimum producer ownership:

- Architect: material human directives, governance changes, architecture/requirement decisions, Architect classifications, accepted root cause/countermeasure decisions, canonical dispatch publication, mission/pause/resume/stop decisions, and documentation/future-intent projection where an already-supported evidence/event class exists;
- Executor: execution start/checkpoint/terminal outcome, validation result, blocker/failure evidence, mutation accounting, implementation-side external mutation outcomes;
- Reconciliation component/worker: reconciliation started/resolved/inconclusive evidence for the operation it reconciles;
- GitHub/CI/release adapter where later authorized: commit/PR/merge/CI/release/deployment observations that the adapter directly observes.

Architect MUST NOT duplicate Executor facts as Architect-authored execution events. Architect instead publishes the Architect decision that interprets those facts, determines documentation impact and future-idea impact, and updates affected human-readable surfaces from durable evidence.

Historical Curator records remain immutable and must not be rewritten.

## 4. Human conversation promotion rule

ChatGPT conversation history is supplementary context, never durable machine authority.

Architect MUST promote a human statement into durable project evidence/policy/documentation when it materially changes or establishes project truth, including at minimum:

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

Architect MUST also preserve a human-stated future idea when Rony clearly intends it as future direction even if it is not current implementation authority. Such future intent belongs in `IDEA_INBOX`/`ROADMAP`, not `CURRENT_STATE`, until promoted by accepted implementation.

Routine acknowledgements, brainstorming that is not adopted, and non-authoritative explanation need not be persisted.

A promoted human directive must identify Rony as final human authority when Rony supplied it and should be reflected in every governing/human-readable surface whose truth or future-intent status it changes.

## 5. Evidence-first event model

Existing immutable evidence classes remain authoritative and MUST NOT be replaced by a flat event log.

The event ledger is additive. Each event is a small chronological record that references authoritative detailed evidence rather than duplicating it.

Canonical event path remains:

`evidence/events/<eventId>.json`

A current sequence/index pointer may exist only under a tested CAS/serialization contract. Historical event records are immutable create-once records.

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
- future-idea references/status hints when supported and useful
- authority boundary stating that the event itself creates no authority beyond the referenced authoritative record.

No event may contain assistant-response text, credentials/tokens, browser DOM dumps, private business/customer data, or unnecessary sensitive payloads.

## 6. Event classes and Curator history

The currently accepted event registry remains authoritative. This governance change does **not** invent a required unsupported event type.

Existing active classes continue to include accepted project event types such as `HUMAN_PROJECT_DIRECTIVE`, `GOVERNANCE_CHANGED`, `ARCHITECT_DECISION`, `ARCHITECT_DISPATCH_PUBLISHED`, root-cause/countermeasure events, Executor lifecycle/validation/blocker events, reconciliation events, `SOURCE_ACCEPTED`, mission state events, and later-authorized release/deployment events.

Legacy Curator event types remain readable for historical compatibility where supported by the accepted registry:

- `CURATOR_UPDATE_STARTED`
- `CURATOR_UPDATE_COMPLETED`
- `CURATOR_UPDATE_BLOCKED`
- `CURATOR_CURSOR_ADVANCED`

They are not required for new project progress. No new Curator terminal/event/cursor is part of normal closure.

If a dedicated Architect-documentation-closure or future-idea event type is later desired, it must be introduced by a separately governed source milestone and accepted before becoming a machine-required gate.

Unknown event types or unsupported major schema versions fail closed unless a separately accepted compatibility rule applies.

## 7. Event recorder boundary

Use one deterministic event-recorder contract so producers do not invent incompatible JSON shapes.

The recorder owns schema validation, deterministic event identity/ordering, immutable create/readback semantics, sanitization, project/producer binding, hash/reference validation, and duplicate/conflict behavior.

The producer owns the factual assertion and referenced authoritative evidence.

Exact duplicate publication may be idempotent only when readback proves byte/semantic identity. A conflicting event at the same immutable identity fails closed. No hidden retry after ambiguous GitHub mutation; reconcile read-only first.

## 8. Architect documentation-impact contract

After every Architect review and every material Rony directive, Architect MUST determine documentation impact before publishing the next mutating implementation dispatch.

Canonical impact classes:

- `NONE` — no durable project truth changed in a way that requires human-readable projection;
- `STATE` — current operational/recovery boundary materially changed and stale current-state/handover/recovery material could mislead continuation;
- `FULL` — accepted capability, architecture, governance, interface/contract, production behavior, significant reusable lesson, or other durable project truth materially changed.

This classification is Architect semantic work. Orchestrator does not infer it from prose and Executor does not self-declare documentation truth.

## 8A. Architect future-idea-impact contract

Future-idea impact is independent from documentation impact.

After every Architect review and every material Rony discussion/directive, Architect MUST determine:

`futureIdeaImpact = NONE | CAPTURE | PROMOTE`

- `NONE` — no distinct future idea has material continuity value;
- `CAPTURE` — preserve a distinct useful concept in `docs/IDEA_INBOX.md` because losing it would materially harm future continuity;
- `PROMOTE` — advance an idea's lifecycle because it has been adopted for future direction, scheduled into intended work, or implemented/accepted.

Idea lifecycle states:

- `PROPOSED`
- `ADOPTED_FOR_FUTURE`
- `SCHEDULED`
- `IMPLEMENTED`

An idea is normally captured when Rony explicitly identifies future direction, when it materially reduces known future risk/problem, when it creates meaningful future capability/simplification, when a cold-start Architect would reasonably regret losing it, or when current analysis reveals a useful improvement outside the current bounded milestone.

Do not persist casual brainstorming, trivial alternatives, low-value speculation, or duplicates. Check existing `IDEA_INBOX` and `ROADMAP` before creating a new stable idea ID.

Every idea must clearly state that it creates zero implementation authority and does not describe current accepted behavior.

## 9. Architect documentation-sync contract

For `STATE` or `FULL`, Architect directly updates every materially affected document in the same closure cycle when connected write authority exists.

Required sequence:

1. resolve current durable project authority and accepted evidence boundary;
2. independently verify the reviewed milestone/directive;
3. classify documentation impact;
4. determine which human-readable documents are materially affected;
5. update only those documents whose truth changed or whose stale projection would mislead recovery/continuation;
6. preserve machine-authoritative evidence references and accepted-source boundaries;
7. preserve historical failed/ambiguous paths as history/lessons where useful;
8. ensure current-state documentation describes accepted/current operational truth rather than obsolete attempts;
9. durably write and read back every required documentation change;
10. only then publish the next mutating implementation dispatch.

For `NONE`, Architect should avoid ceremonial documentation churn and continue productive work.

Documentation sync is not a new acceptance authority and does not change Executor source acceptance.

## 9A. Architect future-idea capture/promotion contract

For `CAPTURE` or `PROMOTE`, Architect updates the future-intent surfaces without contaminating current truth.

Required principles:

1. search `docs/IDEA_INBOX.md` and `docs/ROADMAP.md` for an equivalent idea before creating another;
2. preserve a stable idea ID and origin;
3. state the problem/opportunity and concept concisely enough for cold-start recovery;
4. state lifecycle status explicitly;
5. state `NOT IMPLEMENTATION AUTHORITY` or equivalent unambiguously;
6. record revisit/promotion condition when known;
7. promote to `ROADMAP` when explicitly adopted/scheduled;
8. promote to current-state/architecture/history only after implementation is independently accepted;
9. retain historical idea lineage when implemented rather than rewriting it as if it had always been current truth.

A roadmap entry still creates no implementation authority. Only canonical Architect dispatch/evidence can authorize work.

## 10. Documentation and future-intent routing rules

Architect routing policy:

- governance/authority change → bootstrap/project policy/decisions/history/README as materially applicable;
- architecture/interface change → architecture/decisions/current state;
- accepted feature/source change → current state/history/README or release notes when applicable;
- root cause/countermeasure → bugs-and-lessons/decisions/architecture where materially affected;
- deployment/release change → deployment/runbook/releases if those documents exist;
- user-visible behavior change → user guide/current state if such files exist;
- roadmap/scope change → roadmap/decisions if such files exist;
- recovery/blocker boundary that changes the next legal action → at least current-state/recovery projection as needed;
- transient execution start/checkpoint with no durable outcome → normally `documentationImpact=NONE`;
- useful unscheduled future concept → `IDEA_INBOX`;
- adopted/scheduled future direction → `ROADMAP` plus idea lifecycle promotion;
- accepted implementation of a prior idea → current state/architecture/history and mark idea `IMPLEMENTED`.

`CURRENT_STATE`-class documentation may change canonical implementation truth only from Architect-accepted evidence or verified current operational/reconciliation state, never from Executor PASS or future-intent records alone.

Significant failed paths that produce reusable engineering knowledge remain in history/lessons even after a later repair is accepted. Current-state docs describe accepted/current state without presenting obsolete attempts or future ideas as current behavior.

## 11. Architect semantic ownership

Architect is the semantic and physical maintainer of architecture, governance, accepted/current state, decision rationale summaries, project history, reusable lessons, README entrypoints, future-idea inbox, roadmap, and handover/recovery documentation for this project.

A separate documentation worker must not become a prerequisite for project continuity.

No Curator terminal is required to close documentation. Curator is removed from the active model. A future Curator can exist only after explicit Rony directive plus policy update, and even then Architect retains semantic ownership and final verification.

## 12. Existing journal and Curator migration rule

Existing `evidence/journal/**`, prompts, dispatches, decisions, terminal results, deliveries, reconciliations, trigger evidence, artifacts, historical Curator records, and prior Curator cursor evidence remain immutable in meaning.

Do NOT rewrite historical records merely because the active documentation owner has changed.

Any event-ledger cutover/backfill must reference historical records without changing their meaning.

Future-idea documents are additive human-readable continuity surfaces; they do not replace historical evidence or accepted project records.

## 13. Automation posture

Do not create a documentation-relay milestone, Curator daemon, Curator browser registration, Curator approval hop, or Curator transport proof merely to keep documents current.

Information preservation is producer-owned durable evidence. Documentation and future-intent continuity are Architect-owned projections.

The Orchestrator remains focused on deterministic transport/state execution between active governed roles and must not gain semantic documentation or idea-selection logic.

If a future accepted machine schema introduces a documentation-closure or idea-index marker, Orchestrator may deterministically check marker identity/existence when explicitly governed. It must not decide which documents/ideas should change or whether prose is semantically sufficient.

Until such schemas are accepted, enforcement is Architect ordering and direct write/readback.

## 14. Cold-start persistence rule

A fresh Architect session must recover both documentation and future-idea duties without relying on chat memory.

Therefore bootstrap/project policy/current documentation must make these rules explicit:

- Curator is not active;
- Architect owns project documentation and future-intent surfaces directly;
- every review/material Rony directive receives a `NONE`/`STATE`/`FULL` documentation-impact decision;
- every review/material future discussion receives a `NONE`/`CAPTURE`/`PROMOTE` future-idea-impact decision;
- `STATE`/`FULL` requires direct documentation write/readback before the next mutating implementation dispatch;
- `IDEA_INBOX` and `ROADMAP` are separate from current truth and create no implementation authority;
- machine evidence remains authority and Markdown remains projection;
- historical Curator evidence remains readable but creates no current workflow requirement.

## 15. Failure handling

If required documentation write/readback fails:

- do not silently treat documentation as closed;
- do not invent a Curator fallback unless Rony has reauthorized that role;
- repair/reconcile the documentation write boundary where possible;
- if the failure cannot be resolved, surface it to Rony or explicitly handle an exception under higher authority before progressing with another mutating implementation milestone.

If idea/roadmap write/readback fails after `CAPTURE`/`PROMOTE`, do not falsely claim the future intent was durably preserved. Repair/read back the future-intent surface before relying on it for cold-start continuity.

Documentation/future-intent projection failure never creates source mutation, retry, acceptance, or Orchestrator authority.

## 16. Hard invariants

- Project memory must survive Architect, Executor, browser, terminal, and machine restarts.
- First-hand producer owns the factual event; downstream roles do not recreate it.
- Durable detailed evidence remains authority; events index/reference it.
- Human directives that materially change project truth are promoted by Architect.
- Human future directions that are materially intended are preserved separately from current truth.
- Architect directly updates all relevant human-readable project documents and future-intent surfaces.
- Every Architect review/material Rony directive receives documentation-impact classification.
- Every Architect review/material future discussion receives future-idea-impact classification.
- `STATE`/`FULL` documentation sync/readback precedes the next mutating implementation dispatch.
- `NONE` avoids unnecessary documentation churn.
- `CAPTURE`/`PROMOTE` preserves material future intent without creating implementation authority.
- `IDEA_INBOX` and `ROADMAP` never directly change canonical current-state truth.
- Executor PASS never directly changes canonical current-state documentation.
- Historical failure/ambiguity is never rewritten as success.
- Documentation/future-intent projection failures never grant mutation/retry/Architect authority.
- Curator is not required and no Curator terminal is part of normal closure.
- Historical Curator evidence remains valid historical evidence.
- Orchestrator may enforce deterministic closure/index metadata only after such metadata has an accepted machine contract; it never authors/interprets documentation or ideas.
