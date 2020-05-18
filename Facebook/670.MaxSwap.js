// https://leetcode.com/problems/maximum-swap/

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let nums = num.toString().split("");
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(Number(nums[i]), i);
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 9; j > nums[i]; j--) {
      if (map.has(j) && map.get(j) > i) {
        [nums[map.get(j)], nums[i]] = [nums[i], nums[map.get(j)]];
        return Number(nums.join(""));
      }
    }
  }
  return num;
};

console.log(maximumSwap(2736));
