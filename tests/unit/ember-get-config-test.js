import configApp from 'dummy/config/environment';
import config from 'ember-get-config';
import { module, test } from 'qunit';

module('ember-get-config');

test('it exports the app config file', function (assert) {
  assert.equal(config.environment, 'test');
});

test("it exports a reference to the app's config", function (assert) {
  assert.equal(config, configApp);
});
