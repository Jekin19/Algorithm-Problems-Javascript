let find_missing = function(input = []) {
  if (!input || input.length === 0) {
    return -1;
  }

  let len = input.length;
  // Formula: n (n + 1) /2, since 1 number is missing len + 1
  let expectedSum = ((len + 1) * (len + 2)) / 2;
  let actualSum = input.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find Missing Number");
console.log("---------------------------------------");

let random_array = [19, 14, 2, 17, 4, 12, 20, 7, 16, 9, 13, 8, 11, 18, 3, 6, 10, 1, 15];
let actual_missing = find_missing(random_array);
console.log("actual missing is " + actual_missing);
