import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createProjects, targets } from './topology.mjs';

export function graphDepth(dependencies) {
  const depth = new Map();
  const visiting = new Set();
  const visit = (node) => {
    if (!(node in dependencies)) throw new Error(`Missing node: ${node}`);
    if (visiting.has(node)) throw new Error(`Cycle at ${node}`);
    if (depth.has(node)) return depth.get(node);
    visiting.add(node);
    const result = 1 + Math.max(0, ...dependencies[node].map(visit));
    visiting.delete(node);
    depth.set(node, result);
    return result;
  };
  return Math.max(0, ...Object.keys(dependencies).map(visit));
}

export function inspectGraphs(projectGraph, taskGraph, expected) {
  assert.deepEqual(Object.keys(projectGraph.nodes).sort(), expected.map((p) => p.name).sort(), 'Nx project inventory differs');
  const projectDependencies = {};
  for (const project of expected) {
    const actual = projectGraph.dependencies[project.name] ?? [];
    assert.ok(actual.every((edge) => edge.type === 'static'), `${project.name} should use static import edges`);
    projectDependencies[project.name] = actual.map((edge) => edge.target);
    assert.deepEqual([...projectDependencies[project.name]].sort(), [...project.dependencies].sort(), `${project.name}: imports differ`);
  }
  const expectedTasks = expected.flatMap((p) => [...targets, ...(p.layer === 'e2e' ? ['e2e'] : [])].map((target) => `${p.name}:${target}`));
  assert.deepEqual(Object.keys(taskGraph.tasks).sort(), expectedTasks.sort(), 'Missing or unexpected tasks');
  // Nx 24 emits { id } dependencies; older versions emitted strings.
  const taskDependencies = Object.fromEntries(Object.keys(taskGraph.tasks).map((id) => [id,
    (taskGraph.dependencies[id] ?? []).map((dependency) => typeof dependency === 'string' ? dependency : dependency.id),
  ]));
  for (const project of expected) {
    const edges = {
      codegen: [], lint: [], typecheck: project.dependencies.map((name) => `${name}:build`),
      build: [...project.dependencies.map((name) => `${name}:build`), `${project.name}:codegen`, `${project.name}:typecheck`],
      test: [`${project.name}:build`], package: ['build', 'test', 'lint'].map((target) => `${project.name}:${target}`),
      verify: [`${project.name}:package`],
      ...(project.layer === 'e2e' ? { e2e: [`${project.name}:build`, ...project.dependencies.map((name) => `${name}:package`)] } : {}),
    };
    for (const [target, dependencies] of Object.entries(edges)) {
      assert.deepEqual([...taskDependencies[`${project.name}:${target}`]].sort(), [...dependencies].sort(), `${project.name}:${target}: incorrect task prerequisites`);
    }
  }
  return {
    projects: expected.length,
    applications: expected.filter((p) => p.application && p.layer !== 'e2e').length,
    libraries: expected.filter((p) => !p.application).length,
    e2eProjects: expected.filter((p) => p.layer === 'e2e').length,
    projectEdges: Object.values(projectDependencies).reduce((sum, values) => sum + values.length, 0),
    projectDepth: graphDepth(projectDependencies),
    tasks: Object.keys(taskGraph.tasks).length,
    taskEdges: Object.values(taskDependencies).reduce((sum, values) => sum + values.length, 0),
    taskDepth: graphDepth(taskDependencies),
  };
}

async function main() {
  if (process.argv.slice(2).some((arg) => arg !== '--check')) throw new Error('Usage: graph-report.mjs [--check]');
  const root = fileURLToPath(new URL('../', import.meta.url));
  process.chdir(root);
  const require = createRequire(import.meta.url);
  const nxPackage = require.resolve('nx/package.json');
  const nx = JSON.parse(await readFile(nxPackage, 'utf8'));
  const nxBin = path.resolve(path.dirname(nxPackage), nx.bin.nx);
  await mkdir('dist/graphs', { recursive: true });
  for (const args of [['graph', '--file=dist/graphs/project-graph.json'], ['run-many', '-t', 'verify,e2e', '--graph=dist/graphs/task-graph.json']]) {
    const result = spawnSync(process.execPath, [nxBin, ...args], {
      stdio: 'inherit', env: { ...process.env, NX_DAEMON: 'false', NX_TUI: 'false' },
    });
    if (result.error) throw result.error;
    if (result.status !== 0) throw new Error(`Nx graph export failed (${result.status ?? result.signal})`);
  }
  const readJson = async (file) => JSON.parse(await readFile(file, 'utf8'));
  const expected = createProjects(await readJson('workspace.config.json'));
  const stats = inspectGraphs((await readJson('dist/graphs/project-graph.json')).graph,
    (await readJson('dist/graphs/task-graph.json')).tasks, expected);
  await writeFile('dist/graphs/summary.json', JSON.stringify(stats, null, 2) + '\n');
  console.table(stats);
  console.log('Both graphs are acyclic; every project, import, target, and task prerequisite matches.');
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
