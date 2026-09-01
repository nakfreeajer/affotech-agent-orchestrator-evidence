{
  "schemaVersion": "1.0",
  "recordType": "EXECUTOR_TERMINAL_REPORT",
  "publicationId": "GH-PUB-193-EXPIRED-LEASE-STATUS-PRESERVING-RECONCILIATION-000001",
  "content": "# ORCH-000193 Executor Terminal\n\nThe status-preserving adapter proved HTTP 200/EXISTING_JSON for the immutable lease and HTTP 404/NOT_FOUND for revision 000002. One corrected-caller reconciliation was awaited completely.\n\nResult: EXPIRED_WORKER_DELIVERY_LEASE_RECONCILED_WITH_STATUS_PRESERVING_READ_ADAPTER; runtime outcome=EXPIRED_RECONCILED. Post-readback proves revision 000002 exists and the lease index is revision 378 with 0 active leases. No retry or unrelated mutation occurred.\n"
}
