# AFFOTECH Agent Orchestrator Project Orchestration Policy

**File:** `PROJECT_ORCHESTRATION_POLICY.md`  
**Version:** 1.0  
**Status:** Governing project-specific extension  
**Inherits:** `governance/ORCHESTRATOR_BOOTSTRAP.md`  
**Project:** `affotech-agent-orchestrator`  
**Human Final Authority:** Rony Finster

## 1. Purpose

This policy specializes the universal governed Orchestrator bootstrap for the AFFOTECH Agent Orchestrator project.

It governs the Orchestrator control/evidence workflow only. It does **not** authorize integration with, access to, mutation of, migration of, or replacement of AFFOTECH System V2 Hybrid or the existing AFFOTECH relay.

Where this policy is silent, `ORCHESTRATOR_BOOTSTRAP.md` controls. This policy may strengthen the bootstrap but must not silently weaken it.

## 2. Project identity

- Project ID: `affotech-agent-orchestrator`
- Canonical local source root: `C:\Users\nitro\Projects\affotech-agent-orchestrator`
- Machine-authoritative evidence repository: `nakfreeajer/affotech-agent-orchestrator-evidence`
- Evidence branch: `main`
- Evidence repository role: control/evidence plane, not application source repository
- Accepted source identity: resolve from durable Architect/accepted-source evidence; do not infer from the latest Executor terminal alone
- Current source preservation model: immutable source snapshots/manifests in the evidence chain until a separately governed source-repository policy replaces it

No other project repository or worktree is implicitly authorized by this policy.

## 3. Authority model

Normal chain:

`Rony → Architect → Executor → Architect`

Documentation Curator policy:

`ON_DEMAND`

Curator is not a mandatory stage and does not require a permanent terminal/registration during ordinary Orchestrator hardening. Architect directly maintains governing architecture/history/control documentation when connected write authority exists.

Use Curator only when substantial repository documentation work benefits from a separate bounded worker. Executor never authorizes Curator. Curator never authorizes Executor. Every Curator result returns to Architect.

Architect classifications are exactly:

- `ACCEPTED`
- `BLOCKED`
- `INCONCLUSIVE`
- `NO NEW REPORT`

## 4. GitHub evidence authority

GitHub durable evidence is machine authority for the Orchestrator workflow.

Important current-pointer classes include, as applicable:

- `evidence/current/LATEST_ARCHITECT_DECISION.json`
- `evidence/current/LATEST_ARCHITECT_PROMPT.json`
- `evidence/current/LATEST_DISPATCH.json`
- `evidence/current/LATEST_EXECUTOR_TERMINAL.json`
- `evidence/current/LATEST_EXECUTOR_ACCEPTED.json`
- `evidence/current/LATEST_MILESTONE.json`
- worker delivery/result/reconciliation pointers under `evidence/current/worker/executor/`
- `evidence/current/LATEST_ARCHITECT_TRIGGER.json`
- `evidence/current/RELAY_CONTROL.json`

Current pointers are convenience indexes. Immutable prompts, dispatches, decisions, results, reconciliations, receipts/publications, source snapshots/manifests, and Git history remain the underlying evidence.

Browser-visible assistant text, terminal screen output, or a human-readable ledger is not machine authority.

## 5. Protocol-family separation

Native Orchestrator control protocol:

- canonical messages: `ORCH-*`
- dispatches: `DISPATCH-*`
- Architect decisions: `GH-DEC-*`
- Orchestrator evidence publications may use `GH-PUB-*`
- worker delivery/result/reconciliation/trigger IDs use their defined Orchestrator namespaces

Protected foreign protocol family:

- the existing AFFOTECH relay uses bare `PUB-*` package IDs
- its repository is `nakfreeajer/affotech-agent-relay`

Bare AFFOTECH `PUB-*` and Orchestrator `ORCH-*` / `DISPATCH-*` are distinct protocol families. Orchestrator `GH-PUB-*` evidence-publication identifiers are **not** the same thing as bare AFFOTECH `PUB-*` relay packages.

Compatibility code may identify a foreign family for rejection/observability only when authorized. It must not translate, normalize, migrate, reinterpret, or derive authority across families.

Do not access `nakfreeajer/affotech-agent-relay` under current authority.

## 6. Current role/session registrations

Architect browser/session authority is the registered dedicated Architect session on CDP port `9333` under the current durable Architect registration/authority evidence.

Executor browser/session authority is the registered dedicated Executor session on CDP port `9444` under the current durable worker registration/authority evidence.

