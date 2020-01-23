let are_identical = function(root1, root2) {
  if (!root1 && !root2) {
    return true;
  }
  if (!root1 || !root2) {
    return false;
  }

  let stack1 = [root1];
  let stack2 = [root2];
  while (stack1.length > 0 && stack2.length > 0) {
    const current1 = stack1.pop();
    const current2 = stack2.pop();
    if (current1 !== current2) {
      return false;
    } else if (current1) {
      stack1.push(current1.left);
      stack1.push(current1.right);
      stack2.push(current2.left);
      stack2.push(current2.right);
    }
  }
  return stack1.length === stack2.length;
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Check Identical Trees");
console.log("---------------------------------------");
let root = {
  value: 8,
  left: { value: 3, right: { value: 6, left: { value: 4 }, right: { value: 7 } }, left: { value: 1 } },
  right: { value: 10, right: { value: 14, left: { value: 13 } } }
};
let root2 = {
  value: 8,
  left: { value: 3, right: { value: 6, left: { value: 4 } }, left: { value: 1 } },
  right: { value: 10, right: { value: 14, left: { value: 13 } } }
};
console.log("");
console.log("are_identical(root, root) -->", are_identical(root, root));
console.log("are_identical(root, null) -->", are_identical(root, null));
console.log("are_identical(null, null) -->", are_identical(null, null));
console.log("are_identical(root, root2) -->", are_identical(root, root2));
console.log("++++++ Test Done Successfully ++++++");
