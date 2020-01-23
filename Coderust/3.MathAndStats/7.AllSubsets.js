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

let get_all_subsets = function(v, sets) {
  if (!v) {
    return sets;
  }

  let possibleCounts = Math.pow(2, v.length);
  for (let i = 0; i < possibleCounts; i++) {
    let nonZeroIndices = get_nonzero_indices(i);
    let currentResult = [];
    nonZeroIndices.forEach(index => currentResult.push(v[index]));
    sets.push(currentResult);
  }
  return sets;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find All Subsets");
console.log("---------------------------------------");
let v = [8, 13, 3, 22, 17, 39, 87, 45, 36];
let subsets = [];
get_all_subsets(v, subsets);
console.log("****Total*****  " + subsets.length);
console.log(subsets);
