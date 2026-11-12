// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/marketing-feature-01/index.js';

test('marketing-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22303);
  assert.deepEqual(evaluate(7), { project: 'marketing-feature-01', value: 22310, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","marketing-data-01","marketing-data-02","marketing-data-03","marketing-data-04","support-data-01","support-data-02"] });
});

test('marketing-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22304);
  assert.equal(evaluate(-7).value, 22296);
});

test('marketing-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('marketing-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'marketing-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","marketing-data-01","marketing-data-02","marketing-data-03","marketing-data-04","support-data-01","support-data-02"]);
});
