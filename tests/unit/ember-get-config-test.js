import getConfig from 'ember-get-config';
import { module, test } from 'qunit';

module('ember get config');

test('it returns the app config file', function(assert) {
  const result = getConfig();

  assert.equal(result.environment, 'test');
});
