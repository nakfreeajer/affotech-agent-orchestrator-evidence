# ORCH-000183 Executor Terminal

The one authorized `reconcileExpiredMutationLease` call was made against the exact epoch-189 lease and returned `DENIED` with `EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID`. Durable read-back remains lease-index revision 377, next epoch 190, with the target active; revision 000002 is absent.

No retry was made. No delivery, browser, host, Architect, source, AFFOTECH, Drive, or deployment side effect occurred. Architect decision is required before further recovery.
