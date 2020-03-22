/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let result = "";
  if (!s) {
    return result;
  }

  let i = s.length - 1;
  let current = "";
  let stackofBrackets = [];
  let stackOfStrings = [];
  let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  while (i >= 0) {
    if (s[i] === "]") {
      stackofBrackets.push("]");
      if (current !== "") {
        stackOfStrings.push(current);
      }
      stackOfStrings.push("");
      current = "";
    } else if (characters.includes(s[i])) {
      current = s[i] + current;
    } else if (s[i] === "[") {
      stackofBrackets.pop();
      while (stackOfStrings.length > 0) {
        let temp = stackOfStrings.pop();
        if (temp === "") {
          break;
        }
        current = current + temp;
      }
    } else {
      let num = s[i];
      while (i - 1 >= 0 && (Number.parseInt(s[i - 1]) || s[i - 1] === "0")) {
        num = s[i - 1] + num;
        i--;
      }
      num = Number.parseInt(num);
      let newCurrent = current;
      for (let j = 1; j < num; j++) {
        newCurrent = newCurrent + current;
      }
      current = newCurrent;
    }
    i--;
  }

  while (stackOfStrings.length > 0) {
    result = result + stackOfStrings.pop();
  }
  return current + result;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Decode string");
console.log("---------------------------------------");

const input = "100[a]";
console.log("input: " + input);
console.log(decodeString(input));
console.log("---------------------------------------");
