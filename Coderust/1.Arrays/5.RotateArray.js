let reverse = function(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};

let rotate_array = function(arr, n) {
  if (!arr || !n) {
    throw " Invalid input";
  }

  let arrayLength = arr.length;
  // Normalize n for -ve or greater than array length.
  n = (arrayLength - n) % arrayLength;

  reverse(arr, n, arrayLength - 1);
  reverse(arr, 0, arrayLength - 1);
  reverse(arr, 0, n - 1);
  return arr;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Rotate Arrays");
console.log("---------------------------------------");

let array_rotate_1 = [1, 2, 3, 4, 5];
let array_rotate_2 = [1, 2, 3, 4, 5];
let array_rotate_result = [4, 5, 1, 2, 3];
console.log("Before Rotate ", array_rotate_1);
rotate_array(array_rotate_1, 2);
console.log("After Rotate By 2", array_rotate_1);

console.log("Before Rotate ", array_rotate_2);
rotate_array(array_rotate_2, -1);
console.log("After Rotate By -1", array_rotate_2);
