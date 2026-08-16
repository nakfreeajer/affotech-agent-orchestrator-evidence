# Universal Governed Orchestrator Bootstrap

**File:** `ORCHESTRATOR_BOOTSTRAP.md`  
**Version:** 1.1  
**Status:** Canonical universal governance kernel  
**Scope:** Project-independent  
**Authority model:** Human Final Authority → Architect → Executor → Architect; Documentation Curator only when explicitly required and Architect-dispatched.

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

A Documentation Curator is **optional/on-demand**. When substantial repository-documentation work benefits from a separate bounded worker, the Architect may use:

`Architect → Curator → Architect`

Executor MUST NOT authorize Curator. Curator MUST NOT authorize Executor. Neither role self-accepts.

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
4. Architect milestone prompt/dispatch;
5. worker-local implementation choices.

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
- Curator policy (`ON_DEMAND` by default);
- protocol family;
- protected resources and external systems;
- control-plane identity.

Project registration is identity, not mutation authority.

## 7. Required project governance files

Every governed application project MUST contain or durably pin:

- `ORCHESTRATOR_BOOTSTRAP.md` — a versioned/pinned snapshot or reference to this universal kernel;
- `PROJECT_ORCHESTRATION_POLICY.md` — the project-specific extension;
- `AGENTS.md` — worker-facing operational instructions;
- a machine-readable project profile;
- a machine-readable protected-resource inventory or equivalent.

A project copy of this bootstrap MUST declare its upstream version/reference/hash. Local edits that change semantics require explicit governance review; projects must not silently fork the kernel.

`PROJECT_ORCHESTRATION_POLICY.md` MUST state `Inherits: ORCHESTRATOR_BOOTSTRAP.md` and define project-specific identities, resources, role policy, protocol family, evidence authority, validation, external systems, mutation rules, privacy boundaries, and any stronger controls.

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

Architect MUST NOT treat worker `PASS` as acceptance. Executor performs bounded implementation/runtime/test work. Curator, when used, performs bounded documentation work only. Architect verifies and decides.

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

Canonical conceptual chain:

`Architect prompt → dispatch → worker execution → terminal result → Architect verification/decision → preservation → next dispatch`

Terminal result and Architect acceptance are distinct.

Evidence SHOULD preserve:

- authorization and lineage;
- starting/ending identity;
- exact changed paths/resources;
- validation;
- side effects and mutation accounting;
- blockers/ambiguity;
- reconciliation evidence;
- Architect decision;
- preservation status.

Published history is immutable/append-only in meaning. Corrections supersede; they do not rewrite history. Current pointers are convenience indexes and must not replace immutable history as authority.

## 17. Protocol-family and schema compatibility

Every project MUST declare its native orchestration protocol family and supported schema versions.

A record from an unknown/unsupported schema or foreign protocol family fails closed unless an explicit compatibility adapter is authorized.

Compatibility may identify, observe, or reject a foreign family. It MUST NOT automatically translate, normalize, migrate, reinterpret, or derive authority across families.

Identifier prefixes alone do not establish semantic compatibility. A project-specific policy must document any potentially confusing identifiers.

Future schema upgrades must fail closed rather than silently interpreting older/unknown records.

## 18. Source and evidence preservation

Accepted source MUST receive durable external preservation before the next implementation milestone unless Human Final Authority/Architect explicitly handles an exception.

Preferred preservation is verified commit/push/readback to the authoritative source repository. If push is not authorized, use another approved immutable external snapshot/bundle. A same-disk copy is not sufficient durable preservation.

Do not force-push/rewrite history as routine recovery.

## 19. Privacy and secrets

Private customer/business/financial data, credentials, tokens, OAuth material, private filenames/paths/IDs when sensitive, and protected artifact contents MUST NOT be copied into general prompts, logs, repositories, or evidence merely for convenience.

Evidence should prefer structural facts, hashes, counts, classifications, and redacted references. Tool availability or credential presence never grants mutation authority.

## 20. External systems and browser/relay adapters

Before mutating any external system, the project policy MUST register the system and define identity, allowed operations, authority, mutation limits, reconciliation method, and rollback/compensation where available.

Browser/relay automation requires project-specific policy for endpoints/ports, registered sessions, allowed conversations/pages, send/receive semantics, DOM-reading boundary, exactly-once behavior, correlation identity, and fail-closed behavior.

No browser authority is implied by this universal bootstrap.

## 21. Cross-project isolation

A dispatch for PROJECT-A does not authorize access, mutation, evidence consumption, worktree reuse, lease reuse, browser use, or external-resource use belonging to PROJECT-B.

Cross-project confusion is a fail-closed/circuit condition.

## 22. Project-specific policy contract

`PROJECT_ORCHESTRATION_POLICY.md` is mandatory for governed application projects using this bootstrap, either as a tracked file or an explicitly pinned durable reference.

It MUST define at minimum:

- project identity/repositories/roots/branches;
- Human Final Authority;
- roles and Curator policy;
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

## 23. New-project readiness gate

Before the first feature implementation, require:

- control plane identified;
- source and evidence authorities established;
- project registration complete;
- `ORCHESTRATOR_BOOTSTRAP.md` pinned;
- `PROJECT_ORCHESTRATION_POLICY.md` established;
- `AGENTS.md` established;
- project profile/protected resources established;
- protocol family/schema policy declared;
- Human Final Authority defined;
- Architect and Executor defined/registered as required;
- Curator policy explicitly `ON_DEMAND` or stronger;
- accepted baseline established and externally durable;
- test/validation baseline established;
- mutation-envelope policy ready;
- human-authority policy ready;
- lease capability/policy ready when mutating shared state is possible;
- reconciliation/correlation policy ready;
- circuit/control state safe;
- no unresolved identity or external-mutation ambiguity.

Do not fabricate initial accepted evidence. Bootstrap acceptance is an Architect decision after independent verification.

## 24. Productivity rule

Governance exists to make productive work reliable, not to replace productive work.

Once identity, authority, protection, and mutation/reconciliation boundaries are established, execute the bounded product milestone, validate it, publish terminal evidence, and return to Architect. Do not create transport/documentation/governance milestones that provide no material safety or reconstruction value.

Business/product status and orchestration status should remain visibly distinct.

## 25. Universal invariants

- Human Final Authority remains final authority.
- Architect is the central orchestration decision-maker.
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
- Evidence chronology is reconstructable and historical ambiguity is preserved.
- Private data/secrets remain protected.
- Cross-project authority leakage is prohibited.
- Unknown schemas/protocol families fail closed.
- Project-specific policy may strengthen but not silently weaken this bootstrap.
- Curator is optional/on-demand unless a project explicitly requires it.

## 26. Final rule

**BOOTSTRAP PROVIDES THE GOVERNANCE KERNEL.**  
**PROJECT POLICY PROVIDES PROJECT-SPECIFIC GOVERNANCE.**  
**ARCHITECT PROVIDES BOUNDED TECHNICAL AUTHORITY.**  
**ORCHESTRATOR ENFORCES CONTROL-PLANE STATE.**  
**EXECUTOR PERFORMS BOUNDED WORK.**  
**CURATOR MAINTAINS REPOSITORY DOCUMENTATION ONLY WHEN REQUIRED.**  
**HUMAN FINAL AUTHORITY REMAINS IN CONTROL.**
