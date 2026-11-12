// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/marketing-data-04/index.js';

test('marketing-data-04: dependency-derived value', () => {
  assert.equal(weight, 3629);
  assert.deepEqual(evaluate(7), { project: 'marketing-data-04', value: 3636, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","marketing-util-01","marketing-util-02","marketing-util-03","marketing-util-04","support-util-04","support-util-01"] });
});

test('marketing-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3630);
  assert.equal(evaluate(-7).value, 3622);
});

test('marketing-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('marketing-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'marketing-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","marketing-util-01","marketing-util-02","marketing-util-03","marketing-util-04","support-util-04","support-util-01"]);
});
