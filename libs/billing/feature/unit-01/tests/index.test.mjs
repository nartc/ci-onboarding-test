// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/billing-feature-01/index.js';

test('billing-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22401);
  assert.deepEqual(evaluate(7), { project: 'billing-feature-01', value: 22408, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","billing-data-01","billing-data-02","billing-data-03","billing-data-04","identity-data-01","identity-data-02"] });
});

test('billing-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22402);
  assert.equal(evaluate(-7).value, 22394);
});

test('billing-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('billing-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'billing-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","billing-data-01","billing-data-02","billing-data-03","billing-data-04","identity-data-01","identity-data-02"]);
});
