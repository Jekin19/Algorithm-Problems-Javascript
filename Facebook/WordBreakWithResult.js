// https://leetcode.com/problems/word-break/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict, result) {
  for (let i = 1; i < s.length + 1; i++) {
    let first = s.substr(0, i);
    if (wordDict.includes(first)) {
      result.push(first);
      let second = s.substr(i);
      if (second.length === 0) {
        return true;
      } else {
        if (wordBreak(second, wordDict, result)) {
          return true;
        } else {
          result.pop();
        }
      }
    }
  }
  return false;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Word Break");

const input = "applepenapple";
console.log("input: " + JSON.stringify(input));
const wordDict = ["apple", "pen", "pe"];
console.log("wordDict: " + JSON.stringify(wordDict));
let result = [];
wordBreak(input, wordDict, result);
console.log(JSON.stringify(result));
