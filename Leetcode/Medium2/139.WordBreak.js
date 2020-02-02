// https://leetcode.com/problems/word-break/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
let map = new Map();
var wordBreak = function(s, wordDict) {
  for (let i = 1; i < s.length + 1; i++) {
    let first = s.substr(0, i);
    if (wordDict.includes(first)) {
      let second = s.substr(i);
      if (second.length === 0) {
        return true;
      }
      if (wordDict.includes(second)) {
        return true;
      }
      if (map.has(second + i)) {
        if (map.get(second)) {
          return true;
        }
      } else {
        if (wordBreak(second, wordDict)) {
          map.set(second + i, true);
          return true;
        } else {
          map.set(second + i, false);
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
const wordDict = ["apple", "pen"];
console.log("wordDict: " + JSON.stringify(wordDict));
console.log(wordBreak(input, wordDict));

const input2 = "aaaaaaaaaa";

console.log("input2: " + JSON.stringify(input2));
const wordDict2 = ["a", "aa", "aaa", "aaaa"];
console.log("wordDict2: " + JSON.stringify(wordDict2));
console.log(wordBreak(input2, wordDict2));
