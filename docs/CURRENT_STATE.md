Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000181 and canonical ORCH-000182
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 2. Proven foundations

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once.
- ORCH-000166/167: persistent host idle and automatic newer-dispatch observation proven.
- ORCH-000170: explicit disposable worker-delivery ID requirement identified.
- ORCH-000173: prior expired lease closed.
- ORCH-000177/178: HTTP-status adapter plus accepted lease acquire/release proven.
- ORCH-000179: transient BrowserRelay authorization requires `actionKind=WORKER_DELIVERY`.

## 3. ORCH-000181 — BLOCKED

Decision:

`GH-DEC-181-WORKER-DELIVERY-IN-PROCESS-PREFLIGHT-EXPIRED-LEASE-BLOCKED`

Publication:

`GH-PUB-181-WORKER-DELIVERY-IN-PROCESS-PREFLIGHT-BLOCKED-000001`

Verified facts:

- one epoch-189 lease acquisition succeeded and became ACTIVE/indexed;
- lease ID `MUTATION-LEASE-HOST-8af1857f183a9d267184b29c1a5eb1e0`;
- transient `actionKind=WORKER_DELIVERY` was constructed;
- preparation call count `0` because the process terminated before the call;
- action-kind-enriched preparation therefore remains untested;
- delivery `000014` intent/result absent;
- browser contact/send `0/0`;
- by readback the lease was expired;
- normal release was correctly not attempted after expiry;
- no expiry reconciliation was performed;
- current index revision `377`;
- nextLeaseEpoch `190`;
- active lease count `1`, exactly the expired ORCH-000181 lease;
- target revision `000002` absent;
- latest delivery `000013/SENT`;
- Architect trigger `000005/SENT`;
- source unchanged.

## 4. Current authority — ORCH-000182

Milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.EXPIRED.WORKER.DELIVERY.LEASE.EXACT.RECONCILIATION.2A`

This is recovery-only. Exactly one accepted `reconcileExpiredMutationLease` call is authorized against the exact epoch-189 lease and index revision `377`.

Success requires:

- durable/read-back revision `000002=EXPIRED`;
- one index CAS `377→378` removing only that lease;
- nextLeaseEpoch remains `190`;
- final `activeLeases=[]`;
- latest delivery remains `000013/SENT`;
- Architect trigger remains `000005/SENT`.

No new lease, preparation, delivery `000014`, browser, host, trigger, or source mutation is authorized.

## 5. Documentation ownership

Policy: `ARCHITECT_DIRECT`.
