// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/experimentation-data-03/index.js';

test('experimentation-data-03: dependency-derived value', () => {
  assert.equal(weight, 3665);
  assert.deepEqual(evaluate(7), { project: 'experimentation-data-03', value: 3672, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","experimentation-util-01","experimentation-util-02","experimentation-util-03","experimentation-util-04","observability-util-03","observability-util-04"] });
});

test('experimentation-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3666);
  assert.equal(evaluate(-7).value, 3658);
});

test('experimentation-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('experimentation-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'experimentation-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","experimentation-util-01","experimentation-util-02","experimentation-util-03","experimentation-util-04","observability-util-03","observability-util-04"]);
});
