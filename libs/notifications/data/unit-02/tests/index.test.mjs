// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/notifications-data-02/index.js';

test('notifications-data-02: dependency-derived value', () => {
  assert.equal(weight, 3616);
  assert.deepEqual(evaluate(7), { project: 'notifications-data-02', value: 3623, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","notifications-util-01","notifications-util-02","notifications-util-03","notifications-util-04","payments-util-02","payments-util-03"] });
});

test('notifications-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3617);
  assert.equal(evaluate(-7).value, 3609);
});

test('notifications-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('notifications-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'notifications-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","notifications-util-01","notifications-util-02","notifications-util-03","notifications-util-04","payments-util-02","payments-util-03"]);
});
