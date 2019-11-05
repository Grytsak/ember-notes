import EmberObject from '@ember/object';
import ScrollEventMixin from 'ember-notes/mixins/scroll-event';
import { module, test } from 'qunit';

module('Unit | Mixin | scroll-event', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ScrollEventObject = EmberObject.extend(ScrollEventMixin);
    let subject = ScrollEventObject.create();
    assert.ok(subject);
  });
});
