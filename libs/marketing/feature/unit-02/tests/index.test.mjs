// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/marketing-feature-02/index.js';

test('marketing-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22296);
  assert.deepEqual(evaluate(7), { project: 'marketing-feature-02', value: 22303, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","marketing-data-01","marketing-data-02","marketing-data-03","marketing-data-04","support-data-02","support-data-03"] });
});

test('marketing-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22297);
  assert.equal(evaluate(-7).value, 22289);
});

test('marketing-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('marketing-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'marketing-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","marketing-data-01","marketing-data-02","marketing-data-03","marketing-data-04","support-data-02","support-data-03"]);
});
