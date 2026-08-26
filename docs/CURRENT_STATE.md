Project: affotech-agent-orchestrator
Documentation sync boundary: through Architect-accepted ORCH-000163 and Rony documentation-ownership directive of 2026-08-26
Status: CURRENT HUMAN-READABLE PROJECTION
Machine authority: durable GitHub evidence and Architect decisions

# Current State

## 1. Accepted source baseline

Current Architect-accepted source remains:

`GH-PUB-130-PROVEN-NOT-SENT-DELIVERY-RECONCILIATION-CONTRACT-REPAIR-READY-000001`

Accepted qualification:

- source files: `101`;
- worker relay: `148`;
- BrowserRelay transport ports: `21`;
- persistent host runner: `36`;
- GitHub runtime ports: `40`;
- full sharded suite: `813 passed / 0 failed / 0 skipped / 0 cancelled`;
- manifest SHA-256: `0f8916a74a1275be90f2ff1a10704f8f9c79793e1a63d8da81c7906e318ee5ad`;
- archive SHA-256: `79c36abd1ea108003baa737550210a71008a9a70a887c9a14c04aa533235f103`.

The accepted-source pointer has not advanced because ORCH-000131 through ORCH-000163 were live qualification, reconciliation, browser-relay repair, or control-plane proof rather than accepted source changes.

## 2. Latest Architect-accepted operational state

Latest Architect decision:

`GH-DEC-163-AUTOMATIC-ARCHITECT-DOORBELL-TRIGGER-000005-ACCEPTED`

Reviewed Executor publication:

`GH-PUB-163-ARCHITECT-TRIGGER-000005-SENT-000001`

Verified ORCH-000163 state:

- status: `COMPLETED`;
- trigger: `ARCH-TRIGGER-9333-000005`;
- trigger state: `SENT`;
- payload: exact `verify & next`;
- intent/result/pointer were durably created/read back;
- pre-send USER count: `2`;
- post-send USER count: `3`;
- pre-send matching payload count: `1`;
- post-send matching payload count: `2`;
- newly appended USER message: exact `verify & next`;
- composer empty after send: yes;
- attempted/confirmed send counts: `1/1`;
- second send count: `0`;
- duplicate replay count: `1`;
- duplicate replay additional send count: `0`;
- retry authorized: `false`;
- reconciliation required: `false`;
- assistant response text read: `false`;
- response DOM read: `false`;
- browser process launches/navigation: `0/0`;
- source/test/config/AFFOTECH/Drive/deployment/protected-port mutations/contact: `0`.

This is the first fully confirmed automatic Architect wake in the current chain.

## 3. Forward delivery state

ORCH-000153 previously proved the fresh Architect-governed forward delivery path to Executor:

- host: `HOST-INSTANCE-SANDBOX-000024`;
- delivery: `WORKER-DELIVERY-EXECUTOR-000013`;
- state: `SENT`;
- intent durable: true;
- result durable: true;
- exactly one browser send;
- duplicate replay second send: `0`;
- retry unauthorized;
- no Architect trigger in that milestone;
- protected boundaries remained clean.

`WORKER-DELIVERY-EXECUTOR-000013 / SENT` remains the latest proven forward-delivery anchor in this chain.

## 4. Architect relay state

The dedicated Architect relay is the Brave-based control session on CDP port `9333` under the durable Architect registration/authority evidence.

ORCH-000154 through ORCH-000162 established the necessary recovery/qualification facts:

- initial port 9333 absence was diagnosed rather than guessed;
- incorrect Chrome recovery was rejected;
- Brave ownership/process/debug-port diagnostics were performed;
- an exact dedicated Brave profile/listener was established;
- target/trigger ambiguity was reconciled without blind resend;
- historical trigger `000004` was ultimately proven not sent;
- a fresh trigger identity `000005` was used for the successful exactly-once send.

The return path is now accepted healthy at the transport-proof level.

## 5. What is now proven

The project has proven:

- a genuinely separate local Orchestrator process can be launched;
- GitHub Contents can act as durable runtime persistence instead of local git commit/push;
- host identity and mutation-lease state can be durably persisted;
- worker delivery intent can be persisted/read back before browser contact;
- stale/expired leases can be reconciled explicitly;
- a delivery can be terminalized as `PROVEN_NOT_SENT` without synthesizing `SENT`;
- no blind retry occurs after ambiguous transport;
- fresh forward delivery to Executor can be confirmed exactly once with duplicate suppression;
- a dedicated Brave Architect relay on 9333 can be qualified without using protected AFFOTECH ports;
- Architect-trigger ambiguity can be reconciled read-only;
- a fresh Architect trigger can append exact `verify & next` exactly once and be durably recorded as `SENT`;
- the Orchestrator can wake Architect without reading assistant response text/DOM;
- the Orchestrator itself does not need AI reasoning.

## 6. What remains

The main remaining objective is no longer basic forward delivery or basic Architect wake proof.

Remaining work should focus on the smallest reliable unattended governed cycle:

1. observe a new Architect-authorized dispatch durably;
2. deliver it to Executor exactly once;
3. observe the corresponding durable Executor terminal/result;
4. wake Architect exactly once;
5. allow Architect to verify/decide and publish the next governed state;
6. repeat without manual transport intervention while preserving all authority and ambiguity controls;
7. simplify/package the operational daemon only after the cycle is reliable.

A Curator transport/registration proof is **not** required under current policy because Architect now maintains documentation directly.

## 7. Documentation ownership

Current documentation policy: `ARCHITECT_DIRECT`.

Architect must directly update all materially affected human-readable project documents after accepted milestones and material Rony directives. Documentation must not remain stale merely because a separate Curator could theoretically be used.

Historical Curator evidence remains immutable and valid but is not part of the active workflow.

## 8. Current role/session boundaries

- Architect registered control session: port `9333`.
- Executor registered control session: port `9444`.
- Protected AFFOTECH ports: `9222`, `9223`.

The Orchestrator may carry exact governed messages only. It must not scrape assistant responses for decisions or authority.

## 9. AFFOTECH boundary

AFFOTECH System V2 Hybrid remains separate and protected. No current Orchestrator milestone authorizes AFFOTECH source, relay, Drive, tenant, deployment, business/private-data or protected-port mutation/access.
