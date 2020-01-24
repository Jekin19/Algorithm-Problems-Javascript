// https://leetcode.com/problems/min-stack
// https://www.geeksforgeeks.org/design-and-implement-special-stack-data-structure/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.stack.length === 0) {
    this.minStack.push(x);
  } else {
    const min = this.getMin();
    if (min < x) {
      this.minStack.push(min);
    } else {
      this.minStack.push(x);
    }
  }

  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.stack.length > 0) {
    const pop = this.stack.pop();
    this.minStack.pop();
    return pop;
  }
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.stack.length >= 0) {
    return this.stack[this.stack.length - 1];
  }
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.minStack.length > 0) {
    return this.minStack[this.minStack.length - 1];
  }
  return null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Min Stack");
console.log("---------------------------------------");

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top()); // 0.
console.log(minStack.getMin()); // -2.
