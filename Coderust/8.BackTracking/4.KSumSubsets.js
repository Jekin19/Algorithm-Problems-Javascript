let get_k_sum_subsets = function(v = [], target_sum, sets) {
  let array = v.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    const stack = [{ sum: array[i], result: [array[i]], index: i }];
    while (stack.length > 0) {
      const current = stack.pop();
      // if sum equals target got our result
      if (current.sum === target_sum) {
        sets.push(current.result);
      } else if (current.sum < target_sum) {
        // keep looping from next element to end of array till currentSum is less than target.
        for (let j = current.index + 1; j < array.length; j++) {
          stack.push({ sum: current.sum + array[j], result: current.result.concat([array[j]]), index: j });
        }
      }
    }
  }
  return sets;
};

/**
 * Returns array of index where the bit is 1.
 * @param n number to get index where bit is 1.
 */
// e.g. if n = 5 (101) ouput is [0,2]
let get_nonzero_indices = function(n) {
  let result = [];
  let index = 0;
  while (n) {
    if ((n & 1) === 1) {
      result.push(index);
    }
    index++;
    n = n >> 1;
  }
  return result;
};

let get_all_subsets = function(v, k, sets) {
  if (!v) {
    return sets;
  }

  let possibleCounts = Math.pow(2, v.length);
  for (let i = 0; i < possibleCounts; i++) {
    let nonZeroIndices = get_nonzero_indices(i);
    let currentResult = [];
    nonZeroIndices.forEach(index => currentResult.push(v[index]));
    const sum = currentResult.reduce((accumulator, value) => accumulator + value, 0);
    if (sum === k) {
      sets.push(currentResult);
    }
  }
  return sets;
};

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Subset Sum");
console.log("---------------------------------------");
let v = [8, 13, 3, 22, 17, 39, 87, 45, 36];
let subsets = [];
console.log("Solution 1...");
get_k_sum_subsets(v, 125, subsets);
console.log(subsets.length);
for (let i = 0; i < subsets.length; i++) {
  let set = subsets[i];
  let tempArr = [];
  set.forEach(function(val) {
    tempArr.push(val);
  });
  console.log(tempArr);
}
subsets = [];
console.log("Solution 2 ...");
get_all_subsets(v, 125, subsets);
console.log(subsets.length);
for (let i = 0; i < subsets.length; i++) {
  let set = subsets[i];
  let tempArr = [];
  set.forEach(function(val) {
    tempArr.push(val);
  });
  console.log(tempArr);
}
console.log("++++++ Test Done Successfully ++++++");
