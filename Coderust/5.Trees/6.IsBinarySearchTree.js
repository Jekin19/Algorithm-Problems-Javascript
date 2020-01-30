// Inorder Traversal
let is_bst = function(root) {
  if (!root) {
    return false;
  }

  let stack = [root];
  let previousElement = Number.MIN_SAFE_INTEGER;
  while (stack.length > 0) {
    const currentElement = stack[stack.length - 1];
    if (currentElement.left) {
      stack.push(currentElement.left);
      currentElement.left = null;
    } else {
      if (currentElement.value <= previousElement) {
        return false;
      }
      previousElement = currentElement.value;
      stack.pop();
      if (currentElement.right) {
        stack.push(currentElement.right);
        currentElement.right = null;
      }
    }
  }
  return true;
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Is Binary Search Tree Solution 2");
console.log("---------------------------------------");
let root = {
  value: 8,
  left: { value: 3, right: { value: 6, left: { value: 4 }, right: { value: 7 } }, left: { value: 1 } },
  right: { value: 10, right: { value: 14, left: { value: 13 } } }
};
console.log(is_bst(root));

let root2 = {
  value: 8,
  left: { value: 3, right: { value: 6, left: { value: 45 }, right: { value: 7 } }, left: { value: 1 } },
  right: { value: 10, right: { value: 14, left: { value: 13 } } }
};
console.log(is_bst(root2));
