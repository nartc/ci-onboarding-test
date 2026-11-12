// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/experimentation-feature-04/index.js';

test('experimentation-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22437);
  assert.deepEqual(evaluate(7), { project: 'experimentation-feature-04', value: 22444, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","experimentation-data-01","experimentation-data-02","experimentation-data-03","experimentation-data-04","observability-data-04","observability-data-01"] });
});

test('experimentation-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22438);
  assert.equal(evaluate(-7).value, 22430);
});

test('experimentation-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('experimentation-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'experimentation-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","experimentation-data-01","experimentation-data-02","experimentation-data-03","experimentation-data-04","observability-data-04","observability-data-01"]);
});
