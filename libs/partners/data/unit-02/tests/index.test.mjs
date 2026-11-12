// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/partners-data-02/index.js';

test('partners-data-02: dependency-derived value', () => {
  assert.equal(weight, 3630);
  assert.deepEqual(evaluate(7), { project: 'partners-data-02', value: 3637, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","partners-util-01","partners-util-02","partners-util-03","partners-util-04","fulfillment-util-02","fulfillment-util-03"] });
});

test('partners-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3631);
  assert.equal(evaluate(-7).value, 3623);
});

test('partners-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('partners-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'partners-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","partners-util-01","partners-util-02","partners-util-03","partners-util-04","fulfillment-util-02","fulfillment-util-03"]);
});
