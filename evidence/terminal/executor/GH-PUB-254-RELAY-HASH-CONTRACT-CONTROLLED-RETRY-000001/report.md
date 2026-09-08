# RELAY_DECLARED_CONTENT_HASH_INVALID

Read-only byte verification of `PUB-91e4a6c8b2d547f0a3e5c7d9b1f24680` found that the manifest prompt and raw `prompt.md` are exactly equal at 5,048 bytes and both hash to `b873b8d3538244898fbdfaf058bf3f50086774f7bf0a534e6d16fbec0a94dded`. The manifest declares `2b5457e1c327eb7099872b26274fe816dacd5b565195eb60f191647e8dd61ee9`, which matches neither. This is a declared-hash-invalid packaging condition, not a verifier defect.

No verifier repair or controlled retry was performed. No prompt bytes were delivered, no Codex child was launched, and no AFFOTECH or relay publication was mutated. The watcher remained stopped.
