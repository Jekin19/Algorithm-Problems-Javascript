// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) {
    return root;
  }
  let previous = null;
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.right) {
      stack.push(current.right);
      current.right = null;
    }
    if (current.left) {
      stack.push(current.left);
      current.left = null;
    }
    if (previous) {
      previous.right = current;
    }
    previous = current;
  }
  return root;
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Flatten Binary Tree to Linked List");
console.log("---------------------------------------");
let root = {
  val: 8,
  left: { val: 3, right: { val: 6, left: { val: 4 }, right: { val: 7 } }, left: { val: 1 } },
  right: { val: 10, right: { val: 14, left: { val: 13 } } }
};
console.log(JSON.stringify(flatten(root)));
