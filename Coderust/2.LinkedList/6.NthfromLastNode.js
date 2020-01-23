let find_nth_from_last = function(head, n) {
  if (!head) {
    return head;
  }
  let tail = head;
  let i = 0;
  while (i < n && tail) {
    tail = tail.next;
    i++;
  }
  if (!tail) {
    return null;
  }
  while (tail) {
    head = head.next;
    tail = tail.next;
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

console.log(find_nth_from_last(head_for_nth_from_last, 2));
console.log(find_nth_from_last(head_for_nth_from_last, 1));
console.log(find_nth_from_last(head_for_nth_from_last, 11));
