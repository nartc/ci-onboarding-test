// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/marketing-data-01/index.js';

test('marketing-data-01: dependency-derived value', () => {
  assert.equal(weight, 3628);
  assert.deepEqual(evaluate(7), { project: 'marketing-data-01', value: 3635, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","marketing-util-01","marketing-util-02","marketing-util-03","marketing-util-04","support-util-01","support-util-02"] });
});

test('marketing-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3629);
  assert.equal(evaluate(-7).value, 3621);
});

test('marketing-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('marketing-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'marketing-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","marketing-util-01","marketing-util-02","marketing-util-03","marketing-util-04","support-util-01","support-util-02"]);
});
