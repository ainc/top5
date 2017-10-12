import { moduleForModel, test } from 'ember-qunit';

moduleForModel('top5', 'Unit | Serializer | top5', {
  // Specify the other units that are required for this test.
  needs: ['serializer:top5']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
