let getLength = function(head) {
  let current = head;
  let i = 1;
  while (current) {
    current = current.next;
    i++;
  }
  return i;
};

let intersect = function(head1, head2) {
  if (!head1 || !head2) {
    return null;
  }
  let length1 = getLength(head1);
  let length2 = getLength(head2);
  let diff = Math.abs(length1 - length2);
  let longerList = length1 > length2 ? head1 : head2;
  let shorterList = length1 > length2 ? head2 : head1;
  // increment longerList to both lists are same.
  while (diff > 0) {
    longerList = longerList.next;
    diff--;
  }
  while (shorterList) {
    if (shorterList === longerList) {
      return shorterList;
    } else {
      shorterList = shorterList.next;
      longerList = longerList.next;
    }
  }
  return head1;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Insertion of Two Points Link List");
console.log("---------------------------------------");

let list1_head_8 = {
  data: 8,
  next: null
};
let list1_head_7 = {
  data: 7,
  next: list1_head_8
};
let list1_head_6 = {
  data: 6,
  next: list1_head_7
};
let list1_head_5 = {
  data: 5,
  next: list1_head_6
};
let list1_head_4 = {
  data: 4,
  next: list1_head_5
};
let list1_head_3 = {
  data: 3,
  next: list1_head_4
};
let list1_head_2 = {
  data: 2,
  next: list1_head_3
};
let list1_head_1 = {
  data: 1,
  next: list1_head_2
};

let list2_head_5 = {
  data: 15,
  next: list1_head_6
};
let list2_head_4 = {
  data: 14,
  next: list2_head_5
};
let list2_head_3 = {
  data: 13,
  next: list2_head_4
};
let list2_head_2 = {
  data: 12,
  next: list2_head_3
};
let list2_head_1 = {
  data: 11,
  next: list2_head_2
};
console.log(intersect(list1_head_1, list2_head_1));
console.log(intersect(list1_head_1, list2_head_1) === list1_head_6);
