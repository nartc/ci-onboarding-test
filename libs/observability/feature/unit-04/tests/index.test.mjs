// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/observability-feature-04/index.js';

test('observability-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22350);
  assert.deepEqual(evaluate(7), { project: 'observability-feature-04', value: 22357, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","observability-data-01","observability-data-02","observability-data-03","observability-data-04","compliance-data-04","compliance-data-01"] });
});

test('observability-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22351);
  assert.equal(evaluate(-7).value, 22343);
});

test('observability-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('observability-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'observability-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","observability-data-01","observability-data-02","observability-data-03","observability-data-04","compliance-data-04","compliance-data-01"]);
});
