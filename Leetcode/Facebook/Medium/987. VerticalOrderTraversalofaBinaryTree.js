/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  let map = new Map();
  let stack = [root];
  map.set(root, { val: root.val, x: 0, y: 0 });
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.left) {
      stack.push(current.left);
      map.set(current.left, { val: current.left.val, x: map.get(current).x - 1, y: map.get(current).y - 1 });
    }
    if (current.right) {
      stack.push(current.right);
      map.set(current.right, { val: current.right.val, x: map.get(current).x + 1, y: map.get(current).y - 1 });
    }
  }
  const sortedvals = Array.from(map.values());
  sortedvals.sort((a, b) => {
    if (a.x === b.x) {
      if (a.y === b.y) {
        return a.val - b.val;
      }
      return b.y - a.y;
    }
    return a.x - b.x;
  });
  let result = [];
  let previous = {};
  for (let sortedval of sortedvals) {
    if (previous.x !== sortedval.x) {
      previous = sortedval;
      result.push([]);
    }
    result[result.length - 1].push(sortedval.val);
  }
  return result;
};

console.log("");
console.log("---------------------------------------");
let root = {
  val: 8,
  left: { val: 3, right: { val: 6, left: { val: 4 }, right: { val: 7 } }, left: { val: 1 } },
  right: { val: 10, right: { val: 14, left: { val: 13 } } },
};

console.log(JSON.stringify(verticalTraversal(root)));
