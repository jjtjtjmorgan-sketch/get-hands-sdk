# Open-source boundary

Hands is opening developer surfaces that create independent value while retaining private execution and code-intelligence implementations.

| Component | Intended public surface | Remains private or service-operated |
| --- | --- | --- |
| Connector SDK | Authoring APIs, manifests, schemas, validation, canonical compilation, projections, packaging, fixtures, docs, compatibility tools | Credentials, service signing material, tenant operations |
| Semantic skills and Tools Discovery Graph | Public skill/tool definitions, graph implementation and adapters, schemas, sample catalog, query and evaluation fixtures | Tenant graphs, private connector data, proprietary indexes |
| Sage definitions | Portable definitions, composition, requested capabilities, evidence and handoff contracts | Live worker identity, governed memory contents, private environments |
| Custom Hand profiles | Profile schema, validators, composition, import/export, public examples | Account bindings, tokens, private knowledge, actual grants |
| Sage Marketplace | Reference catalog, search, listing, preview, submission and review software | Production accounts, payments, payouts, abuse signals, commercial analytics |
| Provider integration | Adapter contract, capability manifest, conformance fixtures/report, sandbox client, onboarding contract | Router source, routing policy, hidden qualification data, credentials, commercial terms |
| Hands runtime | External contract and synthetic responses needed by public tools | Runtime and orchestration source |
| Fathom | Only the public integration boundary required by released packages | Source, extraction/indexing implementation, private indexes and caches |
| Hands Router | Provider-facing compatibility and test behavior | Routing implementation and operational decisions |

## Release invariants

1. Every advertised local path works without private source, internal registries, employee credentials, or a Fathom service.
2. Graph search, schema reads, and neighborhood reads do not grant permission or trigger execution.
3. Profiles and Sage definitions request capabilities; the deployed runtime owns actual grants.
4. Local validation or conformance does not imply marketplace acceptance, production authorization, or provider admission.
5. Public fixtures contain no tenant data, token, personal memory, proprietary index, or secret-bearing configuration.
6. Shipped, preview, and planned behavior are labeled separately.

## License status

No public SDK source release or license decision is claimed yet. A complete license and notice map is a prerequisite for opening reusable source packages. Until then, public documentation must not imply rights that no published license grants.
