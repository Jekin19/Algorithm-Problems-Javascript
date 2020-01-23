let findPalindrome = function(input, start, end) {
  let count = 0;
  while (start >= 0 && end < input.length) {
    if (input[start] === input[end]) {
      console.log(input.substring(start, end + 1));
      count++;
      start--;
      end++;
    } else {
      break;
    }
  }
  return count;
};

let find_all_palindrome_substrings = function(input) {
  if (!input) {
    return -1;
  }
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    count += findPalindrome(input, i - 1, i + 1);
    count += findPalindrome(input, i, i + 1);
  }
  return count;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("All Palindrome Substrings");
console.log("---------------------------------------");

let palindrom = "aabbbaa";

let palindrom_count = find_all_palindrome_substrings(palindrom);
console.log("Total palindrom substrings: ", palindrom_count);
