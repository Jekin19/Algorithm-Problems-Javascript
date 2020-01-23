// Given a chess board of size N x N,
// determine how many ways N queens can be placed on this board so that no two queens attack each other.

let nonVisitedGrid = function(gridLength) {
  const grid = [];
  for (let i = 0; i < gridLength; i++) {
    let temp = [];
    for (let j = 0; j < gridLength; j++) {
      temp.push(false);
    }
    grid.push(temp);
  }
  return grid;
};

let markVisitedNodes = function(i, j, grid) {
  const gridLength = grid.length;

  // making a clone of grid, you can use map or lodash clone function as well
  let newGrid = JSON.parse(JSON.stringify(grid));

  // mark current row vistied
  for (let col = 0; col < gridLength; col++) {
    newGrid[i][col] = true;
  }

  // mark current col vistied
  for (let row = 0; row < gridLength; row++) {
    newGrid[row][j] = true;
  }

  // mark right diagonal down visited
  x = i + 1;
  y = j + 1;
  while (x < gridLength && y < gridLength) {
    newGrid[x][y] = true;
    x++;
    y++;
  }

  // mark left diagonal down visited
  x = i + 1;
  y = j - 1;
  while (x < gridLength && y >= 0) {
    newGrid[x][y] = true;
    x++;
    y--;
  }

  return newGrid;
};

let solve_n_queens = function(n, res) {
  if (n < 4) {
    return res;
  }

  // Traverse columns for 1st row as start. since we need N queens means each row needs one queen.
  for (let col = 0; col < n; col++) {
    const stack = [{ row: 0, col, visitedNodes: markVisitedNodes(0, col, nonVisitedGrid(n)), result: [col] }];
    while (stack.length > 0) {
      const current = stack.pop();
      const nextRow = current.row + 1;
      // Till next row is in bounds
      if (nextRow < n) {
        for (let nextCol = 0; nextCol < n; nextCol++) {
          if (!current.visitedNodes[nextRow][nextCol]) {
            stack.push({
              row: nextRow,
              col: nextCol,
              visitedNodes: markVisitedNodes(nextRow, nextCol, current.visitedNodes),
              result: current.result.concat([nextCol])
            });
          }
        }
      } else {
        res.push(current.result);
      }
    }
  }
  return res;
};

console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("n queens");
console.log("---------------------------------------");
let results = [];
solve_n_queens(4, results);
console.log("Total Solutions Count: " + results.length);
for (let i = 0; i < results.length; i++) {
  console.log(results[i]);
}
console.log("++++++ Test Done Successfully ++++++");
