import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember get gonfig', function(hooks) {
  setupApplicationTest(hooks);

  test('ember-get-config integrates', async function(assert) {
    assert.expect(1);

    await visit('/');

    assert.dom("#foo").hasText("bar", "text correct")
  });
});
