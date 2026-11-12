import assert from 'node:assert/strict';
import { copyFile, mkdir, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const workspace = fileURLToPath(new URL('../', import.meta.url));
async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'nx-graph-task-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const directory of ['tools', 'libs/probe/src', 'libs/probe/tests']) await mkdir(path.join(root, directory), { recursive: true });
  // Run the exact production runner in an isolated workspace, never alter live fixtures.
  for (const file of ['tools/task.mjs', 'tsconfig.base.json', 'eslint.config.mjs']) {
    await copyFile(path.join(workspace, file), path.join(root, file));
  }
  await symlink(path.join(workspace, 'node_modules'), path.join(root, 'node_modules'), process.platform === 'win32' ? 'junction' : 'dir');
  const files = {
    'package.json': JSON.stringify({ type: 'module' }),
    'libs/probe/project.json': JSON.stringify({ name: 'probe', tags: ['layer:util'] }),
    'libs/probe/schema.json': JSON.stringify({ name: 'probe', ownWeight: 1, dependencies: [] }),
    'libs/probe/tsconfig.json': JSON.stringify({ extends: '../../tsconfig.base.json', include: ['src/**/*.ts'] }),
    'libs/probe/src/index.ts': "export const weight = 1;\nexport function evaluate(seed = 1) { return { project: 'probe', value: seed + weight, dependencies: [] }; }\n",
    'libs/probe/tests/index.test.mjs': "import assert from 'node:assert/strict';\nimport { test } from 'node:test';\nimport { weight } from '../../../dist/build/probe/index.js';\ntest('weight', () => assert.equal(weight, 1));\n",
  };
  for (const [file, content] of Object.entries(files)) await writeFile(path.join(root, file), content);
  const run = (target, success = true) => {
    // Node's test-runner context suppresses nested --test execution. Simulate Nx,
    // not a recursively invoked test worker, so failures really execute.
    const env = { ...process.env };
    delete env.NODE_TEST_CONTEXT;
    const result = spawnSync(process.execPath, ['tools/task.mjs', target, 'libs/probe'], { cwd: root, encoding: 'utf8', env });
    assert.ifError(result.error);
    assert.equal(result.status === 0, success, `${target}:\n${result.stdout}\n${result.stderr}`);
    return result;
  };
  return { root, run };
}

test('real runner completes all seven targets and detects corrupt packages', async (t) => {
  const { root, run } = await fixture(t);
  for (const target of ['codegen', 'typecheck', 'lint', 'build', 'test', 'package', 'verify']) run(target);
  const result = JSON.parse(await readFile(path.join(root, 'dist/verify/probe/result.json'), 'utf8'));
  assert.deepEqual(result, { project: 'probe', passed: true });
  await writeFile(path.join(root, 'dist/packages/probe/index.js'), '// corrupted package\n');
  run('verify', false);
});

test('typecheck rejects actual TypeScript errors', async (t) => {
  const { root, run } = await fixture(t);
  await writeFile(path.join(root, 'libs/probe/src/index.ts'), 'export const broken: string = 42;\n');
  assert.match(run('typecheck', false).stderr, /not assignable/);
});

test('lint rejects unused variables', async (t) => {
  const { root, run } = await fixture(t);
  await writeFile(path.join(root, 'libs/probe/src/index.ts'), 'const unused = 1;\n');
  assert.match(run('lint', false).stderr, /no-unused-vars/);
});

test('test target propagates failed unit assertions', async (t) => {
  const { root, run } = await fixture(t);
  run('codegen');
  run('build');
  await writeFile(path.join(root, 'libs/probe/tests/index.test.mjs'), "import { test } from 'node:test';\nimport assert from 'node:assert/strict';\ntest('failure', () => assert.equal(1, 2));\n");
  assert.match(run('test', false).stderr, /Tests failed/);
});

test('codegen rejects invalid schema weights', async (t) => {
  const { root, run } = await fixture(t);
  await writeFile(path.join(root, 'libs/probe/schema.json'), JSON.stringify({ name: 'probe', ownWeight: -1, dependencies: [] }));
  run('codegen', false);
});
