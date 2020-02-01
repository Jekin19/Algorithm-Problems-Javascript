/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  let positiveResults = [nums[0]];
  let negativeResults = [nums[0]];
  let maxResult = nums[0];
  for (let i = 1; i < nums.length; i++) {
    positiveResults[i] = Math.max(positiveResults[i - 1] * nums[i], negativeResults[i - 1] * nums[i], nums[i]);
    negativeResults[i] = Math.min(positiveResults[i - 1] * nums[i], negativeResults[i - 1] * nums[i], nums[i]);
    maxResult = Math.max(maxResult, positiveResults[i], negativeResults[i]);
  }
  return maxResult;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Maximum Product Subarray");
console.log("---------------------------------------");

const input = [2, 3, -2, 4];
console.log("input: " + input);
console.log(maxProduct(input));
console.log("---------------------------------------");

const input2 = [-2, 0, -1];
console.log("input: " + input2);
console.log(maxProduct(input2));
console.log("---------------------------------------");

const input3 = [2, 3, -2, 4, 10];
console.log("input: " + input3);
console.log(maxProduct(input3));
console.log("---------------------------------------");
