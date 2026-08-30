# Universal Governed Orchestrator Bootstrap

**File:** `ORCHESTRATOR_BOOTSTRAP.md`  
**Version:** 1.3  
**Status:** Canonical universal governance kernel  
**Scope:** Project-independent  
**Authority model:** Human Final Authority → Architect → Executor → Architect  
**Documentation model:** Architect-direct; documentation closure and future-idea continuity are Architect responsibilities.

## 1. Purpose

This document defines the minimum governance controls inherited by every project governed through the Supervisor Orchestrator model.

A project-specific policy MAY strengthen or specialize these controls. It MUST NOT silently weaken, reinterpret, or bypass them. Any intentional weakening of a mandatory control requires explicit Human Final Authority approval and durable evidence when the project policy requires durable human authorization.

The bootstrap governs orchestration. It does not prescribe an application technology stack.

## 2. Control plane and work plane

The Orchestrator is part of the **control plane**. The governed application/repository/external service is part of the **work plane**.

They MUST remain logically and operationally separate.

The Orchestrator MUST NOT use a governed application repository as its own runtime/control-state workspace. A project repository may contain governance participation files such as `ORCHESTRATOR_BOOTSTRAP.md`, `PROJECT_ORCHESTRATION_POLICY.md`, `AGENTS.md`, project profiles, validation rules, and protected-resource definitions; those files do not turn the application repository into the Orchestrator itself.

## 3. Permanent authority model

The default authority chain is:

`Human Final Authority → Architect → Executor → Architect`

The Architect is the central orchestration decision authority below the Human Final Authority. Workers do not authorize workers.

The Architect owns interpretation of project truth, verification, acceptance decisions, next-action authority, canonical human-readable documentation projection, and preservation of material future intent.

A Documentation Curator is **not part of the default authority chain and is not required for project continuity**. Historical Curator evidence remains valid historical evidence. A project may reintroduce a Curator only through an explicit Human Final Authority directive and project-policy change defining its bounded role. Curator never replaces Architect semantic ownership or acceptance authority.

Architect classifications are exactly:

- `ACCEPTED`
- `BLOCKED`
- `INCONCLUSIVE`
- `NO NEW REPORT`

`NO NEW REPORT` means no newer valid unconsumed terminal result addressed to Architect exists in the authoritative evidence plane. It MUST NOT be inferred from an unchanged source tree, zero mutation, or a stale convenience pointer.

## 4. Human Final Authority

Every governed project MUST identify one Human Final Authority.

The Human Final Authority may approve, reject, pause, stop, redirect, narrow scope, or authorize exceptional work. No worker may impersonate Human Final Authority.

For operations whose project policy requires durable human authorization, conversation memory alone is insufficient. Use a durable authority record that binds the approving human, project, operation, mutation envelope, target resource/environment/tenant where applicable, consumption count, state, and scope/expiry. One-use authority MUST NOT be reused after consumption.

## 5. Governance precedence

Unless a project defines stricter controls, precedence is:

1. explicit current Human Final Authority instruction;
2. this bootstrap's mandatory controls;
3. `PROJECT_ORCHESTRATION_POLICY.md`;
4. durable Architect decision/current control state;
5. Architect milestone prompt/dispatch;
6. worker-local implementation choices.

A lower layer MUST NOT silently weaken a higher layer. Unresolved conflict fails closed and returns to Architect.

## 6. Required project registration

Before dispatch 1, every governed project MUST have durable project registration identifying at minimum:

- project ID and name;
- governed source repository/repositories;
- private evidence/control repository or equivalent evidence authority;
- canonical branch;
- canonical local root and authorized worktrees where applicable;
- accepted baseline or explicit unborn/empty baseline;
- Human Final Authority;
- Architect identity;
- Executor identity;
- documentation policy (`ARCHITECT_DIRECT` by default);
- future-idea persistence policy;
- protocol family;
- protected resources and external systems;
- control-plane identity.

Project registration is identity, not mutation authority.

## 7. Required project governance files

Every governed application project MUST contain or durably pin:

- `ORCHESTRATOR_BOOTSTRAP.md` — a versioned/pinned snapshot or reference to this universal kernel;
- `PROJECT_ORCHESTRATION_POLICY.md` — the project-specific extension;
- `AGENTS.md` — worker-facing operational instructions where applicable;
- a machine-readable project profile;
- a machine-readable protected-resource inventory or equivalent.

