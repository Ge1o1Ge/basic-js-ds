const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
 * class ListNode {
    constructor(x) {
      this.value = x;
      this.next = null;
    }
  }
 */
class Queue {
  constructor() {
    this.root = null;
  }

  getUnderlyingList() {
    return {value: this.root.value, next: this.root.next};
  }

  enqueue(value) {
    if (this.root === null) {
      this.root = new ListNode(value);
    } else {
      let l = this.root
      while (l.next !== null) {
        l = l.next;
      }
      l.next = new ListNode(value);
    }
  }

  dequeue() {
    let l = this.root.value;
    if (this.root.next !== null) {
      this.root = this.root.next
    } else {
      this.root = null
    }
    return l
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(3);
console.log(queue.getUnderlyingList())

module.exports = {
  Queue
};
