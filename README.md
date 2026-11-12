# Nx graph playground

A deliberately oversized, runnable **Nx 24** workspace for CI onboarding, affected-project experiments, cache testing, and graph exploration. No Nx Cloud account, secrets, external services, or application scaffolding ceremony required.

## How big?

| | Default topology |
| --- | ---: |
| Projects | **480** |
| Libraries | 408 (24 shared + 384 domain libraries) |
| Application fixtures | 48 (API + portal per domain) |
| Integration/e2e fixtures | 24 |
| Static project dependency edges | **4,024** |
| Tasks in the full `verify,e2e` graph | **3,384** |
| Task dependency edges | **11,504** |
| Longest project / task chain | 9 / 21 nodes |
| Unit test cases | 1,920 |

These are synthetic **TypeScript module fixtures**, not 48 running web servers. The work is real: source imports, strict type checking, ESLint, esbuild bundles, Node unit tests, package assembly, integrity checks, and package-level integration tests. The e2e targets exercise packaged modules, not browsers or HTTP endpoints.

## Quick start

Use **Node 24** (`.node-version`) and **pnpm 11.20.0** (pinned in `package.json`). With Corepack installed, `corepack enable` activates the pinned pnpm version; otherwise install pnpm 11.20.0 directly.

```sh
pnpm install --frozen-lockfile

# Inspect the chaos in Nx's browser UI.
pnpm graph
pnpm graph:tasks

# Smallest possible seven-task pipeline.
pnpm exec nx run shared-l0-01:verify

# One domain's portal and its transitive dependency graph.
pnpm smoke
pnpm smoke:e2e

# All 3,384 tasks. Default concurrency: 6.
pnpm verify

# Repeat to see Nx's local cache in action.
pnpm verify
```

The first run does real work; later runs restore cached artifacts. Outputs live under `dist/`, cache data under `.nx/`. Neither is committed. On smaller machines, pass `--parallel=2` directly to `nx run-many`.

## Explore the graphs

```sh
# Focus the project graph on one app.
pnpm exec nx graph --focus=commerce-portal

# Filter by domain tags.
pnpm exec nx show projects --projects='tag:scope:commerce'
pnpm exec nx run-many -t verify --projects='tag:scope:commerce' --graph

# An individual app's task graph.
pnpm exec nx run commerce-portal:verify --graph

# Export both full graphs, validate their topology, and print actual counts.
pnpm graph:export
pnpm graph:check

# Export a browser-viewable graph (Nx writes its supporting assets too).
pnpm exec nx graph --file=dist/graphs/projects.html
```

Exports:

- `dist/graphs/project-graph.json` — Nx's actual project graph.
- `dist/graphs/task-graph.json` — full `verify,e2e` task graph.
- `dist/graphs/summary.json` — counts and longest paths.

Both report commands freshly export and validate the graphs. Validation checks **every project, every static import edge, every target, every task prerequisite, and both graphs for cycles**; it does not just trust the generator's totals.

## Project topology

There are 24 domains: commerce, identity, billing, catalog, checkout, inventory, shipping, payments, notifications, search, analytics, reporting, support, marketing, content, media, recommendations, pricing, subscriptions, fulfillment, partners, compliance, observability, and experimentation.

```text
libs/shared/layer-{0,1,2}/unit-{01..08}   24 shared libraries
libs/<domain>/util/unit-{01..04}         foundation consumers
libs/<domain>/data/unit-{01..04}         local + neighboring-domain utilities
libs/<domain>/feature/unit-{01..04}      local + neighboring-domain data
libs/<domain>/ui/unit-{01..04}           local + neighboring-domain features
apps/<domain>/api                       data + features
apps/<domain>/portal                    UI + features + neighboring UI
e2e/<domain>                            own API + own portal + neighboring portal
```

Edges always point toward a lower layer. Domains wrap around to their neighbor to produce wide affected sets without creating cycles. Shared libraries create high-fan-out dependencies and the multiple converging paths create diamonds.

**All 4,024 project edges come from actual TypeScript imports** discovered by Nx's JS analysis. There are no fabricated `implicitDependencies` or custom graph plugins. Tags include `scope:commerce`, `layer:feature`, and `fixture:generated`.

## Task topology

Every project has seven cacheable targets. The 24 e2e projects also have `e2e`.

| Target | Prerequisites | Actual work |
| --- | --- | --- |
| `codegen` | none | Validate schema; produce deterministic build metadata |
| `lint` | none | Run ESLint + TypeScript rules on source |
| `typecheck` | dependency builds | Strict TypeScript check of source and its imported closure |
| `build` | dependency builds, own codegen + typecheck | Bundle TypeScript, embed generated metadata, write source map + esbuild metafile |
| `test` | own build | Run four Node unit tests against the compiled bundle |
| `package` | own build + test + lint | Assemble a standalone private ESM package and SHA-256 manifest |
| `verify` | own package | Check package integrity and execute the packaged entry point |
| `e2e` | own build + direct dependency packages | Run cross-package integration assertions |

