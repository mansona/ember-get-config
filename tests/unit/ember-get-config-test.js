import config from 'ember-get-config';
import { module, test } from 'qunit';

module('ember-get-config');

test('it exports the app config file', function(assert) {
  assert.equal(config.environment, 'test');
});
