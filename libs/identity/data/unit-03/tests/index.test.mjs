// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/identity-data-03/index.js';

test('identity-data-03: dependency-derived value', () => {
  assert.equal(weight, 3653);
  assert.deepEqual(evaluate(7), { project: 'identity-data-03', value: 3660, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","identity-util-01","identity-util-02","identity-util-03","identity-util-04","commerce-util-03","commerce-util-04"] });
});

test('identity-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3654);
  assert.equal(evaluate(-7).value, 3646);
});

test('identity-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('identity-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'identity-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","identity-util-01","identity-util-02","identity-util-03","identity-util-04","commerce-util-03","commerce-util-04"]);
});
