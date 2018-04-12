const assert = require('assert')
const RecordStore = require('../models/record_store.js')

describe('RecordStore', function() {

  let record_store;

  beforeEach(function(){
    record_store = new RecordStore('Madrid Rock', 'Madrid')
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

});
