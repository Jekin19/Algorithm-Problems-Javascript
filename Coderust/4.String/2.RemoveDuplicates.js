let remove_duplicates = function(str = "") {
  if (!str) {
    return str;
  }

  let i = 0;
  let hashSet = new Set();
  while (i < str.length) {
    if (hashSet.has(str[i])) {
      // remove that character from string.
      str = str.substring(0, i) + str.substring(i + 1, str.length);
    } else {
      hashSet.add(str[i]);
      i++;
    }
  }
  return str;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Remove Duplicates");
console.log("---------------------------------------");

console.log("aabbccddefffgfijk", remove_duplicates("aabbccddefffgfijk"));
console.log("Hello World!", remove_duplicates("Hello World!"));
console.log(
  "   Quick brown fox jumped   over lazy   dog           ",
  remove_duplicates("   Quick brown fox jumped   over lazy   dog           ")
);
console.log("aaaaaaaaaaa", remove_duplicates("aaaaaaaaaaa"));
console.log("aaaaaaaaaaabbbbbbbb", remove_duplicates("aaaaaaaaaaabbbbbbbb"));
