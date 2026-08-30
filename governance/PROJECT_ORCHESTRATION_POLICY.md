# AFFOTECH Agent Orchestrator Project Orchestration Policy

**File:** `PROJECT_ORCHESTRATION_POLICY.md`  
**Version:** 1.4  
**Status:** Governing project-specific extension  
**Inherits:** `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.3  
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

## 3. Authority model and documentation ownership

Normal chain:

`Rony → Architect → Executor → Architect`

The persistent deterministic Orchestrator is **not** an AI authority role and is not governed operationally by Architect on each transport step. It independently observes durable state and executes accepted deterministic routing/state-machine rules. Architect supplies governed authority and decisions; Orchestrator executes deterministic control-plane mechanics.

For this project, documentation ownership is **ARCHITECT_DIRECT** and is permanent unless Rony explicitly changes this policy.

Architect owns both semantic interpretation and physical maintenance of canonical human-readable project documentation, including as materially applicable:

- `governance/ORCHESTRATOR_BOOTSTRAP.md`;
- project governance/policy;
- architecture;
- accepted current state;
- Architect decisions/rationale summaries;
- project history;
- reusable bugs/lessons;
- README/entrypoint documentation;
- future-idea and roadmap documentation;
- handover/recovery material if later introduced.

Documentation Curator is **eliminated from the active project model**. No Curator terminal, approval hop, relay, browser registration, cursor, or transport proof is required for project continuity or closure. Historical Curator evidence remains valid historical evidence and must not be rewritten. A Curator may return only after a future explicit Rony directive and corresponding policy change.

Executor does not own canonical documentation unless an Architect prompt explicitly grants a bounded documentation mutation envelope. Executor never self-accepts documentation truth.

Architect classifications are exactly:

- `ACCEPTED`
- `BLOCKED`
- `INCONCLUSIVE`
- `NO NEW REPORT`

## 4. Architect documentation-closure invariant

Documentation completeness must not depend on Architect remembering informally.

After every Architect review and every material Rony directive, Architect MUST classify documentation impact before issuing the next mutating implementation dispatch:

- `NONE` — no durable project truth requiring human-readable projection changed;
- `STATE` — current operational/recovery boundary materially changed and stale current-state/recovery documentation could mislead continuation;
- `FULL` — accepted capability, architecture, governance, contract, production behavior, significant reusable lesson, or other durable project truth materially changed.

Architect MUST NOT choose these classes by intuition alone. It MUST apply the fixed semantic decision procedure in:

`governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md`

That procedure is governing project policy and requires, in order:

1. `TEST-1`: determine whether leaving all current-truth documentation unchanged would make any canonical document false, materially incomplete/stale, or likely to cause a cold-start Architect/Executor to misunderstand current truth, repeat a solved problem, or take the wrong/illegal next action;
2. if TEST-1 is NO, classify `NONE`;
3. if TEST-1 is YES, `TEST-2`: determine whether the change is only current operational/recovery position without lasting accepted capability/contract/governance truth; if yes classify `STATE`;
4. otherwise `TEST-3`: identify the lasting project truth that changed; if a lasting category changed classify `FULL`;
5. for `STATE`/`FULL`, apply the fixed per-document selection test to every plausible document and update only documents that would otherwise be false, materially incomplete, obsolete, misleading, or unsafe for cold-start/recovery/implementation.

Milestone status alone is never the documentation decision. `ACCEPTED` may still be `NONE`; `BLOCKED` may be `NONE`, `STATE`, or `FULL` depending on the semantic test.

For `STATE` or `FULL`, Architect MUST in the same closure cycle:

1. fresh-read the durable machine authority and relevant evidence;
2. determine every human-readable document whose truth is materially affected using the fixed per-document test;
3. update those documents directly;
4. durably write and read back the updates;
5. ensure current-state material distinguishes accepted present truth from historical failed/ambiguous paths;
6. only after successful documentation readback publish the next mutating implementation dispatch.

For `NONE`, Architect records/uses no unnecessary documentation mutation and continues productive work.

A separate Curator terminal is not a documentation-closure requirement.

If required documentation write/readback fails, Architect must not silently proceed to the next mutating implementation milestone. It must repair the documentation boundary or explicitly handle an exception under Rony/higher governing authority.

The current accepted source does not need to contain a dedicated machine `DOCUMENTATION_CLOSURE` record before this governance rule is effective. The immediate enforcement mechanism is Architect ordering: required document updates/readbacks precede the next mutating implementation dispatch. A future accepted source milestone may add a deterministic closure marker/gate; the Orchestrator may then enforce presence/identity of that marker but must never decide documentation meaning or author documentation.

## 4A. Architect future-idea continuity invariant

Future ideas are a separate knowledge class from current project truth.

After every Architect review and every material Rony discussion/directive, Architect MUST independently classify:

`futureIdeaImpact = NONE | CAPTURE | PROMOTE`

Definitions:

- `NONE` — no distinct future concept is materially worth preserving;
- `CAPTURE` — a distinct useful future concept would be costly to lose after cold start and must be preserved in `docs/IDEA_INBOX.md`;
- `PROMOTE` — an idea has been explicitly adopted as future direction, placed into intended sequence, or completed and must advance lifecycle/roadmap state.

Canonical idea lifecycle:

1. `PROPOSED` — worth remembering; not yet adopted as project direction;
2. `ADOPTED_FOR_FUTURE` — Rony/Architect has deliberately retained it as intended future direction; not current implementation authority;
3. `SCHEDULED` — deliberately placed into a future implementation sequence in `docs/ROADMAP.md`; still not implementation authority;
4. `IMPLEMENTED` — implementation has been independently accepted; promote the resulting truth into `CURRENT_STATE`, `ARCHITECTURE`, `PROJECT_HISTORY`, and other materially affected canonical documents.

Architect MUST capture an idea when at least one material criterion applies:

- Rony explicitly states it as intended future direction;
- it solves/reduces a known future problem or risk;
- it creates a meaningful future capability or architectural simplification;
- a fresh Architect would reasonably regret losing it after cold start;
- current milestone/root-cause work exposes a distinct improvement that does not belong in the current bounded mutation.

Architect SHOULD NOT persist casual brainstorming, trivial alternatives, low-value speculation, or duplicates of an existing idea/roadmap item.

Before creating a new idea, Architect must check existing `IDEA_INBOX`/`ROADMAP` for a materially equivalent item. If equivalent, update/promote the existing entry instead of duplicating it.

Every idea entry must state at minimum:

- stable idea ID/title;
- lifecycle status;
- origin/authority context;
- problem or opportunity;
- proposed concept;
- explicit statement that it creates no implementation authority/current accepted truth;
- revisit/promotion condition when known;
- relationship to existing roadmap/decision/evidence where materially useful.

Canonical semantic separation for this project:

- `docs/CURRENT_STATE.md` = accepted/current operational truth;
- `docs/ARCHITECTURE.md` = accepted system architecture/contract;
- `docs/IDEA_INBOX.md` = useful future concepts not yet scheduled/implemented;
- `docs/ROADMAP.md` = adopted/scheduled intended future work;
- canonical `ORCH-* / DISPATCH-*` = what is authorized to execute now.

Idea and roadmap records create **zero implementation authority**. They cannot authorize Executor, mutation, deployment, or production work and must never be cited as proof that a capability already exists.

`documentationImpact` and `futureIdeaImpact` are independent. Example: a failed diagnostic may be `documentationImpact=NONE` while a distinct improvement is `futureIdeaImpact=CAPTURE`.

## 5. GitHub evidence authority

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
- `evidence/current/RELAY_CONTROL.json` where applicable
- mutation-lease index/revisions under the accepted host-runtime evidence paths

Current pointers are convenience indexes. Immutable prompts, dispatches, decisions, results, reconciliations, receipts/publications, source snapshots/manifests, and Git history remain the underlying evidence.

Browser-visible assistant text, terminal screen output, or human-readable Markdown is not machine authority.

Human-readable documentation is an Architect-maintained projection of durable accepted/project truth. `IDEA_INBOX` and `ROADMAP` are durable future-intent projections but are not machine authority or mutation authority.

## 6. Protocol-family separation

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

## 7. Current role/session registrations

Architect browser/session authority is the registered dedicated Architect session on CDP port `9333` under current durable registration/authority evidence.

Executor browser/session authority is the registered dedicated Executor session on CDP port `9444` under current durable worker registration/authority evidence.

These endpoints are project-specific control-plane resources. Their exact durable authority/registration IDs must be read from current evidence rather than guessed.

No Curator browser/session registration exists or is required under `ARCHITECT_DIRECT`.

## 8. Orchestrator independence boundary

The Orchestrator is deterministic infrastructure, not Architect's interactive subordinate.

Once qualified and running persistently, it independently:

- observes durable dispatch/state changes;
- validates deterministic eligibility and lineage;
- acquires/releases/reconciles leases under accepted contracts;
- prepares/delivers exact governed worker envelopes;
- suppresses duplicates;
- observes durable terminals/results;
- prepares Architect triggers/wakes under accepted rules;
- preserves fail-closed behavior on ambiguity.

It MUST NOT:

- classify Executor work as `ACCEPTED`, `BLOCKED`, or `INCONCLUSIVE`;
- invent new work or broaden mutation scope;
- interpret business/technical semantics;
- decide what documentation or future ideas mean;
- author documentation, ideas, or roadmap content;
- scrape Architect assistant response text/DOM for authority;
- replace Rony or Architect decision authority.

Architect governs **what is authorized and what evidence/future intent means**. Orchestrator independently executes **how accepted deterministic state/transport rules advance**.

## 9. Protected AFFOTECH resources

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

## 10. Control precedence

Project control precedence is:

1. `PAUSED_BY_RONY`
2. `STOP`
3. `ABORT_CURRENT_WORKER`
4. `RECONCILIATION_REQUIRED`
5. `CIRCUIT_OPEN`

Any active suppressing control prevents new automatic worker advance or new external side effect as defined by the current control contract.

Rony alone releases a Rony pause or otherwise grants human authority reserved to him.

## 11. Identity and baseline gate

Before command 1 and before the first mutation of every mutating Executor milestone, Executor must verify at minimum:

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

Architect documentation/control-plane writes use connected Architect authority and must independently read current durable evidence before changing canonical human-readable project truth or future-intent projection.

## 12. Mutation envelope and role boundaries

Every mutating Executor milestone must enumerate exact authorized source/test/config/evidence paths or bounded resources and exact forbidden domains.

Anything not explicitly authorized is denied.

Source/test implementation work is Executor-owned. Architect does not silently become Executor.

Architect directly owns governance/architecture/current-state/history/decision-summary/lessons/README/idea/roadmap documentation and may write those control-plane/human-readable records within connected Architect authority. This is not Executor implementation work and requires no Curator handoff.

Destructive cleanup is default-deny. Never rewrite historical ambiguous evidence to make it appear successful.

## 13. Mutation lease

The Orchestrator must support durable mutation-lease semantics before shared-state mutation is allowed.

An active lease is required only where concurrent/stale mutation could conflict—for example a shared source worktree, shared evidence mutation stream, future tenant/business resource, or another explicitly leased external resource.

Read-only inspection does not require an active mutation lease.

Lease means exclusion, not authority. The Architect prompt/dispatch and any required human authority remain separate gates.

No parallel mutating agents may operate in the same worktree/shared state unless Architect explicitly proves isolation and authorizes it.

## 14. Durable human authority

Rony remains final human authority for risky, destructive, irreversible, production, business-data, or integration mutations reserved by policy.

Where a future milestone requires such approval, use a durable `HUMAN-AUTH-*`-class record (or schema-equivalent successor) binding at minimum approving human, project, operation, exact mutation envelope, target resource/environment, maximum consumption count, consumed/unconsumed state, consuming operation/result, and scope/expiry where applicable.

One-use authority cannot be reused after consumption. Conversation memory does not substitute for a required durable authority record.

## 15. External mutation and ambiguity

For every important external side effect:

`pre-attempt read-only boundary → durable intent/readback → one attempt → durable result OR AMBIGUOUS → read-only reconciliation`

No blind retry.

This principle currently governs BrowserRelay transport and GitHub host-runtime mutation and must be generalized before future API/spreadsheet/push/deployment/business-data integrations.

## 16. Durable correlation identity

Before any ambiguity-prone external operation, intent must persist target-bound correlation identity sufficient to distinguish the new operation from historical equal-content operations.

At minimum where available, bind intent/operation ID, message/dispatch/milestone, target authority/resource identity, payload/mutation hash, durable pre-attempt target boundary, attempt lineage, and provider idempotency/correlation key where supported.

Repeated text such as `verify & next`, timestamps alone, or current composer/DOM state are not sufficient correlation evidence.

Missing unique correlation after an ambiguous attempt stays fail-closed and does not authorize resend/retry.

## 17. BrowserRelay boundary

BrowserRelay is a transport adapter, never Architect authority.

Worker dispatch transport may send only the compact governed locator/envelope defined by the active protocol. The worker must resolve canonical GitHub authority independently.

Architect BrowserRelay is a one-way doorbell. It may send only the governed wake text for normal review and must not parse Architect assistant responses, scrape decisions, copy next prompts, or derive authority from DOM text.

Browser transport must preserve exactly-once intent/result/reconciliation semantics and current session identity gates.

## 18. Schema compatibility

All machine-routable Orchestrator records must declare/resolve a supported record type and schema version.

Unknown record types, unsupported major versions, ambiguous protocol family, or missing required compatibility metadata fail closed.

No automatic schema migration/normalization is allowed at an authority boundary unless a separately authorized migration contract exists.

## 19. Evidence, acceptance, preservation, documentation, and idea continuity

Executor terminal result is evidence, not acceptance.

Architect independently verifies the newest valid unconsumed result and classifies it.

Accepted source must be durably externally preserved before another implementation milestone begins, unless Architect/Rony explicitly handles an exception.

Historical states remain immutable in meaning. An `AMBIGUOUS` delivery may later have a separate reconciliation proving `SENT`; the old record remains `AMBIGUOUS`.

After an accepted milestone, material blocker/recovery boundary, or material Rony directive, Architect independently determines both:

- `documentationImpact = NONE | STATE | FULL` using the fixed semantic test;
- `futureIdeaImpact = NONE | CAPTURE | PROMOTE`.

For `STATE` or `FULL`, the next mutating implementation dispatch must not be published before required documentation changes are written and read back.

For `CAPTURE` or `PROMOTE`, Architect updates the appropriate future-intent surface without implying current implementation authority.

## 20. Business/product state vs orchestration state

Keep product progress separate from orchestration mechanics and future intent.

Examples:

- product/business: feature NOT STARTED / IN TESTING / COMPLETED / DEPLOYED
- orchestration: Executor running / awaiting Architect / BLOCKED / reconciliation required / human authority required
- future intent: PROPOSED / ADOPTED_FOR_FUTURE / SCHEDULED / IMPLEMENTED

A transport/governance milestone passing does not imply application/business work is complete. An idea/roadmap entry does not imply work is authorized or implemented.

## 21. Cold start and recovery

Correctness-critical authority must not exist only in process memory, browser memory, local terminal output, local clone state, or ChatGPT conversation memory.

A fresh Architect/Executor environment must reconstruct the next legal action from durable GitHub evidence plus the bootstrap, project policy, accepted source/profile records, and canonical human-readable project projection.

At cold start Architect MUST read:

- `governance/ORCHESTRATOR_BOOTSTRAP.md`;
- `governance/PROJECT_ORCHESTRATION_POLICY.md`;
- `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md`;
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md`;
- current durable authority and relevant current-state/future-intent surfaces.

