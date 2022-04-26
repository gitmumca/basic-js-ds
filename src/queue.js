const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 class Node {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    return this.head;  
  }

  enqueue(value) {

    let node = new Node(value);
    let last = this.head;

    if (last === null) {
      this.head = node;
    } else {  
        while (last.next) {
          last = last.next;
        }
        last.next = node;
      } 

  }

  dequeue() {
    let res = this.head.value;
    if (this.head !== null) { this.head = this.head.next; }
    return res;
  }
}

module.exports = {
  Queue
};
