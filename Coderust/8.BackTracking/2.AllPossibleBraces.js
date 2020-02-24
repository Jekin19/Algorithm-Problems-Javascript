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

let print_all_braces_recursive = function(n) {
  let result = [];
  if (n < 1) {
    return result;
  }
  print_all_braces_rec(result, n, 1, 0, "{");
  return result;
};

let print_all_braces_rec = function(result, n, leftCount, rightCount, currentResult) {
  if (leftCount + rightCount === n * 2) {
    result.push(currentResult);
  }

  if (leftCount < n) {
    print_all_braces_rec(result, n, leftCount + 1, rightCount, currentResult + "{");
  }

  if (rightCount < leftCount) {
    print_all_braces_rec(result, n, leftCount, rightCount + 1, currentResult + "}");
  }
};

let output = print_all_braces(3);
console.log(output);

output = print_all_braces_recursive(3);
console.log(output);
