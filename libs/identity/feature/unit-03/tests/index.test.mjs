// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/identity-feature-03/index.js';

test('identity-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22382);
  assert.deepEqual(evaluate(7), { project: 'identity-feature-03', value: 22389, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","identity-data-01","identity-data-02","identity-data-03","identity-data-04","commerce-data-03","commerce-data-04"] });
});

test('identity-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22383);
  assert.equal(evaluate(-7).value, 22375);
});

test('identity-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('identity-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'identity-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","identity-data-01","identity-data-02","identity-data-03","identity-data-04","commerce-data-03","commerce-data-04"]);
});
