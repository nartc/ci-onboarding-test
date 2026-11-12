// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/partners-ui-03/index.js';

test('partners-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134784);
  assert.deepEqual(evaluate(7), { project: 'partners-ui-03', value: 134791, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","partners-feature-01","partners-feature-02","partners-feature-03","partners-feature-04","fulfillment-feature-03","fulfillment-feature-04"] });
});

test('partners-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134785);
  assert.equal(evaluate(-7).value, 134777);
});

test('partners-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('partners-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'partners-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","partners-feature-01","partners-feature-02","partners-feature-03","partners-feature-04","fulfillment-feature-03","fulfillment-feature-04"]);
});
