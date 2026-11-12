// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/partners-feature-02/index.js';

test('partners-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22359);
  assert.deepEqual(evaluate(7), { project: 'partners-feature-02', value: 22366, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","partners-data-01","partners-data-02","partners-data-03","partners-data-04","fulfillment-data-02","fulfillment-data-03"] });
});

test('partners-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22360);
  assert.equal(evaluate(-7).value, 22352);
});

test('partners-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('partners-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'partners-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","partners-data-01","partners-data-02","partners-data-03","partners-data-04","fulfillment-data-02","fulfillment-data-03"]);
});
