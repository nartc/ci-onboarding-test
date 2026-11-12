// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/experimentation-ui-04/index.js';

test('experimentation-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134977);
  assert.deepEqual(evaluate(7), { project: 'experimentation-ui-04', value: 134984, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","experimentation-feature-01","experimentation-feature-02","experimentation-feature-03","experimentation-feature-04","observability-feature-04","observability-feature-01"] });
});

test('experimentation-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134978);
  assert.equal(evaluate(-7).value, 134970);
});

test('experimentation-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('experimentation-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'experimentation-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","experimentation-feature-01","experimentation-feature-02","experimentation-feature-03","experimentation-feature-04","observability-feature-04","observability-feature-01"]);
});
