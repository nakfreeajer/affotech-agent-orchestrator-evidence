# ORCH-000177 blocked

The durable trace-flush qualification passed before mutation. The one
authorized lease-acquisition call then returned `AMBIGUOUS` and stopped the
preflight before preparation.

The exact cause is `DISPOSABLE_ACQUISITION_CLIENT_ADAPTER_DEFECT`. The
candidate-path GET returned GitHub HTTP 404 with `gh` exit code 1 and safe
stderr `gh: Not Found (HTTP 404)`. The disposable adapter exposed only status
1 to the accepted client, so its `notFound()` predicate rejected the normal
missing-candidate response. `createJson` returned `CREATE_PRECHECK_FAILED`,
and `acquireMutationLease` returned `AMBIGUOUS` with a safe reconciliation
descriptor. No candidate PUT or lease-index CAS was issued.

GitHub read-back proves index revision 370, next epoch 186, zero active
leases, no orphan candidate, no delivery 000014 intent/result, and latest
delivery `WORKER-DELIVERY-EXECUTOR-000013/SENT`.

No retry, browser contact, host action, Architect trigger, source change, or
protected-resource access occurred. The smallest repair is limited to the
disposable adapter’s HTTP-status preservation; a fresh acquisition requires
Architect authorization.
