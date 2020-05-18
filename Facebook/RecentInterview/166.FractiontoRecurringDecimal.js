// https://leetcode.com/problems/fraction-to-recurring-decimal/submissions/

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  if (numerator === 0) {
    return "0";
  }

  let fraction = "";
  if ((numerator < 0) ^ (denominator < 0)) {
    fraction = "-";
  }

  let dividend = Math.abs(numerator);
  let divisor = Math.abs(denominator);
  fraction += Math.floor(dividend / divisor);
  let remainder = dividend % divisor;
  if (remainder === 0) {
    return fraction;
  } else {
    fraction += ".";
  }
  let map = new Map();
  while (remainder != 0) {
    if (map.has(remainder)) {
      fraction = fraction.slice(0, map.get(remainder)) + "(" + fraction.slice(map.get(remainder));
      fraction += ")";
      break;
    }
    map.set(remainder, fraction.length);
    remainder *= 10;
    fraction += Math.floor(remainder / divisor);
    remainder %= divisor;
  }
  return fraction;
};
