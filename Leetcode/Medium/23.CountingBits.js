// https://leetcode.com/problems/counting-bits/

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let result = [];
  for (let i = 0; i <= num; i++) {
    result.push(countOfOneBit(i));
  }
  return result;
};

/**
 * @param {number} num
 * @return {count}
 */
var countOfOneBit = function(num) {
  let count = 0;
  while (num > 0) {
    if ((num & 1) === 1) {
      count++;
    }
    num = num >> 1;
  }
  return count;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Counting bits");
console.log("---------------------------------------");

const input = 5;
console.log("input: " + input);
console.log(countBits(input));
console.log("---------------------------------------");
