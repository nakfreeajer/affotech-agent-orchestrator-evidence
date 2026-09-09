# Production watcher legacy in-flight state migration

- State file: `C:\Users\nitro\Projects\affotech-agent-orchestrator\orchestrator-state.json`.
- A byte-for-byte backup was created and verified at `orchestrator-state.json.pre-legacy-migration.bak`.
- Immutable relay decision `PUB-4b7a2c9e1d6f40a8b3c5e7f901234567` explicitly supersedes `PUB-d55dc9d565ab46a5a4f1430b902bc531`; the current relay publication is `PUB-20281b540a6049d0bfb25bf977877b63`.
- The legacy record was migrated to `SUPERSEDED_WITHOUT_RETRY`, preserving it as historical and non-authorized. The separate `SUPERSEDED_UNRECOVERABLE` marker was preserved independently.
- Durable evidence confirms PUB-20281 was executed and Architect-reviewed, so its relay key was retired locally to prevent rerun.
- The exact production command reached `RELAY_CONNECTED`, `LATEST_PROMPT publication=PUB-20281...`, then `STATE=IDLE`.
- Python: 88 passed; Node: 158 passed; compile: PASS.
- No Codex launch, AFFOTECH/relay mutation, clasp, OAuth, or business write occurred.

Implementation commit: `02d246b5bac8d0401159f8dd9c0338497d83e55e`
