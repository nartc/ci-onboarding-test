// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/pricing-feature-03/index.js';

test('pricing-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22251);
  assert.deepEqual(evaluate(7), { project: 'pricing-feature-03', value: 22258, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","pricing-data-01","pricing-data-02","pricing-data-03","pricing-data-04","recommendations-data-03","recommendations-data-04"] });
});

test('pricing-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22252);
  assert.equal(evaluate(-7).value, 22244);
});

test('pricing-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('pricing-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'pricing-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","pricing-data-01","pricing-data-02","pricing-data-03","pricing-data-04","recommendations-data-03","recommendations-data-04"]);
});
