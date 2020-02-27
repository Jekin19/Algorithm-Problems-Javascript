// https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let reader = 0;
  let writer = 0;
  while (reader < nums.length) {
    if (nums[reader] !== 0) {
      let temp = nums[reader];
      nums[reader] = nums[writer];
      nums[writer] = temp;
      writer++;
    }
    reader++;
  }
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Move Zeroes");
console.log("---------------------------------------");
const input = [0, 1, 0, 3, 12];
moveZeroes(input);
console.log(input);
