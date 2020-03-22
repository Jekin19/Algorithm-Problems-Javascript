// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  if (!prices) {
    return profit;
  }

  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(prices[i] - buy, profit);
    if (prices[i] < buy) {
      buy = prices[i];
    }
  }

  return profit;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Best Time to Buy and Sell Stock");
console.log("---------------------------------------");
const input = [7, 1, 5, 3, 6, 4];
console.log("input: " + input);
console.log(maxProfit(input));
console.log("---------------------------------------");

const input1 = [7, 6, 4, 3, 1];
console.log("input: " + input1);
console.log(maxProfit(input1));
console.log("---------------------------------------");
