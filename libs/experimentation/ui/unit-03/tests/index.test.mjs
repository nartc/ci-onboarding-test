// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/experimentation-ui-03/index.js';

test('experimentation-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134967);
  assert.deepEqual(evaluate(7), { project: 'experimentation-ui-03', value: 134974, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","experimentation-feature-01","experimentation-feature-02","experimentation-feature-03","experimentation-feature-04","observability-feature-03","observability-feature-04"] });
});

test('experimentation-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134968);
  assert.equal(evaluate(-7).value, 134960);
});

test('experimentation-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('experimentation-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'experimentation-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","experimentation-feature-01","experimentation-feature-02","experimentation-feature-03","experimentation-feature-04","observability-feature-03","observability-feature-04"]);
});
