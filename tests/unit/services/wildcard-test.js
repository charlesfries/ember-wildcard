import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | wildcard', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let service = this.owner.lookup('service:wildcard');
    assert.ok(service);
  });

  test('it functions', function(assert) {
    let service = this.owner.lookup('service:wildcard');
    assert.ok(service);

    service.setSymbol('*');

    let actual = 'https://www.google.com/search?client=safari&rls=en&q=3ygrlhefgf&ie=UTF-8&oe=UTF-8';
    let expected = 'https://www.google.com/search?client=safari&rls=en&q=**********&ie=UTF-8&oe=UTF-8';

    assert.ok(service.match(actual, expected), 'match method works');
  });
});
