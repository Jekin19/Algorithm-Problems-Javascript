let find_max_sliding_window = function(arr, window_size) {
  if (!arr || arr.length === 0 || window_size < 1 || window_size > arr.length) {
    throw "Invalid input.";
  }

  let windowElements = [];
  let result = [];

  // Find maximum in 1st window.
  for (let i = 0; i < window_size; i++) {
    //Remove windowElements smaller than current element
    while (windowElements.length > 0 && arr[i] >= arr[windowElements[windowElements.length - 1]]) {
      windowElements.pop();
    }

    // add current index to window Elements
    windowElements.push(i);
  }
  // First index will have max element hence push to result for this window.
  result.push(arr[windowElements[0]]);

  for (let k = window_size; k < arr.length; k++) {
    // Remove first element if it is not part of the  window.
    while (k - window_size >= windowElements[0]) {
      windowElements.shift();
    }

    //Remove windowElements smaller than current element
    while (windowElements.length > 0 && arr[k] >= arr[windowElements[windowElements.length - 1]]) {
      windowElements.pop();
    }

    // add current index to window Elements
    windowElements.push(k);

    result.push(arr[windowElements[0]]);
  }

  return result;
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array = " + array);
console.log("Max = " + find_max_sliding_window(array, 3));

let array1 = [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67];
console.log("Array = " + array1);
console.log("Max = " + find_max_sliding_window(array1, 3));
