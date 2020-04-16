// https://leetcode.com/problems/diameter-of-binary-tree
// https://www.youtube.com/watch?v=ey7DYc9OANo

/**
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

// var diameterOfBinaryTree = function(root) {
//   if (!root) {
//     return 0;
//   }

//   let leftHeight = height(root.left);
//   let rightHeight = height(root.right);

//   let leftDiameter = diameterOfBinaryTree(root.left);
//   let rightDiameter = diameterOfBinaryTree(root.right);

//   return Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));
// };

// function height(root) {
//   if (!root) {
//     return 0;
//   }

//   return 1 + Math.max(height(root.left), height(root.right));
// }

let max;
var diameterOfBinaryTree = function (root) {
  if (!root) {
    return 0;
  }
  max = 0;
  diameterOfBinaryTree_rec(root);
  return max;
};

var diameterOfBinaryTree_rec = function (root) {
  if (!root) {
    return 0;
  }

  let leftDiameter = diameterOfBinaryTree_rec(root.left);
  let rightDiameter = diameterOfBinaryTree_rec(root.right);

  max = Math.max(1 + leftDiameter + rightDiameter, max);
  return Math.max(1 + leftDiameter, 1 + rightDiameter);
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Diameter of a Binary Tree");
console.log("---------------------------------------");
let root = {
  val: 8,
  left: { val: 3, right: { val: 6, left: { val: 4 }, right: { val: 7 } }, left: { val: 1 } },
  right: { val: 10, right: { val: 14, left: { val: 13 } } },
};
console.log(diameterOfBinaryTree(root));
