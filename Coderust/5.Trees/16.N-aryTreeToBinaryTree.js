let convertNaryToBinary = function (root) {
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
      current.childrens.forEach((curr) => {
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

let convertBinaryToNary = function (root) {
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

let convertNaryToBinary_2 = function (root) {
  if (!root) {
    return root;
  }

  let stack = [root];
  let direction = "left";
  while (stack.length > 0) {
    let length = stack.length;
    while (length > 0) {
      let node = stack.shift();
      if (node.childrens) {
        let temp = node;
        node.childrens.forEach((child) => {
          temp[direction] = child;
          stack.push(child);
          temp = temp[direction];
        });
      }
      length--;
      delete node.childrens;
    }
    direction = direction === "left" ? "right" : "left";
  }

  return root;
};

let convertBinaryToNary_2 = function (root) {
  if (!root) {
    return root;
  }

  let stack = [root];
  let direction = "left";
  while (stack.length > 0) {
    let length = stack.length;
    while (length > 0) {
      const node = stack.shift();
      let temp = node[direction];
      delete node[direction];
      const childrens = [];
      while (temp) {
        let next = temp[direction];
        delete temp[direction];
        childrens.push(temp);
        stack.push(temp);
        temp = next;
      }
      if (childrens.length > 0) {
        node.childrens = childrens;
      }
      length--;
    }
    direction = direction === "left" ? "right" : "left";
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
