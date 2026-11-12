import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { appendFile, mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';

export function assertDependencyResults(results) {
  assert.equal(results.cache, 'success', 'Cache proof must finish successfully');
  assert.equal(results.boom, 'failure', 'The intentional failed job must report failure');
  assert.equal(results.sibling, 'success', 'Independent sibling must finish successfully');
  assert.equal(results.handler, 'success', 'Explicit failure handler must run successfully');
  // Docs do not enumerate the result of a skipped job; the observed main-push UI
  // labels skipped jobs SUCCEEDED. Record this value, but do not invent a contract.
  for (const key of ['defaultDependent', 'explicitSuccess']) {
    assert.ok(['success', 'skipped'].includes(results[key]), `Unexpected ${key} result: ${results[key]}`);
  }
}

async function main() {
  const [action] = process.argv.slice(2);
  const directory = process.env.CHAOS_FAILURE_DIR ?? fileURLToPath(new URL('../../dist/chaos/round-02/failure', import.meta.url));
  await mkdir(directory, { recursive: true });
  const persist = async (name, data) => {
    const temporary = path.join(directory, `${name}.${randomUUID()}.tmp`);
    await writeFile(temporary, JSON.stringify(data, null, 2) + '\n');
    await rename(temporary, path.join(directory, `${name}.json`));
    console.log(`CHAOS_FAILURE_EVIDENCE ${JSON.stringify({ name, ...data })}`);
  };
  const load = async name => JSON.parse(await readFile(path.join(directory, `${name}.json`), 'utf8'));
  const report = async data => {
    await persist('report', data);
    if (process.env.NX_CLOUD_STEP_SUMMARY) await appendFile(process.env.NX_CLOUD_STEP_SUMMARY, `# Failure propagation\n\n\`\`\`json\n${JSON.stringify(data, null, 2)}\n\`\`\`\n`);
  };
  if (action === 'start') {
    const trial = randomUUID();
    await persist('trial', { trial });
    await persist('report', { trial, passed: false });
  } else if (['fail', 'failure-step', 'cleanup-step'].includes(action)) {
    const { trial } = await load('trial');
    assert.ok(trial);
    if (action === 'fail') {
      await persist('intentional-exit', { trial, exit: 23 });
      process.exitCode = 23;
    } else if (action === 'failure-step') {
      assert.equal((await load('intentional-exit')).trial, trial);
      assert.equal(process.env.FAILURE_OUTCOME, 'failure');
      assert.equal(process.env.FAILURE_CONCLUSION, 'failure');
      assert.equal(process.env.JOB_STATUS, 'failure');
      await persist('failure-handler', { trial, passed: true });
    } else {
      // Invalidate success before any assertion, including repeated verification.
      await report({ trial, passed: false });
      assert.equal((await load('intentional-exit')).trial, trial);
      const handler = await load('failure-handler');
      assert.equal(handler.trial, trial);
      assert.equal(handler.passed, true);
      const unexpected = await load('unexpected-execution').catch(error => { if (error.code === 'ENOENT') return null; throw error; });
      assert.notEqual(unexpected?.trial, trial, 'A default-success step ran after the failure');
      assert.equal(process.env.FAILURE_OUTCOME, 'failure');
      assert.equal(process.env.FAILURE_CONCLUSION, 'failure');
      assert.equal(process.env.JOB_STATUS, 'failure');
      await report({ trial, passed: true, expectedJobResult: 'failure', exit: 23, cleanupRan: true });
    }
  } else if (action === 'forbidden') {
    const current = await load('trial').catch(error => { if (error.code === 'ENOENT') return null; throw error; });
    const evidence = { trial: current?.trial ?? randomUUID(), passed: false, unexpectedExecution: true };
    await persist('unexpected-execution', evidence);
    await report(evidence);
    process.exitCode = 86;
  } else if (action === 'sibling') {
    const trial = randomUUID();
    const startedAt = new Date().toISOString();
    await report({ trial, passed: false, startedAt });
    await delay(8_000); // Finite, idle work; inspect timestamps before claiming overlap.
    await report({ trial, passed: true, independentSiblingRan: true, startedAt, completedAt: new Date().toISOString() });
  } else if (action === 'dependency-handler') {
    const result = process.env.BOOM_RESULT;
    const trial = randomUUID();
    await report({ trial, passed: false, observedFailureResult: result });
    assert.equal(result, 'failure');
    await report({ trial, passed: true, observedFailureResult: result });
  } else if (action === 'join') {
    const results = {
      cache: process.env.CACHE_RESULT, boom: process.env.BOOM_RESULT, sibling: process.env.SIBLING_RESULT,
      handler: process.env.HANDLER_RESULT, defaultDependent: process.env.DEFAULT_RESULT,
      explicitSuccess: process.env.EXPLICIT_RESULT,
    };
    const trial = randomUUID();
    await report({ trial, passed: false, results });
    assertDependencyResults(results);
    await report({ trial, passed: true, results,
      requiresExternalStepAudit: ['default_dependent', 'explicit_success', 'failure_handler', 'sibling', 'boom'],
      note: 'Do not treat successful skipped-job summaries as proof their commands ran. Audit individual steps.' });
  } else throw new Error(`Unknown failure probe: ${action}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
