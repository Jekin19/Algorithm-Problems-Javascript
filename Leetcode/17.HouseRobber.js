// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  let result = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    result[i] = Math.max(result[i - 1], result[i - 2] + nums[i]);
  }
  return result[nums.length - 1];
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("House Robber");
console.log("---------------------------------------");

const input = [2, 7, 9, 3, 1];
console.log("input: " + input);
console.log(rob(input));
console.log("---------------------------------------");
