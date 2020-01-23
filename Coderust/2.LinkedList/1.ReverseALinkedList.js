let reverse = function(head) {
  if (!head) {
    throw "Invalid Input";
  }

  // 1
  let current = head.next;
  // 0
  let reversedHead = head;
  // 0 ==> null
  reversedHead.next = null;

  // 1
  while (current) {
    // 2
    let temp = current.next;

    //  1 ==> 0
    current.next = reversedHead;

    // reverseHead = 1
    reversedHead = current;

    // current = 2
    current = temp;
  }
  return reversedHead;
};

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

let linked_List = create_linked_list([0, 1, 2, 3, 4, 5, 6]);
console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Reverse Linked Lists Iterative");
console.log("---------------------------------------");

console.log("Before Reverse: ");
console.log(JSON.stringify(linked_List));

console.log("After Reverse: ");
let head_reverse = reverse(linked_List);
console.log(JSON.stringify(head_reverse));
