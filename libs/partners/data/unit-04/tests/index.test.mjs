// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/partners-data-04/index.js';

test('partners-data-04: dependency-derived value', () => {
  assert.equal(weight, 3632);
  assert.deepEqual(evaluate(7), { project: 'partners-data-04', value: 3639, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","partners-util-01","partners-util-02","partners-util-03","partners-util-04","fulfillment-util-04","fulfillment-util-01"] });
});

test('partners-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3633);
  assert.equal(evaluate(-7).value, 3625);
});

test('partners-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('partners-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'partners-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","partners-util-01","partners-util-02","partners-util-03","partners-util-04","fulfillment-util-04","fulfillment-util-01"]);
});
