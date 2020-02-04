// https://leetcode.com/problems/subarray-sum-equals-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let result = 0;
  if (!nums || nums.length === 0) {
    return result;
  }

  for (let i = 0; i < nums.length; i++) {
    let j = i;
    let currentResult = 0;
    while (j < nums.length) {
      currentResult += nums[j];
      if (currentResult === k) {
        result++;
      }
      j++;
    }
  }
  return result;
};

// o(n)
var subarraySum2 = function(nums, k) {
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

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Subarray Sum Equals K");
console.log("---------------------------------------");

const input = [1, 3, 4, 5, -1];
console.log("input: " + input);

const k = 4;
console.log("k: " + k);
console.log(subarraySum(input, k));
console.log(subarraySum2(input, k));
console.log("------------------------");
