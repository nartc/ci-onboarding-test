// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/identity-data-02/index.js';

test('identity-data-02: dependency-derived value', () => {
  assert.equal(weight, 3652);
  assert.deepEqual(evaluate(7), { project: 'identity-data-02', value: 3659, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","identity-util-01","identity-util-02","identity-util-03","identity-util-04","commerce-util-02","commerce-util-03"] });
});

test('identity-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3653);
  assert.equal(evaluate(-7).value, 3645);
});

test('identity-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('identity-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'identity-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","identity-util-01","identity-util-02","identity-util-03","identity-util-04","commerce-util-02","commerce-util-03"]);
});
