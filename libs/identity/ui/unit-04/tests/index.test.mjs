// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/identity-ui-04/index.js';

test('identity-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134859);
  assert.deepEqual(evaluate(7), { project: 'identity-ui-04', value: 134866, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","identity-feature-01","identity-feature-02","identity-feature-03","identity-feature-04","commerce-feature-04","commerce-feature-01"] });
});

test('identity-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134860);
  assert.equal(evaluate(-7).value, 134852);
});

test('identity-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('identity-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'identity-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","identity-feature-01","identity-feature-02","identity-feature-03","identity-feature-04","commerce-feature-04","commerce-feature-01"]);
});
