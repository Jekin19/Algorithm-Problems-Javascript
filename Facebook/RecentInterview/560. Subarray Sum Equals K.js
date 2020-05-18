// https://leetcode.com/problems/subarray-sum-equals-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  let runningSum = 0;
  let map = new Map();
  map.set(0, 1);
  for (let num of nums) {
    runningSum += num;
    let diff = runningSum - k;
    if (map.has(diff)) {
      count += map.get(diff);
    }
    map.set(runningSum, map.has(runningSum) ? map.get(runningSum) + 1 : 1);
  }
  return count;
};
