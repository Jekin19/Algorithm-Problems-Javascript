// https://leetcode.com/problems/palindromic-substrings/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let count = 0;
  if (!s) {
    return count;
  }
  for (let i = 0; i < s.length; i++) {
    count += getPalindromCount(s, i, i);
    count += getPalindromCount(s, i, i + 1);
  }
  return count;
};

function getPalindromCount(s, leftIndex, rightIndex) {
  let count = 0;
  while (leftIndex >= 0 && rightIndex < s.length && s[leftIndex] === s[rightIndex]) {
    count++;
    leftIndex--;
    rightIndex++;
  }
  return count;
}

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Generate Parenthesis");
console.log("---------------------------------------");

const input = "aabbaa";
console.log("input: " + input);
console.log(countSubstrings(input));
console.log("---------------------------------------");
