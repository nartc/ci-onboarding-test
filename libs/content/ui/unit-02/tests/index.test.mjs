// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/content-ui-02/index.js';

test('content-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134836);
  assert.deepEqual(evaluate(7), { project: 'content-ui-02', value: 134843, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","content-feature-01","content-feature-02","content-feature-03","content-feature-04","marketing-feature-02","marketing-feature-03"] });
});

test('content-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134837);
  assert.equal(evaluate(-7).value, 134829);
});

test('content-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('content-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'content-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","content-feature-01","content-feature-02","content-feature-03","content-feature-04","marketing-feature-02","marketing-feature-03"]);
});
