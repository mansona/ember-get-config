import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | basic', function (hooks) {
  setup(hooks);

  test('it renders a page...', async function (assert) {
    let { htmlDocument } = await visit('/');

    assert.dom('body', htmlDocument).hasText('bar');
  });
});
