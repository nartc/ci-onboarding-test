// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/content-portal/index.js';

test('content-portal: dependency-derived value', () => {
  assert.equal(weight, 898102);
  assert.deepEqual(evaluate(7), { project: 'content-portal', value: 898109, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","content-feature-01","content-feature-02","content-feature-03","content-feature-04","content-ui-01","content-ui-02","content-ui-03","content-ui-04","marketing-ui-01","marketing-ui-02"] });
});

test('content-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 898103);
  assert.equal(evaluate(-7).value, 898095);
});

test('content-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('content-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'content-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","content-feature-01","content-feature-02","content-feature-03","content-feature-04","content-ui-01","content-ui-02","content-ui-03","content-ui-04","marketing-ui-01","marketing-ui-02"]);
});
