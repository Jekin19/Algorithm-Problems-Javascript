// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let result = [];
  if (!intervals || intervals.length === 0) {
    return result;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  result.push(intervals.shift());
  for (let interval of intervals) {
    const topInterval = result[result.length - 1];
    if (topInterval[1] >= interval[0]) {
      result.pop();
      result.push([topInterval[0], Math.max(topInterval[1], interval[1])]);
    } else {
      result.push(interval);
    }
  }
  return result;
};

console.log(
  JSON.stringify(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  )
);
