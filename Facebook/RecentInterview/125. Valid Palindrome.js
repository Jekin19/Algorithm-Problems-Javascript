/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (!s[start].toLowerCase().match(/[a-z0-9]/g)) {
      start++;
    } else if (!s[end].toLowerCase().match(/[a-z0-9]/g)) {
      end--;
    } else if (s[start].toLowerCase() !== s[end].toLowerCase()) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
};

console.log(isPalindrome("0P"));
