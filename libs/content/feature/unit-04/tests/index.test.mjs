// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/content-feature-04/index.js';

test('content-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22436);
  assert.deepEqual(evaluate(7), { project: 'content-feature-04', value: 22443, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","content-data-01","content-data-02","content-data-03","content-data-04","marketing-data-04","marketing-data-01"] });
});

test('content-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22437);
  assert.equal(evaluate(-7).value, 22429);
});

test('content-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('content-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'content-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","content-data-01","content-data-02","content-data-03","content-data-04","marketing-data-04","marketing-data-01"]);
});
