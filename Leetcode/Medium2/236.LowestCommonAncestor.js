// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let result = null;
var lowestCommonAncestor = function(root, p, q) {
  if (!root) {
    return result;
  }
  lowestCommonAncestor_rec(root, p, q);
  return result;
};

var lowestCommonAncestor_rec = function(root, p, q) {
  if (!root) {
    return false;
  }

  let left = lowestCommonAncestor_rec(root.left, p, q) ? 1 : 0;
  let right = lowestCommonAncestor_rec(root.right, p, q) ? 1 : 0;
  let mid = root === p || root === q ? 1 : 0;

  if (left + right + mid >= 2) {
    result = root;
  }

  return left || right || mid;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("LCA");
console.log("---------------------------------------");
let root = {
  val: 8,
  left: { val: 3, right: { val: 6, left: { val: 4 }, right: { val: 7 } }, left: { val: 1 } },
  right: { val: 10, right: { val: 14, left: { val: 13 } } }
};
console.log(lowestCommonAncestor(root, 4, 3));
