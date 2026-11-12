# Validation

Validated locally on macOS ARM64 with Nx 24.0.6 and Node 24.22.2. Timings are observations on this machine, not CI performance guarantees.

| Check | Result |
| --- | --- |
| Frozen pnpm install | Passed |
| Generated fixture drift | 2,401 generated files match; no drift |
| Tooling regression tests | 14 passed, including real execution and negative tests |
| Project graph | 480 projects, 4,024 static import edges, depth 9 |
| Full task graph | 3,384 tasks, 11,504 prerequisite edges, depth 21 |
| Graph validation | Every node/edge checked; both graphs acyclic |
| Cold full pipeline on Node 24 | All 3,384 tasks passed; 0 cache hits; 2m 15s |
| Warm full pipeline on Node 24 | All 3,384 tasks passed; 100% cache hits; 4.0s |
| Cache artifact restoration | Deleted one project's outputs; all 10 files restored with identical SHA-256 checksums |
| Portal source affected query | 3 projects: commerce-portal, commerce-e2e, identity-e2e |
| Shared foundation source affected query | 468 projects |
| Workflow / pnpm configuration | Valid YAML |
| Native HTML project graph export | Generated successfully, with Nx supporting assets |

Each of the 480 projects has four unit cases (1,920 total). All 24 package-level integration targets passed. Tooling negative tests confirm that TypeScript errors, lint violations, failed unit assertions, invalid schemas, and package corruption produce failures.

The actual graph JSON exports and local run logs are ignored artifacts under `dist/graphs/` and `dist/validation/`. Reproduce checks using the commands in [README.md](../README.md).

These measurements are local; they do not certify a GitHub Actions run.
