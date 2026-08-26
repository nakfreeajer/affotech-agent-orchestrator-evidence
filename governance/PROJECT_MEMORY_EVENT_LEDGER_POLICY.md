# AFFOTECH Agent Orchestrator Project Memory and Documentation Projection Policy

**Version:** 1.1  
**Status:** Rony-approved governing project addendum  
**Project:** `affotech-agent-orchestrator`  
**Inherits:** `governance/ORCHESTRATOR_BOOTSTRAP.md` and `governance/PROJECT_ORCHESTRATION_POLICY.md`  
**Human Final Authority:** Rony Finster

## 1. Purpose

This addendum hardens project memory and documentation continuity without changing the permanent authority chain:

`Rony → Architect → Executor → Architect`

For this project, documentation projection is now **Architect-direct**. A separate Documentation Curator is not required for normal project continuity, project closure, or documentation catch-up.

The durable GitHub evidence plane is project memory. Human-readable documentation is an Architect-maintained projection of that durable evidence and accepted project truth.

## 2. Separation of truth, memory, work, and documentation

- **Rony** owns final human authority.
- **Architect** owns project truth, interpretation, architecture, acceptance, next-action authority, promotion of material human instructions into durable project state, and direct maintenance of canonical human-readable documentation.
- **Executor** owns bounded implementation/runtime/test work and publishes first-hand execution evidence.
- **Durable evidence + event ledger** own reconstructable project memory.
- **Historical Curator evidence** remains valid historical evidence but does not define the current workflow.

No downstream role recreates another role's authoritative event merely to summarize it.

## 3. Event producer rule

The component with first-hand authority for a fact publishes the corresponding event through the common project event recorder/ledger contract.

Minimum producer ownership:

- Architect: material human directives, governance changes, architecture/requirement decisions, Architect classifications, accepted root cause/countermeasure decisions, canonical dispatch publication, mission/pause/resume/stop decisions, and documentation-sync closure where recorded;
- Executor: execution start/checkpoint/terminal outcome, validation result, blocker/failure evidence, mutation accounting, implementation-side external mutation outcomes;
- Reconciliation component/worker: reconciliation started/resolved/inconclusive evidence for the operation it reconciles;
- GitHub/CI/release adapter where later authorized: commit/PR/merge/CI/release/deployment observations that the adapter directly observes.

Architect MUST NOT duplicate Executor facts as Architect-authored execution events. Architect instead publishes the Architect decision that interprets those facts, then updates affected human-readable documentation from accepted evidence.

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

Routine acknowledgements, brainstorming that is not adopted, and non-authoritative explanation need not be persisted.

A promoted human directive must identify Rony as final human authority when Rony supplied it and should be reflected in the governing policy/documents it changes.

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
- authority boundary stating that the event itself creates no authority beyond the referenced authoritative record.

No event may contain assistant-response text, credentials/tokens, browser DOM dumps, private business/customer data, or unnecessary sensitive payloads.

## 6. Required project event classes

The implementation must support a typed allowlist/registry rather than arbitrary free-form event types. Active classes should cover at least:

- `HUMAN_PROJECT_DIRECTIVE`
- `GOVERNANCE_CHANGED`
- `ARCHITECT_DECISION`
- `ARCHITECT_DISPATCH_PUBLISHED`
- `ARCHITECT_DOCUMENTATION_SYNCED`
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

Legacy Curator event types remain readable for historical compatibility:

- `CURATOR_UPDATE_STARTED`
- `CURATOR_UPDATE_COMPLETED`
- `CURATOR_UPDATE_BLOCKED`
- `CURATOR_CURSOR_ADVANCED`

They are not required for new project progress under the current Architect-direct documentation policy.

Unknown event types or unsupported major schema versions fail closed unless a separately accepted compatibility rule applies.

## 7. Event recorder boundary

Use one deterministic event-recorder contract so producers do not invent incompatible JSON shapes.

