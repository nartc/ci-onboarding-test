// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/billing-api/index.js';

test('billing-api: dependency-derived value', () => {
  assert.equal(weight, 104706);
  assert.deepEqual(evaluate(7), { project: 'billing-api', value: 104713, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","billing-feature-01","billing-feature-02","billing-feature-03","billing-feature-04","billing-data-01","billing-data-02","billing-data-03","billing-data-04"] });
});

test('billing-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104707);
  assert.equal(evaluate(-7).value, 104699);
});

test('billing-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('billing-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'billing-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","billing-feature-01","billing-feature-02","billing-feature-03","billing-feature-04","billing-data-01","billing-data-02","billing-data-03","billing-data-04"]);
});
