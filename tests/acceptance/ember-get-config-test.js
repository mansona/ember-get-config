import { module, test } from 'qunit';
import { visit, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember get config', function (hooks) {
  setupApplicationTest(hooks);

  test('ember-get-config integrates', async function (assert) {
    await visit('/');

    assert.strictEqual(find('#foo').innerText.trim(), 'bar', 'text correct');
  });

  test('it includes config from addons', async function (assert) {
    await visit('/');

    assert.dom('#app-name').hasText('ember-get-config');
  });
});
