// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/content-feature-02/index.js';

test('content-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22438);
  assert.deepEqual(evaluate(7), { project: 'content-feature-02', value: 22445, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","content-data-01","content-data-02","content-data-03","content-data-04","marketing-data-02","marketing-data-03"] });
});

test('content-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22439);
  assert.equal(evaluate(-7).value, 22431);
});

test('content-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('content-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'content-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","content-data-01","content-data-02","content-data-03","content-data-04","marketing-data-02","marketing-data-03"]);
});
