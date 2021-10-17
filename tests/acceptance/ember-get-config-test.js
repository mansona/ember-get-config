import { module, test } from 'qunit';
import { visit, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember get config', function(hooks) {
  setupApplicationTest(hooks);

  test('ember-get-config integrates', async function(assert) {
    await visit('/');

    assert.equal(find('#foo').innerText.trim(), 'bar', 'text correct');
  });
});
