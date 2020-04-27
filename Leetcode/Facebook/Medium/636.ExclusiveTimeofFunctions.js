/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(0);
  }
  let first = logs.shift().split(":");
  result[0] = Number(first[0]);
  let stack = [Number(first[0])];
  let previous = Number(first[2]);
  for (let log of logs) {
    const current = log.split(":");
    if (current[1] === "start") {
      if (stack.length > 0) {
        result[stack[stack.length - 1]] += Number(current[2]) - previous;
      }
      stack.push(Number(current[0]));
      previous = Number(current[2]);
    } else {
      result[stack.pop()] += Number(current[2]) - previous + 1;
      previous = Number(current[2]) + 1;
    }
  }
  return result;
};

console.log(
  JSON.stringify(exclusiveTime(3, ["0:start:0", "1:start:2", " 2:start:6", "2:end:8", "1:end:10", "0:end:12"]))
);
