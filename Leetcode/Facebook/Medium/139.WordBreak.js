// https://leetcode.com/problems/word-break/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
let map = new Map();
var wordBreak = function (s, wordDict) {
  for (let i = 0; i < s.length; i++) {
    const first = s.slice(0, i + 1);
    if (wordDict.includes(first)) {
      const second = s.slice(i + 1);

      if (!second) {
        return true;
      }

      if (!map.has(second)) {
        if (wordBreak(second, wordDict)) {
          map.set(second, true);
        } else {
          map.set(second, false);
        }
      }
      return map.get(second);
    }
  }
  return false;
};

console.log(wordBreak("leetcode", ["leet", "code"]));
