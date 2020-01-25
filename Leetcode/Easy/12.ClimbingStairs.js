// https://leetcode.com/problems/climbing-stairs

/**
 * @param {number} n
 * @return {number}
 */
let memo = [];
var climbStairs = function(n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }
  if (memo[n] > 0) {
    return memo[n];
  }
  memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return memo[n];
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Number of ways to climb stairs");
console.log("---------------------------------------");

const input = 5;
console.log("input: " + input);
console.log(climbStairs(input));
console.log("---------------------------------------");

const input1 = 44;
console.log("input: " + input1);
console.log(climbStairs(input1));
console.log("---------------------------------------");
