// https://leetcode.com/problems/find-all-anagrams-in-a-string/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let result = [];
  let resultCode = getCharCode(p);
  for (let i = 0; i <= s.length - p.length; i++) {
    let current = s.slice(i, i + p.length);
    let currentCode = getCharCode(current);
    if (currentCode === resultCode) {
      result.push(i);
    }
  }
  return result;
};

function getCharCode(s) {
  let array = [];
  for (let i = 0; i < 26; i++) {
    array.push(0);
  }
  for (let char of s) {
    array[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  return array.join("");
}

let s = "cbaebabacd",
  p = "abc";
console.log(JSON.stringify(findAnagrams(s, p)));
