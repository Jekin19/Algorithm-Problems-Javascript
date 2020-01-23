let mirror_tree = function(root) {
  if (!root) {
    return root;
  }
  let stack = [root];
  while (stack.length > 0) {
    const currentNode = stack.shift();
    let temp = currentNode.left;
    currentNode.left = currentNode.right;
    currentNode.right = temp;
    if (currentNode.right) {
      stack.push(currentNode.right);
    }
    if (currentNode.left) {
      stack.push(currentNode.left);
    }
  }
  return root;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Mirror Tree");
console.log("---------------------------------------");

let root = {
  value: 8,
  left: { value: 3, right: { value: 6, left: { value: 4 }, right: { value: 7 } }, left: { value: 1 } },
  right: { value: 10, right: { value: 14, left: { value: 13 } } }
};

console.log(JSON.stringify(mirror_tree(root)));
