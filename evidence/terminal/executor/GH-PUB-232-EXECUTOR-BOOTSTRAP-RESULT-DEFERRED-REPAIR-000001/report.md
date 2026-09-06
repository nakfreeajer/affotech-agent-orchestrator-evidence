# Executor terminal report

Added the durable `AFFOTECH_EXECUTOR_BOOTSTRAP.md` cold-start context and prepend it to the exact verified relay manifest prompt before Codex stdin. The original relay `contentSha256` remains validated against the original immutable manifest body; the combined bootstrap-plus-task stdin is not used as the relay hash.

Completed Codex results are now persisted locally before Architect submission. Composer readiness is bounded and submission errors are converted to `STATE=RESULT_PENDING` / `RESULT_SUBMISSION_DEFERRED`; Codex is not retried. Restart recovery submits the preserved result first and marks the relay key completed only after successful submission.

Focused Python tests: 47 passed, 0 failed. Node deterministic suite: 157 passed, 0 failed. Python compile passed.

Reconciliation of the reported real run: local state still records `PUB-7b95fc3b8a8345d69474a97dffdd15c7` in flight, with reported PID 23120 and exit 0, but no positively correlated captured result artifact was found. The state was not rewritten and the publication was not rerun. Repaired startup will fail closed as `RECOVERY_REQUIRED` until reconciliation supplies a result.

No AFFOTECH, relay, Architect prompt, deployment, Drive, business/private data, port 9222, BrowserRelay/9444, worker, or lease mutation occurred.
