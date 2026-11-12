// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/compliance-ui-03/index.js';

test('compliance-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134241);
  assert.deepEqual(evaluate(7), { project: 'compliance-ui-03', value: 134248, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","compliance-feature-01","compliance-feature-02","compliance-feature-03","compliance-feature-04","partners-feature-03","partners-feature-04"] });
});

test('compliance-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134242);
  assert.equal(evaluate(-7).value, 134234);
});

test('compliance-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('compliance-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'compliance-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","compliance-feature-01","compliance-feature-02","compliance-feature-03","compliance-feature-04","partners-feature-03","partners-feature-04"]);
});
