let merge_sorted = function(head1, head2) {
  if (!head1) {
    return head2;
  }

  if (!head2) {
    return head1;
  }

  let mergeHead = null;
  if (head1.data > head2.data) {
    mergeHead = head2;
    head2 = head2.next;
  } else {
    mergeHead = head1;
    head1 = head1.next;
  }
  let resultHead = mergeHead;
  while (head1 && head2) {
    if (head1.data > head2.data) {
      mergeHead.next = head2;
      head2 = head2.next;
    } else {
      mergeHead.next = head1;
      head1 = head1.next;
    }
    mergeHead = mergeHead.next;
  }

  if (head1) {
    mergeHead.next = head1;
  }

  if (head2) {
    mergeHead.next = head2;
  }

  return resultHead;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Merge Two Sorted Linked list");
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
let merge_sort_node_1 = create_linked_list([1, 3, 5, 6]);
let merge_sort_node_2 = create_linked_list([2, 4, 6, 20, 34]);
let merged_sort = create_linked_list([1, 2, 3, 4, 5, 6, 6, 20, 34]);

let temp_head = merge_sort_node_1;
console.log("1st Linked List");
while (temp_head) {
  console.log(temp_head.data);
  temp_head = temp_head.next;
}

temp_head = merge_sort_node_2;
console.log("2nd Linked List");
while (temp_head) {
  console.log(temp_head.data);
  temp_head = temp_head.next;
}
let result = merge_sorted(merge_sort_node_1, merge_sort_node_2);

temp_head = result;
console.log("Result Merge Sorted List");
while (temp_head) {
  console.log(temp_head.data);
  temp_head = temp_head.next;
}
