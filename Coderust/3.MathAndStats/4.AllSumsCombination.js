// All Sum Combinations
// Given a positive integer, return all possible sum combinations for this number using positive integers.

let print_all_sum = function(target) {
  let result = [];
  if (target < 1) {
    return result;
  }

  for (let i = 1; i < target; i++) {
    let stack = [{ currentIndex: i, result: [i], currentSum: i }];
    while (stack.length > 0) {
      let current = stack.shift();
      for (let j = current.currentIndex; j < target; j++) {
        let nextSum = current.currentSum + j;
        if (nextSum === target) {
          result.push(current.result.concat([j]));
        } else if (nextSum < target) {
          stack.push({ currentIndex: j, result: current.result.concat([j]), currentSum: nextSum });
        }
      }
    }
  }

  return result;
};

// Recursive
let print_all_sum_recursive = function(target) {
  let result = [];
  if (target < 1) {
    return result;
  }
  print_all_sum_rec(1, [], result, target);
  return result;
};

let print_all_sum_rec = function(start, currentResult, result, target) {
  const sum = currentResult.reduce((accumulator, value) => accumulator + value, 0);
  if (sum <= target) {
    if (sum === target) {
      result.push(currentResult);
      return;
    }
    for (let i = start; i < target; i++) {
      const newResult = currentResult.concat([i]);
      print_all_sum_rec(i, newResult, result, target);
    }
  }
};

let n = 5;
let result = print_all_sum(n);
console.log(JSON.stringify(result));
console.log(JSON.stringify(print_all_sum_recursive(n)));