A project copy of this bootstrap MUST declare its upstream version/reference/hash. Local edits that change semantics require explicit governance review; projects must not silently fork the kernel.

`PROJECT_ORCHESTRATION_POLICY.md` MUST state `Inherits: ORCHESTRATOR_BOOTSTRAP.md` and define project-specific identities, resources, roles, documentation-closure policy, future-idea persistence policy, protocol family, evidence authority, validation, external systems, mutation rules, privacy boundaries, and any stronger controls.

## 8. Identity gate

Before command 1 and again before the first mutation of every mutating milestone, verify all identities required by the project policy, including at minimum:

- project ID;
- repository;
- canonical root or authorized worktree;
- branch;
- expected accepted baseline;
- worker identity/registration;
- milestone ID;
- dispatch/message ID;
- current control state;
- mutation authority;
- required human authority and mutation lease state where applicable.

Mismatch means STOP. Do not silently switch project, repository, worktree, branch, baseline, role, or target.

## 9. Canonical prompt and dispatch identity

Every governed worker instruction MUST have durable identity and lineage.

A dispatch MUST bind at minimum:

- project and protocol family;
- message ID and parent lineage;
- dispatch ID;
- milestone;
- intended worker role/registration;
- canonical prompt reference and exact hash;
- expected baseline;
- mutation envelope;
- control state;
- required human authority/lease references where applicable;
- expected terminal-result destination.

The worker executes only the canonical instruction whose identity/hash it verifies. Browser-rendered assistant text, a human-readable ledger, or a copied summary is not a substitute for machine authority.

A terminal/consumed dispatch MUST NOT be executed again unless Architect creates a new authorized dispatch. Retry, continuation, replacement, and duplicate delivery are distinct states.

## 10. Worker registration and role boundaries

Every worker receiving mutation authority MUST be registered. Registration SHOULD identify role, project, worker/session/runtime identity, transport endpoint where applicable, worktree/resource assignment, capabilities, and active/inactive state.

Registration alone never grants mutation authority. Active dispatch, current control state, mutation envelope, and any required lease/human authority remain separate gates.

Architect MUST NOT treat worker `PASS` as acceptance. Executor performs bounded implementation/runtime/test work. Architect verifies and decides.

Canonical documentation is Architect-owned unless an explicit project policy and bounded Architect dispatch authorize another worker for a specific documentation mutation. Such delegation does not transfer semantic ownership or acceptance authority.

## 11. Mutation envelope and protected resources

Every mutating milestone MUST define before execution:

- exactly what may change;
- exact or bounded paths/resources;
- what must not change;
- maximum mutation count where useful;
- expected side effects;
- stop conditions;
- validation requirements;
- compensation/rollback strategy where possible;
- mutation accounting requirements.

Anything not authorized is denied.

Destructive operations default-deny. Project root, `.git`, accepted tracked source/tests, authoritative evidence, private artifact stores, credential/secret stores, and canonical documentation authority MUST NOT be destructively altered by generic cleanup/recovery logic.

Deletion, when allowed, must be individually named, same-milestone disposable scope after resolved-path verification.

## 12. Durable mutation lease

A project MUST define lease semantics before shared-state mutation is allowed.

An **active lease is not required for purely read-only work or projects with no mutable shared resource**. It is required when concurrent/stale workers could mutate the same repository/worktree/resource/tenant/business state.

A lease SHOULD bind project, worker instance, dispatch, milestone, repository/worktree/branch, resource/tenant where relevant, lease epoch, acquisition state, expiry/release condition, and current state.

A lease provides exclusion only. It does not create mutation authority.

Default rule: no parallel mutating workers in the same worktree or shared mutable state. Parallel read-only analysis or truly isolated work may be separately authorized.

## 13. Durable external mutation contract

For an important external side effect, use the generic sequence:

`read-only pre-attempt snapshot → durable intent → one mutation attempt → durable result OR AMBIGUOUS → read-only reconciliation → resolved state`

Never blind retry after uncertain external mutation.

This applies to browser sends, Git/GitHub ref changes, deployments, API mutations, spreadsheet/database writes, uploads, Apps Script/clasp operations, and other external effects.

## 14. Durable correlation identity

Any side effect that can become ambiguous and later require reconciliation MUST persist, **before the attempt**, correlation evidence sufficient to distinguish the intended effect from historical same-content effects.

