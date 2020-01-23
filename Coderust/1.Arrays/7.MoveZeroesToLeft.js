let swap = function(arr, readIndex, writeIndex) {
  let temp = arr[readIndex];
  arr[readIndex] = arr[writeIndex];
  arr[writeIndex] = temp;
};

let move_zeros_to_left = function(arr) {
  if (!arr) {
    throw "Invalid input";
  }

  let readIndex = arr.length - 1;
  let writeIndex = arr.length - 1;

  // start for end to start of array
  while (readIndex >= 0) {
    // if readIndex value is not zero swap with writeIndex
    if (arr[readIndex] !== 0) {
      swap(arr, readIndex, writeIndex);
      writeIndex--;
    }
    readIndex--;
  }
};

let v = [1, 10, -1, 11, 5, 0, -7, 0, 25, -35];
console.log("Original Array: [" + v + "]");
move_zeros_to_left(v);
console.log("After Moving Zeros: [" + v + "]");
