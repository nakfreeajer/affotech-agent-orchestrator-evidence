# ORCH.RELAY.LIVE.AUTHORITY.SNAPSHOT.WIRING.REPAIR.1A

The production wrapper observed `PUB-7138664991624a2a9f5d6259a14507fd` at
snapshot `0acd5f719fe5c361d3d27dea3e608fa5345b7ae7`, with valid hash and
identity. The resumed child then independently read stale relay working-tree
files and reported `PUB-eef93d85ae1449cfb566b905e65b9b03`. This is the live
authority bypass being repaired.

The bounded fix carries the validated snapshot commit, publication ID, and
content hash from `run_relay_once` into `CodexRunner` and the assembled child
payload. The high-level stale-cache fixture and all regression suites pass.

The one authorized PUB-713 controlled execution had already occurred before
the wiring correction and failed closed without AFFOTECH work or clasp. It was
not retried. Its result delivery remains pending after one Architect send
timeout.
