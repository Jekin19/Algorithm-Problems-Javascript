/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  // find decreasing number
  let decreasingIndex = nums.length - 2;
  while (decreasingIndex >= 0) {
    if (nums[decreasingIndex] < nums[decreasingIndex + 1]) {
      break;
    }
    decreasingIndex--;
  }
  if (decreasingIndex >= 0) {
    // Find number just greater than number at decreasingIndex
    let k = decreasingIndex;
    while (k + 1 < nums.length) {
      if (nums[k + 1] <= nums[decreasingIndex]) {
        break;
      }
      k++;
    }
    // Swap
    [nums[decreasingIndex], nums[k]] = [nums[k], nums[decreasingIndex]];
  }
  reverse(nums, decreasingIndex + 1);
  return nums;
};

function reverse(nums, startIndex) {
  let endIndex = nums.length - 1;
  while (startIndex < endIndex) {
    [nums[startIndex], nums[endIndex]] = [nums[endIndex], nums[startIndex]];
    startIndex++;
    endIndex--;
  }
}

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Next Permutations");
console.log("---------------------------------------");

const input = [1, 2, 3];
console.log("input: " + input);
console.log(nextPermutation(input));
console.log("---------------------------------------");

const input2 = [3, 2, 1];
console.log("input: " + input2);
console.log(nextPermutation(input2));
console.log("---------------------------------------");

const input3 = [1, 5, 1];
console.log("input: " + input3);
console.log(nextPermutation(input3));
console.log("---------------------------------------");
