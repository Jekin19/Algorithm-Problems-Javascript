/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function (nums, k) {
  let start = 0,
    end = nums.length - 1;
  let endMissing = missing(nums, nums.length - 1);
  if (endMissing < k) {
    return nums[nums.length - 1] + k - endMissing;
  }

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    let diff = missing(nums, mid);
    if (diff < k) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return nums[start - 1] + k - missing(nums, start - 1);
};

function missing(nums, end) {
  return nums[end] - nums[0] - end;
}
console.log(missingElement([4, 7, 9, 10], 1));
console.log(missingElement([4, 7, 9, 10], 3));
console.log(missingElement([4, 7, 9, 10], 6));
