let merge_List = function(oddListHead, evenListHead) {
  if (!evenListHead) {
    return oddListHead;
  }
  let mergeHead = oddListHead;
  while (oddListHead.next && evenListHead) {
    let nextEvenListNode = evenListHead.next;
    evenListHead.next = oddListHead.next;
    oddListHead.next = evenListHead;
    oddListHead = evenListHead.next;
    evenListHead = nextEvenListNode;
  }
  return mergeHead;
};

let reverse_even_nodes = function(head) {
  if (!head) {
    return head;
  }

  let evenListHead = null;
  let current = head;
  let oddListHead = current;
  while (current.next) {
    let evenNode = current.next;
    current.next = current.next.next;
    evenNode.next = evenListHead;
    evenListHead = evenNode;
    current = current.next;
  }
  return merge_List(oddListHead, evenListHead);
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Reverse Even Nodes");
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
let head_before_reverse = create_linked_list([1, 2, 3, 4, 5]);
let head_after_reverse = create_linked_list([1, 4, 3, 2, 5]);

let temp_head = head_before_reverse;
console.log("before reverse of even nodes");
while (temp_head) {
  console.log(temp_head.data);
  temp_head = temp_head.next;
}
let result = reverse_even_nodes(head_before_reverse);

temp_head = result;
console.log("after reverse of even nodes");
while (temp_head) {
  console.log(temp_head.data);
  temp_head = temp_head.next;
}