Correlation SHOULD bind:

- operation/intent ID;
- project, message/dispatch, and attempt lineage;
- exact target authority/resource identity;
- payload/mutation identity or hash;
- durable pre-attempt external-state boundary/reference/version/hash where available;
- idempotency key or provider correlation key where supported.

Matching text, payload equality, timestamp alone, current composer state, or a repeated human-visible message is insufficient correlation evidence.

If a later ambiguity cannot be uniquely correlated, classify insufficient correlation evidence / reconciliation required and do not infer permission to retry.

## 15. Read-only reconciliation and circuit breaker

Ambiguous side effects are reconciled read-only before any repair/retry decision.

Repeated failures, identity disagreement, mutation-envelope violations, cross-project access, evidence corruption, unresolved ambiguity, duplicate-execution risk, or control-boundary failures SHOULD open the circuit or return to Architect according to project policy.

While `PAUSED_BY_HUMAN`, STOP, ABORT/reconciliation, or CIRCUIT_OPEN suppresses continuation, no new mutation or dispatch may begin until the controlling state is explicitly resolved.

A project MAY map `PAUSED_BY_HUMAN` to a named human state such as `PAUSED_BY_RONY`.

## 16. Evidence model

Every governed milestone MUST be reconstructable from durable/versioned evidence.

Canonical conceptual chain for documentation-relevant work is:

`Architect prompt → dispatch → worker execution → terminal result → Architect verification/decision → source/evidence preservation → Architect documentation sync/readback when required → next mutating dispatch`

Terminal result and Architect acceptance are distinct. Documentation sync is also distinct from acceptance: it records the human-readable projection of already-established durable truth.

Evidence SHOULD preserve authorization/lineage, starting/ending identity, exact changed paths/resources, validation, side effects/mutation accounting, blockers/ambiguity, reconciliation evidence, Architect decision, preservation status, and documentation-sync boundary where applicable.

Published history is immutable/append-only in meaning. Corrections supersede; they do not rewrite history. Current pointers are convenience indexes and must not replace immutable history as authority.

## 17. Architect documentation closure

Documentation completeness is a governance invariant, not a memory preference.

After every Architect review or material Human Final Authority directive, Architect MUST determine documentation impact before publishing the next mutating implementation dispatch.

Minimum documentation-impact classes are:

- `NONE` — no durable human-readable truth changed; no documentation mutation required;
- `STATE` — current recovery/operational state materially changed; update the smallest current-state/handover/recovery surface required;
- `FULL` — accepted capability, architecture, governance, contract, production behavior, significant reusable lesson, or other durable project truth changed; update every materially affected canonical document.

For `STATE` or `FULL`, Architect MUST:

1. resolve the latest durable evidence and accepted boundary;
2. update all materially affected canonical human-readable documents directly;
3. write and read back those documents successfully;
4. ensure stale documentation would not mislead cold-start/recovery;
5. only then publish the next mutating implementation dispatch.

A separate Curator terminal is not required. Architect remains the semantic and physical owner of the project documentation projection.

The Orchestrator MUST NOT decide document meaning or author documentation. Where an accepted machine schema later exposes a documentation-closure marker, the Orchestrator MAY deterministically gate dispatch eligibility on that marker. Until such a schema is accepted, the Architect's mandatory update/readback-before-next-mutation ordering is the governing closure mechanism.

If documentation write/readback fails for a `STATE` or `FULL` impact, Architect MUST NOT silently proceed as if documentation were closed. It must either repair the documentation boundary or explicitly record/handle the exception under higher authority.

## 17A. Architect future-idea continuity

Future ideas are not current project truth and MUST be preserved separately from accepted/current-state documentation.

After every Architect review and every material Human Final Authority discussion/directive, Architect MUST independently determine `futureIdeaImpact` in addition to `documentationImpact`:

- `NONE` — no future concept is sufficiently material to preserve;
- `CAPTURE` — a useful distinct future concept would be costly to lose at cold start; preserve it in the project idea surface without granting implementation authority;
- `PROMOTE` — an existing/new idea has been explicitly adopted for future direction or scheduled into intended work; update its lifecycle state and roadmap placement.

Minimum idea lifecycle states are:

