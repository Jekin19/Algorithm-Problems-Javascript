let convertNaryToBinary = function(root) {
  if (!root) {
    return root;
  }

  let stack = [root];
  stack.push("left");
  let rightOrLeft = "left";
  while (stack.length > 0) {
    const current = stack.shift();
    if (current.childrens) {
      let temp = current;
      current.childrens.forEach(curr => {
        temp[rightOrLeft] = curr;
        temp = temp[rightOrLeft];
        stack.push(curr);
      });
      delete current.childrens;
    }

    if (stack[0] === "left" || stack[0] === "right") {
      rightOrLeft = stack[0] === "left" ? "right" : "left";
      stack.push(rightOrLeft);
      stack.shift();
    }
  }
  return root;
};

let convertBinaryToNary = function(root) {
  if (!root) {
    return root;
  }

  let stack = [root];
  while (stack.length > 0) {
    const current = stack.shift();
    const childrens = [];
    let rightOrLeft = current.left ? "left" : "right";
    let temp = current[rightOrLeft];
    while (temp) {
      let nextRightOrLeft = temp[rightOrLeft];
      delete temp[rightOrLeft];
      stack.push(temp);
      childrens.push(temp);
      temp = nextRightOrLeft;
    }

    if (childrens.length > 0) {
      current.childrens = childrens;
    }
    delete current[rightOrLeft];
  }
  return root;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("N-ary to Binary");
console.log("---------------------------------------");

let node1 = { value: 1 };
let node2 = { value: 2 };
let node3 = { value: 3 };
let node5 = { value: 5 };
let node6 = { value: 6 };
let node7 = { value: 7 };
let node4 = { value: 4 };
node6.childrens = [node7];
node4.childrens = [node5, node6];
node1.childrens = [node2, node3, node4];
console.log(JSON.stringify(convertNaryToBinary(node1)));
console.log(JSON.stringify(convertBinaryToNary(convertNaryToBinary(node1))));
