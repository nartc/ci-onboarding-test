// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/billing-ui-04/index.js';

test('billing-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134961);
  assert.deepEqual(evaluate(7), { project: 'billing-ui-04', value: 134968, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","billing-feature-01","billing-feature-02","billing-feature-03","billing-feature-04","identity-feature-04","identity-feature-01"] });
});

test('billing-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134962);
  assert.equal(evaluate(-7).value, 134954);
});

test('billing-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('billing-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'billing-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","billing-feature-01","billing-feature-02","billing-feature-03","billing-feature-04","identity-feature-04","identity-feature-01"]);
});
