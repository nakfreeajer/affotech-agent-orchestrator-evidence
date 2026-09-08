# ORCH.RELAY.REMOTE.COMMIT.CONSISTENT.READ.REPAIR.1A

The relay reader was repaired to resolve `refs/remotes/origin/main` after
fetch and read the pointer, manifest, and raw prompt artifact exclusively from
that one immutable Git commit. A deterministic dirty/stale working-tree test
was added.

The exact `0acd5f719fe5c361d3d27dea3e608fa5345b7ae7` fixture resolves
`PUB-7138664991624a2a9f5d6259a14507fd`, including its manifest, with the
declared hash. A fresh authority fetch for continuation instead reported the
current pointer as `PUB-eef93d85ae1449cfb566b905e65b9b03`; therefore no
continuation execution was performed from stale prompt input.

PUB-258 was treated as manually reviewed with no resend. No AFFOTECH or relay
mutation occurred, and no Codex child was launched for continuation.
