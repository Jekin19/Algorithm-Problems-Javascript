// https://leetcode.com/problems/symmetric-tree/

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
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }

  let queue = [root, root];
  while (queue.length > 0) {
    const node1 = queue.shift();
    const node2 = queue.shift();
    if (!node1 && !node2) {
      continue;
    } else if (!node1 || !node2) {
      return false;
    }
    if (node1.val !== node2.val) {
      return false;
    }
    queue.push(node1.left);
    queue.push(node2.right);
    queue.push(node1.right);
    queue.push(node2.left);
  }
  return true;
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Is a Symmetric tree");
console.log("---------------------------------------");
let root = {
  val: 1,
  left: { val: 2, left: { val: 3 }, right: { val: 4 } },
  right: { val: 2, left: { val: 4 }, right: { val: 3 } }
};
console.log(isSymmetric(root));

let root2 = {
  val: 1,
  left: { val: 2, left: { val: 3 }, right: { val: 4 } },
  right: { val: 2, right: { val: 3 } }
};
console.log(isSymmetric(root2));

let root3 = {
  val: 4,
  left: { val: -42, right: { val: 76, right: { val: 13 } } },
  right: { val: -42, left: { val: 76, right: { val: 13 } } }
};
console.log(isSymmetric(root3));
