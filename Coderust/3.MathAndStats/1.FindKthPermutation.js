let factorial = function(x) {
  let result = 1;
  for (let i = x; i > 1; i--) {
    result = result * x;
  }
  return result;
};

let find_kth_permutation = function(v = [], k) {
  if (!v || !k) {
    return -1;
  }

  let result = "";
  for (let i = 0; i < v.length; i++) {
    let factorialCombinations = factorial(v.length - 1);
    let selectedValue = Math.floor((k - 1) / factorialCombinations);
    result = result + v[selectedValue];
    v.splice(selectedValue, 1);
    k = k - selectedValue * factorialCombinations;
  }
  return Number(result);
};

let get_permutation = function(n, k) {
  let v = [];
  for (let i = 0; i < n; i++) {
    v.push(i + 1);
  }
  console.log(v);
  return find_kth_permutation(v, k);
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find Kth Permutation");
console.log("---------------------------------------");
let x = 3;
let n = factorial(x);
for (let i = 1; i <= n; i++) {
  let temp = get_permutation(x, i);
  console.log(i + "th permutation = ", temp);
}
