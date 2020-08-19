// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  //creates the collection on instantiation
  constructor() {
    this.data = [];
  }
  //add a record to the beginning of the collection
  add(record) {
    this.data.unshift(record);
  }
  //remove the last record in the collection
  remove() {
    this.data.pop();
  }
}

module.exports = Queue;
