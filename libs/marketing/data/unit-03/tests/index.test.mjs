// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/marketing-data-03/index.js';

test('marketing-data-03: dependency-derived value', () => {
  assert.equal(weight, 3634);
  assert.deepEqual(evaluate(7), { project: 'marketing-data-03', value: 3641, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","marketing-util-01","marketing-util-02","marketing-util-03","marketing-util-04","support-util-03","support-util-04"] });
});

test('marketing-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3635);
  assert.equal(evaluate(-7).value, 3627);
});

test('marketing-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('marketing-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'marketing-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","marketing-util-01","marketing-util-02","marketing-util-03","marketing-util-04","support-util-03","support-util-04"]);
});
