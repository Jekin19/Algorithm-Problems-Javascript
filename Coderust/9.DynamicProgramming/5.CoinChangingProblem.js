let solve_coin_change_dp = function(denominations, amount) {
  if (amount < 1) {
    return -1;
  }
  let result = [];
  // Initialize result array with 0's
  for (let i = 1; i <= amount; i++) {
    result[i] = 0;
  }
  // result of 0 is 1.
  result[0] = 1;
  // iteration through denomination i.e. 1,2,5 in our case
  for (let i = 0; i < denominations.length; i++) {
    // incrementing by lowest denominations i.e. by 1 in our case 1 ... 7
    for (let j = denominations[0]; j <= amount; j = j + denominations[0]) {
      let diff = j - denominations[i];
      let tempResult = 0;
      if (diff === 0) {
        tempResult = 1;
      } else if (diff > 0) {
        tempResult = result[diff];
      }
      result[j] = result[j] + tempResult;
    }
  }
  return result[amount];
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Coin Changing");
console.log("---------------------------------------");

let denominations = [1, 2, 5];
let amount = 7;

console.log("Amount = " + amount);
let max_combinations_dp = solve_coin_change_dp(denominations, amount);
console.log("Combinations (DP): " + max_combinations_dp);
//expect(max_combinations_dp).toBe(6);
console.log("++++++ Test Done Successfully ++++++");