Task policy is centralized in `nx.json`; projects use `nx:run-commands` with the shared implementation in `tools/task.mjs`. Dependencies' build artifacts must exist before a consumer build runs, while esbuild bundles from source. There are no intentional sleeps or artificial failure rates.

`production` inputs exclude unit-test files, so test-only changes do not invalidate builds. Consumer builds include transitive production inputs. Shared task code, toolchain config, the lockfile, and the Node version participate in hashing. Every output-producing target owns a separate output directory to make cache restoration safe.

## Affected-project experiments

Explicit-file queries work even before the first commit:

```sh
# A narrow change: exactly the portal and its two consuming e2e projects.
pnpm exec nx show projects --affected --files=apps/commerce/portal/src/index.ts

# A broad change: shared foundation consumers across the workspace.
pnpm exec nx show projects --affected --files=libs/shared/layer-0/unit-01/src/index.ts

# Execute affected verification (with transitive task prerequisites).
pnpm exec nx affected -t verify,e2e --files=libs/commerce/data/unit-01/src/index.ts
```

Once the repository has commits, use real base/head refs:

```sh
pnpm exec nx affected -t verify,e2e --base=origin/main --head=HEAD
pnpm exec nx graph --affected --base=origin/main --head=HEAD
```

The generated unit tests assert dependency-derived values. Changing a source weight without updating the corresponding expectations should fail tests: this is useful for testing CI failure reporting. Comments or harmless refactors are convenient successful-change experiments.

## Generate, reset, or scale

`workspace.config.json` defines domain names, shared layers, shared width, and projects per domain layer. `tools/topology.mjs` constructs the DAG; `tools/generate-workspace.mjs` emits the fixtures and `tools/generated/projects.json` inventory.

```sh
# Restore all generated fixtures to the configured topology.
pnpm generate

# Read-only drift check: exits nonzero for changed or missing generated files.
pnpm generate:check

# Regression tests for topology, graphs, real task execution, and failure handling.
pnpm test:tools
```

**`pnpm generate` overwrites generated source, schema, tests, project config, and per-project tsconfig files. Save experiment edits first.** Identical files are left untouched. When shrinking the topology, the generator refuses to silently delete obsolete projects: move or remove the explicitly reported project directories first.

Default size: `sharedLayers × sharedPerLayer + domains × (4 × projectsPerLayer + 3)`. Increase widths or add domains for even larger graphs. The checked-in default-size regression assertions should be updated when deliberately changing the baseline.

`generate:check` is intentionally **not** a CI requirement, so legitimate source edits for affected/cache experiments are allowed. `graph:check` still enforces the configured project topology.

## Bounded CI chaos lab

[The chaos lab](docs/CHAOS-LAB.md) exercises Nx Cloud CI itself: mixed worker pools, dynamic sizing, job dependencies, parallel steps, expressions, controlled failures, and timeouts. It runs only for PRs targeting `main`, after the regular Nx check in the same pipeline. The eight-machine scheduling cap includes a reserved slot for the separate GitHub Actions runner; branch pushes do not launch the lab.

```sh
pnpm chaos:check                 # Offline schema and safety checks
pnpm chaos:schema                # Fifteen local schema boundary cases
NX_NO_CLOUD=true pnpm chaos:plan  # Export the two experimental task graphs
```

## CI

### Nx Cloud CI

`.nx/pipelines/ci.yaml` runs on pull requests to `main` and pushes to `main`:

- The regular `main` job uses `linux-medium-js` plus **three `linux-large-js` workers**: four machines total.
- Runs `nx affected -t verify,e2e`, covering all seven standard targets plus the integration targets through the existing task graph (up to 3,384 tasks).
- Uses Nx Cloud's supplied base/head commits and managed worker lifecycle.
- On PRs only, the chaos jobs follow `main` in sequence; on pushes to `main`, only the regular check runs. Experimental worker counts are defined in `.nx/pipelines/chaos-workers.yaml`.

The workspace is connected through `nxCloudId` in `nx.json`. Worker counts can be changed in the pipeline's `workers` setting; additional workers consume additional cloud compute. Nx Cloud checks out the repository and installs dependencies through the built-in JS launch templates.

### GitHub Actions

The separate `.github/workflows/ci.yml` remains enabled:

- Installs the locked dependencies on Node 24.
- Runs the tooling regression tests and exports/validates both graphs.
- On pull requests, runs affected `verify,e2e` against the PR base SHA.
- On pushes to `main` and manual runs, runs the entire task graph.
- Restores/saves local Nx cache using GitHub Actions cache; no Nx Cloud setup required.
- Uploads graphs and available unit/integration/verification results, including on failure.

Both CI providers currently run for pull requests and pushes to `main`; enabling Nx Cloud CI does not disable GitHub Actions. The scripts do not change the Git remote.
