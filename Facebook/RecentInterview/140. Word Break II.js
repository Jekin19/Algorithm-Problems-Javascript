// https://leetcode.com/problems/word-break-ii/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  return wordBreak_rec(s, wordDict, new Map(), 0);
};

var wordBreak_rec = function (s, wordDict, map, start) {
  if (map.has(start)) {
    return map.get(start);
  }

  let res = [];
  if (start === s.length) {
    res.push("");
  }

  for (let end = start + 1; end <= s.length; end++) {
    if (wordDict.includes(s.slice(start, end))) {
      let list = wordBreak_rec(s, wordDict, map, end);
      for (let l of list) {
        res.push(s.slice(start, end) + (l === "" ? "" : " ") + l);
      }
    }
  }
  map.set(start, res);

  return res;
};

let s = "catsanddog";
let wordDict = ["cat", "cats", "and", "sand", "dog"];
console.log(JSON.stringify(wordBreak(s, wordDict)));
