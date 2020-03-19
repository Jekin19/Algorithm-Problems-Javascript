// https://leetcode.com/problems/counting-bits/
// https://www.programcreek.com/2015/03/leetcode-counting-bits-java/

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
 * @return {number[]}
 */
var countBits2 = function(num) {
  const result = [0];
  let incrementor = 1;
  let pow = 1;
  for (let i = 1; i <= num; i++) {
    if (i === pow) {
      result.push(1);
      pow = pow << 1;
      incrementor = 1;
    } else {
      result.push(result[incrementor] + 1);
      incrementor++;
    }
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

const input = 10;
console.log("input: " + input);
console.log(countBits(input));
console.log(countBits2(input));
console.log("---------------------------------------");
