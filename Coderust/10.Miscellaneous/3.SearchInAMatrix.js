let search_in_matrix = function(matrix, value) {
  if (!matrix) {
    return [-1, -1];
  }

  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    let current = matrix[row][col];
    if (current === value) {
      return [row, col];
    } else if (value < current) {
      col--;
    } else {
      row++;
    }
  }
  return [-1, -1];
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
output = search_in_matrix(matrix, 81);
console.log(output);
console.log("92 is at..");
output = search_in_matrix(matrix, 92);
console.log(output);
console.log("1 is at..");
output = search_in_matrix(matrix, 1);
console.log(output);
console.log("++++++ Test Done Successfully ++++++");
