const { NotImplementedError } = require('../extensions/index.js');
/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Node {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.head = null;
  }

  push(element) {

    let node = new Node(element);
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

  pop() {
    let node = this.head;
    let res;

    if (node !== null) {
      while (node.next) {
        if (node.next.next === null) {
          res = node.next.value;
          node.next = null;
        } else {
          node = node.next;
        }
      }
    }

    return res;
  }

  peek() {
    let node = this.head;

    if (node !== null) {
      while (node.next) {
        node = node.next;
        }
      }

    return node.value;  
  }
}
/*
function push(el) {
  stack.push(el);
}

function peek(el) {
  stack.peek(el);
}

function pop(el) {
  stack.pop(el);
}
*/
module.exports = {
  Stack
};
