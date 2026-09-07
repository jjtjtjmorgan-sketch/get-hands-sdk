# Fathom 2.0 — future work

Fathom is Hands' private code-intelligence layer. Its existing private code-awareness plane turns pinned repository snapshots into evidence-backed relationships across files, symbols, imports, dependencies, and calls. Its established query surfaces include `resolve`, `callers`, `calls`, `blast`, and `path`, helping agents trace routes and understand change impact without repeatedly rediscovering an entire codebase.

Fathom 2.0 is the roadmap for a second intelligence plane: a temporal project canon that tells an agent what people have already decided before it changes a system. Rather than treating stale plans, agent summaries, and runtime observations as equal sources of truth, the design keeps human decisions authoritative and preserves superseded decisions as history.

Future Codemap work will provide a “Google Maps for your code” experience: start with the whole system, zoom through subsystems, packages, semantic communities, and local code structure, then arrive at exact source evidence without losing context. Search can fly to a symbol, routes can trace evidence-backed paths, layers can reveal different fact classes, and historical indexes can be compared over time.

Canonical maps are intended to be derived deterministically from immutable Fathom evidence. AI may explain or propose views, but it will not be allowed to invent canonical topology.

## Status

| Horizon | Direction | Status |
| --- | --- | --- |
| Now | Private evidence-backed symbol, call, dependency, route, and impact navigation | Existing private capability |
| In progress | Broader JavaScript coverage through resolver-backed evidence | Development; not established as production-delivered |
| Planned | Temporal project canon for active human decisions and conflict surfacing | Future work |
| Planned | Deterministic static and interactive Architecture Atlas views | Future work |
| Planned | Codemap semantic zoom, search, routes, evidence layers, and history | Future work |
| Conditional | Additional control-flow or data-flow lenses after separate validation | Research only |

Fathom remains closed source and is not included in the Hands SDK. “Google Maps for your code” describes a product direction and does not imply affiliation with Google.
