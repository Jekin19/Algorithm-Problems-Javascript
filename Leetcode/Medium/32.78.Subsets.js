// https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = [];
  if (!nums || nums.length === 0) {
    return result;
  }

  result.push([]);
  let maxPossibleResults = Math.pow(2, nums.length);
  for (let i = 1; i < maxPossibleResults; i++) {
    const arrayBit = getIndexWithOneBit(i);
    const currentResult = [];
    for (let arr of arrayBit) {
      currentResult.push(nums[arr]);
    }
    result.push(currentResult);
  }
  return result;
};

/**
 * @param {number} num
 * @return {number[]}
 */
function getIndexWithOneBit(num) {
  let index = 0;
  let result = [];
  while (num > 0) {
    if ((num & 1) === 1) {
      result.push(index);
    }
    index++;
    num = num >> 1;
  }
  return result;
}

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("All Subsets");
console.log("---------------------------------------");
const input = [1, 2, 3];
console.log("input: " + input);

console.log(JSON.stringify(subsets(input)));
console.log("---------------------------------------");