- `PROPOSED` — worth remembering, not yet adopted as project direction;
- `ADOPTED_FOR_FUTURE` — Human Final Authority/Architect has deliberately retained it as intended future direction, but it is not current authority;
- `SCHEDULED` — placed into an intended implementation sequence/roadmap, still not implementation authority;
- `IMPLEMENTED` — implementation has been independently accepted and the idea is promoted into normal current-state/architecture/history documentation as applicable.

Architect MUST capture a future idea when any of these are true:

- the Human Final Authority explicitly states it as future direction;
- it solves or materially reduces a known future risk/problem;
- it creates a meaningful future capability or architectural simplification;
- a fresh Architect after cold start would reasonably regret losing it;
- a milestone/root-cause analysis reveals a distinct improvement that is not appropriate for the current bounded implementation.

Architect SHOULD NOT capture routine brainstorming that has not been adopted, trivial alternatives, duplicates, or ideas with no material future value.

Every preserved idea MUST clearly identify its status, origin, problem/opportunity, concept, current non-authority boundary, and promotion/revisit condition when known.

Idea records and roadmap entries create **zero implementation authority**. They MUST NOT be interpreted as current accepted behavior, accepted architecture, or permission to mutate. Only a canonical Architect dispatch can authorize implementation.

Projects SHOULD maintain separate human-readable surfaces equivalent to:

- `IDEA_INBOX` — useful future concepts not yet scheduled or implemented;
- `ROADMAP` — adopted/scheduled future work and promotion conditions.

A project may use different filenames, but it MUST preserve the semantic separation:

`CURRENT_STATE = true now`  
`ARCHITECTURE = accepted system design`  
`IDEA_INBOX = may build later`  
`ROADMAP = intend/plan to build later`  
`DISPATCH = authorized to work now`

`documentationImpact` and `futureIdeaImpact` are independent. A diagnostic may legitimately be `documentationImpact=NONE` and `futureIdeaImpact=CAPTURE`.

## 18. Protocol-family and schema compatibility

Every project MUST declare its native orchestration protocol family and supported schema versions.

A record from an unknown/unsupported schema or foreign protocol family fails closed unless an explicit compatibility adapter is authorized.

Compatibility may identify, observe, or reject a foreign family. It MUST NOT automatically translate, normalize, migrate, reinterpret, or derive authority across families.

Identifier prefixes alone do not establish semantic compatibility. A project-specific policy must document any potentially confusing identifiers.

Future schema upgrades must fail closed rather than silently interpreting older/unknown records.

## 19. Source and evidence preservation

Accepted source MUST receive durable external preservation before the next implementation milestone unless Human Final Authority/Architect explicitly handles an exception.

Preferred preservation is verified commit/push/readback to the authoritative source repository. If push is not authorized, use another approved immutable external snapshot/bundle. A same-disk copy is not sufficient durable preservation.

Do not force-push/rewrite history as routine recovery.

## 20. Privacy and secrets

Private customer/business/financial data, credentials, tokens, OAuth material, private filenames/paths/IDs when sensitive, and protected artifact contents MUST NOT be copied into general prompts, logs, repositories, or evidence merely for convenience.

Evidence should prefer structural facts, hashes, counts, classifications, and redacted references. Tool availability or credential presence never grants mutation authority.

## 21. External systems and browser/relay adapters

Before mutating any external system, the project policy MUST register the system and define identity, allowed operations, authority, mutation limits, reconciliation method, and rollback/compensation where available.

Browser/relay automation requires project-specific policy for endpoints/ports, registered sessions, allowed conversations/pages, send/receive semantics, DOM-reading boundary, exactly-once behavior, correlation identity, and fail-closed behavior.

No browser authority is implied by this universal bootstrap.

## 22. Cross-project isolation

A dispatch for PROJECT-A does not authorize access, mutation, evidence consumption, worktree reuse, lease reuse, browser use, or external-resource use belonging to PROJECT-B.

Cross-project confusion is a fail-closed/circuit condition.

## 23. Project-specific policy contract

`PROJECT_ORCHESTRATION_POLICY.md` is mandatory for governed application projects using this bootstrap, either as a tracked file or an explicitly pinned durable reference.

It MUST define at minimum:

- project identity/repositories/roots/branches;
- Human Final Authority;
- roles and documentation-ownership/closure policy;
- future-idea persistence/lifecycle policy;
- evidence authority;
- protocol family/schema policy;
- protected resources/worktrees;
- external systems;
- test/validation strategy;
- human-authority policy;
- mutation-lease policy;
- destructive/cleanup policy;
- external-mutation reconciliation/correlation rules;
- deployment/preservation rules;
- privacy/secrets policy;
- control/circuit precedence;
- cold-start/recovery entrypoints.

