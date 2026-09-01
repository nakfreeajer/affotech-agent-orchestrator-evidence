# ORCH-000191 Executor Terminal

The one authorized reconciliation call passed typed-hash and pure projection gates, then returned `AMBIGUOUS / EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`. The first inner failure was the revision-000002 `createJson` precheck: the disposable adapter returned a gh exit code without semantic HTTP 404, so accepted `createJson` normalized it as `CREATE_PRECHECK_FAILED` before any PUT or index CAS.

Post-call GitHub read-back proves revision 000002 is absent and the lease index remains revision 377 with one active epoch-189 lease. No retry was performed. No lease revision/index, delivery, browser, host, Architect, source, AFFOTECH, Drive, or deployment mutation occurred.
