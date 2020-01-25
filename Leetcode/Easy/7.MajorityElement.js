// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let current = nums[0];
  let currentSum = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === current) {
      currentSum++;
    } else {
      currentSum--;
    }
    if (currentSum < 0) {
      currentSum = 1;
      current = nums[i];
    }
  }
  return current;
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Majority Element");
console.log("---------------------------------------");
const input = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(input));
