// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/notifications-portal/index.js';

test('notifications-portal: dependency-derived value', () => {
  assert.equal(weight, 894882);
  assert.deepEqual(evaluate(7), { project: 'notifications-portal', value: 894889, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","notifications-feature-01","notifications-feature-02","notifications-feature-03","notifications-feature-04","notifications-ui-01","notifications-ui-02","notifications-ui-03","notifications-ui-04","payments-ui-01","payments-ui-02"] });
});

test('notifications-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 894883);
  assert.equal(evaluate(-7).value, 894875);
});

test('notifications-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('notifications-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'notifications-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","notifications-feature-01","notifications-feature-02","notifications-feature-03","notifications-feature-04","notifications-ui-01","notifications-ui-02","notifications-ui-03","notifications-ui-04","payments-ui-01","payments-ui-02"]);
});
