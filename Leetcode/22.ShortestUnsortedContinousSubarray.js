// https://leetcode.com/problems/shortest-unsorted-continuous-subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let min = Number.MAX_SAFE_INTEGER,
    max = Number.MIN_SAFE_INTEGER;
  let flag = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) flag = true;
    if (flag) min = Math.min(min, nums[i]);
  }
  flag = false;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] > nums[i + 1]) flag = true;
    if (flag) max = Math.max(max, nums[i]);
  }
  let l, r;
  for (l = 0; l < nums.length; l++) {
    if (min < nums[l]) break;
  }
  for (r = nums.length - 1; r >= 0; r--) {
    if (max > nums[r]) break;
  }
  return r - l < 0 ? 0 : r - l + 1;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Shortest Unsorted Continous Subarray");
console.log("---------------------------------------");

const input = [2, 6, 4, 8, 10, 9, 15];
console.log("input: " + input);
console.log(findUnsortedSubarray(input));
console.log("---------------------------------------");
