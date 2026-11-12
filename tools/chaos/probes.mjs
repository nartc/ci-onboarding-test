import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { appendFile, mkdir, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';

const workspace = fileURLToPath(new URL('../../', import.meta.url));
const directory = process.env.CHAOS_EVIDENCE_DIR ?? path.join(workspace, 'dist/chaos/semantics');
await mkdir(directory, { recursive: true });
const [action, participant] = process.argv.slice(2);
const rawRead = async (name) => JSON.parse(await readFile(path.join(directory, `${name}.json`), 'utf8'));
const previous = await rawRead('trial-start').catch((error) => { if (error.code === 'ENOENT') return null; throw error; });
const trial = action === 'start' ? randomUUID() : previous?.trial;
if (!['start', 'report'].includes(action)) assert.ok(trial, 'Start a fresh trial before running probes');
const record = async (name, data) => {
  const value = { ...data, trial, recordedAt: new Date().toISOString() };
  const temporary = path.join(directory, `${name}.${process.pid}.${randomUUID()}.tmp`);
  await writeFile(temporary, JSON.stringify(value, null, 2) + '\n');
  await rename(temporary, path.join(directory, `${name}.json`));
  console.log(`CHAOS_EVIDENCE ${name} ${JSON.stringify(value)}`);
  return value;
};
const read = async (name) => {
  const value = await rawRead(name);
  assert.equal(value.trial, trial, `Stale evidence: ${name}`);
  return value;
};
const exists = async (name) => {
  try { await read(name); return true; } catch (error) { if (error.code === 'ENOENT') return false; throw error; }
};

switch (action) {
  case 'start':
    // Delete only our own evidence files, never arbitrary contents of the directory.
    for (const name of ['trial-start', 'dependencies', 'outputs', 'intentional-failure', 'forbidden', 'success-path',
      'parallel-left-ready', 'parallel-right-ready', 'parallel-left-done', 'parallel-right-done',
      'timeout-start', 'timeout-finished', 'observed', 'verified']) {
      await rm(path.join(directory, `${name}.json`), { force: true });
    }
    await record('trial-start', { round: 'round-01' });
    break;
  case 'dependencies': {
    const results = { mixed: process.env.MIXED_RESULT, scaled: process.env.SCALED_RESULT };
    await record('dependencies', results);
    assert.deepEqual(results, { mixed: 'success', scaled: 'success' });
    break;
  }
  case 'outputs': {
    assert.equal(process.env.CHAOS_SCOPE, 'step');
    assert.equal(process.env.EXPRESSION_SCOPE, 'job');
    assert.ok(process.env.NX_CLOUD_OUTPUT, 'Nx Cloud must provide its output file');
    await appendFile(process.env.NX_CLOUD_OUTPUT, 'token=chaos-round-01\npayload={"answer":42}\n');
    await record('outputs', { scope: process.env.CHAOS_SCOPE, expressionScope: process.env.EXPRESSION_SCOPE });
    break;
  }
  case 'fail':
    await record('intentional-failure', { expectedExit: 17 });
    process.exitCode = 17;
    break;
  case 'forbidden':
    await record('forbidden', { message: 'A step that should be skipped ran.' });
    process.exitCode = 86;
    break;
  case 'success':
    await record('success-path', { ran: true });
    break;
  case 'parallel': {
    assert.ok(['left', 'right'].includes(participant), 'Expected left or right');
    const peer = participant === 'left' ? 'right' : 'left';
    await record(`parallel-${participant}-ready`, { participant });
    const deadline = Date.now() + 8_000;
    while (!(await exists(`parallel-${peer}-ready`))) {
      assert.ok(Date.now() < deadline, 'Parallel steps did not rendezvous within eight seconds; execution may be serial');
      await delay(50);
    }
    await record(`parallel-${participant}-done`, { peerObserved: peer });
    break;
  }
  case 'timeout':
    await record('timeout-start', { pid: process.pid, startedAt: Date.now() });
    // Finite even if the service ignores the six-second step timeout.
    await delay(20_000);
    await record('timeout-finished', { message: 'The timeout was not enforced.' });
    break;
  case 'verify': {
    await rm(path.join(directory, 'verified.json'), { force: true });
    const observed = {
      failureOutcome: process.env.FAILURE_OUTCOME,
      failureConclusion: process.env.FAILURE_CONCLUSION,
      timeoutOutcome: process.env.TIMEOUT_OUTCOME,
      timeoutConclusion: process.env.TIMEOUT_CONCLUSION,
      outputToken: process.env.OUTPUT_TOKEN,
      outputNumber: process.env.OUTPUT_NUMBER,
    };
    await record('observed', observed);
    assert.deepEqual(observed, {
      failureOutcome: 'failure', failureConclusion: 'success',
      timeoutOutcome: 'failure', timeoutConclusion: 'success',
      outputToken: 'chaos-round-01', outputNumber: '42',
    });
    assert.deepEqual(await read('dependencies').then(({ mixed, scaled }) => ({ mixed, scaled })), { mixed: 'success', scaled: 'success' });
    assert.equal((await read('outputs')).scope, 'step');
    assert.equal((await read('success-path')).ran, true);
    assert.equal((await read('intentional-failure')).expectedExit, 17);
    assert.equal((await read('parallel-left-done')).peerObserved, 'right');
    assert.equal((await read('parallel-right-done')).peerObserved, 'left');
    assert.equal(await exists('forbidden'), false, 'A forbidden step ran');
    assert.equal(await exists('timeout-finished'), false, 'Timed command finished instead of being stopped');
    const start = await read('timeout-start');
    const elapsed = Date.now() - start.startedAt;
    assert.ok(elapsed >= 0 && elapsed < 19_000, `Timeout did not end the step promptly (${elapsed}ms)`);
    // Check only the recorded probe PID. Signal 0 observes existence; it kills nothing.
    let alive = true;
    for (let attempt = 0; attempt < 20; attempt++) {
      try { process.kill(start.pid, 0); }
      catch (error) { if (error.code !== 'ESRCH') throw error; alive = false; break; }
      await delay(100);
    }
    assert.equal(alive, false, 'The timed-out probe process is still alive');
    await record('verified', { passed: true, timeoutElapsedMs: elapsed });
    break;
  }
  case 'report': {
    const files = (await readdir(directory)).filter((file) => file.endsWith('.json')).sort();
    const evidence = Object.fromEntries(await Promise.all(files.map(async (file) => [file, JSON.parse(await readFile(path.join(directory, file), 'utf8'))])));
    const report = { round: 'round-01', trial, passed: Boolean(trial && evidence['verified.json']?.trial === trial && evidence['verified.json']?.passed === true), evidence };
    console.log(`CHAOS_REPORT ${JSON.stringify(report)}`);
    if (process.env.NX_CLOUD_STEP_SUMMARY) {
      await appendFile(process.env.NX_CLOUD_STEP_SUMMARY, `# Chaos semantics evidence\n\n\`\`\`json\n${JSON.stringify(report, null, 2)}\n\`\`\`\n`);
    }
    break;
  }
  default:
    throw new Error(`Unknown probe: ${action}`);
}
