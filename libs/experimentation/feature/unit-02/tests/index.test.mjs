// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/experimentation-feature-02/index.js';

test('experimentation-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22426);
  assert.deepEqual(evaluate(7), { project: 'experimentation-feature-02', value: 22433, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","experimentation-data-01","experimentation-data-02","experimentation-data-03","experimentation-data-04","observability-data-02","observability-data-03"] });
});

test('experimentation-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22427);
  assert.equal(evaluate(-7).value, 22419);
});

test('experimentation-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('experimentation-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'experimentation-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","experimentation-data-01","experimentation-data-02","experimentation-data-03","experimentation-data-04","observability-data-02","observability-data-03"]);
});
