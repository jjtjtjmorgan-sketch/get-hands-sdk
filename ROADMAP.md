# Hands SDK roadmap

This roadmap distinguishes demonstrated internal prototype behavior from the work required for a credible public SDK. It is directional, not a release-date commitment.

## Demonstrated prototype foundation

- TypeScript connector and action builders.
- No-auth, API-key, and OAuth 2.0 authorization-code-with-PKCE declarations.
- Canonical compilation and generated projections.
- Graph-only discovery for an SDK-authored example connector.
- Deterministic unsigned packaging with lock, SPDX 2.3 SBOM, and provenance request.
- Local-project invocation that reports `execution_authorized=false`.
- Skill Registration IR loading in the development environment.

None of these bullets claims public package availability or production authorization.

## Connector SDK release sequence

The internal 28-slice plan resolves into five public-facing phases. Ticket identifiers and private implementation details are intentionally omitted here.

| Phase | Outcome | Status |
| --- | --- | --- |
| Contract boundary | Freeze ownership and public/private boundary; stabilize Connector IR, TypeScript builders, compiler, and single-source projections | In progress |
| Developer tooling and migration bridge | Complete import policy, CLI lifecycle, test fixtures, deterministic packaging, policy joins, and compatibility migration analysis | Partly demonstrated; substantial work remains |
| Safety and platform | Add local policy/fence/approval/egress emulation, package verification/promotion, isolated execution, secret brokering, and compatibility harnesses | Planned |
| Proving connectors and documentation | Migrate representative native and remote-MCP connectors; publish executable quickstart, cookbooks, migration guide, and API reference; prove an unknown connector through the development lifecycle | Planned |
| GA proof and migration | Prove one source across compatibility and isolated hosts, exercise an unchanged-core production lifecycle, migrate in evidence-backed waves, and release supported SDK/ABI versions | Planned |

The phases are dependency-ordered. Work beginning in an earlier phase does not make a later safety or release guarantee true.

## Next: first public connector release

- Complete ownership, dependency, secret, and license review.
- Stabilize versioned authoring and protocol contracts.
- Publish installable source packages from an isolated public build.
- Add signatures, examples, fixtures, testkit, emulator, and conformance documentation.
- Prove a clean external quickstart without private registries, code, or credentials.
- Publish compatibility, migration, security, contribution, and release policies.

## Then: open creator surfaces

- Semantic skills and Tools Discovery Graph implementation, adapters, sample catalog, and evaluation fixtures.
- Portable Sage definitions and Custom Hand profiles with validators and public examples.
- Sage Marketplace reference catalog, listing, preview, submission, and review software.
- Evidence-bearing creator examples and vertical recipes.

## Then: inference-provider path

- Versioned adapter and capability contracts.
- Local conformance runner and reproducible report format.
- Governed Router test environment with quotas, redaction, failure behavior, and operational ownership.
- Trackable onboarding request and review states.

## Private parallel roadmap

Hands runtime, Hands Router, and Fathom remain closed source. Planned Fathom 2.0 project-canon, Architecture Atlas, and Codemap work is described in [docs/fathom-2-roadmap.md](docs/fathom-2-roadmap.md) and is not an SDK release commitment.

## Release rule

A capability moves from **planned** to **preview** or **shipped** only when the corresponding public artifact exists and the documented user journey has been reproduced from a clean external environment. A screenshot, internal test, or roadmap ticket is not sufficient by itself.
