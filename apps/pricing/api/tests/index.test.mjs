// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/pricing-api/index.js';

test('pricing-api: dependency-derived value', () => {
  assert.equal(weight, 104074);
  assert.deepEqual(evaluate(7), { project: 'pricing-api', value: 104081, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","pricing-feature-01","pricing-feature-02","pricing-feature-03","pricing-feature-04","pricing-data-01","pricing-data-02","pricing-data-03","pricing-data-04"] });
});

test('pricing-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104075);
  assert.equal(evaluate(-7).value, 104067);
});

test('pricing-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('pricing-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'pricing-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","pricing-feature-01","pricing-feature-02","pricing-feature-03","pricing-feature-04","pricing-data-01","pricing-data-02","pricing-data-03","pricing-data-04"]);
});
