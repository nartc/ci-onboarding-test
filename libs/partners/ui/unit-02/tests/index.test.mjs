// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/partners-ui-02/index.js';

test('partners-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134776);
  assert.deepEqual(evaluate(7), { project: 'partners-ui-02', value: 134783, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","partners-feature-01","partners-feature-02","partners-feature-03","partners-feature-04","fulfillment-feature-02","fulfillment-feature-03"] });
});

test('partners-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134777);
  assert.equal(evaluate(-7).value, 134769);
});

test('partners-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('partners-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'partners-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","partners-feature-01","partners-feature-02","partners-feature-03","partners-feature-04","fulfillment-feature-02","fulfillment-feature-03"]);
});
