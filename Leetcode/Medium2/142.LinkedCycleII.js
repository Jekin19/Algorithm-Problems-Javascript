// https://leetcode.com/problems/linked-list-cycle-ii/

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
var detectCycle = function(head) {
  let set = new Set();
  while (head) {
    if (set.has(head)) {
      return head;
    }
    set.add(head);
    head = head.next;
  }
  return null;
};

var detectCycle2 = function(head) {
  let runner = head;
  let walker = head;
  while (runner && runner.next) {
    runner = runner.next.next;
    walker = walker.next;
    if (runner === walker) {
      let seeker = head;
      while (seeker !== walker) {
        walker = walker.next;
        seeker = seeker.next;
      }
      return walker;
    }
  }
  return null;
};

let list2_head_3 = {
  data: 13
};
let list2_head_2 = {
  data: 12,
  next: list2_head_3
};
let list2_head_1 = {
  data: 11,
  next: list2_head_2
};
let list2_head_4 = {
  data: 14,
  next: list2_head_2
};
list2_head_3.next = list2_head_4;

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Linked list cycle");
console.log("---------------------------------------");

console.log(JSON.stringify(detectCycle2(list2_head_1)));
