// https://leetcode.com/problems/palindrome-linked-list/

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

let getLength = function(head) {
  let count = 0;
  while (head) {
    head = head.next;
    count++;
  }
  return count;
};

var isPalindrome = function(head) {
  let currentHead = head;
  let length = getLength(currentHead);

  let mid = length % 2 === 0 ? Math.floor(length / 2) : Math.floor(length / 2) + 1;
  let midHead = head;
  while (mid > 0) {
    midHead = midHead.next;
    mid--;
  }
  let reverseHead = null;
  while (midHead) {
    let temp = midHead.next;
    midHead.next = reverseHead;
    reverseHead = midHead;
    midHead = temp;
  }

  while (reverseHead && head) {
    if (reverseHead.val !== head.val) {
      return false;
    }
    reverseHead = reverseHead.next;
    head = head.next;
  }

  return true;
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

let linked_List = create_linked_list([1, 2, 3, 4, 2, 1]);
console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Linked List cycle");
console.log("---------------------------------------");

console.log("Input: ");
console.log(JSON.stringify(linked_List));

console.log(isPalindrome(linked_List));