The recorder owns schema validation, deterministic event identity/ordering, immutable create/readback semantics, sanitization, project/producer binding, hash/reference validation, and duplicate/conflict behavior.

The producer owns the factual assertion and referenced authoritative evidence.

Exact duplicate publication may be idempotent only when readback proves byte/semantic identity. A conflicting event at the same immutable identity fails closed. No hidden retry after ambiguous GitHub mutation; reconcile read-only first.

## 8. Architect documentation-sync contract

After an Architect-accepted milestone or material Rony directive, Architect directly determines documentation impact and updates all materially affected documents in the same closure cycle when connected write authority exists.

Normal sequence:

1. resolve current durable project authority and accepted evidence boundary;
2. independently verify the accepted milestone/directive;
3. determine which human-readable documents are materially affected;
4. update only those documents whose truth changed or whose stale projection would mislead recovery/continuation;
5. preserve machine-authoritative evidence references and accepted-source boundaries;
6. preserve historical failed/ambiguous paths as history/lessons where useful;
7. ensure current-state documentation describes only accepted present truth;
8. durably write/read back the documentation changes;
9. continue productive work without waiting for a Curator relay.

Documentation sync is not a new acceptance authority and does not change Executor source acceptance.

## 9. Documentation routing rules

Initial Architect routing policy:

- governance/authority change → project policy / decisions / history / README as applicable;
- architecture/interface change → architecture / decisions / current state;
- accepted feature/source change → current state / history / README or release notes when applicable;
- root cause/countermeasure → bugs-and-lessons / decisions / architecture where materially affected;
- deployment/release change → deployment/runbook/releases if those documents exist;
- user-visible behavior change → user guide/current state if such files exist;
- roadmap/scope change → roadmap/decisions if such files exist;
- transient execution start/checkpoint with no durable outcome → normally no documentation mutation.

`CURRENT_STATE`-class documentation may change canonical implementation truth only from Architect-accepted evidence, never from Executor PASS alone.

Significant failed paths that produce reusable engineering knowledge remain in history/lessons even after a later repair is accepted. Current-state docs describe accepted present state without presenting obsolete attempts as current behavior.

## 10. Architect semantic ownership

Architect is the semantic and physical maintainer of architecture, governance, accepted current state, decision rationale summaries, project history, reusable lessons, README entrypoints, and handover/recovery documentation for this project.

A separate documentation worker must not become a prerequisite for project continuity.

If Rony later explicitly reintroduces a Curator, that role may perform only the bounded documentation work authorized at that time and must return to Architect. Such a future change requires an explicit policy update.

## 11. Existing journal and Curator migration rule

Existing `evidence/journal/**`, prompts, dispatches, decisions, terminal results, deliveries, reconciliations, trigger evidence, artifacts, historical Curator records, and prior Curator cursor evidence remain immutable in meaning.

Do NOT rewrite historical records merely because the active documentation owner has changed.

Any event-ledger cutover/backfill must reference historical records without changing their meaning.

## 12. Automation posture

Do not create a documentation-relay milestone, Curator daemon, Curator browser registration, Curator approval hop, or Curator transport proof merely to keep documents current.

Information preservation is producer-owned durable evidence. Documentation continuity is Architect-owned projection.

The Orchestrator remains focused on deterministic transport between the active governed roles and must not gain semantic documentation logic.

## 13. Hard invariants

- Project memory must survive Architect, Executor, browser, terminal, and machine restarts.
- First-hand producer owns the factual event; downstream roles do not recreate it.
- Durable detailed evidence remains authority; events index/reference it.
- Human directives that materially change project truth are promoted by Architect.
- Architect directly updates all relevant human-readable project documents.
- Executor PASS never directly changes canonical current-state documentation.
- Historical failure/ambiguity is never rewritten as success.
- Documentation projection failures never grant mutation/retry/Architect authority.
- A separate Curator is not required under current policy.
- Historical Curator evidence remains valid historical evidence.
