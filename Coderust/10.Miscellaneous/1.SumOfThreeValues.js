let find_sum_of_three = function(arr, required_sum) {
  if (!arr) {
    return false;
  }

  var array = arr.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    let j = i + 1;
    let k = array.length - 1;
    while (j < k) {
      let currentSum = array[i] + array[j] + array[k];
      if (currentSum === required_sum) {
        return true;
      } else if (currentSum < required_sum) {
        j++;
      } else {
        k--;
      }
    }
  }

  return false;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Sum of Three");
console.log("---------------------------------------");
let arr = [-25, -10, -7, -3, 2, 4, 8, 10];
console.log("find_sum_of_three(arr, -8) -- >", find_sum_of_three(arr, -8));
console.log("find_sum_of_three(arr, -25) -- >", find_sum_of_three(arr, -25));
console.log("find_sum_of_three(arr, 0) -- >", find_sum_of_three(arr, 0));
console.log("find_sum_of_three(arr, -42) -- >", find_sum_of_three(arr, -42));
console.log("find_sum_of_three(arr, 22) -- >", find_sum_of_three(arr, 22));
console.log("find_sum_of_three(arr, -7) -- >", find_sum_of_three(arr, -7));
console.log("find_sum_of_three(arr, -3) -- >", find_sum_of_three(arr, -3));
console.log("find_sum_of_three(arr, 2) -- >", find_sum_of_three(arr, 2));
console.log("find_sum_of_three(arr, 4) -- >", find_sum_of_three(arr, 4));
console.log("find_sum_of_three(arr, 8) -- >", find_sum_of_three(arr, 8));
console.log("find_sum_of_three(arr, 7) -- >", find_sum_of_three(arr, 7));
console.log("find_sum_of_three(arr, 1) -- >", find_sum_of_three(arr, 1));
