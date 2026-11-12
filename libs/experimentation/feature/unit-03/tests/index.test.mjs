// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/experimentation-feature-03/index.js';

test('experimentation-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22440);
  assert.deepEqual(evaluate(7), { project: 'experimentation-feature-03', value: 22447, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","experimentation-data-01","experimentation-data-02","experimentation-data-03","experimentation-data-04","observability-data-03","observability-data-04"] });
});

test('experimentation-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22441);
  assert.equal(evaluate(-7).value, 22433);
});

test('experimentation-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('experimentation-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'experimentation-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","experimentation-data-01","experimentation-data-02","experimentation-data-03","experimentation-data-04","observability-data-03","observability-data-04"]);
});
