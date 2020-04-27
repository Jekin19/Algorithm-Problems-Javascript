/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let j = nums.length - 2;
  while (j >= 0) {
    if (nums[j] <= nums[j + 1]) {
      break;
    }
    j--;
  }

  if (j >= 0) {
    let k = j + 1;
    while (k + 1 < nums.length) {
      if (nums[k + 1] <= nums[j]) {
        break;
      }
      k--;
    }
    [nums[k], nums[j]] = [nums[j], nums[k]];
  }

  reverse(nums, j + 1, nums.length - 1);
};

function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

let input = [1, 2, 3];
nextPermutation(input);
console.log(JSON.stringify(input));

input = [3, 2, 1];
nextPermutation(input);
console.log(JSON.stringify(input));

input = [1, 1, 5];
nextPermutation(input);
console.log(JSON.stringify(input));
