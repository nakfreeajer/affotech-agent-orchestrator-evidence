# BrowserRelay tested-state preservation correction

Classification: RELAY_CONTROL_DURABILITY_STATE_TESTED_RECONCILED_AND_PRESERVED
This is the final corrected evidence for DISPATCH-000016 / ORCH-000016.
The prior immutable publication GH-PUB-ddee1b43af325c59ad188ba9bcbe4fe4 is preserved unchanged; its initial binary-artifact transport was read back and found noncanonical, so it is historical and not the final artifact authority.
Repository: nakfreeajer/affotech-agent-orchestrator-evidence; branch: main. Starting parent: b9386656f12b25219dcaa4fdd20df3766d7f987a.
Accepted reconstruction: 64 files, 38815 bytes, SHA-256 0f55ad8f9779fa5a57b3f28e9a32d45777da35287a16192ee2b6146f7ed5e7bb. Corrected accepted manifest: 25c456f0a6ce83caa7dc69c7318bd8c8196ca726f51d9dbcdeb7096cb603cad1; legacy stored manifest: ba0660f824e77e8aad8accc2af9e8be908f8c81c96efb21a34a1dc05490b718e.
Direct comparison: 64 vs 64; added 0, deleted 0, renamed 0, byte-identical 62. Only modified paths:
src/browser-relay/registration.js accepted 99ad241eb31a36b93db7ff6f963f9937f3ac8f0c9c3df3365aadcb62f89ccb45 -> current 7fc6566e9e857c374eeb65787939c705f58f23491caaa165d31a58005dec65e2; canonical relay-control durability repair.
test/browser-relay.test.js accepted 9317650488f114c8c9f8429160281f7b6bb4d77b6187119c48d769ba4a9374df -> current 779c8b1a23892cf38cfe16c4dfc5bd2391eae39d2051f71e84635ba11f2d1aff; bounded repair regression coverage.
Syntax checks: PASS. Full suite: 202 passed, 0 failed. No BrowserRelay source/test mutation in this dispatch. No RELAY-CONTROL-9333-000001. No verify & next. Ports 9222/9223 untouched.
Snapshot: orchestrator-source-snapshot-browser-relay-repair-1b-state-test-1a.tar.gz, 39677 bytes, SHA-256 092ae17dbc2757711d1a191ef83b50b8f8a722392c0f00ef7a9d7bbbe2b971bc, 64 files, manifest 53817712818029b83bbf8bdbcf94146fce58d47af92ba8e3ec897a3f304228ec.
Final artifact authority: evidence/artifacts/browser-relay-repair-1b-state-test-1a-corrected/parts.json with three UTF-8 base64 chunk files. GitHub readback lengths are 16000, 19096, and 4904 characters; decoding yields 12000, 12000, and 3677 bytes, concatenating to the exact 39677-byte snapshot and declared SHA. This explicit encoding avoids the prior binary blob transport mismatch. The immutable manifest-correction record identifies the historical binary attempt and corrected encoding.
Mutation accounting: canonical Orchestrator 0; AFFOTECH 0; Drive 0; Browser actions 0; live relay-control 0; historical evidence rewrite/deletion 0; accepted pointer unchanged.