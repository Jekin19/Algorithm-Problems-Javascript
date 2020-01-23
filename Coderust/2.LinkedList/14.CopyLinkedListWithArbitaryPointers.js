let deep_copy_arbitrary_pointer_opt = function(head) {
  if (!head) {
    return null;
  }

  // create copy and insert new nodes next to originial
  let newHead = head;
  while (newHead) {
    let newNode = { data: newHead.data };
    newNode.next = newHead.next;
    newHead.next = newNode;
    newHead = newNode.next;
  }

  // add arbitary pointers in new nodes
  let current = head;
  while (current) {
    if (current.arbitrary) {
      // olds next' (new) arbitary = old's arbitary's next that is the new node copy
      current.next.arbitrary = current.arbitrary.next;
    }
    current = current.next.next;
  }

  // seperate new and old list
  head = head.next;
  let finalHead = head;
  while (finalHead.next) {
    finalHead.next = finalHead.next.next;
    finalHead = finalHead.next;
  }
  return head;
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
      v[i].arbitrary = v[j];
    }
  }
  return head;
};

let print_with_arb_pointers = function(head) {
  let printed_result = "";
  while (head) {
    let temp = "";
    if (head.arbitrary) {
      temp += head.arbitrary.data;
    }
    printed_result += " (" + temp + "), ";
    head = head.next;
  }
  console.log(printed_result);
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Deep Copy Arbitrary Pointers");
console.log("---------------------------------------");

let head = create_linked_list_with_arb_pointers();
print_with_arb_pointers(head);

let head2 = deep_copy_arbitrary_pointer_opt(head);
print_with_arb_pointers(head2);
