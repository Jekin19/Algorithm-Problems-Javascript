let make_zeroes = function(matrix) {
  if (!matrix) {
    return;
  }
  let rows = matrix.length;
  let cols = matrix[0].length;
  let rowSet = new Set();
  let colSet = new Set();

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === 0) {
        rowSet.add(row);
        colSet.add(col);
      }
    }
  }

  // mark rows zero
  for (let r of rowSet.values()) {
    for (let i = 0; i < cols; i++) {
      matrix[r][i] = 0;
    }
  }

  // mark columns zero
  for (let c of colSet.values()) {
    for (let j = 0; j < rows; j++) {
      matrix[j][c] = 0;
    }
  }
  return matrix;
};

let create_random_matrix = function(rows, cols) {
  let v = [];

  for (let i = 0; i < rows; i++) {
    v.push([]);
    for (let j = 0; j < cols; j++) {
      let t = Math.floor(Math.random() * 100 + 1);
      v[i].push(t);
      if (t <= 5) {
        v[i][j] = 0;
      }
    }
  }
  return v;
};

let print_matrix = function(m) {
  for (let l in m) {
    console.log(m[l]);
  }
};

let is_row_or_col_zero = function(matrix, r, c) {
  if (!matrix || matrix.length === 0) {
    return false;
  }

  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let i = 0; i < cols; i++) {
    if (matrix[r][i] === 0) {
      return true;
    }
  }

  for (let i = 0; i < rows; i++) {
    if (matrix[i][c] === 0) {
      return true;
    }
  }

  return false;
};

let matrix = [
  [1, 5, 45, 0, 81],
  [6, 7, 2, 82, 8],
  [20, 22, 49, 5, 5],
  [0, 23, 50, 4, 92]
];
print_matrix(matrix);
let rows = matrix.length;
let cols = 0;
if (rows > 0) {
  cols = matrix[0].length;
}
let mat_copy = [];
for (let i = 0; i < rows; i++) {
  mat_copy.push(matrix[i].slice());
}
make_zeroes(matrix);
console.log("");
console.log("++++++ New Matrix +++++++");
print_matrix(matrix);
matrix = create_random_matrix(5, 5);
console.log("");
console.log("");
print_matrix(matrix);
rows = matrix.length;
cols = 0;
if (rows > 0) {
  cols = matrix[0].length;
}
mat_copy = [];
for (let i = 0; i < rows; i++) {
  mat_copy.push(matrix[i].slice());
}
make_zeroes(matrix);
console.log("");
console.log("++++++ New Matrix +++++++");
console.log("");
print_matrix(matrix);
console.log("");
console.log("++++++ Test Done Successfully ++++++");
