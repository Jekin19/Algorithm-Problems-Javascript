//leetcode.com/problems/valid-palindrome-ii
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let [start, end] = isPalindrom(s, 0, s.length - 1);
  if (start >= end) {
    return true;
  } else {
    let [newStart, newEnd] = isPalindrom(s, start + 1, end);
    if (newStart >= newEnd) {
      return true;
    }

    [newStart, newEnd] = isPalindrom(s, start, end - 1);
    if (newStart >= newEnd) {
      return true;
    }
  }
  return false;
};

function isPalindrom(s, start, end) {
  while (start < end) {
    if (s[start] === s[end]) {
      start++;
      end--;
    } else {
      return [start, end];
    }
  }
  return [start, end];
}

console.log(
  validPalindrome(
    "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
  )
);

// console.log(isPalindrom("aba", 0, 2));
