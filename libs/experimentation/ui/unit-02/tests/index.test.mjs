// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/experimentation-ui-02/index.js';

test('experimentation-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134974);
  assert.deepEqual(evaluate(7), { project: 'experimentation-ui-02', value: 134981, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","experimentation-feature-01","experimentation-feature-02","experimentation-feature-03","experimentation-feature-04","observability-feature-02","observability-feature-03"] });
});

test('experimentation-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134975);
  assert.equal(evaluate(-7).value, 134967);
});

test('experimentation-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('experimentation-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'experimentation-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","experimentation-feature-01","experimentation-feature-02","experimentation-feature-03","experimentation-feature-04","observability-feature-02","observability-feature-03"]);
});
