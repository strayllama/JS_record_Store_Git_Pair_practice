const assert = require('assert')
const RecordStore = require('../models/record_store.js')
const Record = require('../models/record.js')

describe('RecordStore', function() {

  let record_store;
  let record1;
  let record2;
  let record3;

  beforeEach(function(){
    record_store = new RecordStore('Madrid Rock', 'Madrid');
    record1 = new Record('Katie Tunstall', 'Black Horse and the Cherry Tree', 'Indie', 200);
    record2 = new Record('Post Malone', 'Stoney', 'Trap', 150);
    record3 = new Record('Postal Service', 'The District Sleeps Alone Tonight', 'Indie', 150);
  });

  it ('should have a name', function(){
    const result = record_store.name;
    assert.strictEqual(result, 'Madrid Rock')
  });

  it ('should have city', function(){
    const result = record_store.city;
    assert.strictEqual(result, 'Madrid')
  });

  it ('should have an empty inventory' ,function(){
    const result = record_store.inventory.length;
    assert.strictEqual(result, 0)
  });

  it ('should have 0 balance', function(){
    const result = record_store.balance;
    assert.strictEqual(result, 0)
  });

  it ('cand add records to inventory', function(){
    record_store.inventory.push(record1);
    record_store.inventory.push(record2);
    record_store.inventory.push(record3);
    const result = record_store.inventory.length;
    assert.strictEqual(result, 3);
  })

});
