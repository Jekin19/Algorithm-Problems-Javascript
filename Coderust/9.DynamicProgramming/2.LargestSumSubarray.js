let find_max_sum_sub_array = function(array) {
  if (!array) {
    throw "Invalid Input.";
  }
  let currentSum = array[0];
  let maxSum = currentSum;
  for (let i = 1; i < array.length; i++) {
    // if currentSum is less than 0, replace it with current element.
    if (currentSum < 0) {
      currentSum = array[i];
    } else {
      currentSum = currentSum + array[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Largest Sum Subarray");
console.log("---------------------------------------");

let v = [1, 10, -1, 11, 5, -30, -7, 20, 25, -35];
let sum = find_max_sum_sub_array(v);
console.log("Sum of largest subarray: " + sum);
//expect(sum).toBe(45);

v = [-15, -14, -10, -19, -5, -21, -10];
sum = find_max_sum_sub_array(v);
console.log("Sum of largest subarray: " + sum);
//expect(sum).toBe(-5);

v = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
sum = find_max_sum_sub_array(v);
console.log("Sum of largest subarray: " + sum);
//expect(sum).toBe(12);
console.log("++++++ Test Done Successfully ++++++");
