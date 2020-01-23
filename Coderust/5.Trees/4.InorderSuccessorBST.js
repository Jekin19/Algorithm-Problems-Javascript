let left_min = function(root) {
  while (root.left) {
    root = root.left;
  }
  return root;
};

let inorder_successor_bst = function(root, d) {
  if (!root) {
    return null;
  }

  let successor = null;
  while (root) {
    if (root.value === d) {
      if (root.right) {
        return left_min(root.right);
      } else {
        return successor;
      }
    } else if (root.value < d) {
      root = root.right;
    } else {
      successor = root;
      root = root.left;
    }
  }
  return null;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Iterative Successor BST");
console.log("---------------------------------------");
let root = {
  value: 8,
  left: { value: 3, right: { value: 6, left: { value: 4 }, right: { value: 7 } }, left: { value: 1 } },
  right: { value: 10, right: { value: 14, left: { value: 13 } } }
};
//Inorder Iterator = 1,3,4,6,7,8,10,13,14
console.log(inorder_successor_bst(root, 13));
