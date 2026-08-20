# ORCH-000095 Executor Terminal Report

Status: `ORCHESTRATOR_SANDBOX_OPERATIONAL_HOST_LIVE_BLOCKED`

Fresh host `HOST-INSTANCE-SANDBOX-000002` / `HOST-GEN-SANDBOX-000002`
published successfully and the historical host identity 000001 remained
unchanged. The accepted runtime hydrated the stale delivery lineage, but its
pointer-only Executor registration was not hydrated from the immutable
registration record. Consequently `lifecycleInput.worker.active` was false
and the host stopped at `HOST_GOVERNANCE_DENIED`.

No lease was acquired, no browser message was sent, delivery 000005 was not
created, and no Architect trigger occurred. The host was stopped safely.

Source/test mutation, AFFOTECH, Drive, deployment, private-data, and ports
9222/9223 access were zero. No assistant-response text was read.
