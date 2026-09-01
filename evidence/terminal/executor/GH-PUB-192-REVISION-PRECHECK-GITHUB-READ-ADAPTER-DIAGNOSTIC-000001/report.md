{
  "schemaVersion": "1.0",
  "recordType": "EXECUTOR_TERMINAL_REPORT",
  "publicationId": "GH-PUB-192-REVISION-PRECHECK-GITHUB-READ-ADAPTER-DIAGNOSTIC-000001",
  "content": "# ORCH-000192 Executor Terminal\n\nClassification: DISPOSABLE_ADAPTER_404_MAPPING_DEFECT.\n\nThe existing-path GET returned HTTP 200 with parseable JSON. The absent revision GET returned HTTP 404 with a parseable JSON error. The ORCH-000191 disposable gh subprocess shape surfaced only exit code 1, so it could not map the expected missing path to NOT_FOUND. The corrected awaited HTTP adapter preserves status and maps 404 to NOT_FOUND; the accepted client then handles the absent path as a normal create precheck.\n\nNo PUT, reconciliation, lease, delivery, browser, host, source, AFFOTECH, or Drive operation was performed.\n"
}
