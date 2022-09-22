import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | config', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct value', async function (assert) {
    await render(hbs`{{config "APP.name"}}`);

    assert.equal(this.element.textContent.trim(), 'ember-get-config');
  });
});
