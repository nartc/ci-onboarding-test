// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/pricing-feature-01/index.js';

test('pricing-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22275);
  assert.deepEqual(evaluate(7), { project: 'pricing-feature-01', value: 22282, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","pricing-data-01","pricing-data-02","pricing-data-03","pricing-data-04","recommendations-data-01","recommendations-data-02"] });
});

test('pricing-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22276);
  assert.equal(evaluate(-7).value, 22268);
});

test('pricing-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('pricing-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'pricing-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","pricing-data-01","pricing-data-02","pricing-data-03","pricing-data-04","recommendations-data-01","recommendations-data-02"]);
});
