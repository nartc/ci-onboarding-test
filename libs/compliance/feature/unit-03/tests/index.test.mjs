// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/compliance-feature-03/index.js';

test('compliance-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22244);
  assert.deepEqual(evaluate(7), { project: 'compliance-feature-03', value: 22251, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","compliance-data-01","compliance-data-02","compliance-data-03","compliance-data-04","partners-data-03","partners-data-04"] });
});

test('compliance-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22245);
  assert.equal(evaluate(-7).value, 22237);
});

test('compliance-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('compliance-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'compliance-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","compliance-data-01","compliance-data-02","compliance-data-03","compliance-data-04","partners-data-03","partners-data-04"]);
});
