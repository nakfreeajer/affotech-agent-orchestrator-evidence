# ORCH-000132 Executor terminal report

Status: BLOCKED

One fresh detached PowerShell host attempt was launched with HOST-INSTANCE-SANDBOX-000012 / HOST-GEN-SANDBOX-000012. The host identity and terminal circuit event were durably recorded. The first and only blocker was `HOST_IDENTITY_INVALID`: the accepted `runPersistentHost` contract requires an integer `input.nowMs`, and the temporary launcher omitted that host input while supplying timestamps only to injected ports.

The host failed before lease acquisition, intent preparation, BrowserRelay contact, or send. WORKER-DELIVERY-EXECUTOR-000007 was not created. LATEST_DELIVERY remains WORKER-DELIVERY-EXECUTOR-000004 / SENT. The host process exited and no retry was attempted, as required by the bounded one-attempt prompt.

No tracked source, tests, configuration, Architect session, AFFOTECH, Drive, deployment, private-data, or protected-port state was accessed or mutated.