A cold-start Architect must recognize:

- Curator is not an active role;
- Architect owns canonical documentation and future-intent projection directly;
- every review/directive requires a documentation-impact decision using the fixed semantic test, not intuition or milestone status alone;
- every review/material future discussion requires a future-idea-impact decision;
- `STATE`/`FULL` documentation closure precedes the next mutating implementation dispatch;
- `IDEA_INBOX` and `ROADMAP` are future-intent surfaces, not authority/current truth;
- machine evidence remains authority over Markdown;
- unfinished intent or uncertain external side effects enter reconciliation before retry.

Human-readable docs must make the current accepted operational picture and preserved future intent understandable without confusing them, but they never replace the durable evidence chain.

## 22. Future AFFOTECH integration boundary

AFFOTECH integration is **NOT AUTHORIZED** by this policy.

When Rony explicitly authorizes future integration, the first stage should be shadow qualification:

- existing AFFOTECH relay remains authoritative;
- Orchestrator observes only the expressly authorized evidence surface;
- Orchestrator predicts what it would dispatch/do;
- Orchestrator performs zero AFFOTECH mutation;
- disagreement fails closed.

Only repeated agreement plus a later explicit Rony decision may authorize transport ownership or mutation integration.

## 23. Required companion files for reusable projects

This Orchestrator owns the canonical universal bootstrap. New governed application projects should include:

