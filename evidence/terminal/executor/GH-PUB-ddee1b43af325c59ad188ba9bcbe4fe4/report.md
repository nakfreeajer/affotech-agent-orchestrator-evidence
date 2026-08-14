# BrowserRelay accepted-baseline correction and tested-state preservation

Classification: RELAY_CONTROL_DURABILITY_STATE_TESTED_RECONCILED_AND_PRESERVED
Dispatch: DISPATCH-000016; message: ORCH-000016; role: executor; outcome: PASS; requiresArchitectDecision: true.
Repository: nakfreeajer/affotech-agent-orchestrator-evidence; branch: main; remote parent: b9386656f12b25219dcaa4fdd20df3766d7f987a.
Accepted reconstructed archive: 64 files, 38815 bytes, SHA-256 0f55ad8f9779fa5a57b3f28e9a32d45777da35287a16192ee2b6146f7ed5e7bb. Four registration-contract-1a parts were independently size/hash checked.
Manifest correction record: legacy stored manifest ba0660f824e77e8aad8accc2af9e8be908f8c81c96efb21a34a1dc05490b718e; corrected manifest 25c456f0a6ce83caa7dc69c7318bd8c8196ca726f51d9dbcdeb7096cb603cad1. Algorithm is SHA256(raw file bytes), two spaces, normalized slash path, path-sorted, UTF-8 LF newline-terminated.
Direct comparison: accepted/current 64/64; added 0, deleted 0, renamed 0, unchanged 62. Only permitted deltas:
- src/browser-relay/registration.js: accepted 99ad241eb31a36b93db7ff6f963f9937f3ac8f0c9c3df3365aadcb62f89ccb45; current 7fc6566e9e857c374eeb65787939c705f58f23491caaa165d31a58005dec65e2. Attribution: canonical durable relay-control record/pointer validation and mission/port binding repair.
- test/browser-relay.test.js: accepted 9317650488f114c8c9f8429160281f7b6bb4d77b6187119c48d769ba4a9374df; current 779c8b1a23892cf38cfe16c4dfc5bd2391eae39d2051f71e84635ba11f2d1aff. Attribution: bounded relay-control durability regression tests.
No other path differed.
Syntax node --check on browser-relay.js, constants.js, registration.js, browser-relay.test.js: PASS. Full npm test: 202 passed, 0 failed.
Preserved tested-state snapshot: orchestrator-source-snapshot-browser-relay-repair-1b-state-test-1a.tar.gz; size 39677; SHA-256 092ae17dbc2757711d1a191ef83b50b8f8a722392c0f00ef7a9d7bbbe2b971bc; 64 files; manifest 53817712818029b83bbf8bdbcf94146fce58d47af92ba8e3ec897a3f304228ec. Binary parts and parts index are under evidence/artifacts/browser-relay-repair-1b-state-test-1a/ and were committed/read back.
No BrowserRelay source/test mutation occurred during this dispatch. RELAY-CONTROL-9333-000001 was not created or modified. No verify & next was sent. Ports 9222/9223 were untouched. Canonical Orchestrator, AFFOTECH, Drive, browser actions, and historical evidence mutation: 0. LATEST_EXECUTOR_ACCEPTED unchanged.
