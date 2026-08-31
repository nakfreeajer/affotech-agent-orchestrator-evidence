# ORCH-000187 Executor Terminal

The historical `orch-000185-reconcile.mjs` launcher is absent, so its SHA and actual arguments are unavailable. A disposable mutation-disabled reproduction using the full immutable epoch-189 lease captured the call shape, validated the lease, constructed a valid EXPIRED revision, awaited the result, and stopped at the first would-be revision-000002 `createJson` mutation.

Classification: `PROJECTION_SUCCEEDS_WITH_STUBBED_REAL_CALLER`. No real reconciliation call or mutation occurred. The disposable harness was removed. `safe_reconciliation_retry=false`.
