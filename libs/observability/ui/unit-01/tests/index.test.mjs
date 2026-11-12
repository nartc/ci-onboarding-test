// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/observability-ui-01/index.js';

test('observability-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134463);
  assert.deepEqual(evaluate(7), { project: 'observability-ui-01', value: 134470, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","observability-feature-01","observability-feature-02","observability-feature-03","observability-feature-04","compliance-feature-01","compliance-feature-02"] });
});

test('observability-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134464);
  assert.equal(evaluate(-7).value, 134456);
});

test('observability-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('observability-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'observability-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","observability-feature-01","observability-feature-02","observability-feature-03","observability-feature-04","compliance-feature-01","compliance-feature-02"]);
});
