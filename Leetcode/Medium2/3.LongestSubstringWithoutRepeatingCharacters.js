/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let length = 0;
  if (!s) {
    return length;
  }

  let map = new Map();
  let startIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && startIndex <= map.get(s[i])) {
      length = Math.max(length, i - startIndex);
      startIndex = map.get(s[i]) + 1;
    }
    map.set(s[i], i);
  }

  return Math.max(length, s.length - startIndex);
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log(" Longest Substring Without Repeating Characters");
console.log("---------------------------------------");

const input = " ";
console.log("input: " + input);
console.log(lengthOfLongestSubstring(input));
console.log("---------------------------------------");
