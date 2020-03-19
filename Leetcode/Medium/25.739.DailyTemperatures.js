// https://leetcode.com/problems/daily-temperatures/

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let result = [];
  if (!T || T.length === 0) {
    return result;
  }

  let stack = [];
  for (let i = T.length - 1; i >= 0; i--) {
    while (stack.length > 0) {
      let topElementIndex = stack[stack.length - 1];
      if (T[topElementIndex] <= T[i]) {
        stack.pop();
      } else {
        break;
      }
    }
    result[i] = stack.length === 0 ? 0 : stack[stack.length - 1] - i;
    stack.push(i);
  }
  return result;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Daily Temperatures");
console.log("---------------------------------------");

const input = [89, 62, 70, 58, 47, 47, 46, 76, 100, 70];
console.log("input: " + input);
console.log(dailyTemperatures(input));
console.log("---------------------------------------");
