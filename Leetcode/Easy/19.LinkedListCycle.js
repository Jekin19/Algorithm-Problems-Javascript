// https://leetcode.com/problems/linked-list-cycle

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) {
    return false;
  }

  let fastPointer = head.next;
  while (fastPointer && fastPointer.next) {
    if (fastPointer === head) {
      return true;
    }
    fastPointer = fastPointer.next.next;
    head = head.next;
  }
  return false;
};

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

let linked_List = create_linked_list([0, 1, 2, 3, 4, 5, 6]);
console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Linked List cycle");
console.log("---------------------------------------");

console.log("Input: ");
console.log(JSON.stringify(linked_List));

console.log(hasCycle(linked_List));
