// Not using 2 queues
let level_order_traversal = function(root) {
  var result = [];
  if (!root) {
    return result;
  }
  let queue = [root];
  queue.push(null);
  let currentResult = [];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }

    currentResult.push(node.value);
    if (queue[0] === null) {
      queue.shift();
      result.push(currentResult);
      currentResult = [];
      if (queue.length > 0) {
        queue.push(null);
      }
    }
  }
  //TODO: Write - Your - Code
  return result;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Level Order Traversal.");
console.log("---------------------------------------");
let root = {
  value: 8,
  left: { value: 3, right: { value: 6, left: { value: 4 }, right: { value: 7 } }, left: { value: 1 } },
  right: { value: 10, right: { value: 14, left: { value: 13 } } }
};
console.log(level_order_traversal(root));
