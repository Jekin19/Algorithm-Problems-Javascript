// https://leetcode.com/problems/reverse-linked-list/

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
var reverseList = function(head) {
  let previous = null;
  while (head) {
    let temp = head.next;
    head.next = previous;
    previous = head;
    head = temp;
  }
  return previous;
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
console.log("Reverse Linked Lists Iterative");
console.log("---------------------------------------");

console.log("Before Reverse: ");
console.log(JSON.stringify(linked_List));

console.log("After Reverse: ");
let head_reverse = reverseList(linked_List);
console.log(JSON.stringify(head_reverse));
