import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const workspace = fileURLToPath(new URL('../', import.meta.url));
process.chdir(workspace);
const [target, projectRoot] = process.argv.slice(2);
const allowed = ['codegen', 'lint', 'typecheck', 'build', 'test', 'package', 'verify', 'e2e'];
if (!allowed.includes(target) || !projectRoot || !/^(apps|libs|e2e)\/[a-z0-9/-]+$/.test(projectRoot) || process.argv.length !== 4) {
  throw new Error('Usage: task.mjs <codegen|lint|typecheck|build|test|package|verify|e2e> <project-root>');
}
const readJson = async (file) => JSON.parse(await readFile(file, 'utf8'));
const project = await readJson(`${projectRoot}/project.json`);
const schema = await readJson(`${projectRoot}/schema.json`);
const { name } = project;
assert.match(name, /^[a-z][a-z0-9-]*$/);
assert.equal(schema.name, name);
const output = (kind) => `dist/${kind}/${name}`;
const writeJson = async (file, value) => {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, JSON.stringify(value, null, 2) + '\n');
};
const hash = (content) => createHash('sha256').update(content).digest('hex');
const loadBuilt = (kind, projectName) => import(pathToFileURL(path.join(workspace, `dist/${kind}/${projectName}/index.js`)).href);

switch (target) {
  case 'codegen': {
    assert.ok(Number.isInteger(schema.ownWeight) && schema.ownWeight > 0);
    assert.ok(Array.isArray(schema.dependencies) && schema.dependencies.every((dependency) => /^[a-z][a-z0-9-]*$/.test(dependency)));
    await writeJson(`${output('codegen')}/metadata.json`, { ...schema, schemaVersion: 1, schemaHash: hash(JSON.stringify(schema)) });
    break;
  }
  case 'lint': {
    const { ESLint } = await import('eslint');
    const eslint = new ESLint();
    const results = await eslint.lintFiles([`${projectRoot}/src/**/*.ts`]);
    if (results.some((result) => result.errorCount || result.warningCount)) {
      console.error((await eslint.loadFormatter('stylish')).format(results));
      process.exitCode = 1;
    }
    break;
  }
  case 'typecheck': {
    const { default: ts } = await import('typescript');
    const configPath = `${projectRoot}/tsconfig.json`;
    const config = ts.readConfigFile(configPath, ts.sys.readFile);
    const parsed = ts.parseJsonConfigFileContent(config.config ?? {}, ts.sys, projectRoot);
    const program = ts.createProgram(parsed.fileNames, parsed.options);
    const diagnostics = [...(config.error ? [config.error] : []), ...parsed.errors, ...ts.getPreEmitDiagnostics(program)];
    if (diagnostics.length) {
      console.error(ts.formatDiagnosticsWithColorAndContext(diagnostics, {
        getCanonicalFileName: (file) => file, getCurrentDirectory: () => workspace, getNewLine: () => '\n',
      }));
      process.exitCode = 1;
    }
    break;
  }
  case 'build': {
    const { build } = await import('esbuild');
    const metadata = await readJson(`${output('codegen')}/metadata.json`);
    // Check the prerequisite artifacts exist: the ^build edges are not decorative.
    for (const dependency of schema.dependencies) await readFile(`dist/build/${dependency}/index.js`);
    const result = await build({
      entryPoints: [`${projectRoot}/src/index.ts`], outfile: `${output('build')}/index.js`,
      bundle: true, platform: 'node', format: 'esm', target: 'node24', sourcemap: true, metafile: true,
      banner: { js: `export const buildMetadata = ${JSON.stringify(metadata)};` }, logLevel: 'silent',
    });
    await writeJson(`${output('build')}/metafile.json`, result.metafile);
    break;
  }
  case 'test': {
    const result = spawnSync(process.execPath, ['--test', '--test-reporter=spec', `${projectRoot}/tests/index.test.mjs`], { encoding: 'utf8' });
    if (result.error) throw result.error;
    if (result.status !== 0) {
      console.error(result.stdout, result.stderr);
      throw new Error(`Tests failed for ${name} (${result.status ?? result.signal})`);
    }
    await writeJson(`${output('test')}/result.json`, { project: name, passed: true });
    break;
  }
  case 'package': {
    assert.equal((await readJson(`${output('test')}/result.json`)).passed, true);
    const content = await readFile(`${output('build')}/index.js`);
    await mkdir(output('packages'), { recursive: true });
    await copyFile(`${output('build')}/index.js`, `${output('packages')}/index.js`);
    await copyFile(`${output('build')}/index.js.map`, `${output('packages')}/index.js.map`);
    await writeJson(`${output('packages')}/package.json`, {
      name: `@graph-fixture/${name}`, version: '0.0.0', private: true, type: 'module', exports: './index.js',
    });
    await writeJson(`${output('packages')}/integrity.json`, { sha256: hash(content) });
    break;
  }
  case 'verify': {
    const content = await readFile(`${output('packages')}/index.js`);
    assert.equal(hash(content), (await readJson(`${output('packages')}/integrity.json`)).sha256);
    const bundle = await loadBuilt('packages', name);
    assert.equal(bundle.evaluate().project, name);
    assert.deepEqual(bundle.evaluate().dependencies, schema.dependencies);
    await writeJson(`${output('verify')}/result.json`, { project: name, passed: true });
    break;
  }
  case 'e2e': {
    assert.ok(project.tags.includes('layer:e2e'), 'e2e only applies to e2e projects');
    const dependencies = await Promise.all(schema.dependencies.map((dependency) => loadBuilt('packages', dependency)));
    const bundle = await loadBuilt('build', name);
    for (const [i, dependency] of dependencies.entries()) {
      assert.equal(dependency.evaluate(42).project, schema.dependencies[i]);
      assert.equal(dependency.evaluate(42).value, 42 + dependency.weight);
      assert.equal(dependency.buildMetadata.name, schema.dependencies[i]);
    }
    assert.equal(bundle.evaluate(42).value, 42 + schema.ownWeight + dependencies.reduce((sum, dependency) => sum + dependency.weight, 0));
    await writeJson(`${output('e2e')}/result.json`, { project: name, passed: true, packages: schema.dependencies });
    break;
  }
}
if (!process.exitCode) console.log(`${name}:${target} passed`);
