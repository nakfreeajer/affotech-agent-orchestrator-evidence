# ORCH-000186 Executor Terminal

The mutation-disabled pure harness executed the accepted projection gate with the full immutable epoch-189 lease. The target validated and the projected revision 000002 was valid EXPIRED. Therefore the accepted schema/projector is not shown defective.

The actual ORCH-000185 invocation cannot be reconstructed field-by-field from durable evidence: its lease argument, previous-record hash, nowMs, releasedBy, await resolution, and inner failure were not persisted. The outer `EXPIRED_LEASE_RECONCILIATION_PROJECTION_INVALID` is therefore classified as `OBSERVABILITY_INSUFFICIENT`. No reconciliation call or mutation was made in this milestone; `safe_reconciliation_retry=false`.
