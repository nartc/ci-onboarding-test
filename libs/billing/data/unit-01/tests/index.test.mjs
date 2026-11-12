// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/billing-data-01/index.js';

test('billing-data-01: dependency-derived value', () => {
  assert.equal(weight, 3636);
  assert.deepEqual(evaluate(7), { project: 'billing-data-01', value: 3643, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","billing-util-01","billing-util-02","billing-util-03","billing-util-04","identity-util-01","identity-util-02"] });
});

test('billing-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3637);
  assert.equal(evaluate(-7).value, 3629);
});

test('billing-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('billing-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'billing-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","billing-util-01","billing-util-02","billing-util-03","billing-util-04","identity-util-01","identity-util-02"]);
});
