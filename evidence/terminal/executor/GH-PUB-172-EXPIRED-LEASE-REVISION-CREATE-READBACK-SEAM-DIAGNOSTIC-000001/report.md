# ORCH-000172 read-only diagnostic

The accepted GitHub Contents client was used by ORCH-000171. The expiry path
attempts `PUT /repos/nakfreeajer/affotech-agent-orchestrator-evidence/contents/evidence/host-runtime/mutation-leases/MUTATION-LEASE-HOST-97e204bd87c1b341df79b1d787987f98/revisions/000002.json`, followed by exact JSON read-back. Its normalized failure is
`AMBIGUOUS/POST_MUTATION_ABSENT`; `github-runtime-ports.js` collapses that to
`EXPIRED_LEASE_RECONCILIATION_RECORD_AMBIGUOUS`. The lower gh error was not
preserved by the disposable wrapper.

Classification: `ERROR_PROPAGATION_ONLY_GAP`. No path, payload, schema, or
accepted runtime create defect is proven. The exact projected revision is
deterministically valid, and the path is the accepted lease-revision path.

Current state is unchanged: revision 000002 absent, index revision 369 with
the expired target lease still active, delivery 000013 SENT, no delivery
000014, and Architect trigger 000005 SENT. No retry or mutation was made.
