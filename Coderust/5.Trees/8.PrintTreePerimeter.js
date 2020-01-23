let display_left_tree_perimeter = function(root) {
  let result = [];
  while (root) {
    if (!root.left && !root.right) {
      break;
    }
    result.push(root.value);
    if (root.left) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  console.log(result);
};

let display_right_tree_perimeter = function(root) {
  let result = [];
  while (root) {
    if (!root.left && !root.right) {
      break;
    }
    result.push(root.value);
    if (root.right) {
      root = root.right;
    } else {
      root = root.left;
    }
  }
  console.log(result.reverse());
};

let display_bottom_tree_perimeter = function(root) {
  let result = [];
  let stack = [root];
  while (stack.length > 0) {
    const currentNode = stack.shift();
    if (!currentNode.left && !currentNode.right) {
      result.push(currentNode.value);
      continue;
    }
    if (currentNode.left) {
      stack.push(currentNode.left);
    }
    if (currentNode.right) {
      stack.push(currentNode.right);
    }
  }
  console.log(result);
};

let display_tree_perimeter = function(root) {
  if (!root) {
    return;
  }
  if (!root.left && !root.right) {
    console.log(root.value);
    return;
  }
  if (root.left) {
    display_left_tree_perimeter(root);
  }
  if (root.right) {
    display_right_tree_perimeter(root.right);
  }
  display_bottom_tree_perimeter(root);
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Print Perimeter");
console.log("---------------------------------------");
let root = {
  value: 8,
  left: { value: 3, right: { value: 6, left: { value: 4 }, right: { value: 7 } }, left: { value: 1 } },
  right: { value: 10, right: { value: 14, left: { value: 13 } } }
};
display_tree_perimeter(root);
