# ORCH-000092 Executor Report

State: BLOCKED before live host start.

Accepted source verification: transport 14/14; full suite 763/763; zero failures.

Blocker: PRE_DISPATCH_INVALID / DISPATCH_FIELD_INVALID. The authoritative DISPATCH-000092 record lacks milestoneId and expectedMutationEnvelopeSha256, both required by the accepted pre-dispatch validator. No values were inferred or synthesized.

Host identity, lease, worker delivery 000005, browser send, Architect trigger, and host-runtime mutations: 0. Ports 9222/9223/9333/9444 were not contacted.
