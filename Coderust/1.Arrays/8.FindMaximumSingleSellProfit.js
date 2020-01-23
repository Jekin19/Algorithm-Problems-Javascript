let find_buy_sell_stock_prices = function(array) {
  if (!array || array.length < 2) {
    throw "Invalid Input";
  }

  let currentBuy = array[0];
  let globalSell = array[1];
  let globalProfit = globalSell - currentBuy;
  for (let i = 1; i < array.length; i++) {
    let currentProfit = array[i] - currentBuy;
    if (currentProfit > globalProfit) {
      globalSell = array[i];
      globalProfit = currentProfit;
    }

    if (currentBuy > array[i]) {
      currentBuy = array[i];
    }
  }
  return [globalSell - globalProfit, globalSell];
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Stock Prices");
console.log("---------------------------------------");

let array_for_stock_prices = [1, 2, 3, 4, 3, 2, 1, 2, 5];
let result = find_buy_sell_stock_prices(array_for_stock_prices);
console.log("Buy Price : " + result[0] + " Sell Price: " + result[1]);

array_for_stock_prices = [8, 6, 5, 4, 3, 2, 1];
result = find_buy_sell_stock_prices(array_for_stock_prices);
console.log("Buy Price : " + result[0] + " Sell Price: " + result[1]);
