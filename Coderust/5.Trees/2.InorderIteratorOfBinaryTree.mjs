"use strict";
class InorderIterator {
  //TODO: Write - Your - Code
  constructor(root) {
    this.stack = [root];
  }

  hasNext() {
    if (!this.stack || this.stack.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  getNext() {
    let result = null;
    while (!result) {
      const topElement = this.stack[this.stack.length - 1];
      if (topElement.left) {
        this.stack.push(topElement.left);
        topElement.left = null;
      } else {
        result = this.stack.pop();
        if (topElement.right) {
          this.stack.push(topElement.right);
          topElement.right = null;
        }
      }
    }
    return result;
  }
}

let inorder_using_iterator = function(root) {
  let iter = new InorderIterator(root);
  let result_str = "";
  while (iter.hasNext()) {
    let ptr = iter.getNext();
    result_str += ptr.value + " ";
  }
  return result_str;
};

let root = {
  value: 8,
  left: { value: 3, right: { value: 6, left: { value: 4 }, right: { value: 7 } }, left: { value: 1 } },
  right: { value: 10, right: { value: 14, left: { value: 13 } } }
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Inorder Iterator");
console.log("---------------------------------------");
console.log("Inorder Iterator = " + inorder_using_iterator(root));
console.log("++++++ Test Done Successfully ++++++");
