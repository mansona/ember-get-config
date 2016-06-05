import { Array_find as find } from 'ember-get-config/find';
import { module, test } from 'qunit';

module('ember-get-config');

let count = 0;
const array = ['foo', 'bar', 'biz'];
const value = find.call(array, (entry) => ++count && /.a./.test(entry));

test('it returns the matching value', function(assert) {
  assert.equal(value, 'bar', 'it found the value');
});

test('it breaks early after finding a match', function(assert) {
  assert.equal(count, 2, 'it did not test any more entries after finding the first match');
});

test('it returns undefined if no matching value is found', function(assert) {
  const ret = find.call(array, () => false);
  assert.equal(ret, undefined, 'returned undefined');
});
