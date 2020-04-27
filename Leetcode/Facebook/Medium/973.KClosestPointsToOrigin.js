// https://leetcode.com/problems/k-closest-points-to-origin/

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  let map = new Map();
  points.forEach((point) => {
    let distance = Math.sqrt(point[0] * point[0] + point[1] * point[1]);
    map.set(point, distance);
  });

  let sortedEntries = Array.from(map.entries()).sort((a, b) => a[1] - b[1]);
  return sortedEntries.slice(0, K).map((entry) => entry[0]);
};
// Complexity is O(nlog(n));
// Ideally use Priority Queue and complexity will be O(nlog(K));

console.log(
  JSON.stringify(
    kClosest(
      [
        [1, 3],
        [-2, 2],
      ],
      1
    )
  )
);

console.log(
  JSON.stringify(
    kClosest(
      [
        [3, 3],
        [5, -1],
        [-2, 4],
      ],
      2
    )
  )
);
