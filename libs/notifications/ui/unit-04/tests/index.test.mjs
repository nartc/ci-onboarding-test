// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/notifications-ui-04/index.js';

test('notifications-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134016);
  assert.deepEqual(evaluate(7), { project: 'notifications-ui-04', value: 134023, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","notifications-feature-01","notifications-feature-02","notifications-feature-03","notifications-feature-04","payments-feature-04","payments-feature-01"] });
});

test('notifications-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134017);
  assert.equal(evaluate(-7).value, 134009);
});

test('notifications-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('notifications-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'notifications-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","notifications-feature-01","notifications-feature-02","notifications-feature-03","notifications-feature-04","payments-feature-04","payments-feature-01"]);
});
