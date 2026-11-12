// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/pricing-ui-03/index.js';

test('pricing-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134055);
  assert.deepEqual(evaluate(7), { project: 'pricing-ui-03', value: 134062, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","pricing-feature-01","pricing-feature-02","pricing-feature-03","pricing-feature-04","recommendations-feature-03","recommendations-feature-04"] });
});

test('pricing-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134056);
  assert.equal(evaluate(-7).value, 134048);
});

test('pricing-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('pricing-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'pricing-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","pricing-feature-01","pricing-feature-02","pricing-feature-03","pricing-feature-04","recommendations-feature-03","recommendations-feature-04"]);
});
