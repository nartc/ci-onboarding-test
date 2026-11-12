// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/observability-data-03/index.js';

test('observability-data-03: dependency-derived value', () => {
  assert.equal(weight, 3644);
  assert.deepEqual(evaluate(7), { project: 'observability-data-03', value: 3651, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","observability-util-01","observability-util-02","observability-util-03","observability-util-04","compliance-util-03","compliance-util-04"] });
});

test('observability-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3645);
  assert.equal(evaluate(-7).value, 3637);
});

test('observability-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('observability-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'observability-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","observability-util-01","observability-util-02","observability-util-03","observability-util-04","compliance-util-03","compliance-util-04"]);
});
