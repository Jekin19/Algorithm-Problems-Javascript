/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
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
      if (i > 0 && nums[start] === nums[start - 1] && start - 1 !== i) {
        start++;
        continue;
      }

      if (i < nums.length && nums[end] === nums[end + 1]) {
        end--;
        continue;
      }

      if (nums[i] + nums[start] + nums[end] === 0) {
        result.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
      } else if (nums[i] + nums[start] + nums[end] > 0) {
        end--;
      } else {
        start++;
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
