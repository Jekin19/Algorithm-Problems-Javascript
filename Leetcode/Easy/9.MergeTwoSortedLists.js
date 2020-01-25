// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  let mergeHead;
  if (l1.val < l2.val) {
    mergeHead = l1;
    l1 = l1.next;
  } else {
    mergeHead = l2;
    l2 = l2.next;
  }

  let result = mergeHead;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      mergeHead.next = l1;
      l1 = l1.next;
    } else {
      mergeHead.next = l2;
      l2 = l2.next;
    }
    mergeHead = mergeHead.next;
  }

  if (l1) {
    mergeHead.next = l1;
  } else if (l2) {
    mergeHead.next = l2;
  }

  return result;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Merge Two Sorted Linked list");
console.log("---------------------------------------");

let create_linked_list = function(arr = []) {
  let result = { val: arr[0] };
  const returnResult = result;
  for (let i = 1; i < arr.length; i++) {
    result.next = { val: arr[i] };
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
  console.log(temp_head.val);
  temp_head = temp_head.next;
}

temp_head = merge_sort_node_2;
console.log("2nd Linked List");
while (temp_head) {
  console.log(temp_head.val);
  temp_head = temp_head.next;
}
let result = mergeTwoLists(merge_sort_node_1, merge_sort_node_2);

temp_head = result;
console.log("Result Merge Sorted List");
while (temp_head) {
  console.log(temp_head.val);
  temp_head = temp_head.next;
}
