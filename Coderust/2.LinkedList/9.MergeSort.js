function getLength(head) {
  let current = head;
  let length = 0;
  while (current) {
    current = current.next;
    length++;
  }
  return length;
}

function split(head, middle) {
  let leftHead = head;
  let rightHead = null;
  let current = leftHead;
  while (middle > 1) {
    previous = current;
    current = current.next;
    middle--;
  }
  rightHead = current.next;
  current.next = null;
  return [leftHead, rightHead];
}

let merge_sort = function(head) {
  if (!head) {
    return head;
  }

  return merge_sort_rec(head);
};

let merge_sort_rec = function(head) {
  const length = getLength(head);
  if (length <= 1) {
    return head;
  }

  const [left, right] = split(head, Math.floor(length / 2));
  return merge(merge_sort_rec(left), merge_sort_rec(right));
};

let merge = function(left, right) {
  let mergeHead;
  if (!left) {
    return right;
  }
  if (!right) {
    return left;
  }
  if (left.data <= right.data) {
    mergeHead = left;
    left = left.next;
  } else {
    mergeHead = right;
    right = right.next;
  }
  let resultHead = mergeHead;
  while (left && right) {
    if (left.data <= right.data) {
      mergeHead.next = left;
      left = left.next;
    } else {
      mergeHead.next = right;
      right = right.next;
    }
    mergeHead = mergeHead.next;
  }

  if (left) {
    mergeHead.next = left;
  }

  if (right) {
    mergeHead.next = right;
  }
  return resultHead;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Merge Sort");
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

head_before_sort = merge_sort(head_before_sort);
temp_head = head_before_sort;
console.log("after insertion sort");
temp = [];
while (temp_head) {
  temp.push(temp_head.data);
  temp_head = temp_head.next;
}
console.log(temp.join(" ==> "));