These endpoints are project-specific control-plane resources. Their exact durable authority/registration IDs must be read from current evidence rather than guessed.

Curator has no required persistent registration at present. Register Curator only through a future bounded Architect-authorized milestone when an actual independent documentation workload requires it.

## 7. Protected AFFOTECH resources

Until explicit Rony authorization for a future shadow-integration milestone, the following remain outside this project's mutation and access envelope:

- AFFOTECH System V2 Hybrid source/worktrees;
- `nakfreeajer/affotech-agent-relay`;
- AFFOTECH relay protocol/state;
- AFFOTECH tenant/creator browser sessions;
- AFFOTECH protected CDP ports `9222` and `9223`;
- AFFOTECH Google Drive evidence/state;
- AFFOTECH business/private data;
- Apps Script deployments, spreadsheets, tenant resources, and production data.

Current Orchestrator milestones must report AFFOTECH access/mutation as zero unless a later explicit Rony-authorized integration milestone changes the policy.

## 8. Control precedence

Project control precedence is:

1. `PAUSED_BY_RONY`
2. `STOP`
3. `ABORT_CURRENT_WORKER`
4. `RECONCILIATION_REQUIRED`
5. `CIRCUIT_OPEN`

Any active suppressing control prevents new automatic worker advance or new external side effect as defined by the current control contract.

Rony alone releases a Rony pause or otherwise grants human authority reserved to him.

## 9. Identity and baseline gate

Before command 1 and before the first mutation of every mutating milestone, Executor must verify at minimum:

- repository/project identity;
- branch/ref/baseline required by the Architect prompt;
- exact canonical prompt and SHA-256;
- dispatch/message identity and lineage;
- target role and current registration;
- accepted source anchor/snapshot/manifests when specified;
- current Architect decision authorizes this milestone;
- relay/control state permits work;
- mutation envelope and protected resources;
- required human authority and lease state where applicable.

Failure stops before project mutation and must still produce terminal governance evidence when the publication path is available.

## 10. Mutation envelope

Every mutating milestone must enumerate exact authorized source/test/config/evidence paths or bounded resources and exact forbidden domains.

Anything not explicitly authorized is denied.

Source/test implementation work is Executor-owned. Architect does not silently become Executor. Architect may write governance/evidence/architecture records within its own connected authority because those are control-plane records, not implementation source.

Destructive cleanup is default-deny. Never rewrite historical ambiguous evidence to make it appear successful.

## 11. Mutation lease

The Orchestrator must support durable mutation-lease semantics before shared-state mutation is allowed.

An active lease is required only where concurrent/stale mutation could conflict—for example a shared source worktree, shared evidence mutation stream, future tenant/business resource, or another explicitly leased external resource.

Read-only inspection does not require an active mutation lease.

Lease means exclusion, not authority. The Architect prompt/dispatch and any required human authority remain separate gates.

No parallel mutating agents may operate in the same worktree/shared mutable state unless Architect explicitly proves isolation and authorizes it.

## 12. Durable human authority

Rony remains final human authority for risky, destructive, irreversible, production, business-data, or integration mutations reserved by policy.

Where a future milestone requires such approval, use a durable `HUMAN-AUTH-*`-class record (or schema-equivalent successor) binding at minimum:

- approving human;
- project;
- operation;
- exact mutation envelope;
- target tenant/resource/environment when relevant;
- maximum consumption count;
- current consumed/unconsumed state;
- consuming operation/result;
- expiry/scope boundary where applicable.

One-use authority cannot be reused after consumption. Conversation memory does not substitute for a required durable authority record.

## 13. External mutation and ambiguity

For every important external side effect:

`pre-attempt read-only boundary → durable intent/readback → one attempt → durable result OR AMBIGUOUS → read-only reconciliation`

No blind retry.

This principle currently governs BrowserRelay transport and must be generalized before future API/spreadsheet/push/deployment/business-data integrations.

## 14. Durable correlation identity

Before any ambiguity-prone external operation, intent must persist target-bound correlation identity sufficient to distinguish the new operation from historical equal-content operations.

At minimum where available, bind:

- intent/operation ID;
- message/dispatch/milestone;
- target authority/registration/resource identity;
- payload/mutation hash;
- durable pre-attempt target boundary/reference/version/count/hash;
- attempt lineage;
- idempotency/correlation key if the external system supports one.

Repeated text such as `verify & next`, timestamps alone, or current composer/DOM state are not sufficient correlation evidence.

