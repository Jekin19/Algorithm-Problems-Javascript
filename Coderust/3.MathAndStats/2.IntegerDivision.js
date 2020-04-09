let integer_divide = function (dividend, divisor) {
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

let integer_divide_iterative = function (x, y) {
  //TODO: Write - Your - Code
  let dividend = x;
  let finalQuotient = 0;

  while (dividend >= y) {
    let quotient = 1;
    let temp = y;
    while (temp + temp <= dividend) {
      quotient = quotient + quotient;
      temp = temp + temp;
      if (temp === dividend) {
        return finalQuotient + quotient;
      }
    }
    dividend = dividend - temp;
    finalQuotient = finalQuotient + quotient;
  }
  return finalQuotient;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Divide Integer");
console.log("---------------------------------------");

console.log("Divide (40, 4) = " + integer_divide(40, 4));
console.log("Divide (55, 11) = " + integer_divide(55, 11));
console.log("Divide (54, 2) = " + integer_divide(54, 2));
console.log("Divide (51, 13) = " + integer_divide(51, 13));
console.log("Divide (51, 0) = " + integer_divide(51, 0));