- pinned `ORCHESTRATOR_BOOTSTRAP.md` snapshot/reference with upstream version/hash;
- project-owned `PROJECT_ORCHESTRATION_POLICY.md` stating inheritance;
- a fixed Architect documentation semantic-test procedure equivalent to `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md`;
- `AGENTS.md` referencing both rather than duplicating the entire governance kernel where applicable;
- `config/project-profile.json` (or equivalent) binding bootstrap version/hash, project-policy path/hash, protocol family, repositories, roles, documentation policy, future-idea policy, and protected resources;
- dedicated human-readable future-intent surfaces equivalent to `IDEA_INBOX` and `ROADMAP` when the project has nontrivial future work.

The universal default is Architect-direct documentation/future-intent ownership. A downstream project may choose a different documentation worker arrangement only by explicit Human Final Authority/project-policy decision; it must not silently weaken Architect semantic ownership or closure.

## 24. Document precedence inside this project

For the Orchestrator project:

1. Rony's explicit current instruction;
2. `governance/ORCHESTRATOR_BOOTSTRAP.md`;
3. this `governance/PROJECT_ORCHESTRATION_POLICY.md` plus its required fixed semantic-test procedure;
4. durable Architect decision/current control state;
5. canonical Architect prompt/dispatch;
6. worker-local choices.

