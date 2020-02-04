/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let stack = [];
  if (!digits) {
    return stack;
  }
  let map = new Map();
  map.set("1", "");
  map.set("2", "abc");
  map.set("3", "def");
  map.set("4", "ghi");
  map.set("5", "jkl");
  map.set("6", "mno");
  map.set("7", "pqrs");
  map.set("8", "tuv");
  map.set("9", "wxyz");
  let i = 0;
  while (digits[i] === "1") {
    i++;
  }
  if (i >= digits.length) {
    return result;
  }

  const firstDigitAlphabets = map.get(digits[i]);
  for (let char of firstDigitAlphabets) {
    stack.push(char);
  }
  i++;

  while (i < digits.length) {
    const currentAlphabets = map.get(digits[i]);
    if (!currentAlphabets) {
      i++;
      continue;
    }
    let currentStack = [];
    while (stack.length > 0) {
      const popElement = stack.pop();
      for (let curr of currentAlphabets) {
        currentStack.push(popElement + curr);
      }
    }
    stack = currentStack;
    i++;
  }
  return stack;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Letter combination of a phone number");
console.log("---------------------------------------");

const input = "112143";
console.log("input: " + input);
console.log(letterCombinations(input));
console.log("------------------------");
