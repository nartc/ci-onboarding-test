// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/identity-feature-02/index.js';

test('identity-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22406);
  assert.deepEqual(evaluate(7), { project: 'identity-feature-02', value: 22413, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","identity-data-01","identity-data-02","identity-data-03","identity-data-04","commerce-data-02","commerce-data-03"] });
});

test('identity-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22407);
  assert.equal(evaluate(-7).value, 22399);
});

test('identity-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('identity-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'identity-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","identity-data-01","identity-data-02","identity-data-03","identity-data-04","commerce-data-02","commerce-data-03"]);
});
