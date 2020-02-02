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
var addTwoNumbers = function(l1, l2) {
  let carryForward = 0;
  let resultNode;
  let previousNode;
  while (l1 || l2 || carryForward) {
    const value1 = l1 ? l1.val : 0;
    const value2 = l2 ? l2.val : 0;
    const sum = Math.floor(value1 + value2 + carryForward);
    carryForward = sum > 9 ? 1 : 0;
    const node = { val: Math.floor(sum % 10) };
    if (!resultNode) {
      resultNode = node;
      previousNode = node;
    } else {
      previousNode.next = node;
      previousNode = previousNode.next;
    }
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  return reverList(resultNode);
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

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Add Two Numbers");
console.log("---------------------------------------");

let head = create_linked_list([2, 4, 3]);
let head2 = create_linked_list([5, 6, 6]);
console.log(JSON.stringify(addTwoNumbers(head, head2)));
