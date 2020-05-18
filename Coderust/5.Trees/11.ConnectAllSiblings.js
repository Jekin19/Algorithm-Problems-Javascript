let populate_sibling_pointers = function (root) {
  if (!root) {
    return root;
  }
  let stack = [root, null];
  let previous = null;
  while (stack.length > 0) {
    const node = stack.shift();

    if (previous === null) {
      previous = node;
    } else {
      previous.next = node;
      previous = node;
    }
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
    if (stack[0] === null) {
      stack.shift();
      if (stack.length > 0) {
        stack.push(null);
      } else {
        break;
      }
    }
  }
  return root;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Connect All Siblings");
console.log("---------------------------------------");
let root = {
  value: 8,
  left: { value: 3, right: { value: 6, left: { value: 4 }, right: { value: 7 } }, left: { value: 1 } },
  right: { value: 10, right: { value: 14, left: { value: 13 } } },
};
let firstNode = populate_sibling_pointers(root);
let result = [];
while (firstNode) {
  result.push(firstNode.value);
  firstNode = firstNode.next;
}
console.log(result.join(" ==> "));
