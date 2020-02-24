let find_max_sum_nonadjacent = function(a) {
  if (!a || a.length === 0) {
    throw "Invalid Input.";
  }

  if (a.length === 1) {
    return a[0];
  }

  if (a.length === 2) {
    return Math.max(a[0], a[1]);
  }

  let result = [a[0], a[1]];
  let maxSum = Number.MIN_SAFE_INTEGER;
  for (let i = 2; i < a.length; i++) {
    result[i] = Math.max(result[i - 2] + a[i], result[i - 2], a[i], result[i - 1]);
    maxSum = Math.max(result[i], maxSum);
  }
  return maxSum;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Largest Sum Subarray");
console.log("---------------------------------------");

let v = [-1, -6, -10, -14, -50, -20, -5, -10];
let sum = find_max_sum_nonadjacent(v);
console.log("Sum of largest subarray: " + sum);

v = [1, 6, 10, 14, -5, -1, 2, -1, 3];
sum = find_max_sum_nonadjacent(v);
console.log("Sum of largest subarray: " + sum);

v = [1, -1, 6, -4, 2, 2];
sum = find_max_sum_nonadjacent(v);
console.log("Sum of largest subarray: " + sum);

console.log("++++++ Test Done Successfully ++++++");
