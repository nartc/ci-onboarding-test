// Tiny cache fixture executor. The uncached journal distinguishes restoration from re-execution.
import assert from 'node:assert/strict';
import { randomUUID, createHash } from 'node:crypto';
import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const [project] = process.argv.slice(2);
assert.ok(['seed', 'consumer', 'unrelated'].includes(project));
const source = await readFile(`projects/${project}/source.txt`, 'utf8');
const dependency = project === 'consumer' ? JSON.parse(await readFile('out/seed/artifact.json', 'utf8')).value : '';
const value = createHash('sha256').update(`${source}\n${dependency}`).digest('hex');
const artifact = { project, value, execution: randomUUID() };
await mkdir(path.join('out', project), { recursive: true });
await mkdir('.evidence', { recursive: true });
await appendFile('.evidence/executions.ndjson', JSON.stringify(artifact) + '\n');
await writeFile(path.join('out', project, 'artifact.json'), JSON.stringify(artifact) + '\n');
console.log(`CHAOS_CACHE_EXECUTION ${JSON.stringify(artifact)}`);
