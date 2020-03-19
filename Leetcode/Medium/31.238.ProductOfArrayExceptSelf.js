// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let result = [];
  if (!nums || nums.length === 0) {
    return result;
  }

  let countOfZeroes = 0;
  let totalProduct = nums.reduce((accumulator, num) => {
    if (num === 0) {
      countOfZeroes++;
    }
    return Math.floor(accumulator * (num || 1));
  }, 1);
  nums.forEach(num => {
    // if more than 1 zeroes all numbers are zero
    if (countOfZeroes > 1) {
      result.push(0);
    } else if (countOfZeroes === 1 && num !== 0) {
      // if only 1 zero and current is not 0, then product is 0
      result.push(0);
    } else if (countOfZeroes === 1 && num === 0) {
      // if only 1 zero and current is 0, then totalproduct
      result.push(totalProduct);
    } else {
      result.push(Math.floor(totalProduct / num));
    }
  });

  return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelfWithoutDivision = function(nums) {
  let result = [];
  if (!nums || nums.length === 0) {
    return result;
  }

  result.push(1);
  // populate left array
  for (let i = 0; i < nums.length - 1; i++) {
    result.push(result[i] * nums[i]);
  }

  let r = 1;
  for (let i = result.length - 1; i >= 0; i--) {
    result[i] = r * result[i];
    r *= nums[i];
  }
  return result;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Product of Array Except Self");
console.log("---------------------------------------");
const input = [4, 5, 1, 8, 2];
console.log("input: " + input);

console.log(productExceptSelf(input));
console.log(productExceptSelfWithoutDivision(input));
console.log("---------------------------------------");
