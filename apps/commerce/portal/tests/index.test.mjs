// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/commerce-portal/index.js';

test('commerce-portal: dependency-derived value', () => {
  assert.equal(weight, 899312);
  assert.deepEqual(evaluate(7), { project: 'commerce-portal', value: 899319, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","commerce-feature-01","commerce-feature-02","commerce-feature-03","commerce-feature-04","commerce-ui-01","commerce-ui-02","commerce-ui-03","commerce-ui-04","experimentation-ui-01","experimentation-ui-02"] });
});

test('commerce-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 899313);
  assert.equal(evaluate(-7).value, 899305);
});

test('commerce-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('commerce-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'commerce-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","commerce-feature-01","commerce-feature-02","commerce-feature-03","commerce-feature-04","commerce-ui-01","commerce-ui-02","commerce-ui-03","commerce-ui-04","experimentation-ui-01","experimentation-ui-02"]);
});
