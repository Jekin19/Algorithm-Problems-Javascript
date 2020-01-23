let permute_string = function(input = "") {
  if (!input) {
    return [""];
  }

  let result = [];
  for (let i = 0; i < input.length; i++) {
    let newInput =
      i === input.length - 1 ? input.substring(0, i) : input.substring(0, i) + input.substring(i + 1, input.length);
    let stack = [{ newInput, currentResult: input[i] }];
    while (stack.length > 0) {
      let current = stack.shift();
      if (current.newInput.length === 0) {
        result.push(current.currentResult);
      } else {
        for (let j = 0; j < current.newInput.length; j++) {
          let newInput =
            j === current.newInput.length - 1
              ? current.newInput.substring(0, j)
              : current.newInput.substring(0, j) + current.newInput.substring(j + 1, current.newInput.length);
          stack.push({ newInput, currentResult: current.currentResult + current.newInput[j] });
        }
      }
    }
  }
  return result;
};

let input = "abcd";
console.log(permute_string(input));
