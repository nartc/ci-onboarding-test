// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/content-api/index.js';

test('content-api: dependency-derived value', () => {
  assert.equal(weight, 104921);
  assert.deepEqual(evaluate(7), { project: 'content-api', value: 104928, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","content-feature-01","content-feature-02","content-feature-03","content-feature-04","content-data-01","content-data-02","content-data-03","content-data-04"] });
});

test('content-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104922);
  assert.equal(evaluate(-7).value, 104914);
});

test('content-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('content-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'content-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","content-feature-01","content-feature-02","content-feature-03","content-feature-04","content-data-01","content-data-02","content-data-03","content-data-04"]);
});
