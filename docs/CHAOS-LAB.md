# Bounded Nx Cloud CI chaos lab

This branch tests the CI system, not application behavior alone. Deliberate failures are fixtures. A product defect needs evidence that the service behaved differently from its documented contract.

## Scope and limits

- Repository: `nartc/ci-onboarding-test`; existing connected Nx Cloud workspace.
- Base: merged `main` commit `27ad6ec`.
- Approved ceiling: **8 concurrently scheduled machines**: at most seven Nx Cloud machines, plus one reserved GitHub Actions runner. Coordinators count even when their background worker is disabled.
- Lab trigger: **PRs targeting `main` only**, via guarded jobs in `.nx/pipelines/ci.yaml`. Branch pushes do not launch it. Pushes to `main` run only the regular check.
- One live trial at a time. Do not push another trial until the preceding run is terminal and its workers are stopped.
- Ten-minute distributed jobs; a three-minute semantics job. No workload loops or continuous stress generation.
- Read-only repository permissions. No secrets, deployments, writable tokens, privileged containers, or auto-applied self-healing fixes.
- The regular Nx check and lab share one dependency chain in `.nx/pipelines/ci.yaml`, avoiding separate overlapping Nx Cloud pipelines. `.github/workflows/ci.yml` remains unchanged.
- Invalid configuration fixtures live in JavaScript outside the pipeline discovery directory. They are tested locally, not submitted to the service.

The cap is a static scheduling check, not a cloud billing limiter. Nx Cloud does not expose a pipeline `concurrency` setting in this schema; preventing overlapping pipeline executions is an operator responsibility. Unexpected lingering workers are a failure to investigate, not a reason to launch the next run.

## Round 01: configuration interactions

| Job | Main machine | Extra workers | Maximum machines | Depends on |
| --- | --- | --- | ---: | --- |
| `main` | medium; also executes tasks | 3 large | 4 | none |
| `mixed` | medium; also executes tasks | 2 medium + 1 large | 4 | `main` |
| `scaled` | medium; background worker disabled | small: 3 medium; medium: 3 medium + 1 large; large: 4 medium + 2 large | 7 | `mixed` |
| `semantics` | medium; distribution off | none | 1 | both distributed jobs |

On PRs, the Nx jobs run in order: `main` → `mixed` → `scaled` → `semantics`. The existing GitHub Actions job can run alongside them, so its one runner is reserved in the cap. The validator calculates the maximum weighted set of Nx jobs without dependency relationships, then adds that reservation. Removing the `scaled` dependency would allow 12 total machines and is rejected. Main-branch pushes skip all three lab jobs.

Worker definitions are imported from `.nx/pipelines/chaos-workers.yaml`. That file has no trigger and is not another pipeline.

### First live finding: runtime worker minimum

The initial `e5663c2` configuration was schema-valid but the service reported: **“You are distributing on 1 worker(s). Minimum 3 worker(s) are required for distribution.”** The small tier had one worker; the medium tier had two. This is a runtime configuration constraint absent from the published JSON Schema, not evidence of a scheduler defect.

The PR-only configuration uses **3 / 4 / 6 additional workers**, with nondecreasing counts per template. The coordinator still consumes one machine even with its worker disabled. `scaled` waits for `mixed`, and its maximum is seven Nx Cloud machines, leaving the eighth slot for GitHub Actions. The local guard now conservatively requires at least three additional workers in every distributed pool, regardless of whether the main-job worker participates; `workers: false` remains valid for the semantics job.

### Distributed probes

- `mixed` routes integration targets to the large worker and prevents `test` from overlapping `typecheck` on the same worker.
- `scaled` exercises 15% / 55% workload boundaries and monotonic per-template counts with its main-job worker disabled.
- Dynamic task packing is explicitly enabled for this pipeline using `NX_CLOUD_AUTO_TASK_PACKING`; no workspace-wide setting is changed.
- The 480 root projects are partitioned into 252 mixed-shard roots and 228 scaled-shard roots. Transitive dependencies intentionally overlap.
- Each command requests `verify,e2e,package`, so dependency builds, codegen, type checks, lint, tests, and package assembly remain in the task graph. Package targets are requested explicitly so the coordinator audit does not assume that outputs of implicit-only prerequisites are downloaded.
- The current graphs contain **2,424 task nodes** for `mixed` and **2,328** for `scaled`. Do not add these and call them unique tasks: shared dependencies appear in both graphs.
- After Nx succeeds, the main job independently checks every selected project's verification result and packaged-byte SHA-256, plus all 24 integration-result records across the two jobs.

Task completion and package integrity are asserted. Actual agent participation, assignment placement, scheduling-constraint timing, and selected scaling tier must also be inspected in the Nx Cloud run. Local validation alone does not prove those service behaviors. Cache hits and task timing can legitimately make load uneven; do not require every worker to have equal work.

### Orchestration probes

