//a is sorted array
let binary_search = function(a, key) {
  if (!a || !key) {
    throw "Invalid input";
  }
  let start = 0;
  let end = a.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (key === a[mid]) {
      return mid;
    }
    if (key < a[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

let array_for_binary_search = [10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222];

console.log("Key(47) found at: " + binary_search(array_for_binary_search, 47));
console.log("Key(75) found at: " + binary_search(array_for_binary_search, 75));
console.log("Key(175) found at: " + binary_search(array_for_binary_search, 175));
