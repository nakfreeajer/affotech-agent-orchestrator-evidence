# ORCH-000140 Executor terminal report

Status: BLOCKED.

One fresh independent host composition allocated and durably created:

- host: `HOST-INSTANCE-SANDBOX-92b944aed79e8f6d`;
- generation: `HOST-GEN-SANDBOX-92b944aed79e8f6d`;
- fresh delivery allocator value: `WORKER-DELIVERY-EXECUTOR-FRESH-92b944aed79e8f6d`.

The accepted pre-dispatch validator stopped the host with
`DISPATCH_FIELD_INVALID`. Read-only comparison of the immutable
DISPATCH-000140 shows that it lacks `expectedMutationEnvelopeSha256`, a
field required by the accepted runtime for governance and mutation-lease
binding. No lease was acquired, no intent was created, and no BrowserRelay
contact or send occurred.

LATEST_DELIVERY remains `WORKER-DELIVERY-EXECUTOR-000004 / SENT`. No retry or
manual workaround was attempted. The dispatch record was not modified.

No source, test, config, documentation, README, governance, accepted-source,
Curator, worker-delivery, worker-result, browser, Architect, AFFOTECH, Drive,
deployment, private-data, or protected-port state was mutated.
