# ORCH-000168 read-only diagnostic

Dispatch `DISPATCH-000168` completed as a read-only diagnostic.

Classification: `COMPOSITION_WIRING_DEFECT`.

The accepted runner reaches `HOST_DELIVERY_READY`, calls the injected
`prepareWorkerDeliveryIntent` seam, and requires a durable `PREPARED` intent
before it permits `sendWorkerDelivery`. The accepted transport also refuses a
send without that prepared intent. The host-000026 launcher statically binds
the preparation function, but the durable ORCH-000167/000168 events prove that
the effective preparation composition returned no durable intent; the runner
then released/reconciled and stopped before browser contact. The accepted
runner did not preserve a narrower preparation error, so the exact runtime
subcomponent cannot be identified without a repair/diagnostic change.

Lease interpretation: the host derives the worker-delivery lease from the
action, lineage, resource scope, and `evaluateMutationLeaseUse`. The dispatch
metadata declaring `mutationLeaseRequired=false` did not override that host
action boundary and is inconsistent with the effective worker-delivery
contract.

Smallest next boundary is a disposable launcher/composition repair that makes
preparation durable and read-back verifiable, followed by a fresh authorized
qualification. No source, dispatch metadata, host process, delivery, trigger,
lease, or browser repair was performed here.

Current state remains delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`, Architect
trigger `ARCH-TRIGGER-9333-000005/SENT`, no delivery 000014, no trigger 000006,
and zero active leases. Existing host PID 16880 remained running and was not
restarted or stopped.

Mutation/access accounting: source 0; tests/config/docs/governance 0; host
process mutation 0; worker delivery 0; Architect trigger 0; lease mutation by
this diagnostic 0; browser contact/send 0; assistant text/DOM read false;
AFFOTECH, Drive, deployment, private data, and protected ports 0.
