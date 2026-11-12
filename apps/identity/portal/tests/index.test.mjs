// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/identity-portal/index.js';

test('identity-portal: dependency-derived value', () => {
  assert.equal(weight, 899307);
  assert.deepEqual(evaluate(7), { project: 'identity-portal', value: 899314, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","identity-feature-01","identity-feature-02","identity-feature-03","identity-feature-04","identity-ui-01","identity-ui-02","identity-ui-03","identity-ui-04","commerce-ui-01","commerce-ui-02"] });
});

test('identity-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 899308);
  assert.equal(evaluate(-7).value, 899300);
});

test('identity-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('identity-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'identity-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","identity-feature-01","identity-feature-02","identity-feature-03","identity-feature-04","identity-ui-01","identity-ui-02","identity-ui-03","identity-ui-04","commerce-ui-01","commerce-ui-02"]);
});
