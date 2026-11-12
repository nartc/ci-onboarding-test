// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/billing-ui-03/index.js';

test('billing-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134922);
  assert.deepEqual(evaluate(7), { project: 'billing-ui-03', value: 134929, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","billing-feature-01","billing-feature-02","billing-feature-03","billing-feature-04","identity-feature-03","identity-feature-04"] });
});

test('billing-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134923);
  assert.equal(evaluate(-7).value, 134915);
});

test('billing-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('billing-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'billing-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","billing-feature-01","billing-feature-02","billing-feature-03","billing-feature-04","identity-feature-03","identity-feature-04"]);
});
