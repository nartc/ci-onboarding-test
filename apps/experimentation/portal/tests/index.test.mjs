// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/experimentation-portal/index.js';

test('experimentation-portal: dependency-derived value', () => {
  assert.equal(weight, 899080);
  assert.deepEqual(evaluate(7), { project: 'experimentation-portal', value: 899087, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","experimentation-feature-01","experimentation-feature-02","experimentation-feature-03","experimentation-feature-04","experimentation-ui-01","experimentation-ui-02","experimentation-ui-03","experimentation-ui-04","observability-ui-01","observability-ui-02"] });
});

test('experimentation-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 899081);
  assert.equal(evaluate(-7).value, 899073);
});

test('experimentation-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('experimentation-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'experimentation-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","experimentation-feature-01","experimentation-feature-02","experimentation-feature-03","experimentation-feature-04","experimentation-ui-01","experimentation-ui-02","experimentation-ui-03","experimentation-ui-04","observability-ui-01","observability-ui-02"]);
});
