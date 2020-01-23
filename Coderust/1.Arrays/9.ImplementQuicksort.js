let quick_sort_rec = function(a, l, h) {
  if (h > l) {
    let pivot_index = pivot(a, l, h);
    quick_sort_rec(a, l, pivot_index - 1);
    quick_sort_rec(a, pivot_index + 1, h);
  }
};

let quick_sort = function(a) {
  if (!a) {
    throw "Invalid Input.";
  }
  quick_sort_rec(a, 0, a.length - 1);
};

let pivot = function(a, start, end) {
  // pivot is the the first value;
  let pivotValue = a[start];
  let i = start;
  let j = end;
  while (i <= j) {
    // if value is less than or equal to pivot value move to next value
    if (a[i] <= pivotValue) {
      i++;
    } else {
      // else swap the current value to last available index
      let temp = a[i];
      a[i] = a[j];
      a[j] = temp;
      j--;
    }
  }
  // replace pivot index with value from above iteration, that is value less than pivot value
  a[start] = a[j];
  // replace the index where iteration stopped with pivot value, thus all values b4 pivot are less and post pivot are greater.
  a[j] = pivotValue;
  return j;
};

let array_for_quick_sort = [33, 6, 21, 12, 19, 29, 38, 22, 14, 40];

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Quick sort");
console.log("---------------------------------------");
console.log("before sort", array_for_quick_sort);

quick_sort(array_for_quick_sort);

console.log("After sort", array_for_quick_sort);
