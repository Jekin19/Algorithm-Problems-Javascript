// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let result = [];
  if (!intervals || intervals.length === 0) {
    return result;
  }

  intervals.sort((a, b) => (a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0]));
  result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const lastResultElem = result[result.length - 1];
    if (lastResultElem[1] >= intervals[i][0]) {
      lastResultElem[1] = Math.max(intervals[i][1], lastResultElem[1]);
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Merge Intervals");

const input = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
];
console.log("input: " + JSON.stringify(input));
console.log(JSON.stringify(merge(input)));

const input2 = [
  [1, 4],
  [4, 5]
];
console.log("input2: " + JSON.stringify(input2));
console.log(JSON.stringify(merge(input2)));

const input3 = [
  [1, 3],
  [2, 6],
  [6, 4],
  [15, 18]
];
console.log("input3: " + JSON.stringify(input3));
console.log(JSON.stringify(merge(input3)));

const input4 = [
  [1, 4],
  [0, 4]
];
console.log("input4: " + JSON.stringify(input4));
console.log(JSON.stringify(merge(input4)));

const input5 = [
  [1, 4],
  [0, 0]
];
console.log("input5: " + JSON.stringify(input5));
console.log(JSON.stringify(merge(input5)));
console.log("---------------------------------------");
