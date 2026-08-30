Project: affotech-agent-orchestrator
Documentation sync boundary: through Rony fixed documentation-semantic-test directive and canonical ORCH-000182
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 2. Active role model

- Rony = final human authority.
- Architect = verification, governance, decisions, architecture, next bounded authority, canonical documentation ownership, and material future-intent preservation.
- Executor = bounded implementation/runtime/test/validation work.
- Orchestrator = independent persistent deterministic control-plane service once qualified.
- Curator = eliminated from the active model; historical Curator evidence remains history only.

The Orchestrator independently executes accepted deterministic routing/state rules. It does not classify work, author documentation/ideas, or infer semantic authority.

## 3. Documentation decision model — fixed semantic test

Current governing files:

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.3
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.4
- `governance/ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md` v1.0
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.4

After every Architect review/material Rony directive, Architect must classify:

```text
documentationImpact = NONE | STATE | FULL
futureIdeaImpact    = NONE | CAPTURE | PROMOTE
```

Documentation impact is **not** chosen from intuition or milestone status. Architect must apply the fixed semantic procedure:

1. `TEST-1`: would leaving all current-truth documents unchanged make any canonical document false, materially incomplete/stale, or likely to mislead a fresh Architect/Executor into misunderstanding current truth, repeating a solved problem, or taking the wrong/illegal next action? If NO → `NONE`.
2. `TEST-2`: if YES, is the change only current operational/recovery position with no lasting accepted capability/contract/governance/reusable truth? If YES → `STATE`.
3. `TEST-3`: otherwise identify the lasting project truth that changed; accepted architecture/contract/governance/capability/production/security/business-rule/root-cause/lesson/current-requirement changes produce `FULL`.
4. For `STATE` or `FULL`, each plausible document is tested independently. Update a file only when leaving that file unchanged would make it false, materially incomplete, obsolete, misleading, hide a lesson it is responsible for, or materially endanger cold-start/recovery/implementation.

Therefore:

- `ACCEPTED` does not automatically mean documentation update;
- `BLOCKED` does not automatically mean no update;
- `FULL` does not mean rewrite every Markdown file;
- activity such as tests/retries/process starts does not by itself constitute project-truth change.

For required `STATE`/`FULL` changes, write/readback must complete before Architect publishes the next mutating implementation dispatch.

## 4. Future-idea continuity

For `CAPTURE` or `PROMOTE`, Architect preserves/promotes future intent through:

- `docs/IDEA_INBOX.md`
- `docs/ROADMAP.md`

Idea lifecycle:

`PROPOSED → ADOPTED_FOR_FUTURE → SCHEDULED → IMPLEMENTED`

Future-intent records create zero implementation authority and do not change current accepted behavior. Only independently accepted implementation can move an idea to `IMPLEMENTED` and promote its resulting truth into Current State/Architecture/History.

Current adopted future item:

`IDEA-0001 — Deterministic Architect documentation-closure marker` = `ADOPTED_FOR_FUTURE`.

It is intentionally deferred until the core unattended Orchestrator transport reaches production-candidate qualification.

## 5. Proven transport foundations

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once.
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: automatic newer-dispatch observation proved.
- ORCH-000170: preparation needs explicit worker-delivery ID in disposable composition.
- ORCH-000173: prior expired lease closed.
- ORCH-000177/178: HTTP-status adapter and accepted lease acquire/release proven.
- ORCH-000179: preparation reached; transient BrowserRelay authorization requires `actionKind=WORKER_DELIVERY`.

## 6. ORCH-000181 — BLOCKED with expired ACTIVE lease

Decision:

`GH-DEC-181-WORKER-DELIVERY-IN-PROCESS-PREFLIGHT-EXPIRED-LEASE-BLOCKED`

Verified facts:

- one epoch-189 lease acquisition succeeded;
- lease ID `MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0`;
- ACTIVE revision `000001` readback passed;
- transient `actionKind=WORKER_DELIVERY` was constructed;
- preparation call count `0`;
- action-kind-enriched preparation therefore remains untested;
- delivery `000014` intent/result absent;
- browser contact/send `0/0`;
- process terminated before preparation;
- lease expired;
- normal release was not attempted after expiry;
- no expiry reconciliation was performed by ORCH-000181;
- current index revision `377`;
- `nextLeaseEpoch=190`;
- active lease count `1`;
- source/host/trigger/protected-resource mutation remained zero.

## 7. Current authority — ORCH-000182

Milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.EXPIRED.WORKER.DELIVERY.LEASE.EXACT.RECONCILIATION.2A`

ORCH-000182 authorizes only the exact expired-lease recovery for the ORCH-000181 epoch-189 lease.

Required starting boundary:

- index revision `377`;
- nextLeaseEpoch `190`;
- exactly one active indexed lease;
- target revision `000002` absent;
- delivery `000014` absent;
- latest delivery `000013/SENT`;
- Architect trigger `000005/SENT`.

Required success:

- exactly one `reconcileExpiredMutationLease` call;
- immutable revision `000002=EXPIRED` with exact lineage to revision `000001`;
- index CAS `377→378` removing only the target lease;
- `nextLeaseEpoch` remains `190`;
- final `activeLeases=[]`;
- no new lease, preparation, delivery, browser, host, trigger, source, AFFOTECH, Drive, deployment, tenant, or private-data activity.

No preparation retry is legal until this recovery is accepted and the lease index is clean.

## 8. Documentation ownership

Policy: `ARCHITECT_DIRECT` with mandatory fixed semantic classification and future-intent continuity:

- `documentationImpact = NONE | STATE | FULL` via `ARCHITECT_DOCUMENTATION_SEMANTIC_TEST.md`
- `futureIdeaImpact = NONE | CAPTURE | PROMOTE`
