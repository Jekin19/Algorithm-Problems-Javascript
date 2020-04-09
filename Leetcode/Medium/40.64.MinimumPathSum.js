// https://leetcode.com/problems/minimum-path-sum/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let count = 0;
  if (!grid && grid.length === 0) {
    return count;
  }

  let rowLength = grid.length;
  let colLength = grid[0].length;
  let runningSum = 0;

  let row = [];
  // Iterate over 1st row. As we can move only right the sum is previous + current.
  for (let i = 0; i < colLength; i++) {
    runningSum += grid[0][i];
    grid[0][i] = runningSum;
  }

  runningSum = 0;
  // Iterate over 1st col
  for (let i = 0; i < rowLength; i++) {
    runningSum += grid[i][0];
    grid[i][0] = runningSum;
  }

  for (let row = 1; row < rowLength; row++) {
    for (let col = 1; col < colLength; col++) {
      grid[row][col] = Math.min(grid[row - 1][col], grid[row][col - 1]) + grid[row][col];
    }
  }

  return grid[rowLength - 1][colLength - 1];
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Minimum Path Sum");
console.log("---------------------------------------");
let matrix = [
  [1, 3, 1, 1],
  [1, 5, 1, 1],
  [4, 2, 1, 1]
];

console.log(minPathSum(matrix));
