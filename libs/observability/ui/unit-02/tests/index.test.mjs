// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/observability-ui-02/index.js';

test('observability-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134437);
  assert.deepEqual(evaluate(7), { project: 'observability-ui-02', value: 134444, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","observability-feature-01","observability-feature-02","observability-feature-03","observability-feature-04","compliance-feature-02","compliance-feature-03"] });
});

test('observability-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134438);
  assert.equal(evaluate(-7).value, 134430);
});

test('observability-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('observability-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'observability-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","observability-feature-01","observability-feature-02","observability-feature-03","observability-feature-04","compliance-feature-02","compliance-feature-03"]);
});