Missing unique correlation after an ambiguous attempt stays fail-closed and does not authorize resend/retry.

## 15. BrowserRelay boundary

BrowserRelay is a transport adapter, never Architect authority.

Worker dispatch transport may send only the compact governed locator/envelope defined by the active protocol. The worker must resolve canonical GitHub authority independently.

Architect BrowserRelay is a one-way doorbell. It may send only the governed wake text for normal review and must not parse Architect assistant responses, scrape decisions, copy next prompts, or derive authority from DOM text.

Browser transport must preserve exactly-once intent/result/reconciliation semantics and current session identity gates.

The failed ORCH-000043/044 live doorbell qualification is historical evidence that repeated-payload reconciliation without a durable pre-send correlation boundary is insufficient. That history must remain preserved.

## 16. Schema compatibility

All machine-routable Orchestrator records must declare/resolve a supported record type and schema version.

Unknown record types, unsupported major versions, ambiguous protocol family, or missing required compatibility metadata fail closed.

No automatic schema migration/normalization is allowed at an authority boundary unless a separately authorized migration contract exists.

The currently authorized compatibility-registry workstream must preserve this policy and must not access AFFOTECH while implementing generic compatibility gates.

## 17. Evidence and acceptance

Executor terminal result is evidence, not acceptance.

Architect independently verifies the newest valid unconsumed result and classifies it.

Accepted source must be durably externally preserved before another implementation milestone begins, unless Architect/Rony explicitly handles an exception.

Historical states remain immutable in meaning. For example, an `AMBIGUOUS` delivery may later have a separate reconciliation proving `SENT`; the old delivery record remains `AMBIGUOUS`.

## 18. Business/product state vs orchestration state

Keep product progress separate from orchestration mechanics.

Examples:

- product/business: feature NOT STARTED / IN TESTING / COMPLETED / DEPLOYED
- orchestration: Executor running / awaiting Architect / BLOCKED / reconciliation required / human authority required

A transport/governance milestone passing does not imply application/business work is complete.

## 19. Cold start and recovery

Correctness-critical authority must not exist only in process memory, browser memory, local terminal output, local clone state, or ChatGPT conversation memory.

A fresh Architect/Executor environment must be able to reconstruct the next legal action from durable GitHub evidence plus the accepted source/policy/profile records.

Unfinished intent or uncertain external side effects enter reconciliation before any retry.

## 20. Future AFFOTECH integration boundary

AFFOTECH integration is **NOT AUTHORIZED** by this policy.

When Rony explicitly authorizes future integration, the first stage should be shadow qualification:

- existing AFFOTECH relay remains authoritative;
- Orchestrator observes only the expressly authorized evidence surface;
- Orchestrator predicts what it would dispatch/do;
- Orchestrator performs zero AFFOTECH mutation;
- disagreement fails closed.

Only repeated agreement plus a later explicit Rony decision may authorize transport ownership or mutation integration.

## 21. Required companion files for reusable projects

This Orchestrator owns the canonical universal bootstrap. New governed application projects should include:

- pinned `ORCHESTRATOR_BOOTSTRAP.md` snapshot/reference with upstream version/hash;
- project-owned `PROJECT_ORCHESTRATION_POLICY.md` stating inheritance;
- `AGENTS.md` referencing both rather than duplicating the entire governance kernel;
- `config/project-profile.json` (or equivalent) binding bootstrap version/hash, project-policy path/hash, protocol family, repositories, roles, and protected resources.

The private evidence bootstrap publication for a new project should bind those file hashes and the Architect's bootstrap-acceptance decision.

## 22. Document precedence inside this project

For the Orchestrator project:

1. Rony's explicit current instruction;
2. `governance/ORCHESTRATOR_BOOTSTRAP.md`;
3. this `governance/PROJECT_ORCHESTRATION_POLICY.md`;
4. durable Architect decision/current control state;
5. canonical Architect prompt/dispatch;
6. worker-local choices.

The Architecture Manual remains the detailed human architecture specification. Where a true conflict exists between an older manual statement and newer explicit Rony-approved governing evidence/policy, stop and reconcile the documentation rather than guessing.

## 23. Current integration posture

At adoption of this policy:

- Orchestrator control/evidence work may continue under its current canonical GitHub authority;
- Curator remains on-demand;
- protocol-family separation is mandatory;
- durable correlation identity is mandatory for reconciliation-capable external mutations;
- AFFOTECH integration/access remains unauthorized;
- the ongoing generic protocol/schema compatibility milestone remains separate from AFFOTECH.
