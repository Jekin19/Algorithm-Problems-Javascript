/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) {
    return false;
  }

  let stack = [root];
  let previousElement = Number.MIN_SAFE_INTEGER;
  while (stack.length > 0) {
    const currentElement = stack[stack.length - 1];
    if (currentElement.left) {
      stack.push(currentElement.left);
      currentElement.left = null;
    } else {
      if (currentElement.val <= previousElement) {
        return false;
      }
      previousElement = currentElement.val;
      stack.pop();
      if (currentElement.right) {
        stack.push(currentElement.right);
        currentElement.right = null;
      }
    }
  }
  return true;
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Is Binary Search Tree Solution 2");
console.log("---------------------------------------");
let root = {
  val: 8,
  left: { val: 3, right: { val: 6, left: { val: 4 }, right: { val: 7 } }, left: { val: 1 } },
  right: { val: 10, right: { val: 14, left: { val: 13 } } }
};
console.log(isValidBST(root));

let root2 = {
  val: 8,
  left: { val: 3, right: { val: 6, left: { val: 45 }, right: { val: 7 } }, left: { val: 1 } },
  right: { val: 10, right: { val: 14, left: { val: 13 } } }
};
console.log(isValidBST(root2));
