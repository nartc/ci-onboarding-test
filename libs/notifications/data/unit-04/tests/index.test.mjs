// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/notifications-data-04/index.js';

test('notifications-data-04: dependency-derived value', () => {
  assert.equal(weight, 3603);
  assert.deepEqual(evaluate(7), { project: 'notifications-data-04', value: 3610, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","notifications-util-01","notifications-util-02","notifications-util-03","notifications-util-04","payments-util-04","payments-util-01"] });
});

test('notifications-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3604);
  assert.equal(evaluate(-7).value, 3596);
});

test('notifications-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('notifications-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'notifications-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","notifications-util-01","notifications-util-02","notifications-util-03","notifications-util-04","payments-util-04","payments-util-01"]);
});
