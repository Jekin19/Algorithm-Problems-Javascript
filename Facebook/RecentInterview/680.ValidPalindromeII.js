/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] === s[end]) {
      start++;
      end--;
    } else {
      return isPalindrom(s, start + 1, end) || isPalindrom(s, start, end - 1);
    }
  }
  return true;
};

function isPalindrom(s, start, end) {
  while (start < end) {
    if (s[start] === s[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}
