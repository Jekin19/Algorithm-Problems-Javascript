let inorder_iterative = function(root) {
  let result = "";
  if (!root) {
    return result;
  }

  let stack = [root];
  while (stack.length > 0) {
    const topElement = stack[stack.length - 1];
    if (topElement.left) {
      stack.push(topElement.left);
      topElement.left = null;
    } else {
      result += stack.pop().value + ",";
      if (topElement.right) {
        stack.push(topElement.right);
        topElement.right = null;
      }
    }
  }
  //TODO: Write - Your - Code
  return result;
};

let root = {
  value: 8,
  left: { value: 3, right: { value: 6, left: { value: 4 }, right: { value: 7 } }, left: { value: 1 } },
  right: { value: 10, right: { value: 14, left: { value: 13 } } }
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Inorder Iterator");
console.log("---------------------------------------");
console.log("Inorder Iterator = " + inorder_iterative(root));
console.log("++++++ Test Done Successfully ++++++");
