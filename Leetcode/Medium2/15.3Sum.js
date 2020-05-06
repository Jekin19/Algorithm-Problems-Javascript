/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  if (!nums || nums.length === 0) {
    return result;
  }

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];
      if (sum < 0 || (start > i + 1 && nums[start] === nums[start - 1])) {
        start++;
        continue;
      } else if (sum > 0 || (end < nums.length - 1 && nums[end] === nums[end + 1])) {
        end--;
        continue;
      } else {
        result.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
      }
    }
  }
  return result;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("3Sum");
console.log("---------------------------------------");

const input = [-2, 0, 0, 2, 2];
console.log("input: " + input);
console.log(JSON.stringify(threeSum(input)));
console.log("---------------------------------------");
