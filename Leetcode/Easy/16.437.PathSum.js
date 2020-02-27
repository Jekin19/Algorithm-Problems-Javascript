// https://leetcode.com/problems/path-sum-iii/
// https://www.youtube.com/watch?v=7oL8kDCk1OI

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */

let result = 0;
let pathSumRec = function(root, sum, path) {
  if (!root) {
    return;
  }

  path.push(root.val);
  pathSumRec(root.left, sum, path);
  pathSumRec(root.right, sum, path);

  let temp = 0;
  for (let i = path.length - 1; i >= 0; i--) {
    temp = temp + path[i];
    if (temp === sum) {
      result++;
    }
  }

  path.pop();
};

var pathSum = function(root, sum) {
  result = 0;
  pathSumRec(root, sum, []);
  return result;
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Path Sum");
console.log("---------------------------------------");
let root = {
  val: 10,
  left: { val: 5, left: { val: 3, left: { val: 3 }, right: { val: -2 } }, right: { val: 2, right: { val: 1 } } },
  right: { val: -3, right: { val: 11 } }
};
console.log(pathSum(root, 8));
