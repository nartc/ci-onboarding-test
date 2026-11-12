// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/support-feature-03/index.js';

test('support-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22273);
  assert.deepEqual(evaluate(7), { project: 'support-feature-03', value: 22280, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","support-data-01","support-data-02","support-data-03","support-data-04","reporting-data-03","reporting-data-04"] });
});

test('support-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22274);
  assert.equal(evaluate(-7).value, 22266);
});

test('support-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('support-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'support-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","support-data-01","support-data-02","support-data-03","support-data-04","reporting-data-03","reporting-data-04"]);
});
