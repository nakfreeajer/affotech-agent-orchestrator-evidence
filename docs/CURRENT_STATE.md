Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000170 and canonical ORCH-000171
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
- ORCH-000166: persistent host `000026` safely armed/idle.
- ORCH-000167: automatic newer-dispatch observation proved.

## 3. ORCH-000170 diagnostic — ACCEPTED

Decision:

`GH-DEC-170-PREPARATION-AND-EXPIRED-LEASE-DIAGNOSTIC-ACCEPTED`

Publication:

`GH-PUB-170-PREPARATION-AND-EXPIRED-LEASE-AMBIGUITY-DIAGNOSTIC-000001`

### Preparation conclusion

Classification: `COMPOSITION_ADAPTER_DEFECT`.

Host `000027` omitted the worker-delivery ID required by accepted transport. The accepted resolver uses `expectedFreshWorkerDeliveryId` or factory option `workerDeliveryId`; the disposable launcher had neither. Stable reason: `WORKER_DELIVERY_ID_REQUIRED`.

No source repair is proven necessary. Later preparation recovery should inject `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` into the disposable launcher and retain the real GitHub persistence adapter.

### Lease conclusion

Classification: `RECONCILIATION_RECORD_CREATION_AMBIGUOUS`.

The ORCH-000169 expiry-reconciliation binding was correct. Revision `000002` was not durably created/read back, so the index correctly remains fail-closed with the expired revision-1 lease active.

Current lease:

`MUTATION-LEASE-HOST-97e204bd87c1b341df79b1d787987f98`

- epoch `185`;
- revision `1`;
- index revision `369`;
- bound to `ORCH-000169 / DISPATCH-000169`;
- state `ACTIVE` but expired;
- revision `000002` absent.

The two causes are independent.

## 4. Current transport baseline

- `LATEST_DELIVERY = WORKER-DELIVERY-EXECUTOR-000013 / SENT`.
- delivery `000014` absent.
- `LATEST_ARCHITECT_TRIGGER = ARCH-TRIGGER-9333-000005 / SENT`.
- trigger `000006` absent.
- no accepted persistent host is currently running.

## 5. Current authority — ORCH-000171

Milestone:

`ORCH.P0.SANDBOX.OPERATIONAL.UNATTENDED.CYCLE.EXPIRED.WORKER.DELIVERY.LEASE.EXACT.RECONCILIATION.1A`

ORCH-000171 authorizes exactly one accepted `reconcileExpiredMutationLease` call for the ORCH-000169 lease, after unchanged-index and absent-revision-000002 checks.

Success requires durable revision `000002`, exact lineage/readback, one index CAS removing only that lease, and `activeLeases=[]`.

No new lease, preparation retry, delivery/trigger mutation, host process action, browser contact/send, source/test/config/docs/governance mutation, AFFOTECH, Drive, deployment or private/protected resource activity is authorized.

If reconciliation becomes ambiguous again, Executor must not retry and must return `INCONCLUSIVE`.

## 6. Documentation ownership

Policy: `ARCHITECT_DIRECT`.
