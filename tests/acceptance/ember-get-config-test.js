import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | ember get config');

test('ember-get-config integrates', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(function() {
    assert.equal(find('#foo').text().trim(), 'bar', 'text correct');
  });
});
