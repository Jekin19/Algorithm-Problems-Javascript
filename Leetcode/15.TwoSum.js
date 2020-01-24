// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();
  let result;
  nums.forEach((num, index) => {
    let diff = target - num;
    if (map.get(diff) !== undefined) {
      result = [map.get(diff), index];
      return;
    } else {
      map.set(num, index);
    }
  });
  return result;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Maximum Subarray");
console.log("---------------------------------------");

const input = [2, 7, 11, 15];
console.log("input: " + input);
console.log(twoSum(input, 9));
console.log("---------------------------------------");
