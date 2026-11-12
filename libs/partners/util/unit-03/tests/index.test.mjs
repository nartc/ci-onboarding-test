// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/partners-util-03/index.js';

test('partners-util-03: dependency-derived value', () => {
  assert.equal(weight, 518);
  assert.deepEqual(evaluate(7), { project: 'partners-util-03', value: 525, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04"] });
});

test('partners-util-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 519);
  assert.equal(evaluate(-7).value, 511);
});

test('partners-util-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('partners-util-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'partners-util-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04"]);
});
