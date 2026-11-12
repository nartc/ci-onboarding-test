// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/observability-data-01/index.js';

test('observability-data-01: dependency-derived value', () => {
  assert.equal(weight, 3652);
  assert.deepEqual(evaluate(7), { project: 'observability-data-01', value: 3659, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","observability-util-01","observability-util-02","observability-util-03","observability-util-04","compliance-util-01","compliance-util-02"] });
});

test('observability-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3653);
  assert.equal(evaluate(-7).value, 3645);
});

test('observability-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('observability-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'observability-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","observability-util-01","observability-util-02","observability-util-03","observability-util-04","compliance-util-01","compliance-util-02"]);
});
