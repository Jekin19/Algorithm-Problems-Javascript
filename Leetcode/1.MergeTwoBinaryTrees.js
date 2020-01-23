// https://leetcode.com/problems/merge-two-binary-trees/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1) {
    return t2;
  }

  if (!t2) {
    return t1;
  }

  t1.val = t1.val + t2.val;
  let result = t1;
  let stack1 = [t1];
  let stack2 = [t2];
  while (stack1.length > 0 || stack2.length > 0) {
    const curr1 = stack1.pop();
    const curr2 = stack2.pop();
    if (curr1.left && curr2.left) {
      curr1.left.val = curr1.left.val + curr2.left.val;
      stack1.push(curr1.left);
      stack2.push(curr2.left);
    } else if (!curr1.left) {
      curr1.left = curr2.left;
    }

    if (curr1.right && curr2.right) {
      curr1.right.val = curr1.right.val + curr2.right.val;
      stack1.push(curr1.right);
      stack2.push(curr2.right);
    } else if (!curr1.right) {
      curr1.right = curr2.right;
    }
  }
  return result;
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Merge Two Binary Trees");
console.log("---------------------------------------");
let root = {
  val: 8,
  left: { val: 3, right: { val: 6, left: { val: 4 }, right: { val: 7 } }, left: { val: 1 } },
  right: { val: 10, right: { val: 14, left: { val: 13 } } }
};
let root2 = {
  val: 8,
  left: { val: 3, right: { val: 6, left: { val: 4 } }, left: { val: 1 } },
  right: { val: 10, right: { val: 14, left: { val: 13 } } }
};
console.log("");
console.log(JSON.stringify(mergeTrees(root, root2)));
