// https://leetcode.com/problems/longest-increasing-subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let len = 0;
  let dp = [];
  nums.forEach(num => dp.push(Number.MAX_SAFE_INTEGER));
  for (let i = 0; i < nums.length; i++) {
    let index = binary_search(dp, nums[i]);
    dp[index] = nums[i];
    if (index === len) {
      len++;
    }
  }
  return len;
};

let binary_search = function(a, key) {
  let start = 0;
  let end = a.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (key === a[mid] || (a[mid - 1] < key && a[mid] > key)) {
      return mid;
    }
    if (key < a[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return 0;
};
console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Longest Increasing Subsequence");
console.log("---------------------------------------");

const input = [0, 8, 4, 12, 2];
console.log("input: " + input);
console.log(lengthOfLIS(input));
console.log("---------------------------------------");
