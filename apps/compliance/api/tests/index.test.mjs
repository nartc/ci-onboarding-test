// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/compliance-api/index.js';

test('compliance-api: dependency-derived value', () => {
  assert.equal(weight, 104013);
  assert.deepEqual(evaluate(7), { project: 'compliance-api', value: 104020, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","compliance-feature-01","compliance-feature-02","compliance-feature-03","compliance-feature-04","compliance-data-01","compliance-data-02","compliance-data-03","compliance-data-04"] });
});

test('compliance-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104014);
  assert.equal(evaluate(-7).value, 104006);
});

test('compliance-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('compliance-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'compliance-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","compliance-feature-01","compliance-feature-02","compliance-feature-03","compliance-feature-04","compliance-data-01","compliance-data-02","compliance-data-03","compliance-data-04"]);
});
