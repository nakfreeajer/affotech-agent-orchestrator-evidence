# BrowserRelay qualification publication correction

Milestone: `ORCH.P0.BROWSER.RELAY.ARCHITECT.TRIGGER.1A.AUTHORITY.BASELINE.REPAIR.1A`

This is a corrective immutable evidence publication. The earlier publication
`GH-PUB-10fb0b3213f7530eda493681dc4643b6` is preserved unchanged, but its
source-snapshot part blobs were found on readback to contain transport-wrapper
bytes and therefore did not match the declared part metadata. This correction
publishes the same locally verified BrowserRelay qualification with correctly
encoded source-snapshot parts.

Authority was independently verified from immutable Git objects through
`ORCH-000005`, dispatch `DISPATCH-000005`, prompt SHA
`809941e0b299d548264b07cc402b33dc3bf26cfa09e153b11b7521472ba85a85`, and the
accepted-anchor ancestry gate. The isolated implementation added only the
three BrowserRelay files and produced 185 passing tests (0 failed). The live
dedicated ChatGPT relay prerequisite was unavailable, so no browser attach,
send, or live trigger occurred; classification remains
`DEDICATED_CHATGPT_RELAY_BROWSER_UNAVAILABLE`.

Corrected snapshot: `orchestrator-source-snapshot-browser-relay-1a.tar.gz`,
35764 bytes, SHA-256
`b15bc8e18f900ce2eb765d38609029f5e44d5324a3744268778638ec7cb6250d`, 63
regular files, manifest
`ab29c04b97d0e45c606157ae06158dfed2410c6bf637bff97b8c5dac7e360277`.

The canonical Orchestrator root, AFFOTECH, Drive, P0.1C, P0.1D, and Curator
were not modified. No force push, history rewrite, or blind retry was used.