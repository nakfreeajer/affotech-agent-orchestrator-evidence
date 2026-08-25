# ORCH-000142 Executor terminal report

Status: BLOCKED.

The exact accepted `config/project-profile.json` was read from the accepted
ORCH-000130 snapshot. Its file SHA-256 matched
`9dfa27073a9086f25fff133603a63bcbfebdfc43bbe4e208c712e41595df63f8`, and the
accepted validator returned `PROJECT_PROFILE_SUPPORTED`. The read-only
pre-dispatch validation returned `PRE_DISPATCH_ELIGIBLE`.

One live host attempt then requested the required worker-delivery lease. The
lease acquisition outcome was ambiguous. The accepted runner performed one
read-only lease reconciliation and stopped. No delivery intent was written,
no BrowserRelay contact or send occurred, and no retry was attempted.

Reconciliation confirms the fresh host identity and delivery 000009 are
absent, the lease index has zero active leases, and `LATEST_DELIVERY` remains
`WORKER-DELIVERY-EXECUTOR-000004 / SENT`.

No source, test, config, documentation, README, governance, accepted-source,
Curator, worker-delivery, worker-result, Architect, AFFOTECH, Drive,
deployment, private-data, or protected-port state was mutated. Assistant
response text and response DOM were not read.
