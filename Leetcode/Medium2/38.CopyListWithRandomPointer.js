// https://leetcode.com/problems/copy-list-with-random-pointer/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) {
    return null;
  }

  // create copy and insert new nodes next to originial
  let newHead = head;
  while (newHead) {
    let newNode = { val: newHead.val, clone: true };
    newNode.next = newHead.next;
    newHead.next = newNode;
    newHead = newNode.next;
  }

  // add arbitary pointers in new nodes
  let current = head;
  while (current) {
    if (current.random) {
      // olds next' (new) arbitary = old's arbitary's next that is the new node copy
      current.next.random = current.random.next;
    }
    current = current.next.next;
  }

  // seperate new and old list
  let originialHead = head;
  let newhead = head.next;
  let finalHead = newhead;
  while (finalHead.next) {
    originialHead.next = originialHead.next.next;
    originialHead = originialHead.next;
    finalHead.next = finalHead.next.next;
    finalHead = finalHead.next;
  }
  originialHead.next = null;

  return newhead;
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

let create_linked_list_with_arb_pointers = function() {
  let head = create_linked_list([1, 5, 8, 16, 21, 40]);
  let v = [];
  let temp = head;
  while (temp) {
    v.push(temp);
    temp = temp.next;
  }

  for (let i = 0; i < v.length; i++) {
    let j = Math.floor(Math.random() * (v.length - 1));
    let p = Math.floor(Math.random() * 100);
    if (p < 75) {
      v[i].random = v[j];
    }
  }
  return head;
};

let print_with_arb_pointers = function(head) {
  let printed_result = "";
  while (head) {
    let temp = "";
    if (head.random) {
      temp += head.random.val;
    }
    printed_result += " (" + temp + "), ";
    head = head.next;
  }
  console.log(printed_result);
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Deep Copy List with Random Pointers");
console.log("---------------------------------------");

let head = create_linked_list_with_arb_pointers();
print_with_arb_pointers(head);

let head2 = copyRandomList(head);
print_with_arb_pointers(head2);
