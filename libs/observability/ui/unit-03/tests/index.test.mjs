// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/observability-ui-03/index.js';

test('observability-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134459);
  assert.deepEqual(evaluate(7), { project: 'observability-ui-03', value: 134466, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","observability-feature-01","observability-feature-02","observability-feature-03","observability-feature-04","compliance-feature-03","compliance-feature-04"] });
});

test('observability-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134460);
  assert.equal(evaluate(-7).value, 134452);
});

test('observability-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('observability-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'observability-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","observability-feature-01","observability-feature-02","observability-feature-03","observability-feature-04","compliance-feature-03","compliance-feature-04"]);
});