Project policy may strengthen this bootstrap but not silently weaken it.

## 24. New-project readiness gate

Before the first feature implementation, require:

- control plane identified;
- source and evidence authorities established;
- project registration complete;
- `ORCHESTRATOR_BOOTSTRAP.md` pinned;
- `PROJECT_ORCHESTRATION_POLICY.md` established;
- `AGENTS.md` established where applicable;
- project profile/protected resources established;
- protocol family/schema policy declared;
- Human Final Authority defined;
- Architect and Executor defined/registered as required;
- documentation policy explicitly `ARCHITECT_DIRECT` unless Human Final Authority approves a project-specific alternative;
- documentation-impact and closure rules established;
- future-idea capture/promotion rules and idea/roadmap surfaces established;
- accepted baseline established and externally durable;
- test/validation baseline established;
- mutation-envelope policy ready;
- human-authority policy ready;
- lease capability/policy ready when mutating shared state is possible;
- reconciliation/correlation policy ready;
- circuit/control state safe;
- no unresolved identity or external-mutation ambiguity.

Do not fabricate initial accepted evidence. Bootstrap acceptance is an Architect decision after independent verification.

## 25. Productivity rule

Governance exists to make productive work reliable, not to replace productive work.

Once identity, authority, protection, mutation/reconciliation, preservation, and required documentation-closure boundaries are established, execute the bounded product milestone, validate it, publish terminal evidence, and return to Architect.

Do not create documentation relay/Curator milestones merely to satisfy process ceremony. Architect should update only documents materially affected by durable truth. Transient diagnostics with no lasting knowledge change should normally be `documentationImpact=NONE`.

Future-idea capture also must not become ceremony. Preserve ideas only when losing them would materially harm future design, safety, capability, or implementation continuity.

Business/product status and orchestration status should remain visibly distinct.

## 26. Universal invariants

- Human Final Authority remains final authority.
- Architect is the central orchestration decision-maker, canonical documentation owner, and semantic owner of future-intent preservation.
- Workers do not authorize workers or self-accept.
- Control plane and work plane remain separated.
- Identity is verified before mutation.
- Mutation requires explicit bounded authority.
- Destructive actions default-deny.
- Shared mutable state has at most one authorized mutating worker by default.
- Ambiguous external mutation is reconciled before retry.
- Durable correlation identity precedes any ambiguity-prone external mutation that may need later reconciliation.
- Worker `PASS` is not Architect acceptance.
- Accepted source is externally preserved before the next implementation milestone.
- For material documentation impact, Architect completes documentation sync/readback before the next mutating implementation dispatch.
- Material future ideas survive cold start through separate idea/roadmap surfaces.
- Idea/roadmap records never create implementation authority or current accepted truth.
- Evidence chronology is reconstructable and historical ambiguity is preserved.
- Private data/secrets remain protected.
- Cross-project authority leakage is prohibited.
- Unknown schemas/protocol families fail closed.
- Project-specific policy may strengthen but not silently weaken this bootstrap.
- Curator is not required by the default model; historical Curator evidence remains historical evidence.

## 27. Final rule

**BOOTSTRAP PROVIDES THE GOVERNANCE KERNEL.**  
**PROJECT POLICY PROVIDES PROJECT-SPECIFIC GOVERNANCE.**  
**ARCHITECT PROVIDES BOUNDED TECHNICAL AUTHORITY, INTERPRETS PROJECT TRUTH, MAINTAINS THE CANONICAL DOCUMENTATION PROJECTION, AND PRESERVES MATERIAL FUTURE INTENT SEPARATELY FROM CURRENT TRUTH.**  
**ORCHESTRATOR INDEPENDENTLY ENFORCES DETERMINISTIC CONTROL-PLANE STATE AND TRANSPORT; IT DOES NOT AUTHOR OR INTERPRET DOCUMENTATION OR IDEAS.**  
**EXECUTOR PERFORMS BOUNDED WORK AND PUBLISHES FIRST-HAND EXECUTION EVIDENCE.**  
**HUMAN FINAL AUTHORITY REMAINS IN CONTROL.**