The `semantics` job has `needs: [mixed, scaled]` and `if: always() && nxcloud.event_name == 'pull_request'`, so it can report a PR's upstream failure without running on main-branch pushes.

It tests:

1. Both dependency results are actually successful.
2. File → job → step environment precedence, plus the documented job-level expression environment.
3. Step outputs and `fromJSON(...).answer` interpolation.
4. An intentional exit 17 with `continue-on-error`: outcome must be `failure`, conclusion must be `success`.
5. Explicit `success()` runs after the tolerated failure; `failure()` and a false condition must not run.
6. Two parallel steps must rendezvous through separate ready files within eight seconds. Serial execution fails the probe instead of passing by accident.
7. A step times out after 0.1 minutes. Its command has a finite 20-second fallback even if timeout enforcement breaks. The successor checks the step outcome, conclusion, elapsed time, missing completion marker, and whether the recorded process still exists.
8. A final `always()` report records evidence even after a failed assertion.

Each semantics execution creates a fresh UUID and clears only its own known evidence filenames. Evidence from another trial is rejected. A failed repeat verification removes any earlier success marker, so a stale green result cannot mask failure.

## Expected result

The first round should finish **green** despite the intentional exit and timeout, because both are explicitly tolerated and checked afterward.

A red run is not automatically a platform bug. Classify it first:

- **Fixture failure:** source test, dependency install, wrong oracle expectation, stale assumptions, unsupported behavior, or misconfiguration.
- **Clean rejection:** the service correctly refused a prohibited configuration.
- **Candidate service defect:** logs and evidence show documented scheduling, failure propagation, timeout, output, or expression semantics were not honored.
- **Inconclusive:** insufficient evidence, missing logs, or a transient infrastructure problem.

Do not conflate a step timeout with a deliberately failing application test. Do not report routing or worker shutdown as proven without observing the cloud execution.

## Commands

```sh
pnpm install --frozen-lockfile

# Offline: pinned published schema plus stricter lab safety rules.
pnpm chaos:check

# Offline: fifteen schema boundary probes; intentionally accepted and rejected cases.
pnpm chaos:schema

# Local tests, including real subprocess/probe failure cases.
pnpm test:tools

# Export both task graphs without executing tasks or contacting Nx Cloud.
NX_NO_CLOUD=true pnpm chaos:plan

# Optional local end-to-end shard execution, sequential to avoid output races.
NX_NO_CLOUD=true node tools/chaos/run-shard.mjs mixed
NX_NO_CLOUD=true node tools/chaos/run-shard.mjs scaled
```

`pnpm chaos:check` fails closed on unexpected triggers, missing PR-only guards, chaos detached from the normal check, more than eight simultaneous scheduled machines (including the GitHub runner reservation), unknown or cyclic job dependencies, incomplete/decreasing or undersized worker pools, unrunnable routing, writable repository tokens, invalid timeouts, duplicate step IDs, and conflicting step aliases.

These checks enforce this lab's policy, not every rule of the Nx Cloud runtime.

## Evidence

Local artifacts are ignored:

- `dist/chaos/<shard>/task-graph.json`
- `dist/chaos/<shard>/plan.json`
- `dist/chaos/<shard>/result.json`
- `dist/chaos/semantics/*.json`
- `dist/chaos/validation/`

Cloud job logs emit searchable structured records:

- `CHAOS_PLAN`
- `CHAOS_SHARD_RESULT`
- `CHAOS_EVIDENCE`
- `CHAOS_REPORT`

Shard results and the semantics report also write the Nx Cloud step summary. Job filesystems are separate; no unsupported cross-job filesystem or job-output sharing is assumed.

For each live trial, record its commit, Nx Cloud execution URL, expected result, actual result, worker counts, and any deviations. Do not start the next trial while jobs or workers from this one remain active. Cancel the run in Nx Cloud if it exceeds the configured envelope.

## Schema boundary observations

The published schema snapshot is pinned by SHA-256 in `tools/chaos/validate.mjs`; provenance is beside it in `tools/chaos/schema/SOURCE.md`.

Fifteen local cases establish:

- The schema rejects fixed+sized worker modes, conflicting machine configuration, `uses`+`run`, and negative worker counts.
- It accepts zero/negative step timeouts, empty steps, `run`+`script`, missing/cyclic job dependencies, incomplete size maps, descending thresholds, and contradictory branch filters.
- It explicitly accepts `MERGE_GROUP`, while the reference's limits section says merge queues are unsupported.

These are **schema observations**, not confirmed runtime defects. The service can enforce semantic validation after schema validation. Keep risky or ambiguous definitions inactive until a separate bounded trial is approved.

## Later rounds

Not enabled by this first round:

- Cold versus warm comparisons and a narrow affected-source change.
- A deliberately failed job with explicit failure/always dependents.
- One schema-accepted but semantically prohibited configuration per isolated trial.
- Cleanup and worker-startup failure behavior, only after the healthy runtime baseline is established.

No automatic repetition, extra branches, or negative configurations are published by the tooling.
