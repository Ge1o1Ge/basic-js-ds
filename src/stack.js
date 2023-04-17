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
class Stack {
  stak = []

  push(el) {
    this.stak.push(el)
  }

  pop() {
    return this.stak.pop()
  }

  peek() {
    return this.stak[this.stak.length-1]
  }
}

module.exports = {
  Stack
};
