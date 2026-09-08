# ORCH.RELAY.LIVE.AUTHORITY.SNAPSHOT.WIRING.REPAIR.1A

The high-level controlled path now consumes the validated relay observation
from one immutable snapshot. The reader fetches `origin/main`, resolves
`refs/remotes/origin/main`, and reads pointer, manifest, and raw `prompt.md`
from that same commit. The regression reproduces a stale local working tree
and proves `run_relay_once` resolves the remote fixture publication.

At exact snapshot `0acd5f719fe5c361d3d27dea3e608fa5345b7ae7`, `PUB-713` and
its manifest resolve with the expected hash and identity. A fresh continuation
authority read reported current publication `PUB-eef93d85ae1449cfb566b905e65b9b03`,
so no stale `PUB-713` continuation was executed.

PUB-259 was treated as manually reviewed without resend. No Codex child was
launched for continuation and no AFFOTECH or relay mutation occurred.
