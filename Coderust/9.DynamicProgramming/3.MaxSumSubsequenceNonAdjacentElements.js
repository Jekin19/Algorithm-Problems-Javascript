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
    let currentMax = result[i - 2];
    if (i - 3 > 0) {
      currentMax = Math.max(result[i - 3], currentMax);
    }
    currentMax = Math.max(currentMax + a[i], currentMax, a[i]);
    result[i] = currentMax;
    if (currentMax > maxSum) {
      maxSum = currentMax;
    }
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
//expect(sum).toBe(61);
v = [1, 6, 10, 14, -5, -1, 2, -1, 3];
sum = find_max_sum_nonadjacent(v);
console.log("Sum of largest subarray: " + sum);

console.log("++++++ Test Done Successfully ++++++");
