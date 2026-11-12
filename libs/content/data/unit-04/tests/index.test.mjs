// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/content-data-04/index.js';

test('content-data-04: dependency-derived value', () => {
  assert.equal(weight, 3668);
  assert.deepEqual(evaluate(7), { project: 'content-data-04', value: 3675, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","content-util-01","content-util-02","content-util-03","content-util-04","marketing-util-04","marketing-util-01"] });
});

test('content-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3669);
  assert.equal(evaluate(-7).value, 3661);
});

test('content-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('content-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'content-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","content-util-01","content-util-02","content-util-03","content-util-04","marketing-util-04","marketing-util-01"]);
});
