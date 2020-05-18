/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let aLength = a.length - 1;
  let bLength = b.length - 1;
  let carry = 0;
  let result = "";
  while (aLength >= 0 || carry || bLength >= 0) {
    let first = aLength >= 0 ? Number(a[aLength]) : 0;
    let second = bLength >= 0 ? Number(b[bLength]) : 0;
    let sum = first + second;
    let tempCarry = sum > 1 ? 1 : 0;
    sum = sum > 1 ? 0 : sum;
    sum = sum + carry;
    carry = sum > 1 ? 1 : tempCarry;
    sum = sum > 1 ? 0 : sum;
    result = sum + result;
    aLength--;
    bLength--;
  }
  let set = new Set();
  for (let num of set.values()) return result;
};

console.log(addBinary("11", "1"));
