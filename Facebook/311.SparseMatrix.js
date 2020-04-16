/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function (A, B) {
  if (A.length === 0 || B.length === 0) {
    return [];
  }

  let results = [];
  for (let i = 0; i < A.length; i++) {
    let rowOfA = [];
    // Populate ith row of A
    for (let col = 0; col < A[0].length; col++) {
      rowOfA.push(A[i][col]);
    }

    let result = [];
    // Go across B, for each row, top to bottom i.e. column wise
    for (let col = 0; col < B[0].length; col++) {
      let sum = 0;
      for (let row = 0; row < B.length; row++) {
        let a = rowOfA[row];
        let b = B[row][col];
        sum += a * b;
      }
      result.push(sum);
    }
    results.push(result);
  }
  return results;
};

const matrix1 = [[2, 3]];
const matrix2 = [
  [4, 6, 8],
  [5, 7, 9],
];
console.log(JSON.stringify(multiply(matrix1, matrix2)));
