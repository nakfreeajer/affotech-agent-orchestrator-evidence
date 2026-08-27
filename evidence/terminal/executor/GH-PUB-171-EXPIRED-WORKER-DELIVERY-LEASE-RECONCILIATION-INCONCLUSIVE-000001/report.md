# ORCH-000171 lease recovery

The exact accepted `reconcileExpiredMutationLease` path was called once,
after all dispatch-specified preconditions passed. It returned
`AMBIGUOUS` / `EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`.

Post-readback proves revision 000002 does not exist, the lease index remains
revision 369 with the exact expired lease indexed `ACTIVE`, and active lease
count remains 1. No retry, new acquisition, host action, browser contact,
delivery mutation, or trigger mutation was performed.

Delivery remains `WORKER-DELIVERY-EXECUTOR-000013/SENT`; delivery 000014 and
Architect trigger 000006 remain absent. Protected access and source mutation
are zero. Architect decision is required before any next action.
