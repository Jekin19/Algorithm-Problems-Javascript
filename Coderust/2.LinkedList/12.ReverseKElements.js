let reverse_k_nodes = function(head, k) {
  if (!head) {
    return head;
  }
  if (k <= 1) {
    return head;
  }

  let reversedHead = null; // returned head
  let previousTail = null;

  while (head) {
    let currentHead = null;
    let currentTail = head;

    let n = k;
    while (head && n > 0) {
      // reverse
      let temp = head.next;
      head.next = currentHead;
      currentHead = head;
      head = temp;
      n--;
    }

    if (!reversedHead) {
      reversedHead = currentHead;
    }

    if (previousTail) {
      previousTail.next = currentHead;
    }

    previousTail = currentTail;
  }

  return reversedHead;
};

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

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Reverse K nodes");
console.log("---------------------------------------");

let head_before_reverse_k_nodes = create_linked_list([1, 2, 3, 4, 5, 6, 7]);

let temp_head = head_before_reverse_k_nodes;
console.log("before reverse");
while (temp_head) {
  console.log(temp_head.data);
  temp_head = temp_head.next;
}
let result = reverse_k_nodes(head_before_reverse_k_nodes, 3);

temp_head = result;
console.log("after reverse");
while (temp_head) {
  console.log(temp_head.data);
  temp_head = temp_head.next;
}
