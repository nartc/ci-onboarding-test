// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/observability-api/index.js';

test('observability-api: dependency-derived value', () => {
  assert.equal(weight, 104554);
  assert.deepEqual(evaluate(7), { project: 'observability-api', value: 104561, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","observability-feature-01","observability-feature-02","observability-feature-03","observability-feature-04","observability-data-01","observability-data-02","observability-data-03","observability-data-04"] });
});

test('observability-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104555);
  assert.equal(evaluate(-7).value, 104547);
});

test('observability-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('observability-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'observability-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","observability-feature-01","observability-feature-02","observability-feature-03","observability-feature-04","observability-data-01","observability-data-02","observability-data-03","observability-data-04"]);
});
