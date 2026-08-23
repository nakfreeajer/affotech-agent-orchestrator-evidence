# Executor terminal report

Classification: `ORCHESTRATOR_EXPIRED_WORKER_DELIVERY_LEASE_RECONCILIATION_BLOCKED`

The exact stale lease was verified: `MUTATION-LEASE-HOST-bfc33fa29e6a4f025312baed48f38ac8`, revision 1, epoch 6, ORCH-000118/DISPATCH-000118, worker-delivery scope, indexed active but expired. Delivery 000005 remains `ARMED` without a result, and `LATEST_DELIVERY` remains 000004 SENT.

The accepted read-only lease reconciliation returned `ACQUIRED_RECONCILED`. The exact release attempt was rejected by the existing contract as `DENIED / LEASE_EXPIRED`; the lease remains indexed active. The existing `reconcileLeaseRelease` path is read-only and cannot retire the stale indexed lease. Retiring this state requires a future bounded contract repair in the runtime/governance lease path and corresponding tests. No source repair was authorized here.

No host, browser, resend, delivery/result, or other external mutation occurred. AFFOTECH, Drive, deployment, private-data, and protected-port access were zero.
