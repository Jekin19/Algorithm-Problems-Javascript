// https://leetcode.com/problems/permutations

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = [];
  if (!nums || nums.length === 0) {
    return result;
  }

  permute_rec([], nums, result);
  return result;
};

function permute_rec(addedNums, remainingNums, result) {
  if (remainingNums.length === 0) {
    result.push(addedNums);
    return;
  }

  for (let index = 0; index < remainingNums.length; index++) {
    let newAddedNums = addedNums.concat([remainingNums[index]]);
    let newRemaingNums = remainingNums.slice(0, index).concat(remainingNums.slice(index + 1, remainingNums.length));
    permute_rec(newAddedNums, newRemaingNums, result);
  }
}

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Permutations");
console.log("---------------------------------------");

const input = [1, 2, 3];
console.log("input: " + input);
console.log(JSON.stringify(permute(input)));
console.log("---------------------------------------");
