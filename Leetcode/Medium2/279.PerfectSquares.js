// https://leetcode.com/problems/perfect-squares/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let squares = [];
  for (let i = 1; Math.round(i * i) <= n; i++) {
    squares.push(Math.round(i * i));
  }

  let dp = [0];
  for (let i = 1; i <= n; i++) {
    dp.push(Number.MAX_SAFE_INTEGER);
    for (let sqr = 0; sqr < squares.length; sqr++) {
      let diff = i - squares[sqr];
      if (diff >= 0) {
        dp[i] = Math.min(dp[diff] + 1, dp[i]);
      }
    }
  }
  return dp[n];
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Letter combination of a phone number");
console.log("---------------------------------------");

const input = 23;
console.log("input: " + input);
console.log(numSquares(input));
console.log("------------------------");
