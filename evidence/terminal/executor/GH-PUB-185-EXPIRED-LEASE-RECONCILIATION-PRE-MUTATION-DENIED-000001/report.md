# Executor terminal — ORCH-000185

Status: READY_FOR_ARCHITECT_REVIEW.

The hydrated immutable lease revision 000001 was validated and passed to the accepted reconciliation path exactly once. The path returned `EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID` before the first external write. Durable readback remains unchanged: lease-index revision 377, one active target lease, and no revision 000002.

Classification: `INVOCATION_REACHED_PREMUTATION_FAILURE`. A future single retry is safe only in a separately authorized milestone, using the full immutable lease record, awaiting the Promise, and serializing both success and caught-error outcomes.

No lease revision, lease-index, worker-delivery, browser, host, Architect-trigger, source, AFFOTECH, Drive, deployment, tenant, or business-data mutation occurred.
