// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/marketing-feature-03/index.js';

test('marketing-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22279);
  assert.deepEqual(evaluate(7), { project: 'marketing-feature-03', value: 22286, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","marketing-data-01","marketing-data-02","marketing-data-03","marketing-data-04","support-data-03","support-data-04"] });
});

test('marketing-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22280);
  assert.equal(evaluate(-7).value, 22272);
});

test('marketing-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('marketing-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'marketing-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","marketing-data-01","marketing-data-02","marketing-data-03","marketing-data-04","support-data-03","support-data-04"]);
});
