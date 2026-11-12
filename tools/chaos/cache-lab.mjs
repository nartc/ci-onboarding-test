import assert from 'node:assert/strict';
import { randomUUID, createHash } from 'node:crypto';
import { appendFile, copyFile, mkdir, mkdtemp, readFile, readdir, rm, symlink, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repository = fileURLToPath(new URL('../../', import.meta.url));
export const projects = ['seed', 'consumer', 'unrelated'];
const digest = (source, dependency = '') => createHash('sha256').update(`${source}\n${dependency}`).digest('hex');

export function assertPhase({ tasks, artifacts, artifactDigests, journal }, previous, expectedMisses, expectedHits) {
  assert.equal(tasks.length, 3, 'Each phase must report exactly three tasks');
  assert.deepEqual(tasks.map(t => t.projectName).sort(), [...projects].sort());
  for (const task of tasks) {
    assert.equal(task.status, 0, `${task.taskId} failed`);
    assert.ok(task.hash, 'Missing task hash');
    const miss = expectedMisses.includes(task.projectName);
    assert.equal(task.cacheStatus, miss ? 'cache-miss' : expectedHits, `Unexpected cache source for ${task.taskId}`);
    assert.ok(artifacts[task.projectName]?.execution, 'Missing artifact execution witness');
    assert.match(artifactDigests[task.projectName], /^[a-f0-9]{64}$/, 'Missing artifact byte digest');
    if (previous) {
      const oldTask = previous.tasks.find(t => t.projectName === task.projectName);
      if (miss) {
        assert.notEqual(task.hash, oldTask.hash, 'Changed input did not invalidate the task hash');
        assert.notEqual(artifacts[task.projectName].execution, previous.artifacts[task.projectName].execution);
      } else {
        assert.equal(task.hash, oldTask.hash, 'Unchanged inputs changed the task hash');
        assert.deepEqual(artifacts[task.projectName], previous.artifacts[task.projectName], 'Restored contents differ');
        assert.equal(artifactDigests[task.projectName], previous.artifactDigests[task.projectName], 'Restored bytes differ');
      }
    }
  }
  assert.equal(journal.length, (previous?.journal.length ?? 0) + expectedMisses.length, 'Cache hits re-executed a task');
  assert.deepEqual(journal.slice(0, previous?.journal.length ?? 0), previous?.journal ?? [], 'Execution journal was rewritten');
  const executed = journal.slice(previous?.journal.length ?? 0);
  assert.deepEqual(executed.map(x => x.project).sort(), [...expectedMisses].sort());
  for (const entry of executed) assert.deepEqual(entry, artifacts[entry.project], 'Executor journal does not match output');
}

async function command(args, cwd, env, logPath) {
  const child = spawn(process.execPath, args, { cwd, env, stdio: ['ignore', 'pipe', 'pipe'] });
  let output = '';
  const timer = setTimeout(() => child.kill('SIGKILL'), 65_000);
  child.stdout.on('data', data => { output += data; });
  child.stderr.on('data', data => { output += data; });
  try {
    const result = await new Promise((resolve, reject) => {
      child.once('error', reject);
      child.once('close', (code, signal) => resolve({ code, signal }));
    });
    await writeFile(logPath, output);
    assert.equal(result.code, 0, `Nx fixture failed (${result.code}/${result.signal}); see ${logPath}\n${output.slice(-3000)}`);
  } finally { clearTimeout(timer); }
}

export async function runCacheLab({ remote = false, evidenceDirectory } = {}) {
  const trial = randomUUID();
  const evidence = evidenceDirectory ?? path.join(repository, 'dist/chaos/round-02/cache', trial);
  await mkdir(evidence, { recursive: true });
  // A new directory outside the parent repository avoids parent .gitignore rules and
  // never changes the 480-project graph, its caches, or any real source files.
  const root = await mkdtemp(path.join(os.tmpdir(), 'nx-cache-lab-'));
  const report = { round: 'round-02', trial, mode: remote ? 'remote' : 'local-only', passed: false, phases: [] };
  const save = () => writeFile(path.join(evidence, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  await save();
  try {
    const parentConfig = JSON.parse(await readFile(path.join(repository, 'nx.json'), 'utf8'));
    const nxPackage = JSON.parse(await readFile(path.join(repository, 'node_modules/nx/package.json'), 'utf8'));
    const nxVersion = nxPackage.version;
    const nxCli = path.join(repository, 'node_modules/nx', nxPackage.bin.nx);
    const config = {
      parallel: 2,
      ...(remote ? { nxCloudId: parentConfig.nxCloudId } : { neverConnectToCloud: true }),
      namedInputs: { default: ['{projectRoot}/**/*', '{workspaceRoot}/build.mjs', '{workspaceRoot}/trial.txt'] },
    };
    if (remote) assert.ok(config.nxCloudId, 'Use only the existing configured Nx Cloud workspace');
    await writeFile(path.join(root, 'nx.json'), JSON.stringify(config));
    await writeFile(path.join(root, 'package.json'), JSON.stringify({ name: 'chaos-cache-fixture', private: true, type: 'module', devDependencies: { nx: nxVersion } }));
    await writeFile(path.join(root, '.gitignore'), 'node_modules\n.nx\nout\n.evidence\n');
    await writeFile(path.join(root, 'trial.txt'), trial); // Unique cold key; constant throughout this trial.
    await symlink(path.join(repository, 'node_modules'), path.join(root, 'node_modules'), 'dir');
    await copyFile(new URL('./cache-build.mjs', import.meta.url), path.join(root, 'build.mjs'));
    for (const name of projects) {
      await mkdir(path.join(root, 'projects', name), { recursive: true });
      await writeFile(path.join(root, 'projects', name, 'source.txt'), name === 'seed' ? 'alpha' : name);
      await writeFile(path.join(root, 'projects', name, 'project.json'), JSON.stringify({
        name, ...(name === 'consumer' ? { implicitDependencies: ['seed'] } : {}),
        targets: { build: {
          executor: 'nx:run-commands', cache: true, dependsOn: ['^build'],
          inputs: ['default', '^default'], outputs: [`{workspaceRoot}/out/${name}`],
          options: { command: `node build.mjs ${name}` },
        } },
      }));
    }
    const baseEnv = { ...process.env, NX_DAEMON: 'false', NX_NO_CLOUD: remote ? 'false' : 'true',
      NX_WORKSPACE_ROOT_PATH: root, NX_CLOUD_DISTRIBUTED_EXECUTION: 'false',
      NX_TASKS_RUNNER_DYNAMIC_OUTPUT: 'false', NX_INTERACTIVE: 'false', NX_SKIP_NX_CACHE: 'false',
      NX_DISABLE_NX_CACHE: 'false', NX_SKIP_REMOTE_CACHE: 'false', NX_DISABLE_REMOTE_CACHE: 'false',
      NX_ISOLATE_PLUGINS: 'false' };
    delete baseEnv.NODE_TEST_CONTEXT;
    delete baseEnv.NX_TASK_HASH;
    const plans = [
      { name: 'cold', cache: 'a', misses: projects },
      { name: 'local-restore', cache: 'a', misses: [], hit: 'local-cache-hit' },
      ...(remote ? [{ name: 'remote-restore', cache: 'b', misses: [], hit: 'remote-cache-hit', fresh: true }] : []),
      { name: 'input-mutation', cache: remote ? 'b' : 'a', misses: ['seed', 'consumer'], hit: 'local-cache-hit', mutate: true },
      { name: remote ? 'remote-mutated-restore' : 'local-mutated-restore', cache: remote ? 'c' : 'a', misses: [],
        hit: remote ? 'remote-cache-hit' : 'local-cache-hit', fresh: remote },
    ];
    let changed = false;
    for (const phase of plans) {
      if (phase.mutate) {
        await writeFile(path.join(root, 'projects/seed/source.txt'), 'beta-modified');
        changed = true;
      }
      await rm(path.join(root, 'out'), { recursive: true, force: true });
      const cache = path.join(root, '.nx', `cache-${phase.cache}`);
      const workspaceData = path.join(root, '.nx', `data-${phase.cache}`);
      if (phase.fresh) {
        for (const directory of [cache, workspaceData]) {
          const existing = await readdir(directory).catch(e => { if (e.code === 'ENOENT') return []; throw e; });
          assert.equal(existing.length, 0, 'Remote proof requires empty local cache AND workspace DB');
        }
      }
      await command([nxCli, 'run-many', '-t', 'build', '--all', '--outputStyle=static'], root,
        { ...baseEnv, NX_CACHE_DIRECTORY: cache, NX_WORKSPACE_DATA_DIRECTORY: workspaceData }, path.join(evidence, `${phase.name}.log`));
      const { tasks } = JSON.parse(await readFile(path.join(cache, 'run.json'), 'utf8'));
      const bytes = Object.fromEntries(await Promise.all(projects.map(async name => [name, await readFile(path.join(root, 'out', name, 'artifact.json'))])));
      const artifacts = Object.fromEntries(projects.map(name => [name, JSON.parse(bytes[name].toString('utf8'))]));
      const artifactDigests = Object.fromEntries(projects.map(name => [name, createHash('sha256').update(bytes[name]).digest('hex')]));
      const journal = (await readFile(path.join(root, '.evidence/executions.ndjson'), 'utf8')).trim().split('\n').map(JSON.parse);
      const result = { name: phase.name, verified: false, tasks, artifacts, artifactDigests, journal };
      const previous = report.phases.at(-1);
      report.phases.push(result);
      await save(); // Retain observations even if the oracle rejects this phase.
      assertPhase(result, previous, phase.misses, phase.hit);
      const seed = digest(changed ? 'beta-modified' : 'alpha');
      assert.equal(artifacts.seed.value, seed);
      assert.equal(artifacts.consumer.value, digest('consumer', seed), 'Dependent restored stale bytes');
      assert.equal(artifacts.unrelated.value, digest('unrelated'));
      result.verified = true;
      await save();
      console.log(`CHAOS_CACHE_PHASE ${JSON.stringify({ trial, name: phase.name, tasks })}`);
    }
    report.passed = true;
  } catch (error) {
    report.error = error.message;
    throw error;
  } finally {
    await save();
    console.log(`CHAOS_CACHE_REPORT ${JSON.stringify(report)}`);
    if (process.env.NX_CLOUD_STEP_SUMMARY) await appendFile(process.env.NX_CLOUD_STEP_SUMMARY, `# Cache correctness\n\n\`\`\`json\n${JSON.stringify(report, null, 2)}\n\`\`\`\n`);
    await rm(root, { recursive: true, force: true });
  }
  return report;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  assert.ok(process.argv.slice(2).every(arg => arg === '--remote'), 'Only --remote is supported');
  await runCacheLab({ remote: process.argv.includes('--remote') });
}
