// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/content-ui-01/index.js';

test('content-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134862);
  assert.deepEqual(evaluate(7), { project: 'content-ui-01', value: 134869, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","content-feature-01","content-feature-02","content-feature-03","content-feature-04","marketing-feature-01","marketing-feature-02"] });
});

test('content-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134863);
  assert.equal(evaluate(-7).value, 134855);
});

test('content-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('content-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'content-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","content-feature-01","content-feature-02","content-feature-03","content-feature-04","marketing-feature-01","marketing-feature-02"]);
});
