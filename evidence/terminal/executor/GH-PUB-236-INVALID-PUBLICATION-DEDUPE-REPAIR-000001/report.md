# ORCH.WATCHER.INVALID.PUBLICATION.DEDUPE.REPAIR.1A

Corrected relay authority validation now uses the relay-defined SHA-256 of exact prompt bytes. Execution identity remains publicationId plus contentSha256, so an authority-invalid publication sharing content cannot suppress its corrected immutable successor.

Qualification used deterministic fake-child tests only. No AFFOTECH task was launched.
