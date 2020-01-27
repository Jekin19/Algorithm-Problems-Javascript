/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let result = [];
  if (!root) {
    return result;
  }

  let stack = [root, null];
  while (stack.length > 0) {
    const currentResult = [];
    while (stack.length > 0) {
      const topElement = stack.shift();

      if (topElement) {
        currentResult.push(topElement.val);
        if (topElement.left) {
          stack.push(topElement.left);
        }
        if (topElement.right) {
          stack.push(topElement.right);
        }
      } else {
        break;
      }
    }
    if (stack.length > 0) {
      stack.push(null);
    }
    result.push(currentResult);
  }

  return result;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Level Order Traversal.");
console.log("---------------------------------------");
let root = {
  val: 8,
  left: { val: 3, right: { val: 6, left: { val: 4 }, right: { val: 7 } }, left: { val: 1 } },
  right: { val: 10, right: { val: 14, left: { val: 13 } } }
};
console.log(JSON.stringify(levelOrder(root)));
