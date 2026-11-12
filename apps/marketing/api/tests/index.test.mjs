// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/marketing-api/index.js';

test('marketing-api: dependency-derived value', () => {
  assert.equal(weight, 104210);
  assert.deepEqual(evaluate(7), { project: 'marketing-api', value: 104217, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","marketing-feature-01","marketing-feature-02","marketing-feature-03","marketing-feature-04","marketing-data-01","marketing-data-02","marketing-data-03","marketing-data-04"] });
});

test('marketing-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104211);
  assert.equal(evaluate(-7).value, 104203);
});

test('marketing-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('marketing-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'marketing-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","marketing-feature-01","marketing-feature-02","marketing-feature-03","marketing-feature-04","marketing-data-01","marketing-data-02","marketing-data-03","marketing-data-04"]);
});
