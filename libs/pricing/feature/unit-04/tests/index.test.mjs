// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/pricing-feature-04/index.js';

test('pricing-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22261);
  assert.deepEqual(evaluate(7), { project: 'pricing-feature-04', value: 22268, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","pricing-data-01","pricing-data-02","pricing-data-03","pricing-data-04","recommendations-data-04","recommendations-data-01"] });
});

test('pricing-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22262);
  assert.equal(evaluate(-7).value, 22254);
});

test('pricing-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('pricing-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'pricing-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","pricing-data-01","pricing-data-02","pricing-data-03","pricing-data-04","recommendations-data-04","recommendations-data-01"]);
});
