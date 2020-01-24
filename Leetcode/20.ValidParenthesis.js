// https://leetcode.com/problems/valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s = "") {
  let stack = [];
  for (let char of s) {
    if (char === "(") {
      stack.push(")");
    } else if (char === "{") {
      stack.push("}");
    } else if (char === "[") {
      stack.push("]");
    } else if (stack.pop() !== char) {
      return false;
    }
  }
  return stack.length === 0;
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Valid Parenthesis");
console.log("---------------------------------------");
const input = "()[]{}";
console.log("input: " + input);
console.log(isValid(input));
