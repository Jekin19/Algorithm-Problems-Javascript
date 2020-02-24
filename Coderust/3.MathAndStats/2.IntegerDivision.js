let integer_divide = function(dividend, divisor) {
  if (!dividend || !divisor) {
    return -1;
  }

  if (divisor === 1) {
    return dividend;
  }

  if (dividend < divisor) {
    return 0;
  }

  if (divisor === dividend) {
    return 1;
  }

  let temp = divisor;
  let quotient = 1;
  while (temp + temp < dividend) {
    temp = temp + temp;
    quotient = quotient + quotient;
  }

  if (temp + temp > dividend) {
    quotient += integer_divide(Math.floor(dividend - temp), divisor);
  }
  return quotient;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Divide Integer");
console.log("---------------------------------------");

console.log("Divide (55, 11) = " + integer_divide(55, 11));
console.log("Divide (54, 2) = " + integer_divide(54, 2));
console.log("Divide (51, 13) = " + integer_divide(51, 13));
console.log("Divide (51, 0) = " + integer_divide(51, 0));
