# Getting started

## Current status

The Hands SDK is being prepared for its first public source and package release. There is no supported public install command yet. Do not install an unverified package that happens to use a Hands-like name.

The current private TypeScript/ESM prototype has demonstrated this development loop:

1. author a typed connector definition;
2. validate the definition;
3. compile canonical intermediate representation;
4. generate projections used by discovery and runtime boundaries;
5. find the connector through graph-only tool discovery;
6. build a deterministic unsigned package with lock, SPDX 2.3 SBOM, and provenance request;
7. invoke an action in local-project mode while reporting `execution_authorized=false`.

That evidence is a development milestone, not a public release or production authorization.

## Command surface under stabilization

The implemented prototype CLI binary is `hands-connector`:

```text
hands-connector <validate|generate|pack|invoke> [action] \
  [--input JSON] [--project DIR] [--json]
```

The binary is not yet publicly installable. Commands such as `init`, `scaffold`, `doctor`, `test`, `dev`, `publish`, and `promote` belong to the roadmap and must not be treated as current behavior.

## What the public quickstart must prove

We will replace this page with a runnable quickstart when all of the following are true:

- a versioned package is available from the documented public registry;
- the source and dependency license review is complete;
- a clean machine can install the package without private registries or employee credentials;
- a new connector can be authored, validated, compiled, discovered, packaged, and invoked from public fixtures;
- expected output, errors, and cleanup are documented;
- the package contains no secret, live account binding, or private runtime implementation;
- local invocation cannot be confused with permission to execute in a deployed Hands environment.

## Choose a path

- Connector author: read the [SDK reference](sdk-reference.md).
- Sage or Custom Hand builder: read [Sages and Custom Hands](sages-and-custom-hands.md).
- Inference provider: read [provider testing and onboarding](provider-onboarding.md).
- Contributor: read [CONTRIBUTING.md](../CONTRIBUTING.md).

Questions and early use cases are welcome in the [Hands Discord](https://discord.gg/RNDB3Qz5Zk).
