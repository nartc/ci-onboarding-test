// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/pricing-portal/index.js';

test('pricing-portal: dependency-derived value', () => {
  assert.equal(weight, 894206);
  assert.deepEqual(evaluate(7), { project: 'pricing-portal', value: 894213, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","pricing-feature-01","pricing-feature-02","pricing-feature-03","pricing-feature-04","pricing-ui-01","pricing-ui-02","pricing-ui-03","pricing-ui-04","recommendations-ui-01","recommendations-ui-02"] });
});

test('pricing-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 894207);
  assert.equal(evaluate(-7).value, 894199);
});

test('pricing-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('pricing-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'pricing-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","pricing-feature-01","pricing-feature-02","pricing-feature-03","pricing-feature-04","pricing-ui-01","pricing-ui-02","pricing-ui-03","pricing-ui-04","recommendations-ui-01","recommendations-ui-02"]);
});
