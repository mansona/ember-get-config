import config, { findConfigName } from 'ember-get-config';
import { module, test } from 'qunit';

module('ember-get-config');

test('it exports the app config file', function(assert) {
  assert.equal(config.environment, 'test');
});

test('it finds the module name', function(assert) {
  function randomString(chars='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-',
                        length=Math.floor(Math.random() * (33 - 5) + 5)) {
    var result = '';
    for (var i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  const appName = randomString();
  const alphaWithSlash = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-/';

  const withConfigModule = {
    [`${appName}/${randomString(alphaWithSlash)}/config/environment`]: false,
    [`${appName}/config/environment/${randomString(alphaWithSlash)}`]: false,
    [`${appName}/config/environment`]: true,
  };

  assert.equal(findConfigName(withConfigModule), `${appName}/config/environment`, `module name is found`);

  const noConfigModule = {
    [`${appName}/${randomString(alphaWithSlash)}/config/environment`]: false,
    [`${appName}/config/environment/${randomString(alphaWithSlash)}`]: false,
  };

  assert.equal(findConfigName(noConfigModule), undefined, `module name is not found (b/c it doesn't exist`);
});
