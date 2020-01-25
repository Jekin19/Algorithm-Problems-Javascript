// https://leetcode.com/problems/binary-tree-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let result = [];
  if (!root) {
    return result;
  }
  let stack = [root];
  while (stack.length > 0) {
    const topElement = stack[stack.length - 1];
    if (topElement.left) {
      stack.push(topElement.left);
      topElement.left = null;
    } else {
      result.push(stack.pop().val);
      if (topElement.right) {
        stack.push(topElement.right);
        topElement.right = null;
      }
    }
  }
  return result;
};

let root = {
  val: 8,
  left: { val: 3, right: { val: 6, left: { val: 4 }, right: { val: 7 } }, left: { val: 1 } },
  right: { val: 10, right: { val: 14, left: { val: 13 } } }
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Inorder Iterator");
console.log("---------------------------------------");
console.log("Inorder Iterator = " + inorderTraversal(root));
console.log("++++++ Test Done Successfully ++++++");
