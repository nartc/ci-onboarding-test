// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/content-ui-04/index.js';

test('content-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134860);
  assert.deepEqual(evaluate(7), { project: 'content-ui-04', value: 134867, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","content-feature-01","content-feature-02","content-feature-03","content-feature-04","marketing-feature-04","marketing-feature-01"] });
});

test('content-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134861);
  assert.equal(evaluate(-7).value, 134853);
});

test('content-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('content-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'content-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","content-feature-01","content-feature-02","content-feature-03","content-feature-04","marketing-feature-04","marketing-feature-01"]);
});
