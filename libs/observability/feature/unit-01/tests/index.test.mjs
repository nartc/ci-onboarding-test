// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/observability-feature-01/index.js';

test('observability-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22365);
  assert.deepEqual(evaluate(7), { project: 'observability-feature-01', value: 22372, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","observability-data-01","observability-data-02","observability-data-03","observability-data-04","compliance-data-01","compliance-data-02"] });
});

test('observability-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22366);
  assert.equal(evaluate(-7).value, 22358);
});

test('observability-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('observability-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'observability-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","observability-data-01","observability-data-02","observability-data-03","observability-data-04","compliance-data-01","compliance-data-02"]);
});
