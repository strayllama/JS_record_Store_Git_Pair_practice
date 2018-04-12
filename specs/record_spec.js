const assert = require('assert');
const Record = require('../models/record.js')

 describe('Record', function() {
  let record1;

  beforeEach(function() {
    record1 = new Record('Prodigy', 'Music for the Gilted Generation', 'Techno', 15);
  });

  it('should have an artist', function() {
    const actual = record1.artist;
    console.log('actual: ',actual, 'versus typed: Prodgiy' );
    assert.strictEqual(actual, 'Prodigy');
  });

  it('should have an title', function() {
    const actual = record1.title;
    assert.strictEqual(actual, 'Music for the Gilted Generation');
  });

  it('should have an genre', function() {
    const actual = record1.genre;
    assert.strictEqual(actual, 'Techno');
  });

  it('should have a price', function() {
    const actual = record1.price;
    assert.strictEqual(actual, 15);
  });

}); // end of describe - eof
