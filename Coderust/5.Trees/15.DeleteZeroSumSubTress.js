// let delete_zero_sum_subtree = function(root) {
//   if (!root) {
//     return root;
//   }

//   let stack = [root];
//   let sum = 0;
//   let previous = null;
//   while (stack.length > 0) {
//     let node = stack[stack.length - 1];
//     if (node.left) {
//       stack.push(node.left);
//       node.left = null;
//     } else if (node.right) {
//       stack.push(node.right);
//       node.right = null;
//     } else {
//       stack.pop();
//       if (!sum) {
//         sum = node.value;
//       } else {
//         sum += node.value;
//       }
//     }
//   }
//   return root;
// };

let delete_zero_sum_subtree_rec = function(root) {
  if (!root) {
    return 0;
  }

  let sum_left = delete_zero_sum_subtree_rec(root.left);
  let sum_right = delete_zero_sum_subtree_rec(root.right);

  if (sum_left === 0) {
    root.left = null;
  }

  if (sum_right === 0) {
    root.right = null;
  }

  return root.data + sum_left + sum_right;
};

let delete_zero_sum_subtree = function(root) {
  if (root) {
    let sum = delete_zero_sum_subtree_rec(root);
    if (sum === 0) {
      root = null;
    }
  }
  return root;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Delete Zero Sum Sub Trees");
console.log("---------------------------------------");
let root = {
  value: 8,
  left: { value: 3, right: { value: 6, left: { value: -4 }, right: { value: -2 } }, left: { value: 1 } },
  right: { value: 10, right: { value: 14, left: { value: -24 } } }
};
console.log(JSON.stringify(delete_zero_sum_subtree(root)));
