let find_nth_highest_in_bst = function(node, n) {
  if (!node) {
    return null;
  }

  let stack = [node];
  let nodeCount = 1;
  while (stack.length > 0) {
    const currentNode = stack[stack.length - 1];
    if (currentNode.right) {
      stack.push(currentNode.right);
      currentNode.right = null;
    } else {
      if (nodeCount === n) {
        return currentNode.value;
      }
      nodeCount++;
      stack.pop();
      if (currentNode.left) {
        stack.push(currentNode.left);
        currentNode.left = null;
      }
    }
  }
  return null;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Nth Highest in BST");
console.log("---------------------------------------");
let root = {
  value: 8,
  left: { value: 3, right: { value: 6, left: { value: 4 }, right: { value: 7 } }, left: { value: 1 } },
  right: { value: 10, right: { value: 14, left: { value: 13 } } }
};

// console.log(find_nth_highest_in_bst(root, 1));
// console.log(find_nth_highest_in_bst(root, 2));
// console.log(find_nth_highest_in_bst(root, 3));
// console.log(find_nth_highest_in_bst(root, 4));
// console.log(find_nth_highest_in_bst(root, 5));
// console.log(find_nth_highest_in_bst(root, 6));
// console.log(find_nth_highest_in_bst(root, 7));
console.log(find_nth_highest_in_bst(root, 8));
// console.log(find_nth_highest_in_bst(root, 9));
// console.log(find_nth_highest_in_bst(root, 10));
