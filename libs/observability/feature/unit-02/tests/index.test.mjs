// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/observability-feature-02/index.js';

test('observability-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22369);
  assert.deepEqual(evaluate(7), { project: 'observability-feature-02', value: 22376, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","observability-data-01","observability-data-02","observability-data-03","observability-data-04","compliance-data-02","compliance-data-03"] });
});

test('observability-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22370);
  assert.equal(evaluate(-7).value, 22362);
});

test('observability-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('observability-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'observability-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","observability-data-01","observability-data-02","observability-data-03","observability-data-04","compliance-data-02","compliance-data-03"]);
});
