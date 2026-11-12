// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/pricing-ui-02/index.js';

test('pricing-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134052);
  assert.deepEqual(evaluate(7), { project: 'pricing-ui-02', value: 134059, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","pricing-feature-01","pricing-feature-02","pricing-feature-03","pricing-feature-04","recommendations-feature-02","recommendations-feature-03"] });
});

test('pricing-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134053);
  assert.equal(evaluate(-7).value, 134045);
});

test('pricing-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('pricing-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'pricing-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","pricing-feature-01","pricing-feature-02","pricing-feature-03","pricing-feature-04","recommendations-feature-02","recommendations-feature-03"]);
});
