let convert_to_linked_list = function(root) {
  if (!root) {
    return null;
  }

  let stack = [root];
  let head = null;
  let previous = null;
  while (stack.length > 0) {
    const currentNode = stack[stack.length - 1];
    if (currentNode.left) {
      stack.push(currentNode.left);
      currentNode.left = null;
    } else {
      stack.pop();
      if (previous) {
        previous.right = currentNode;
        currentNode.left = previous;
        previous = currentNode;
      } else {
        previous = currentNode;
        head = previous;
      }
      if (currentNode.right) {
        stack.push(currentNode.right);
        currentNode.right = null;
      }
    }
  }
  return head;
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Convert to double linked list");
console.log("---------------------------------------");

let root = {
  value: 8,
  left: { value: 3, right: { value: 6, left: { value: 4 }, right: { value: 7 } }, left: { value: 1 } },
  right: { value: 10, right: { value: 14, left: { value: 13 } } }
};
let result = convert_to_linked_list(root);
while (result.right) {
  result = result.right;
  console.log(result.value);
}
console.log(result.value);
while (result.left) {
  result = result.left;
  console.log(result.value);
}
console.log(result.value);
