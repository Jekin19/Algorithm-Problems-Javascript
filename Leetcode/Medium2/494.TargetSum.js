/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  let memo = [];
  for (let num of nums) {
    let row = [];
    for (let i = 0; i < 2001; i++) {
      row.push(Number.MIN_SAFE_INTEGER);
    }
    memo.push(row);
  }

  return calculate(nums, 0, 0, S, memo);
};

function calculate(nums, i, sum, S, memo) {
  if (i == nums.length) {
    if (sum == S) return 1;
    else return 0;
  } else {
    if (memo[i][sum + 1000] != Number.MIN_SAFE_INTEGER) {
      return memo[i][sum + 1000];
    }
    let add = calculate(nums, i + 1, sum + nums[i], S, memo);
    let subtract = calculate(nums, i + 1, sum - nums[i], S, memo);
    memo[i][sum + 1000] = add + subtract;
    return memo[i][sum + 1000];
  }
}

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Target Sum");
console.log("---------------------------------------");

const input = [1, 1];
console.log("input: " + input);

const k = 2;
console.log("k: " + k);
console.log(findTargetSumWays(input, k));
console.log("------------------------");
