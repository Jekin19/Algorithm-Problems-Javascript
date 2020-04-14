// https://leetcode.com/problems/interval-list-intersections/

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
  let a = (b = 0);
  let result = [];
  while (a < A.length && b < B.length) {
    let low = Math.max(A[a][0], B[b][0]);
    let high = Math.min(A[a][1], B[b][1]);
    if (low <= high) {
      result.push([low, high]);
    }

    if (A[a][1] < B[b][1]) {
      a++;
    } else {
      b++;
    }
  }
  return result;
};

console.log(JSON.stringify(intervalIntersection([[5, 10]], [[5, 6]])));
