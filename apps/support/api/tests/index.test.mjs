// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/support-api/index.js';

test('support-api: dependency-derived value', () => {
  assert.equal(weight, 104071);
  assert.deepEqual(evaluate(7), { project: 'support-api', value: 104078, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","support-feature-01","support-feature-02","support-feature-03","support-feature-04","support-data-01","support-data-02","support-data-03","support-data-04"] });
});

test('support-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104072);
  assert.equal(evaluate(-7).value, 104064);
});

test('support-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('support-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'support-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","support-feature-01","support-feature-02","support-feature-03","support-feature-04","support-data-01","support-data-02","support-data-03","support-data-04"]);
});
