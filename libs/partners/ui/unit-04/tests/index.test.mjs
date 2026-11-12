// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/partners-ui-04/index.js';

test('partners-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134748);
  assert.deepEqual(evaluate(7), { project: 'partners-ui-04', value: 134755, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","partners-feature-01","partners-feature-02","partners-feature-03","partners-feature-04","fulfillment-feature-04","fulfillment-feature-01"] });
});

test('partners-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134749);
  assert.equal(evaluate(-7).value, 134741);
});

test('partners-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('partners-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'partners-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","partners-feature-01","partners-feature-02","partners-feature-03","partners-feature-04","fulfillment-feature-04","fulfillment-feature-01"]);
});
