// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let result = [-1, -1];
  if (!nums) {
    return result;
  }
  result[0] = findMinIndex(nums, target);
  result[1] = findMaxIndex(nums, target);
  return result;
};

function findMinIndex(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let lowIndex = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target <= nums[mid]) {
      if (target === nums[mid]) {
        lowIndex = mid;
      }
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return lowIndex;
}

function findMaxIndex(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let highIndex = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target >= nums[mid]) {
      if (target === nums[mid]) {
        highIndex = mid;
      }
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return highIndex;
}

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Longest Increasing Subsequence");
console.log("---------------------------------------");

const input = [5, 7, 7, 8, 8, 10];
console.log("input: " + input);

const target = 8;
console.log("target: " + target);
console.log(searchRange(input, target));
console.log("---------------------------------------");
