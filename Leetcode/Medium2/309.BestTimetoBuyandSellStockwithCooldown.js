// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices == null || prices.length <= 1) {
    return 0;
  }
  for (let i = 1; i < prices.length; i++) {
    let b1 = -prices[0];

    let s2 = 0;
    let s1 = 0;

    for (let i = 1; i <= prices.length; i++) {
      let b0 = Math.max(b1, s2 - prices[i - 1]);
      let s0 = Math.max(s1, b1 + prices[i - 1]);

      b1 = b0;
      s2 = s1;
      s1 = s0;
    }

    return s1;
  }
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Best Time to Buy and Sell Stock with Cooldown");
console.log("---------------------------------------");

const input = [1, 2, 3, 0, 2];
console.log("input: " + input);
console.log(maxProfit(input));
console.log("------------------------");
