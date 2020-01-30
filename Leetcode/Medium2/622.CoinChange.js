/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (!coins && coins.length === 0 && !amount) {
    return -1;
  }

  let result = [0];
  for (let a = 1; a <= amount; a++) {
    result[a] = Number.MAX_SAFE_INTEGER;
  }
  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      const diff = j - coins[i];
      if (diff === 0) {
        result[j] = 1;
      } else if (diff > 0) {
        result[j] = Math.min(result[j], result[diff] + 1);
      }
    }
  }

  return result[amount] === Number.MAX_SAFE_INTEGER ? -1 : result[amount];
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Coin change");
console.log("---------------------------------------");

const input = [2, 2, 5];
console.log("input: " + input);
const amount = 9;
console.log("amount: " + amount);
console.log(coinChange(input, amount));
console.log("---------------------------------------");
