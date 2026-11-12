# Bounded Nx Cloud CI chaos lab

This branch tests the CI system, not application behavior alone. Deliberate failures are fixtures. A product defect needs evidence that the service behaved differently from its documented contract.

## Scope and limits

- Repository: `nartc/ci-onboarding-test`; existing connected Nx Cloud workspace.
- Base for round 02: merged `main` commit `c80c23a` (the successful round-01 lab).
- Approved ceiling: **8 concurrently scheduled machines**: at most seven Nx Cloud machines, plus one reserved GitHub Actions runner. Coordinators count even when their background worker is disabled.
- Lab commands: **PRs targeting `main` only**, via guarded jobs in `.nx/pipelines/ci.yaml`. Branch pushes do not launch it. On main pushes, lab steps are skipped; observed job summaries still say `SUCCEEDED`, and machine-instance records can exist. A false guard is not proof of zero provisioning.
- One live trial at a time. Do not push another trial until the preceding run is terminal and its workers are stopped.
- Current timeouts: ten minutes for regular verification, six for the cache proof, two for each failure probe. No workload loops or continuous stress generation.
- Read-only repository permissions. No secrets, deployments, writable tokens, privileged containers, or auto-applied self-healing fixes.
- The regular Nx check and lab share one dependency chain in `.nx/pipelines/ci.yaml`, avoiding separate overlapping Nx Cloud pipelines. `.github/workflows/ci.yml` remains unchanged.
- Invalid configuration fixtures live in JavaScript outside the pipeline discovery directory. They are tested locally, not submitted to the service.

The cap is a static scheduling check, not a cloud billing limiter. Nx Cloud does not expose a pipeline `concurrency` setting in this schema; preventing overlapping pipeline executions is an operator responsibility. Unexpected lingering workers are a failure to investigate, not a reason to launch the next run.

## Round 02: cache correctness and failure propagation

**Active on this branch. Disposable experiment: the expected overall PR result is red. Do not merge this pipeline into main.** The intentional exit is not tolerated, so a green pipeline would itself require investigation.

This replaces the two large shard reruns with a three-project cache fixture and small job-control probes. It does not add projects to the real workspace. Round 01 is preserved at `tools/chaos/fixtures/round-01.pipeline.yaml`, outside pipeline discovery, and its regression tests remain active.

Job dependencies:

```text
main (4 machines) -> cache (1)
                      |-- boom (1) --+-- default_dependent (1; expected skip)
                      |              |-- explicit_success (1; must skip)
                      |              +-- failure_handler (1; must run)
                      +-- sibling (1; must run)

cleanup (1) waits for cache and every failure-probe branch; uses always().
```

The conservative maximum is **four Nx Cloud machines plus the GitHub runner = five**. The bound counts guarded jobs even if their commands should skip. No extra distributed workers are used by the new probes. `boom` and `sibling` may overlap; the dependent branches may overlap after `boom` finishes. This is not another all-serial four-job workload.

### Cache proof

`tools/chaos/cache-lab.mjs` creates its own temporary workspace, with `seed -> consumer` and an unrelated project, using the installed Nx version. A unique trial input makes its first task hashes cold without resetting the real workspace or anyone else's cache. Each executor writes both an artifact and an uncached execution journal.

| Phase | Expected execution | Required evidence |
| --- | --- | --- |
| Cold | all three tasks execute | three cache misses, valid values, three journal entries |
| Local restore | none | delete outputs first; three local hits; identical artifact SHA-256 and execution witnesses |
| Remote restore | none | new empty cache directory **and workspace database**; three remote hits; no new journal entries |
| Input mutation | seed and consumer execute | change seed's source; two new hashes and values; unrelated hash/output unchanged and locally cached |
| Remote mutated restore | none | another empty cache/database; three remote hits with the new bytes and no executions |

Real cache provenance comes from Nx's `run.json`, not elapsed time or a green command. Every task must have a successful exit code and expected cache source. Artifact bytes, deterministic values, task hashes, execution witnesses, and the journal are checked together. Merely rebuilding the right outputs fails the restoration oracle.

The local-only mode never connects to Cloud and substitutes local restoration for the final phase; it **does not certify remote caching**. Live mode uses only the existing configured Nx Cloud workspace, with distribution disabled, and makes five finite Nx calls. Each call has a 65-second timeout. Only the temporary directory it created is removed. Logs and reports remain under ignored `dist/chaos/round-02/cache/<trial>/`.

### Failure proof

- `boom` exits **23**, without `continue-on-error`. Its following default-success step must not run. Its `failure()` handler checks `outcome`, `conclusion`, and `job.status` are all `failure`. Its `always()` step verifies fresh local cleanup evidence without changing the job's failed result.
- `sibling` is independently dependent on the successful cache job. It performs eight seconds of finite idle work and records start/end timestamps. Do not claim overlap unless the actual timings establish it.
- `default_dependent` probes the implicit success guard after an upstream failed job. Unexpected execution emits evidence and exits **86**. If it runs, distinguish an undocumented job-level default from a service defect before reporting it.
- `explicit_success` uses `always() && needs.boom.result == 'success'` plus the PR guard. Its command must skip after the intentional failure.
- `failure_handler` uses the corresponding explicit failure condition and must actually execute, checking `needs.boom.result == 'failure'`.
- `cleanup` uses `always()`, waits for all branches, and asserts cache/sibling/handler success and the intentional job's failure. It records the skipped dependents' actual results. The reference does not enumerate skipped-job result values, so it accepts `success` or `skipped` but does **not** treat either as proof of execution or skipping.

**External step audit is mandatory.** Verify the actual named steps of `boom`, `sibling`, both dependents, `failure_handler`, and `cleanup`; successful job summaries alone are insufficient. The join cannot read other job filesystems. Exactly the intended failure must occur; missing handlers, fixture failures, or unexpected exit 86 do not count as a successful experiment simply because the pipeline is red.

No configuration-rejection test is published. The earlier fifteen schema cases remain offline regression checks only.

### Commands and evidence

```sh
pnpm chaos:check
pnpm test:tools
node tools/chaos/cache-lab.mjs          # local-only proof, no Cloud connection
# Only in the approved single live trial:
node tools/chaos/cache-lab.mjs --remote
```

Cloud logs expose `CHAOS_CACHE_PHASE`, `CHAOS_CACHE_REPORT`, and `CHAOS_FAILURE_EVIDENCE`; reports also go to the Nx Cloud step summary. Inspect each phase and named step before classifying the result. Do not automatically retry, rerun, or merge this red experiment.

## Round 01: configuration interactions (archived)

The following describes the prior pipeline, not the active round-02 job graph.

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

## Round-01 expected result

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

## Deferred work

Round 02 covers a tiny cold/warm cache fixture and deliberately failed-job dependents. It does not provide a controlled performance benchmark for the 480-project graph.

Still not enabled:

- A narrow affected-source experiment on the large real graph.
- Schema-accepted but prohibited live configurations (excluded by the user).
- Worker-startup failures or forced worker loss.
- Independent VM/billing shutdown verification; recorded agent-offline state is a narrower observation.

No automatic repetition, extra branches, or negative configurations are published by the tooling.
