Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000169 and canonical ORCH-000170
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Decision: `GH-DEC-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-ACCEPTED`.

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 2. Proven foundations

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005 / SENT` exactly once.
- ORCH-000166: persistent host `000026` accepted as safely armed/idle.
- ORCH-000167: host `000026` automatically observed a newer Architect dispatch without manual forwarding.
- ORCH-000168: accepted diagnostic proved the automatic preparation action already exists in accepted source and isolated the effective persistence/composition seam.

## 3. ORCH-000169 — BLOCKED

Architect decision:

`GH-DEC-169-PREPARATION-PREFLIGHT-AND-LEASE-AMBIGUITY-BLOCKED`

Executor publication:

`GH-PUB-169-PREPARATION-COMPOSITION-REPAIR-FRESH-HOST-ARM-BLOCKED-000001`

Verified facts:

- host `000026` was already absent before the recovery attempt;
- disposable host-000027 composition was adjusted to use GitHub-backed persistence;
- exactly one preparation call was made;
- preparation returned `FAILED_BEFORE_SEND` with `durableRecorded=false`;
- delivery `WORKER-DELIVERY-EXECUTOR-000014` intent/result remains absent;
- browser contact/send remained `0/0`;
- `sendWorkerDelivery` was never reached;
- host `000027` identity was created and one launch attempt occurred;
- PID `16136` is not running; idle polls `0`; host `000027` is not armed;
- tracked source/test/config/docs/governance mutation by Executor remained `0`.

## 4. Current transport baseline

- `LATEST_DELIVERY = WORKER-DELIVERY-EXECUTOR-000013 / SENT`.
- delivery `000014` absent.
- `LATEST_ARCHITECT_TRIGGER = ARCH-TRIGGER-9333-000005 / SENT`.
- trigger `000006` absent.
- no accepted replacement persistent host is running.

## 5. Active mutation blocker

ORCH-000169 acquired one worker-delivery lease:

`MUTATION-LEASE-HOST-97e204bd87c1b341df79b1d787987f98`

Binding:

- epoch `185`;
- revision `1`;
- message `ORCH-000169`;
- dispatch `DISPATCH-000169`;
- scope `worker-delivery`;
- scope SHA `07b6820b70fd4b1378b8f8b515a8845c2758fa2f8b109e2b290a701e695768f8`;
- mutation-envelope SHA `cf7b580844e419c946a27e58139b16e0d9657a23480b238abe095750c77b7a74`.

The lease expired before cleanup. Release/expiry reconciliation returned `EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`, and the current lease index still lists this exact expired lease as `ACTIVE`.

This ambiguity blocks further mutation until reconciled through a newly authorized, evidence-supported recovery step.

## 6. Current authority — ORCH-000170

Milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.PREPARATION.FAILURE.AND.EXPIRED.LEASE.AMBIGUITY.DIAGNOSTIC.1A`

Dispatch:

`DISPATCH-000170`

ORCH-000170 is manual and read-only. It must independently determine:

1. the exact lower-level preparation failure and whether the smallest repair belongs to disposable composition, source error propagation, or the accepted persistence contract;
2. the exact cause of `EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`, whether any durable reconciliation record already exists, and the single safe later mutation that can close the lease.

No host/process mutation, browser contact/send, delivery/trigger mutation, lease/index/reconciliation mutation, source/test/config/docs/governance mutation, or AFFOTECH/Drive/deployment/private/protected-port activity is authorized.

## 7. Documentation ownership

Policy: `ARCHITECT_DIRECT`. Architect directly updates materially affected human-readable documentation. Curator is not an active required role.

## 8. Boundaries

- Architect session: `9333`.
- Executor session: `9444`.
- protected AFFOTECH ports: `9222/9223`.
- AFFOTECH System V2 Hybrid, AFFOTECH relay, Drive/business/private data, deployments and tenant resources remain separate and unauthorized.
