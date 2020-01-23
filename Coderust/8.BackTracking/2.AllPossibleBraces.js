let print_all_braces = function(n) {
  let result = [];
  if (n < 1) {
    return result;
  }

  const stack = [{ leftCount: 1, rightCount: 0, braces: "{" }];
  while (stack.length > 0) {
    const current = stack.pop();
    // if rightCount == n we found the result
    if (current.rightCount === n) {
      result.push(current.braces);
      continue;
    }

    // you can add left brace till max i.e. n
    if (current.leftCount < n) {
      stack.push({
        leftCount: current.leftCount + 1,
        rightCount: current.rightCount,
        braces: current.braces.concat("{")
      });
    }

    // you can add righ brace only if left brace exists
    if (current.rightCount < current.leftCount) {
      stack.push({
        leftCount: current.leftCount,
        rightCount: current.rightCount + 1,
        braces: current.braces.concat("}")
      });
    }
  }

  return result;
};

let output = print_all_braces(3);
console.log(output);
