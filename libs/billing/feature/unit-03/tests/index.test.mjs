// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/billing-feature-03/index.js';

test('billing-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22406);
  assert.deepEqual(evaluate(7), { project: 'billing-feature-03', value: 22413, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","billing-data-01","billing-data-02","billing-data-03","billing-data-04","identity-data-03","identity-data-04"] });
});

test('billing-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22407);
  assert.equal(evaluate(-7).value, 22399);
});

test('billing-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('billing-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'billing-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","billing-data-01","billing-data-02","billing-data-03","billing-data-04","identity-data-03","identity-data-04"]);
});
