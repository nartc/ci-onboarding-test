// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/inventory-ui-03/index.js';

test('inventory-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134495);
  assert.deepEqual(evaluate(7), { project: 'inventory-ui-03', value: 134502, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","inventory-feature-01","inventory-feature-02","inventory-feature-03","inventory-feature-04","checkout-feature-03","checkout-feature-04"] });
});

test('inventory-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134496);
  assert.equal(evaluate(-7).value, 134488);
});

test('inventory-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","inventory-feature-01","inventory-feature-02","inventory-feature-03","inventory-feature-04","checkout-feature-03","checkout-feature-04"]);
});
