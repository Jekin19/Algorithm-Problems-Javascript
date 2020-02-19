let insertion_sort = function(head) {
  if (!head) {
    return head;
  }

  let sortedArrayHead = { data: head.data };
  head = head.next;
  while (head) {
    let tempSortedHead = sortedArrayHead;
    let previous = null;
    while (tempSortedHead && head.data >= tempSortedHead.data) {
      previous = tempSortedHead;
      tempSortedHead = tempSortedHead.next;
    }
    let newHead = { data: head.data };
    // If last
    if (!tempSortedHead) {
      previous.next = newHead;
    }
    // If First
    else if (previous === null) {
      newHead.next = tempSortedHead;
      sortedArrayHead = newHead;
    }
    // In Middle
    else {
      newHead.next = previous.next;
      previous.next = newHead;
    }
    head = head.next;
  }
  return sortedArrayHead;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Insertion Sort");
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
let head_before_sort = create_linked_list([7, 4, 2, 5, 1, 9]);

let temp_head = head_before_sort;
console.log("before sort");
let temp = [];
while (temp_head) {
  temp.push(temp_head.data);
  temp_head = temp_head.next;
}
console.log(temp.join(" ==> "));

head_before_sort = insertion_sort(head_before_sort);
temp_head = head_before_sort;
console.log("after insertion sort");

temp = [];
while (temp_head) {
  temp.push(temp_head.data);
  temp_head = temp_head.next;
}
console.log(temp.join(" ==> "));
