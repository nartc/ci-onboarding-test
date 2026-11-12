// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/pricing-feature-02/index.js';

test('pricing-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22258);
  assert.deepEqual(evaluate(7), { project: 'pricing-feature-02', value: 22265, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","pricing-data-01","pricing-data-02","pricing-data-03","pricing-data-04","recommendations-data-02","recommendations-data-03"] });
});

test('pricing-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22259);
  assert.equal(evaluate(-7).value, 22251);
});

test('pricing-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('pricing-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'pricing-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","pricing-data-01","pricing-data-02","pricing-data-03","pricing-data-04","recommendations-data-02","recommendations-data-03"]);
});
