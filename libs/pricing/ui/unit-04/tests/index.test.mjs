// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/pricing-ui-04/index.js';

test('pricing-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134030);
  assert.deepEqual(evaluate(7), { project: 'pricing-ui-04', value: 134037, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","pricing-feature-01","pricing-feature-02","pricing-feature-03","pricing-feature-04","recommendations-feature-04","recommendations-feature-01"] });
});

test('pricing-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134031);
  assert.equal(evaluate(-7).value, 134023);
});

test('pricing-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('pricing-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'pricing-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","pricing-feature-01","pricing-feature-02","pricing-feature-03","pricing-feature-04","recommendations-feature-04","recommendations-feature-01"]);
});
