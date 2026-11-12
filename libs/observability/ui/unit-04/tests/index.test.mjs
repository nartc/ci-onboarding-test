// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/observability-ui-04/index.js';

test('observability-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134495);
  assert.deepEqual(evaluate(7), { project: 'observability-ui-04', value: 134502, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","observability-feature-01","observability-feature-02","observability-feature-03","observability-feature-04","compliance-feature-04","compliance-feature-01"] });
});

test('observability-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134496);
  assert.equal(evaluate(-7).value, 134488);
});

test('observability-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('observability-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'observability-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","observability-feature-01","observability-feature-02","observability-feature-03","observability-feature-04","compliance-feature-04","compliance-feature-01"]);
});
