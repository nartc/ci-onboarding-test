import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { createProjects, targets } from './topology.mjs';
import { graphDepth, inspectGraphs } from './graph-report.mjs';

const config = JSON.parse(readFileSync(new URL('../workspace.config.json', import.meta.url), 'utf8'));

test('default topology has 480 projects, 4024 imports, and 3384 targets', () => {
  const projects = createProjects(config);
  assert.equal(projects.length, 480);
  assert.equal(projects.reduce((sum, p) => sum + p.dependencies.length, 0), 4024);
  assert.equal(projects.length * targets.length + projects.filter((p) => p.layer === 'e2e').length, 3384);
  assert.equal(new Set(projects.map((p) => p.name)).size, projects.length);
  assert.equal(new Set(projects.map((p) => p.root)).size, projects.length);
});

test('topology is deterministic and dependencies always precede consumers', () => {
  const projects = createProjects(config);
  assert.deepEqual(projects, createProjects(config));
  const seen = new Set();
  for (const project of projects) {
    for (const dependency of project.dependencies) assert.ok(seen.has(dependency));
    assert.equal(new Set(project.dependencies).size, project.dependencies.length);
    seen.add(project.name);
  }
});

test('project DAG has nine layers and cross-domain imports', () => {
  const projects = createProjects(config);
  assert.equal(graphDepth(Object.fromEntries(projects.map((p) => [p.name, p.dependencies]))), 9);
  assert.ok(projects.find((p) => p.name === 'commerce-data-01').dependencies.includes('experimentation-util-01'));
});

test('small topology deduplicates wrapped dependencies', () => {
  const projects = createProjects({ sharedLayers: 1, sharedPerLayer: 1, projectsPerLayer: 1, domains: ['demo'] });
  assert.equal(projects.length, 8);
  for (const p of projects) assert.equal(new Set(p.dependencies).size, p.dependencies.length);
});

test('invalid sizes and domains are rejected', () => {
  for (const value of [0, -1, 1.5, 33, '4']) {
    assert.throws(() => createProjects({ ...config, projectsPerLayer: value }), /integer/);
  }
  for (const domains of [[], ['a', 'a'], ['../escape'], ['UPPER'], [null]]) {
    assert.throws(() => createProjects({ ...config, domains }), /slugs/);
  }
});

test('cycle and missing-node checks fail closed', () => {
  assert.throws(() => graphDepth({ a: ['b'], b: ['a'] }), /Cycle/);
  assert.throws(() => graphDepth({ a: ['missing'] }), /Missing node/);
  assert.equal(graphDepth({}), 0);
});

function fixture() {
  const expected = [{ name: 'demo', dependencies: [], application: false, layer: 'util' }];
  const projects = { nodes: { demo: {} }, dependencies: { demo: [] } };
  const dependencies = { 'demo:codegen': [], 'demo:lint': [], 'demo:typecheck': [],
    'demo:build': [{ id: 'demo:codegen' }, { id: 'demo:typecheck' }], 'demo:test': [{ id: 'demo:build' }],
    'demo:package': ['demo:build', 'demo:test', 'demo:lint'], 'demo:verify': ['demo:package'] };
  const tasks = { tasks: Object.fromEntries(targets.map((target) => [`demo:${target}`, {}])), dependencies };
  return { expected, projects, tasks };
}

test('graph inspection accepts Nx string and object task edges', () => {
  const { expected, projects, tasks } = fixture();
  assert.equal(inspectGraphs(projects, tasks, expected).taskDepth, 5);
});

test('graph inspection rejects missing tasks and prerequisite edges', () => {
  const { expected, projects, tasks } = fixture();
  tasks.dependencies['demo:build'] = [];
  assert.throws(() => inspectGraphs(projects, tasks, expected), /incorrect task prerequisites/);
  delete tasks.tasks['demo:test'];
  assert.throws(() => inspectGraphs(projects, tasks, expected), /Missing or unexpected tasks/);
});

test('graph inspection rejects unexpected project imports', () => {
  const { expected, projects, tasks } = fixture();
  projects.dependencies.demo = [{ target: 'unknown', type: 'static' }];
  assert.throws(() => inspectGraphs(projects, tasks, expected), /imports differ/);
});
