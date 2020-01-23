let find_low_index = function(arr, key) {
  if (!arr || !key) {
    throw "Invalid input";
  }
  let start = 0;
  let end = arr.length - 1;
  let lowIndex = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (key <= arr[mid]) {
      // save the key index and continue searching...
      if (key === arr[mid]) {
        lowIndex = mid;
      }
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return lowIndex;
};

let find_high_index = function(arr, key) {
  if (!arr || !key) {
    throw "Invalid input";
  }
  let start = 0;
  let end = arr.length - 1;
  let highIndex = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (key >= arr[mid]) {
      if (key === arr[mid]) {
        highIndex = mid;
      }
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return highIndex;
};

let array = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7];

var key = 5;
console.log("LowIndex of " + key + " : " + find_low_index(array, key));
console.log("HighIndex of " + key + " : " + find_high_index(array, key));

key = -2;
console.log("LowIndex of " + key + " : " + find_low_index(array, key));
console.log("HighIndex of " + key + " : " + find_high_index(array, key));

key = 7;
console.log("LowIndex of " + key + " : " + find_low_index(array, key));
console.log("HighIndex of " + key + " : " + find_high_index(array, key));
