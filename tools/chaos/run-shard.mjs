import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const workspace = fileURLToPath(new URL('../../', import.meta.url));
export function selectProjects(projects, domains, shard) {
  assert.ok(['mixed', 'scaled'].includes(shard), 'Unknown shard');
  const scopes = new Set(domains.filter((_, i) => i % 2 === (shard === 'mixed' ? 0 : 1)));
  if (shard === 'mixed') scopes.add('shared');
  return projects.filter((project) => scopes.has(project.scope));
}

async function main() {
  process.chdir(workspace);
  const [shard, mode] = process.argv.slice(2);
  assert.ok(mode === undefined || mode === '--plan');
  const readJson = async (file) => JSON.parse(await readFile(file, 'utf8'));
  const inventory = await readJson('tools/generated/projects.json');
  const config = await readJson('workspace.config.json');
  const projects = selectProjects(inventory, config.domains, shard);
  assert.ok(projects.length > 0);
  const directory = `dist/chaos/${shard}`;
  await mkdir(directory, { recursive: true });
  const require = createRequire(import.meta.url);
  const nxPackage = require.resolve('nx/package.json');
  const nx = await readJson(nxPackage);
  const nxBin = path.resolve(path.dirname(nxPackage), nx.bin.nx);
  // Request packages explicitly: the coordinator audit must not assume that
  // artifacts of an implicit-only prerequisite are downloaded to the main job.
  const args = ['run-many', '-t', 'verify,e2e,package', `--projects=${projects.map((p) => p.name).join(',')}`];
  const run = (extra) => {
    const result = spawnSync(process.execPath, [nxBin, ...args, ...extra], {
      stdio: 'inherit', env: { ...process.env, NX_DAEMON: 'false', NX_TUI: 'false' },
    });
    if (result.error) throw result.error;
    assert.equal(result.status, 0, `Nx ${shard} command failed (${result.status ?? result.signal})`);
  };
  run([`--graph=${directory}/task-graph.json`]);
  const graph = (await readJson(`${directory}/task-graph.json`)).tasks;
  const counts = Object.values(graph.tasks).reduce((result, task) => {
    result[task.target.target] = (result[task.target.target] ?? 0) + 1;
    return result;
  }, {});
  const plan = { shard, selectedProjects: projects.length, requestedTasks: Object.keys(graph.tasks).length, targets: counts };
  console.log(`CHAOS_PLAN ${JSON.stringify(plan)}`);
  await writeFile(`${directory}/plan.json`, JSON.stringify(plan, null, 2) + '\n');
  if (mode === '--plan') return;
  run(['--outputStyle=static']);

  // The positive oracle checks actual restored package bytes and task results,
  // not just the Nx process's exit code. Keep this off workers: it is a job step.
  let integrationResults = 0;
  for (const project of projects) {
    assert.deepEqual(await readJson(`dist/verify/${project.name}/result.json`), { project: project.name, passed: true });
    const content = await readFile(`dist/packages/${project.name}/index.js`);
    const digest = createHash('sha256').update(content).digest('hex');
    assert.equal(digest, (await readJson(`dist/packages/${project.name}/integrity.json`)).sha256);
    if (project.layer === 'e2e') {
      assert.deepEqual(await readJson(`dist/e2e/${project.name}/result.json`), {
        project: project.name, passed: true, packages: project.dependencies,
      });
      integrationResults++;
    }
  }
  const report = { ...plan, passed: true, verifiedPackages: projects.length, integrationResults,
    commit: process.env.NX_CLOUD_SHA ?? null, runner: process.env.NX_CLOUD_RUNNER_NAME ?? null };
  await writeFile(`${directory}/result.json`, JSON.stringify(report, null, 2) + '\n');
  console.log(`CHAOS_SHARD_RESULT ${JSON.stringify(report)}`);
  if (process.env.NX_CLOUD_STEP_SUMMARY) {
    await appendFile(process.env.NX_CLOUD_STEP_SUMMARY, `# ${shard} shard evidence\n\n\`\`\`json\n${JSON.stringify(report, null, 2)}\n\`\`\`\n`);
  }
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
