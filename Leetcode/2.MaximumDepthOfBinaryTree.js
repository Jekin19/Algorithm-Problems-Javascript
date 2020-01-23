// https://leetcode.com/problems/maximum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let count = 0;
  if (!root) {
    return count;
  }

  let stack = [root];
  while (stack.length > 0) {
    let stack2 = stack;
    stack = [];
    count++;
    while (stack2.length > 0) {
      const current = stack2.pop();
      if (current.left) {
        stack.push(current.left);
      }

      if (current.right) {
        stack.push(current.right);
      }
    }
  }
  return count;
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Max depth of Binary Trees");
console.log("---------------------------------------");
let root = {
  val: 8,
  left: { val: 3, right: { val: 6, left: { val: 4 }, right: { val: 7 } }, left: { val: 1 } },
  right: { val: 10, right: { val: 14, left: { val: 13 } } }
};

console.log(maxDepth(root));
