// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/content-data-02/index.js';

test('content-data-02: dependency-derived value', () => {
  assert.equal(weight, 3666);
  assert.deepEqual(evaluate(7), { project: 'content-data-02', value: 3673, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","content-util-01","content-util-02","content-util-03","content-util-04","marketing-util-02","marketing-util-03"] });
});

test('content-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3667);
  assert.equal(evaluate(-7).value, 3659);
});

test('content-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('content-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'content-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","content-util-01","content-util-02","content-util-03","content-util-04","marketing-util-02","marketing-util-03"]);
});
