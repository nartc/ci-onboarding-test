// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/search-ui-03/index.js';

test('search-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134165);
  assert.deepEqual(evaluate(7), { project: 'search-ui-03', value: 134172, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","search-feature-01","search-feature-02","search-feature-03","search-feature-04","notifications-feature-03","notifications-feature-04"] });
});

test('search-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134166);
  assert.equal(evaluate(-7).value, 134158);
});

test('search-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('search-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'search-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","search-feature-01","search-feature-02","search-feature-03","search-feature-04","notifications-feature-03","notifications-feature-04"]);
});
