// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/notifications-feature-03/index.js';

test('notifications-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22199);
  assert.deepEqual(evaluate(7), { project: 'notifications-feature-03', value: 22206, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","notifications-data-01","notifications-data-02","notifications-data-03","notifications-data-04","payments-data-03","payments-data-04"] });
});

test('notifications-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22200);
  assert.equal(evaluate(-7).value, 22192);
});

test('notifications-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('notifications-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'notifications-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","notifications-data-01","notifications-data-02","notifications-data-03","notifications-data-04","payments-data-03","payments-data-04"]);
});
