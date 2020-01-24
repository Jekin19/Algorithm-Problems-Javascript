// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  for (let num of nums) {
    let index = Math.abs(num) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Missing Numbers");
console.log("---------------------------------------");
const input = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(input));
