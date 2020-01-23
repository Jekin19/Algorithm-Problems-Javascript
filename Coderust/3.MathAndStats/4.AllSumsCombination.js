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

let n = 5;
let result = print_all_sum(n);
console.log(result);