// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }
  let rowLength = grid.length;
  let colLength = grid[0].length;
  let result = 0;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (grid[row][col] === "1") {
        result++;
        markWholeIslandAsVisited(grid, rowLength, colLength, row, col);
      }
    }
  }
  return result;
};

function markWholeIslandAsVisited(grid, rowLength, colLength, row, col) {
  if (row < 0 || col < 0 || row >= rowLength || col >= colLength) {
    return;
  }

  if (grid[row][col] === "1") {
    grid[row][col] = "0";
    let direction1 = [1, -1, 0, 0];
    let direction2 = [0, 0, 1, -1];
    for (let i = 0; i < direction1.length; i++) {
      markWholeIslandAsVisited(grid, rowLength, colLength, row + direction1[i], col + direction2[i]);
    }
  }
}

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Maximal Square");
console.log("---------------------------------------");
let matrix = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "1", "0"],
  ["0", "0", "0", "0", "1"]
];
console.log(numIslands(matrix));
