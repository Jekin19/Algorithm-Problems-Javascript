// https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  if (!nums || nums.length === 0) {
    return nums;
  }

  let zeroIndex = 0;
  let twoIndex = nums.length - 1;
  let currentIndex = 0;
  while (currentIndex <= twoIndex) {
    if (nums[currentIndex] === 0) {
      [nums[currentIndex], nums[zeroIndex]] = [nums[zeroIndex], nums[currentIndex]];
      zeroIndex++;
      currentIndex++;
    } else if (nums[currentIndex] === 2) {
      [nums[currentIndex], nums[twoIndex]] = [nums[twoIndex], nums[currentIndex]];
      twoIndex--;
    } else {
      currentIndex++;
    }
  }
  return nums;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Sort Colors");
console.log("---------------------------------------");

const input = [1, 2, 0];
console.log("input: " + input);
console.log(sortColors(input));
console.log("------------------------");
