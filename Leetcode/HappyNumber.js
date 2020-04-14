/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let loopCounter = 0;
  while (loopCounter < 50) {
    let current = n;
    let runningSum = 0;
    while (current > 0) {
      let temp = current % 10;
      runningSum += Math.floor(temp * temp);
      current = Math.floor(current / 10);
    }
    if (runningSum === 1) {
      return true;
    }
    console.log(runningSum);
    n = runningSum;
    loopCounter++;
  }
  return false;
};

console.log(isHappy(3));
