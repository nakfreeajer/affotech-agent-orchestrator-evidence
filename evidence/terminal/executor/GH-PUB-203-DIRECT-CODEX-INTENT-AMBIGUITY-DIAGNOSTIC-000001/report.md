# ORCH-000203 Executor diagnostic report

Classification: `DIRECT_CODEX_INTENT_AMBIGUITY_OBSERVABILITY_INSUFFICIENT`

All read-only gates passed. The stranded ORCH-000202 direct invocation intent exists with exact lineage and state `ARMED`; its result is absent; the expected probe terminal is absent. No stranded evidence was reconciled, deleted, overwritten, or terminalized.

Accepted source call chain:

1. `createCodexDirectTransport.send()` derives the invocation and intent paths.
2. It calls `client.createJson(intentPath, intent)`.
3. It accepts only `CREATED`, `IDEMPOTENT`, or `OK`.
4. It calls `client.readJsonCurrent(intentPath)` and compares the exact returned value with the intent.
5. Only after both checks does it call `spawnChild(command)`.

The durable ORCH-000202 parent evidence records only `INTENT_AMBIGUOUS`, child invocation count 0, and the eventual `ARMED` intent. It does not preserve the production `createJson` return status/reason or any readback exception/mismatch. Therefore the exact cause cannot be distinguished between an ambiguous post-write GitHub transport result and an exact readback normalization/observation failure. The durable intent proves the write eventually existed, but does not identify which adapter branch returned the ambiguity.

Mutation-disabled reproduction confirms that an ambiguous create response yields `INTENT_AMBIGUOUS` with spawn count 0 while a `CREATED` response with exact readback proceeds to the child boundary. No child was spawned in this diagnostic.

Minimum later repair boundary: instrument or preserve the production `createJson` status/reason and exact post-write readback outcome in `src/host/codex-direct-transport.js` and/or `src/host/github-contents-runtime-client.js`, with focused tests. Do not mutate the stranded intent until Architect authorizes a specific reconciliation action.

All protected activity remained zero: child/model invocation, host, BrowserRelay/browser, worker delivery, registration, lease, Architect trigger, source/test/config/docs/governance, AFFOTECH, Drive, deployment, private data, and ports 9222/9223.
