//https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = [];
  result.push(1);
  // o/p = [1,1,2,6]
  for (let i = 0; i < nums.length - 1; i++) {
    result.push(nums[i] * result[i]);
  }
  let previous = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = previous * result[i];
    previous = nums[i] * previous;
    // previous : 1 ==> 4 ==> 12 ==> 24
  }
  return result;
};

console.log(JSON.stringify(productExceptSelf([1, 2, 3, 4])));
