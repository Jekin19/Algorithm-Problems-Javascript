let merge_sort = function(a) {
  if (!a) {
    throw "Invalid Input.";
  }
  return merge_sort_rec(a);
};

let merge_sort_rec = function(unSortedArray) {
  if (unSortedArray.length <= 1) {
    return unSortedArray;
  }

  const mid = Math.floor(unSortedArray.length / 2);
  const left = unSortedArray.slice(0, mid);
  const right = unSortedArray.slice(mid);
  return merge(merge_sort_rec(left), merge_sort_rec(right));
};

// Merge the two arrays: left and right
function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let array_for_quick_sort = [33, 6, 21, 12, 19, 29, 38, 22, 14, 40];

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Merge sort");
console.log("---------------------------------------");
console.log("before sort", array_for_quick_sort);

console.log("After sort", merge_sort(array_for_quick_sort));
