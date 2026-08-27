# ORCH-000170 read-only diagnostic

Preparation: `COMPOSITION_ADAPTER_DEFECT`. The accepted transport resolves
the delivery ID from `dispatch.expectedFreshWorkerDeliveryId` or the factory
option `workerDeliveryId`. The 000027 launcher supplied neither while the
dispatch exposed `expectedDeliveryId`; the accepted path returned
`FAILED_BEFORE_SEND` / `WORKER_DELIVERY_ID_REQUIRED`. The launcher logged only
status and durableRecorded, hiding the stable reasonCode. No intent or browser
contact occurred.

Lease: `RECONCILIATION_RECORD_CREATION_AMBIGUOUS`. The exact lease binding was
supplied. Expiry reconciliation attempted revision 000002, but no valid
record was durably created/read back; the accepted client/runtime returned
`EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`. The index correctly remained
fail-closed with the expired ACTIVE entry.

The causes are independent. The smallest preparation repair is disposable
launcher injection of `workerDeliveryId=WORKER-DELIVERY-EXECUTOR-000014` and
stable reason logging; no source repair is proven necessary. The only safe
later lease action is one exact accepted expiry reconciliation after unchanged
index and absent revision-000002 checks.

No retry, host action, lease action, delivery mutation, trigger mutation,
browser contact, source change, or protected-resource access was performed.
