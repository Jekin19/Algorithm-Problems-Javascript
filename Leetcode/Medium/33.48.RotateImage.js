// https://leetcode.com/problems/rotate-image/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  if (!matrix || matrix.length === 0) {
    return;
  }
  reverse(matrix);
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    let currentRow = row;
    let currentCol = col;
    while (currentRow < matrix.length && currentCol >= 0) {
      [matrix[row][currentCol], matrix[currentRow][col]] = [matrix[currentRow][col], matrix[row][currentCol]];
      currentRow++;
      currentCol--;
    }
    row++;
    col--;
  }
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function reverse(matrix) {
  let colLength = matrix[0].length - 1;
  matrix.forEach(matrixRow => {
    let start = 0;
    let end = colLength;
    while (start < end) {
      [matrixRow[start], matrixRow[end]] = [matrixRow[end], matrixRow[start]];
      start++;
      end--;
    }
  });
}

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Rotate Image");
console.log("---------------------------------------");
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(rotate(matrix));
console.log(JSON.stringify(matrix));
