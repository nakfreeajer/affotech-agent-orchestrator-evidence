# ORCH-000144 Executor terminal report

Status: BLOCKED.

The accepted call path was traced as:

`createGitHubRuntimePorts.publishHostIdentity` ->
`client.createJson` -> injected child-process request for the GitHub
Contents API. Readback is `client.readJsonCurrent` through the branch-head
and exact Contents read path. No local git persistence is in this path.

The exact accepted project profile passed SHA and validation. A bounded
read-only GitHub request succeeded before the one authorized write. The one
host-identity PUT for
`evidence/host-runtime/instances/HOST-INSTANCE-SANDBOX-000020/identity.json`
returned HTTP 400, exit code 1. The temporary `gh api` adapter sent JSON to
stdin but omitted the required `--input -` argument, so GitHub did not receive
the request body. This is the concrete write-path blocker.

Same-client and independent reads both returned HTTP 404. No second create
was attempted. No lease, worker delivery, BrowserRelay, Architect, source,
test, configuration, governance, AFFOTECH, Drive, deployment, private-data,
or protected-port state was mutated.
