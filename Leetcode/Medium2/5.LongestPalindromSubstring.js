/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s) {
    return null;
  }

  if (s.length === 1) {
    return s;
  }

  let palindrom = "";
  for (let i = 0; i < s.length; i++) {
    const currentPalindrom1 = getPalindromLength(s, i, i);
    if (currentPalindrom1.length > palindrom.length) {
      palindrom = currentPalindrom1;
    }
    const currentPalindrom2 = getPalindromLength(s, i, i + 1);
    if (currentPalindrom2.length > palindrom.length) {
      palindrom = currentPalindrom2;
    }
  }
  return palindrom;
};

function getPalindromLength(s, start, end) {
  let palindrom = "";
  while (start >= 0 && end < s.length) {
    if (s[start] === s[end]) {
      palindrom = s.slice(start, end + 1);
      start--;
      end++;
    } else {
      break;
    }
  }
  return palindrom;
}

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Palindrom Stings");
console.log("---------------------------------------");

const input = "babad";
console.log("input: " + input);
console.log(longestPalindrome(input));
console.log("---------------------------------------");
