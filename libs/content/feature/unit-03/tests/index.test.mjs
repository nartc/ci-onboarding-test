// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/content-feature-03/index.js';

test('content-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22430);
  assert.deepEqual(evaluate(7), { project: 'content-feature-03', value: 22437, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","content-data-01","content-data-02","content-data-03","content-data-04","marketing-data-03","marketing-data-04"] });
});

test('content-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22431);
  assert.equal(evaluate(-7).value, 22423);
});

test('content-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('content-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'content-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","content-data-01","content-data-02","content-data-03","content-data-04","marketing-data-03","marketing-data-04"]);
});
