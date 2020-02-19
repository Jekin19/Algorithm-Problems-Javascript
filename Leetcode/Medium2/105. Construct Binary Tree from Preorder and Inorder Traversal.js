// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let preIndex;
var buildTree = function(preorder, inorder) {
  preIndex = 0;
  return buildTree_rec(preorder, inorder, 0, inorder.length - 1);
};

function buildTree_rec(preorder, inorder, inorderStart, inorderEnd) {
  if (inorderStart > inorderEnd) {
    return null;
  }

  let node = { val: preorder[preIndex++], left: null, right: null };
  if (inorderStart === inorderEnd) {
    return node;
  }

  let inorderIndex = inorder.findIndex(val => val === node.val);
  node.left = buildTree_rec(preorder, inorder, inorderStart, inorderIndex - 1);
  node.right = buildTree_rec(preorder, inorder, inorderIndex + 1, inorderEnd);
  return node;
}

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Construct Binary Tree from Preorder and Inorder Traversal");
console.log("---------------------------------------");
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
console.log(JSON.stringify(buildTree(preorder, inorder)));
