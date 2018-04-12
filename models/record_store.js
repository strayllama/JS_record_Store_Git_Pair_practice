const RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype.sellRecord = function(record){
  indexToBeRemoved = this.inventory.indexOf(record);
  this.inventory.splice(indexToBeRemoved, 1);
  this.balance -= record.price;
}

module.exports = RecordStore;
