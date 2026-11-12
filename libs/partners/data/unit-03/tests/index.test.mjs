// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/partners-data-03/index.js';

test('partners-data-03: dependency-derived value', () => {
  assert.equal(weight, 3619);
  assert.deepEqual(evaluate(7), { project: 'partners-data-03', value: 3626, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","partners-util-01","partners-util-02","partners-util-03","partners-util-04","fulfillment-util-03","fulfillment-util-04"] });
});

test('partners-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3620);
  assert.equal(evaluate(-7).value, 3612);
});

test('partners-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('partners-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'partners-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","partners-util-01","partners-util-02","partners-util-03","partners-util-04","fulfillment-util-03","fulfillment-util-04"]);
});
