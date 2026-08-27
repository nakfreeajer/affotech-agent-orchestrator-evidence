Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-classified ORCH-000171 and canonical ORCH-000172
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source

`GH-PUB-165-WORKER-DELIVERY-LEGACY-LINEAGE-HYDRATION-REPAIR-READY-000001`

Qualification: 101 files; focused `65/65`; GitHub runtime ports `43/43`; BrowserRelay transport ports `22/22`; full deterministic `817/817`.

## 2. Proven foundations

- ORCH-000153: forward delivery `WORKER-DELIVERY-EXECUTOR-000013 / SENT` exactly once.
- ORCH-000163: Architect wake `ARCH-TRIGGER-9333-000005 / SENT` exactly once.
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: automatic newer-dispatch observation proved.
- ORCH-000170: preparation blocker classified `COMPOSITION_ADAPTER_DEFECT`; accepted source does not currently require repair for that seam.

## 3. ORCH-000171 — INCONCLUSIVE

Decision:

`GH-DEC-171-EXPIRED-WORKER-DELIVERY-LEASE-RECONCILIATION-INCONCLUSIVE`

Publication:

`GH-PUB-171-EXPIRED-WORKER-DELIVERY-LEASE-RECONCILIATION-INCONCLUSIVE-000001`

One exact accepted `reconcileExpiredMutationLease` call ran after all prescribed preconditions passed. It returned:

`AMBIGUOUS / EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`.

Fresh readback proves:

- revision `000002` absent;
- mutation-lease index revision still `369`;
- target lease still indexed `ACTIVE` though expired;
- active lease count `1`;
- no new lease acquisition;
- no host process mutation;
- browser contact/send `0/0`;
- no delivery or trigger mutation;
- no source/test/config/docs/governance mutation.

This is not a partial recovery. The call produced no durable lease-state advancement, and no retry is authorized.

## 4. Current transport baseline

- `LATEST_DELIVERY = WORKER-DELIVERY-EXECUTOR-000013 / SENT`.
- delivery `000014` absent.
- `LATEST_ARCHITECT_TRIGGER = ARCH-TRIGGER-9333-000005 / SENT`.
- trigger `000006` absent.
- no accepted persistent replacement host is running.

## 5. Current lease blocker

`MUTATION-LEASE-HOST-97e204bd87c1b341df79b1d787987f98`

- epoch `185`;
- revision `1`;
- index revision `369`;
- bound to `ORCH-000169 / DISPATCH-000169`;
- expired but indexed `ACTIVE`;
- revision `000002` absent.

The immutable binding was previously proven correct. The unresolved issue is now the durable create/readback path for reconciliation revision `000002`.

## 6. Current authority — ORCH-000172

Milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.EXPIRED.LEASE.REVISION.CREATE.READBACK.SEAM.DIAGNOSTIC.1A`

ORCH-000172 is manual/read-only. It must identify the concrete createJson/client path used by ORCH-000171, the exact lower-level failure or error-propagation gap, compare it with known-good GitHub durable creates, and classify the smallest repair boundary.

No reconciliation call, lease/index/revision mutation, new lease, host action, browser contact, delivery/trigger mutation, tracked source patch, AFFOTECH, Drive, deployment, tenant or private/protected resource activity is authorized.

## 7. Documentation ownership

Policy: `ARCHITECT_DIRECT`.
