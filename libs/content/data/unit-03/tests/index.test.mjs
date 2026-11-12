// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/content-data-03/index.js';

test('content-data-03: dependency-derived value', () => {
  assert.equal(weight, 3658);
  assert.deepEqual(evaluate(7), { project: 'content-data-03', value: 3665, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","content-util-01","content-util-02","content-util-03","content-util-04","marketing-util-03","marketing-util-04"] });
});

test('content-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3659);
  assert.equal(evaluate(-7).value, 3651);
});

test('content-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('content-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'content-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","content-util-01","content-util-02","content-util-03","content-util-04","marketing-util-03","marketing-util-04"]);
});
