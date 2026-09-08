# ORCH_ARCHITECT_MEMORY_THRESHOLD_ROLLOVER_IMPLEMENTED

Architect rollover now uses an explicitly governed Windows process-tree working-set sample as its primary trigger at 1 GiB (1,073,741,824 bytes). The existing 30-completed-response rule remains as a fallback. Ownership is rooted by `ARCHITECT_BROWSER_ROOT_PID`; unrelated browser processes are excluded and ambiguous ownership is not terminated.

Threshold crossings are deduplicated, active generation is not interrupted, and old Architect preservation remains fail-closed until replacement activation succeeds. Python: 76 passed, 0 failed. Node: 158 passed, 0 failed. Compile: PASS.

The watcher was not started. No AFFOTECH Codex execution, AFFOTECH mutation, relay mutation, deployment, Drive, or business-data access occurred.
