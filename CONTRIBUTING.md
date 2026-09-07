# Contributing

Thank you for wanting to help build the Hands developer ecosystem.

## Developer Preview contribution gate

This repository does not yet assert a public license or contribution agreement. Until `LICENSE`, required notices, and contribution terms are published:

- do not submit code or third-party assets for inclusion;
- do not assume that public visibility grants permission to reuse prototype material;
- do report documentation mistakes, boundary ambiguity, accessibility problems, security concerns, and concrete developer-workflow feedback;
- report vulnerabilities privately under [SECURITY.md](SECURITY.md), not in a public issue.

This gate protects contributors as well as maintainers. It will be updated before external code contributions are accepted.

## After contribution terms publish

Start with a focused issue before a substantial pull request. Describe:

- the developer problem;
- the smallest proposed change;
- current versus expected behavior;
- evidence or fixtures that can verify it;
- any compatibility, security, privacy, authority, or licensing impact.

Keep changes small and independently reviewable. Do not mix formatting sweeps, generated files, and behavior changes unless they are inseparable.

## Required boundaries

Contributions must not include:

- credentials, tokens, personal data, or production tenant records;
- private repository paths, internal ticket identifiers, or non-public design material;
- Hands runtime, Fathom, or Hands Router implementation details;
- code or data without redistribution rights;
- examples that imply discovery, validation, or Marketplace publication grants execution authority;
- invented commands, packages, endpoints, compatibility badges, or availability claims.

Use synthetic or redistribution-cleared fixtures. Scrub logs and screenshots before submission.

## Documentation truth rules

Every feature statement must say whether it is:

- implemented in the public repository;
- demonstrated only in the internal prototype;
- planned future work.

Commands in public quickstarts must be tested from a clean, signed-out environment. Planned commands belong in the roadmap, not in copy-paste tutorials.

## Pull-request evidence

Once the public build and test commands exist, pull requests will be expected to include the smallest relevant validation output and any updated fixtures or documentation. Security-sensitive changes may require private review before public discussion.

## Conduct

Participation is governed by the [Community Code of Conduct](CODE_OF_CONDUCT.md). Be direct, kind, and evidence-led; challenge claims and designs without attacking people.
