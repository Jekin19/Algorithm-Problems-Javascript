let remove_duplicates = function(head) {
  if (!head) {
    return head;
  }

  // Let's track existing values.
  let dup_set = new Set();
  dup_set.add(head.data);
  let curr = head;

  while (curr.next) {
    if (dup_set.has(curr.next.data)) {
      // Duplicate node found. Let's remove it from the list.
      curr.next = curr.next.next;
    } else {
      // Element not found in map, let's add it.
      dup_set.add(curr.next.data);
      curr = curr.next;
    }
  }

  return head;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Remove Duplicates form LinkList");
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

let head_with_dup = create_linked_list([3, 1, 3, 4, 3, 0]);

console.log("Before removing duplicates: ");
console.log(JSON.stringify(head_with_dup));

console.log("After removing duplicates: ");
let head_without_dup = remove_duplicates(head_with_dup);
console.log(JSON.stringify(head_without_dup));
