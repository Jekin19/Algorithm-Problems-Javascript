// https://leetcode.com/problems/house-robber-iii/

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
var rob = function(root) {
  if (!root) {
    return 0;
  }

  let map = new Map();
  return rob_rec(root, map);
};

function rob_rec(root, map) {
  if (!root) {
    return 0;
  }

  if (map.has(root)) {
    return map.get(root);
  }

  // Includes Root
  let includesRoot = root.val + sumOfGrandChildren(root, map);

  let excludesRoot = rob_rec(root.left, map) + rob_rec(root.right, map);

  map.set(root, Math.max(includesRoot, excludesRoot));

  return map.get(root);
}

function sumOfGrandChildren(root, map) {
  let sum = 0;

  if (root.left) {
    sum += rob_rec(root.left.left, map) + rob_rec(root.left.right, map);
  }

  if (root.right) {
    sum += rob_rec(root.right.left, map) + rob_rec(root.right.right, map);
  }

  return sum;
}

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("House Rober III");
console.log("---------------------------------------");
let root = {
  val: 1,
  left: { val: 2, right: { val: 4 } },
  right: { val: 3, right: { val: 5 } }
};
console.log("Input: ");
console.log(JSON.stringify(root));
console.log("");
console.log("");
console.log(rob(root));
