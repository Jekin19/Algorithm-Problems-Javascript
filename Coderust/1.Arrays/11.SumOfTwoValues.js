let find_sum_of_two = function(arr, val) {
  if (!arr || !val) {
    throw "Invalid Input.";
  }

  let hashSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (hashSet.has(val - arr[i])) {
      return true;
    }
    hashSet.add(arr[i]);
  }
  return false;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Sum Two Values Solution 2");
console.log("---------------------------------------");

let test_sol_2 = function(v, val) {
  let output = find_sum_of_two(v, val);
  console.log("sum of two numbers in array [" + v + "] = " + val + "  = " + output);
};

let array_for_sum_two_values = [2, 1, 8, 4, 7, 3];
console.log("Array: ", array_for_sum_two_values);
test_sol_2(array_for_sum_two_values, 3, true);
test_sol_2(array_for_sum_two_values, 20, false);
test_sol_2(array_for_sum_two_values, 1, false);
test_sol_2(array_for_sum_two_values, 2, false);
test_sol_2(array_for_sum_two_values, 7, true);
