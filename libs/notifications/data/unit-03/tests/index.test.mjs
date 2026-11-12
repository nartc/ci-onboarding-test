// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/notifications-data-03/index.js';

test('notifications-data-03: dependency-derived value', () => {
  assert.equal(weight, 3606);
  assert.deepEqual(evaluate(7), { project: 'notifications-data-03', value: 3613, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","notifications-util-01","notifications-util-02","notifications-util-03","notifications-util-04","payments-util-03","payments-util-04"] });
});

test('notifications-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3607);
  assert.equal(evaluate(-7).value, 3599);
});

test('notifications-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('notifications-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'notifications-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","notifications-util-01","notifications-util-02","notifications-util-03","notifications-util-04","payments-util-03","payments-util-04"]);
});
