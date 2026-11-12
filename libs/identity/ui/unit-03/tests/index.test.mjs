// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/identity-ui-03/index.js';

test('identity-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134884);
  assert.deepEqual(evaluate(7), { project: 'identity-ui-03', value: 134891, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","identity-feature-01","identity-feature-02","identity-feature-03","identity-feature-04","commerce-feature-03","commerce-feature-04"] });
});

test('identity-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134885);
  assert.equal(evaluate(-7).value, 134877);
});

test('identity-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('identity-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'identity-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","identity-feature-01","identity-feature-02","identity-feature-03","identity-feature-04","commerce-feature-03","commerce-feature-04"]);
});
