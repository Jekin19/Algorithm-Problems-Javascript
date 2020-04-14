// https://leetcode.com/problems/sort-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head) {
    return head;
  }
  let newHead = head;
  head = head.next;
  newHead.next = null;
  while (head) {
    let sortedHead = newHead;
    let previous = null;
    while (sortedHead && sortedHead.val <= head.val) {
      previous = sortedHead;
      sortedHead = sortedHead.next;
    }

    let temp = head.next;
    //first
    if (!previous) {
      head.next = newHead;
      newHead = head;
    } else if (!sortedHead) {
      // last
      head.next = null;
      previous.next = head;
    } else {
      // middle
      previous.next = head;
      head.next = sortedHead;
    }
    head = temp;
  }
  return newHead;
};

let create_linked_list = function (arr = []) {
  let result = { val: arr[0] };
  const returnResult = result;
  for (let i = 1; i < arr.length; i++) {
    result.next = { val: arr[i] };
    result = result.next;
  }
  result.next = null;
  return returnResult;
};

let head_with_dup = create_linked_list([3, 1, 3, 4, 3, 0]);

console.log("Before sorting: ");
console.log(JSON.stringify(head_with_dup));

console.log("After sorting: ");
console.log(JSON.stringify(sortList(head_with_dup)));
