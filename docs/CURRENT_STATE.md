Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000178 and canonical ORCH-000179
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 2. Proven foundations

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005/SENT` exactly once.
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: automatic newer-dispatch observation proved.
- ORCH-000170: preparation needs explicit disposable worker-delivery ID.
- ORCH-000173: prior expired lease closed.
- ORCH-000177: exact HTTP-status/gh-exit adapter defect isolated.

## 3. ORCH-000178 — BLOCKED after successful acquisition

Decision:

`GH-DEC-178-WORKER-DELIVERY-LEASE-ACQUISITION-ACCEPTED-CONTINUATION-BLOCKED`

Publication:

`GH-PUB-178-WORKER-DELIVERY-HTTP-STATUS-PRESERVING-PREFLIGHT-INCOMPLETE-000001`

Verified facts:

- corrected adapter preserved actual HTTP `404` separately from `ghExitCode=1`;
- read-only status qualification passed;
- one lease acquisition succeeded and became durably ACTIVE/indexed at epoch `186`;
- lease ID `MUTATION-LEASE-HOST-553f5ff7a8db44a8bf8bbf091309bb19`;
- revision `000001` reads back `ACTIVE`;
- temporary launcher terminated before preparation;
- preparation count `0`;
- delivery `000014` intent/result absent;
- lease was released exactly once through normal accepted release;
- revision `000002` reads back `RELEASED`;
- final index revision `372`;
- next lease epoch `187`;
- active lease count `0`;
- latest delivery `000013/SENT`;
- browser contact/send `0/0`;
- no host, trigger, source, or protected-resource mutation.

No source patch is required by current evidence.

## 4. Current authority — ORCH-000179

Milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.WORKER.DELIVERY.CONTINUOUS.ACQUIRE.PREPARE.PROVEN.NOT.SENT.RELEASE.PREFLIGHT.1A`

ORCH-000179 begins from:

- index revision `372`;
- nextLeaseEpoch `187`;
- `activeLeases=[]`;
- delivery `000014` absent;
- latest delivery `000013/SENT`;
- trigger `000005/SENT`.

One disposable launcher must execute the successful path continuously:

`ACQUIRE → PREPARE → PROVEN_NOT_SENT → RELEASE`.

It may acquire one epoch-187 worker-delivery lease, must immediately continue to exact `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014`, require one durable PREPARED intent, reconcile it as PROVEN_NOT_SENT/NOT_SENT without browser contact, and normally release the lease.

Success requires final active leases `0`, latest delivery still `000013/SENT`, browser contact/send `0/0`, and source unchanged.

## 5. Documentation ownership

Policy: `ARCHITECT_DIRECT`.
