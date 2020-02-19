// let delete_node = function(head, key) {
//   if (!head) {
//     return head;
//   }
//   let current = head;
//   let previous = null;
//   while (current) {
//     if (current.data === key) {
//       // if key is the 1st node in linked list
//       if (previous === null) {
//         head = head.next;
//         current = head;
//       } else {
//         // skip the node, make current = next node and point previous to new current.
//         current = current.next;
//         previous.next = current;
//       }
//     } else {
//       // continue to next node, current becomes next, previous becomes current.
//       previous = current;
//       current = current.next;
//     }
//   }

//   return head;
// };

let delete_node = function(head, key) {
  if (!head) {
    return head;
  }

  while (head && head.data === key) {
    head = head.next;
  }

  let current = head;
  while (current && current.next) {
    if (current.next.data === key) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  return head;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Delete Key from LinkList");
console.log("---------------------------------------");

let create_linked_list = function(arr = []) {
  let result = { data: arr[0] };
  const returnResult = result;
  for (let i = 1; i < arr.length; i++) {
    result.next = { data: arr[i] };
    result = result.next;
  }
  result.next = null;
  return returnResult;
};
let head_before_delete = create_linked_list([0, 1, 2, 3, 4, 5, 10, 9]);

let temp_head = head_before_delete;
console.log("before delete key");
while (temp_head) {
  console.log(temp_head.data);
  temp_head = temp_head.next;
}

head_before_delete = delete_node(head_before_delete, 5);
temp_head = head_before_delete;
console.log("after delete key number 5");
while (temp_head) {
  console.log(temp_head.data);
  temp_head = temp_head.next;
}
head_before_delete = delete_node(head_before_delete, 10);
temp_head = head_before_delete;
console.log("after delete key number 10");
while (temp_head) {
  console.log(temp_head.data);
  temp_head = temp_head.next;
}
head_before_delete = delete_node(head_before_delete, 0);
temp_head = head_before_delete;
console.log("after delete key number 0");
while (temp_head) {
  console.log(temp_head.data);
  temp_head = temp_head.next;
}
