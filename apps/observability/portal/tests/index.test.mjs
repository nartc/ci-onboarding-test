// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/observability-portal/index.js';

test('observability-portal: dependency-derived value', () => {
  assert.equal(weight, 896315);
  assert.deepEqual(evaluate(7), { project: 'observability-portal', value: 896322, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","observability-feature-01","observability-feature-02","observability-feature-03","observability-feature-04","observability-ui-01","observability-ui-02","observability-ui-03","observability-ui-04","compliance-ui-01","compliance-ui-02"] });
});

test('observability-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 896316);
  assert.equal(evaluate(-7).value, 896308);
});

test('observability-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('observability-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'observability-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","observability-feature-01","observability-feature-02","observability-feature-03","observability-feature-04","observability-ui-01","observability-ui-02","observability-ui-03","observability-ui-04","compliance-ui-01","compliance-ui-02"]);
});
