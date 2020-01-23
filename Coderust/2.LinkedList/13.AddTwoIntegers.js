let add_integers = function(integer1, integer2) {
  if (!integer1) {
    return integer2;
  }
  if (!integer2) {
    return integer1;
  }
  let result = [];
  let carry = 0;
  while (integer1 || integer2) {
    let integer1Data = integer1 ? integer1.data : 0;
    let integer2Data = integer2 ? integer2.data : 0;
    let newValue = carry + integer1Data + integer2Data;
    carry = newValue > 9 ? 1 : 0;
    result.push(newValue % 10);
    if (integer1) {
      integer1 = integer1.next;
    }
    if (integer2) {
      integer2 = integer2.next;
    }
  }
  return create_linked_list(result);
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Add Integers");
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

let first = create_linked_list([1, 9, 3]);
let second = create_linked_list([1, 2]);
console.log("Sum:");
let result = add_integers(first, second);
console.log(JSON.stringify(result));
