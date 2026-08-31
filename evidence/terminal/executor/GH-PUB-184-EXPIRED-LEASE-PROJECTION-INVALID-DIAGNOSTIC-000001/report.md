# ORCH-000184 Executor Terminal

The diagnostic found a `CALLER_ARGUMENT_DEFECT`. The target immutable lease revision is valid, but the prior caller supplied the reduced active-index entry to `projectMutationLeaseExpiryReconciliation`. The helper therefore fails its `validateMutationLease` guard with `RECORD_FIELDS_INVALID` before constructing a projected EXPIRED revision.

The historical ORCH-000169/ORCH-000173 control succeeds with the full immutable lease record. No reconciliation, lease, delivery, browser, host, source, AFFOTECH, Drive, or deployment mutation was performed. `safeReconciliationRetry=false`.
