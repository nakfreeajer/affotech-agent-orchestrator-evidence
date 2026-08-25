# ORCH-000151 Executor terminal report

Status: COMPLETED — composition defect proven.

Using the accepted ORCH-000130 pure helpers in memory, with
`nowMs=1787664848499`, the ORIGINAL_LEASE_BINDING exactly preserves the
ORCH-000148 lease origin and produces a valid revision-2 `EXPIRED` projection.
The projected `releasedBy` preserves ORCH-000148 / DISPATCH-000148 and the
original lease milestone, matching the successful ORCH-000138 control.

The RECOVERY_MILESTONE_BINDING using ORCH-000149 / DISPATCH-000149 and the
ORCH-000149 recovery milestone fails first at
`EXPIRED_LEASE_RECONCILIATION_BINDING_MISMATCH`. This identifies the narrow
temporary composition defect: the reconciliation request must bind to the
original lease lineage, not the recovery dispatch lineage.

No runtime writer was invoked. The target lease remains ACTIVE at revision 1;
revision 000002 remains absent. No host, lease, delivery, BrowserRelay, or
Architect operation occurred. All protected AFFOTECH, Drive, deployment,
private-data, and browser-port boundaries remained untouched.
