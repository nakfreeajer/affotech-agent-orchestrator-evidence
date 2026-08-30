Project: affotech-agent-orchestrator
Documentation sync boundary: through Rony documentation-governance directive and canonical ORCH-000182
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 2. Active role model

- Rony = final human authority.
- Architect = verification, governance, decisions, architecture, next bounded authority, and canonical documentation ownership.
- Executor = bounded implementation/runtime/test/validation work.
- Orchestrator = independent persistent deterministic control-plane service once qualified.
- Curator = eliminated from the active model; historical Curator evidence remains history only.

The Orchestrator independently executes accepted deterministic routing/state rules. It does not classify work, author documentation, or infer semantic authority.

## 3. Documentation closure — permanent rule

Governance files are now:

- `governance/ORCHESTRATOR_BOOTSTRAP.md` v1.2
- `governance/PROJECT_ORCHESTRATION_POLICY.md` v1.2
- `governance/PROJECT_MEMORY_EVENT_LEDGER_POLICY.md` v1.2

After every Architect review or material Rony directive, Architect must classify documentation impact as `NONE`, `STATE`, or `FULL`.

For `STATE` or `FULL`, every materially affected canonical document must be updated and durably read back before Architect publishes the next mutating implementation dispatch.

No Curator terminal is required. The current source does not yet require a dedicated machine documentation-closure marker; Architect ordering is the immediate governing enforcement mechanism.

## 4. Proven transport foundations

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once.
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: automatic newer-dispatch observation proved.
- ORCH-000170: preparation needs explicit worker-delivery ID in disposable composition.
- ORCH-000173: prior expired lease closed.
- ORCH-000177/178: HTTP-status adapter and accepted lease acquire/release proven.
- ORCH-000179: preparation reached; transient BrowserRelay authorization requires `actionKind=WORKER_DELIVERY`.

## 5. ORCH-000181 — BLOCKED with expired ACTIVE lease

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

## 6. Current authority — ORCH-000182

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

## 7. Documentation ownership

Policy: `ARCHITECT_DIRECT` with mandatory `NONE`/`STATE`/`FULL` impact classification and pre-next-mutation documentation closure.
