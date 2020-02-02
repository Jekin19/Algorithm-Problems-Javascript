// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let forwardHead = head;
  while (n > 0 && forwardHead) {
    forwardHead = forwardHead.next;
    n--;
  }

  if (forwardHead) {
    let currentHead = head;
    while (forwardHead.next) {
      forwardHead = forwardHead.next;
      currentHead = currentHead.next;
    }

    if (currentHead.next) {
      currentHead.next = currentHead.next.next;
    }
  } else {
    head = head.next;
  }
  return head;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Nth from Last");
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
let head_for_nth_from_last = create_linked_list([7, 4, 2, 5, 1, 9]);
console.log(JSON.stringify(removeNthFromEnd(head_for_nth_from_last, 0)));
head_for_nth_from_last = create_linked_list([7, 4, 2, 5, 1, 9]);
console.log(JSON.stringify(removeNthFromEnd(head_for_nth_from_last, 1)));
head_for_nth_from_last = create_linked_list([7, 4, 2, 5, 1, 9]);
console.log(JSON.stringify(removeNthFromEnd(head_for_nth_from_last, 2)));
head_for_nth_from_last = create_linked_list([7, 4, 2, 5, 1, 9]);
console.log(JSON.stringify(removeNthFromEnd(head_for_nth_from_last, 3)));
head_for_nth_from_last = create_linked_list([7, 4, 2, 5, 1, 9]);
console.log(JSON.stringify(removeNthFromEnd(head_for_nth_from_last, 4)));
head_for_nth_from_last = create_linked_list([7, 4, 2, 5, 1, 9]);
console.log(JSON.stringify(removeNthFromEnd(head_for_nth_from_last, 5)));
head_for_nth_from_last = create_linked_list([7, 4, 2, 5, 1, 9]);
console.log(JSON.stringify(removeNthFromEnd(head_for_nth_from_last, 6)));
