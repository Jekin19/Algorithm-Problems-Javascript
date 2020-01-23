let swap_nth_node = function(head, n) {
  if (!head || n <= 1) {
    return head;
  }

  let previous = head;
  while (n - 1 > 1 && previous) {
    previous = previous.next;
    n--;
  }

  if (!previous) {
    return null;
  }

  let current = previous.next;
  if (current) {
    let headNext = head.next;
    head.next = current.next;
    previous.next = head;
    current.next = headNext;
    return current;
  } else {
    return head;
  }
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Swap nth node");
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
let head_for_swap = create_linked_list([7, 4, 2, 5, 1, 9]);

console.log("Before Swapping");
let temp_head_for_swap = head_for_swap;
while (temp_head_for_swap) {
  console.log(temp_head_for_swap.data);
  temp_head_for_swap = temp_head_for_swap.next;
}

head_for_swap = swap_nth_node(head_for_swap, 4);

console.log("After Swapping head with 4th node.");
temp_head_for_swap = head_for_swap;
while (temp_head_for_swap) {
  console.log(temp_head_for_swap.data);
  temp_head_for_swap = temp_head_for_swap.next;
}
