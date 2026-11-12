// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/experimentation-ui-01/index.js';

test('experimentation-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134998);
  assert.deepEqual(evaluate(7), { project: 'experimentation-ui-01', value: 135005, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","experimentation-feature-01","experimentation-feature-02","experimentation-feature-03","experimentation-feature-04","observability-feature-01","observability-feature-02"] });
});

test('experimentation-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134999);
  assert.equal(evaluate(-7).value, 134991);
});

test('experimentation-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('experimentation-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'experimentation-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","experimentation-feature-01","experimentation-feature-02","experimentation-feature-03","experimentation-feature-04","observability-feature-01","observability-feature-02"]);
});
