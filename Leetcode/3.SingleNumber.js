// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let currentSum = 0;
  for (let num of nums) {
    currentSum ^= num;
  }

  return currentSum;
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Missing Single Number");
console.log("---------------------------------------");
console.log(singleNumber([4, 1, 2, 1, 2]));
