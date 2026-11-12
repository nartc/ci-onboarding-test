// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/experimentation-data-02/index.js';

test('experimentation-data-02: dependency-derived value', () => {
  assert.equal(weight, 3644);
  assert.deepEqual(evaluate(7), { project: 'experimentation-data-02', value: 3651, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","experimentation-util-01","experimentation-util-02","experimentation-util-03","experimentation-util-04","observability-util-02","observability-util-03"] });
});

test('experimentation-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3645);
  assert.equal(evaluate(-7).value, 3637);
});

test('experimentation-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('experimentation-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'experimentation-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","experimentation-util-01","experimentation-util-02","experimentation-util-03","experimentation-util-04","observability-util-02","observability-util-03"]);
});
