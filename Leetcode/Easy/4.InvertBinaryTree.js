// https://leetcode.com/problems/invert-binary-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) {
    return root;
  }
  let stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    // Swap
    let temp = current.left;
    current.left = current.right;
    current.right = temp;
    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return root;
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Invert Binary Tree");
console.log("---------------------------------------");
let root = {
  val: 8,
  left: { val: 3, right: { val: 6, left: { val: 4 }, right: { val: 7 } }, left: { val: 1 } },
  right: { val: 10, right: { val: 14, left: { val: 13 } } }
};
console.log("");
console.log(JSON.stringify(invertTree(root)));
