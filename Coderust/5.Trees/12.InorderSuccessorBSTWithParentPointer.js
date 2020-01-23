let get_successor = function(root) {
  while (root) {
    if (root.parent && root.parent.left && root.parent.left === root) {
      return root.parent.value;
    } else {
      root = root.parent;
    }
  }
  return null;
};

let left_min = function(root) {
  while (root.left) {
    root = root.left;
  }
  return root.value;
};

let find_successor = function(root, d) {
  if (!root) {
    return null;
  }

  while (root) {
    if (root.value < d) {
      root = root.right;
    } else if (root.value > d) {
      root = root.left;
    } else {
      if (root.right) {
        return left_min(root.right);
      } else {
        return get_successor(root);
      }
    }
  }

  return null;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Inorder Successor BST Parent Pointer");
console.log("---------------------------------------");

let node8 = { value: 8, parent: null };
let node1 = { value: 1 };
let node3 = { value: 3 };
let node6 = { value: 6 };
let node4 = { value: 4 };
let node7 = { value: 7 };
let node10 = { value: 10 };
let node14 = { value: 14 };
let node13 = { value: 13 };
node8.left = node3;
node8.right = node10;

node3.parent = node8;
node3.left = node1;
node3.right = node6;

node1.parent = node3;

node6.parent = node3;
node6.left = node4;
node6.right = node7;

node4.parent = node6;
node7.parent = node6;

node10.parent = node8;
node10.right = node14;

node14.parent = node10;
node14.left = node13;

node13.parent = node14;

console.log("node successor of 10: " + find_successor(node8, 10));
console.log("node successor of 8: " + find_successor(node8, 8));
console.log("node successor of 3: " + find_successor(node8, 3));
console.log("node successor of 6: " + find_successor(node8, 6));
console.log("node successor of 1: " + find_successor(node8, 1));
console.log("node successor of 4: " + find_successor(node8, 4));
console.log("node successor of 7: " + find_successor(node8, 7));
console.log("node successor of 14: " + find_successor(node8, 14));
console.log("node successor of 13: " + find_successor(node8, 13));
