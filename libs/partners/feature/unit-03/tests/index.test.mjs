// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/partners-feature-03/index.js';

test('partners-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22357);
  assert.deepEqual(evaluate(7), { project: 'partners-feature-03', value: 22364, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","partners-data-01","partners-data-02","partners-data-03","partners-data-04","fulfillment-data-03","fulfillment-data-04"] });
});

test('partners-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22358);
  assert.equal(evaluate(-7).value, 22350);
});

test('partners-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('partners-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'partners-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","partners-data-01","partners-data-02","partners-data-03","partners-data-04","fulfillment-data-03","fulfillment-data-04"]);
});
