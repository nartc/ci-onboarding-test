// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/billing-data-03/index.js';

test('billing-data-03: dependency-derived value', () => {
  assert.equal(weight, 3651);
  assert.deepEqual(evaluate(7), { project: 'billing-data-03', value: 3658, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","billing-util-01","billing-util-02","billing-util-03","billing-util-04","identity-util-03","identity-util-04"] });
});

test('billing-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3652);
  assert.equal(evaluate(-7).value, 3644);
});

test('billing-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('billing-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'billing-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","billing-util-01","billing-util-02","billing-util-03","billing-util-04","identity-util-03","identity-util-04"]);
});
