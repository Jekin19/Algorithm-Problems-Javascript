// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, key) {
  if (!arr) {
    return -1;
  }

  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
      return mid;
    }

    // First part if sorted
    if (arr[start] <= arr[mid]) {
      if (arr[start] <= key && key < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (arr[mid] < key && key <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

let v1 = [6, 7, 1, 2, 3, 4, 5];

console.log("Key(3) found at: " + search(v1, 3));
console.log("Key(6) found at: " + search(v1, 6));

let v2 = [4, 5, 6, 1, 2, 3];

console.log("Key(3) found at: " + search(v2, 3));
console.log("Key(6) found at: " + search(v2, 6));

let v3 = [3, 1];
console.log("Key(3) found at: " + search(v3, 1));
