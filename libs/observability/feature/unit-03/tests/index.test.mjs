// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/observability-feature-03/index.js';

test('observability-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22344);
  assert.deepEqual(evaluate(7), { project: 'observability-feature-03', value: 22351, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","observability-data-01","observability-data-02","observability-data-03","observability-data-04","compliance-data-03","compliance-data-04"] });
});

test('observability-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22345);
  assert.equal(evaluate(-7).value, 22337);
});

test('observability-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('observability-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'observability-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","observability-data-01","observability-data-02","observability-data-03","observability-data-04","compliance-data-03","compliance-data-04"]);
});
