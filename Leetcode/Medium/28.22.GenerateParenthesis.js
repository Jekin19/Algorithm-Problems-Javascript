// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = [];
  if (!n || n <= 0) {
    return result;
  }

  generateParenthesis_rec(n, result);

  return result;
};

function generateParenthesis_rec(n, result, openBracketCount = 0, closeBracketCount = 0, currenBrackets = "") {
  if (closeBracketCount === n) {
    result.push(currenBrackets);
    return;
  }

  if (openBracketCount < n) {
    let newCurrentBrackets = currenBrackets + "(";
    generateParenthesis_rec(n, result, openBracketCount + 1, closeBracketCount, newCurrentBrackets);
  }

  if (closeBracketCount < openBracketCount) {
    let newCurrentBrackets = currenBrackets + ")";
    generateParenthesis_rec(n, result, openBracketCount, closeBracketCount + 1, newCurrentBrackets);
  }
}

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Generate Parenthesis");
console.log("---------------------------------------");

const input = 3;
console.log("input: " + input);
console.log(JSON.stringify(generateParenthesis(input)));
console.log("---------------------------------------");
