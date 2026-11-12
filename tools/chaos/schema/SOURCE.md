# Nx Cloud CI schema snapshot

- Source: https://cloud.nx.app/nx-cloud/static/schemas/workflow.schema.json
- Retrieved: 2026-11-12
- Draft: JSON Schema 2020-12
- SHA-256: `e087f630e601f1d4e644e14306cc27659a925dcf21daa3c4fa925b3eeec1a085`
- Reference: https://nx.dev/docs/reference/nx-cloud/ci-config
- Workers: https://nx.dev/docs/features/ci-features/distribute-task-execution
- Routing: https://nx.dev/docs/kb/assignment-rules

The schema is copied verbatim for reproducible offline tests. Do not refresh it automatically in CI. Review upstream changes, recheck the boundary cases, and explicitly update the pin in `../validate.mjs` when adopting a new version.

Schema validation is not a substitute for runtime semantic validation. The lab adds stricter budget, trigger, dependency, timeout, and worker-routing checks for its own active configuration.
