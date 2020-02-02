// https://leetcode.com/problems/search-a-2d-matrix-ii/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix || matrix.length === 0) {
    return false;
  }

  let rowLength = matrix.length;
  let colLength = matrix[0].length;
  let row = 0;
  let col = colLength - 1;
  while (row < rowLength && col >= 0) {
    if (target === matrix[row][col]) {
      return true;
    } else if (target > matrix[row][col]) {
      row++;
    } else {
      col--;
    }
  }
  return false;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Matrix Search");
console.log("---------------------------------------");
let matrix = [
  [1, 5, 45, 80, 81],
  [6, 7, 48, 82, 83],
  [20, 22, 49, 85, 86],
  [21, 23, 50, 90, 92]
];

console.log("81 is at..");
let output = searchMatrix(matrix, 81);
console.log(output);
console.log("92 is at..");
output = searchMatrix(matrix, 92);
console.log(output);
console.log("1 is at..");
output = searchMatrix(matrix, 1);
console.log(output);
console.log("24 is at..");
output = searchMatrix(matrix, 24);
console.log(output);
console.log("++++++ Test Done Successfully ++++++");