Human-readable docs remain detailed project specifications and projections. `IDEA_INBOX` and `ROADMAP` are lower-authority future-intent projections and never override machine evidence, accepted architecture/current state, or dispatch authority.

Where a true conflict exists between an older document and newer explicit Rony-approved governing evidence/policy, Architect must reconcile the documentation directly rather than guessing or delegating the conflict away.

## 25. Current project posture

Current governing posture:

- Orchestrator control/evidence work continues under canonical GitHub authority;
- persistent Orchestrator is intended to operate independently as deterministic infrastructure once qualified;
- Architect directly and persistently maintains all relevant project documentation and future-intent surfaces;
- documentation impact is classified `NONE`, `STATE`, or `FULL` after each review/material Rony directive using `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md`;
- future idea impact is independently classified `NONE`, `CAPTURE`, or `PROMOTE`;
- required `STATE`/`FULL` documentation sync/readback precedes the next mutating implementation dispatch;
- material future ideas are captured/promoted through `docs/IDEA_INBOX.md` and `docs/ROADMAP.md` without creating implementation authority;
- Curator is eliminated from the active model; no Curator terminal or transport proof is required;
- protocol-family separation and durable correlation identity remain mandatory;
- AFFOTECH integration/access remains unauthorized;
- accepted source remains separately governed from runtime qualification;
- productive Orchestrator work should continue without documentation-relay or idea-capture ceremony that provides no material continuity value.
