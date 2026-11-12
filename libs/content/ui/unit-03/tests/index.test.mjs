// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/content-ui-03/index.js';

test('content-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134824);
  assert.deepEqual(evaluate(7), { project: 'content-ui-03', value: 134831, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","content-feature-01","content-feature-02","content-feature-03","content-feature-04","marketing-feature-03","marketing-feature-04"] });
});

test('content-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134825);
  assert.equal(evaluate(-7).value, 134817);
});

test('content-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('content-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'content-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","content-feature-01","content-feature-02","content-feature-03","content-feature-04","marketing-feature-03","marketing-feature-04"]);
});
