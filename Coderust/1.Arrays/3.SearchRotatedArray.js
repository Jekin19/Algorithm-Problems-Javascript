let binary_search_rotated = function(arr, key) {
  if (!arr || !key) {
    throw "Invalid input";
  }
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
      return mid;
    }

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

console.log("Key(3) found at: " + binary_search_rotated(v1, 3));
console.log("Key(6) found at: " + binary_search_rotated(v1, 6));

let v2 = [4, 5, 6, 1, 2, 3];

console.log("Key(3) found at: " + binary_search_rotated(v2, 3));
console.log("Key(6) found at: " + binary_search_rotated(v2, 6));

let v3 = [3, 1];

console.log("Key(3) found at: " + binary_search_rotated(v3, 1));
