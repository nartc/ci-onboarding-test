// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/billing-data-04/index.js';

test('billing-data-04: dependency-derived value', () => {
  assert.equal(weight, 3654);
  assert.deepEqual(evaluate(7), { project: 'billing-data-04', value: 3661, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","billing-util-01","billing-util-02","billing-util-03","billing-util-04","identity-util-04","identity-util-01"] });
});

test('billing-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3655);
  assert.equal(evaluate(-7).value, 3647);
});

test('billing-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('billing-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'billing-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","billing-util-01","billing-util-02","billing-util-03","billing-util-04","identity-util-04","identity-util-01"]);
});
