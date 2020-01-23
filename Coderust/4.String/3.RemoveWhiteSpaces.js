let remove_white_spaces = function(s) {
  if (!s) {
    return s;
  }
  let reader = 0;
  let writer = 0;
  while (reader < s.length && writer < s.length) {
    if (s[writer] === " ") {
      reader = writer;
      // Search next avaialable non space to swap.
      while (reader < s.length && s[reader] === " ") {
        reader++;
      }
      // if reader i.e. non space element found then swap.
      if (reader < s.length) {
        let temp = s[reader];
        s[reader] = s[writer];
        s[writer] = temp;
      } else {
        break;
      }
    }
    writer++;
  }
  return s.join("").substring(0, writer);
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Remove White Spaces");
console.log("---------------------------------------");

console.log("Hello World!", remove_white_spaces(Array.from("Hello World!")));
console.log(
  "   Quick brown fox jumped   over lazy   dog           ",
  remove_white_spaces(Array.from("   Quick brown fox jumped   over lazy   dog           "))
);
