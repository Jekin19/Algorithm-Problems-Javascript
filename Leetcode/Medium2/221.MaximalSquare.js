// https://leetcode.com/problems/maximal-square/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let maxLength = 0;
  if (!matrix || matrix.length === 0) {
    return maxLength;
  }

  let rowLength = matrix.length;
  let colLength = matrix[0].length;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (matrix[row][col] === "1") {
        let leftCell = row - 1 >= 0 ? Number.parseInt(matrix[row - 1][col]) : 0;
        let upCell = col - 1 >= 0 ? Number.parseInt(matrix[row][col - 1]) : 0;
        let leftDiagonalCell = row - 1 >= 0 && col - 1 >= 0 ? Number.parseInt(matrix[row - 1][col - 1]) : 0;
        let currentLength = Math.min(leftCell, upCell, leftDiagonalCell) + 1;
        matrix[row][col] = currentLength;
        maxLength = Math.max(currentLength, maxLength);
      }
    }
  }
  return maxLength * maxLength;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Maximal Square");
console.log("---------------------------------------");
let matrix = [
  ["1", "0", "1", "1", "0", "1"],
  ["1", "1", "1", "1", "1", "1"],
  ["0", "1", "1", "0", "1", "1"],
  ["1", "1", "1", "0", "1", "0"],
  ["0", "1", "1", "1", "1", "1"],
  ["1", "1", "0", "1", "1", "1"]
];
console.log(maximalSquare(matrix));
