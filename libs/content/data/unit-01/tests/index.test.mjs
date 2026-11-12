// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/content-data-01/index.js';

test('content-data-01: dependency-derived value', () => {
  assert.equal(weight, 3666);
  assert.deepEqual(evaluate(7), { project: 'content-data-01', value: 3673, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","content-util-01","content-util-02","content-util-03","content-util-04","marketing-util-01","marketing-util-02"] });
});

test('content-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3667);
  assert.equal(evaluate(-7).value, 3659);
});

test('content-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('content-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'content-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","content-util-01","content-util-02","content-util-03","content-util-04","marketing-util-01","marketing-util-02"]);
});
