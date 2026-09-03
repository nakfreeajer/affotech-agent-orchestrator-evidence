# ORCH-000206 Executor terminal report

Classification: `DIRECT_CODEX_ADAPTER_FRESH_TERMINAL_NOT_OBSERVED`

The fresh intent was created and read back exactly before the spawn boundary. Exactly one real Codex child was launched through the accepted direct-Codex adapter. It exited with code 0 and did not time out, but the required durable probe terminal `GH-PUB-206-DIRECT-CODEX-LIVE-PROBE-000001` was not observed. The adapter durably created/read back the fresh result with `terminalObserved: false`, `failureClass: TERMINAL_NOT_OBSERVED`, and `retryAuthorized: false`.

No retry or duplicate replay was performed because the first call did not terminalize successfully. Real child count was 1; second spawn count was 0. ORCH-000202 remained untouched. No BrowserRelay, browser, host, worker-delivery, registration, lease, Architect-trigger, AFFOTECH, Drive, deployment, private-data, or protected-port activity occurred. Assistant response text was not read.

The accepted adapter’s successful intent create/readback typed fields are not propagated into its durable result shape; the terminal records the exact boundary semantics and readback outcome without modifying accepted source.
