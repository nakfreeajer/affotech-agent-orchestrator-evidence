# Executor terminal publication — ORCH-000164

Status: `BLOCKED`

The accepted persistent-host composition was started with host identity `HOST-INSTANCE-SANDBOX-000025` / generation `HOST-GEN-SANDBOX-000025`. The explicit bootstrap watermark for `DISPATCH-000164` was created and read back locally. The host reached one polling iteration, but the accepted GitHub runtime returned `WORKER_DELIVERY_LINEAGE_CONFLICT` while hydrating the existing current delivery.

The exact blocker is in `createGitHubRuntimePorts.readDurableSnapshot -> hydrateWorkerPointers.hydrateDelivery`: `WORKER-DELIVERY-EXECUTOR-000013/result.json` has no `messageId` or `dispatchId`, while the accepted hydrator requires those fields to match the immutable intent. Therefore no valid polling iteration, safe dispatch suppression proof, or two-iteration arming proof exists.

The partial host was stopped. No browser was contacted, no lease was acquired, no worker delivery or Architect trigger was mutated, and `DISPATCH-000164` was not sent. No speculative source or evidence repair was applied.

The temporary launch glue and runtime log remain outside the tracked source tree for diagnosis. Protected AFFOTECH, Drive, deployment, private-data, and ports 9222/9223 access or mutation: 0.
