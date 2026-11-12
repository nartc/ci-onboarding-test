// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/billing-ui-01/index.js';

test('billing-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134984);
  assert.deepEqual(evaluate(7), { project: 'billing-ui-01', value: 134991, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","billing-feature-01","billing-feature-02","billing-feature-03","billing-feature-04","identity-feature-01","identity-feature-02"] });
});

test('billing-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134985);
  assert.equal(evaluate(-7).value, 134977);
});

test('billing-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('billing-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'billing-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","billing-feature-01","billing-feature-02","billing-feature-03","billing-feature-04","identity-feature-01","identity-feature-02"]);
});
