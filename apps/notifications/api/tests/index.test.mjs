// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/notifications-api/index.js';

test('notifications-api: dependency-derived value', () => {
  assert.equal(weight, 103784);
  assert.deepEqual(evaluate(7), { project: 'notifications-api', value: 103791, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","notifications-feature-01","notifications-feature-02","notifications-feature-03","notifications-feature-04","notifications-data-01","notifications-data-02","notifications-data-03","notifications-data-04"] });
});

test('notifications-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 103785);
  assert.equal(evaluate(-7).value, 103777);
});

test('notifications-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('notifications-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'notifications-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","notifications-feature-01","notifications-feature-02","notifications-feature-03","notifications-feature-04","notifications-data-01","notifications-data-02","notifications-data-03","notifications-data-04"]);
});
