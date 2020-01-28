// https://leetcode.com/problems/unique-paths/
// https://www.programcreek.com/2014/05/leetcode-unique-paths-java/

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
var uniquePaths = function(row, col) {
  let count = 0;
  if (!row || !col) {
    return count;
  }

  let stack = [{ currentRow: 1, currentCol: 1 }];
  while (stack.length > 0) {
    const current = stack.pop();

    if (current.currentRow === row && current.currentCol === col) {
      count++;
      continue;
    }

    // Go Down
    if (current.currentRow < row) {
      stack.push({ currentCol: current.currentCol, currentRow: current.currentRow + 1 });
    }

    // Go Right
    if (current.currentCol < col) {
      stack.push({ currentCol: current.currentCol + 1, currentRow: current.currentRow });
    }
  }

  return count;
};

var uniquePathsInverse = function(m, n) {
  if (!n || !m) {
    return 0;
  }

  if (n == 1 || m == 1) {
    return 1;
  }

  let mem = createMem(m, n);
  mem[n - 1][m - 1] = 1;

  let stack = [
    { currentRow: n - 2, currentCol: m - 1 },
    { currentRow: n - 1, currentCol: m - 2 }
  ];

  while (stack.length > 0) {
    const current = stack.shift();

    // If already calculated, continue...
    if (mem[current.currentRow][current.currentCol] !== 0) {
      continue;
    }

    // result of cell one down and one to right
    let downResult = current.currentRow + 1 >= n ? 0 : mem[current.currentRow + 1][current.currentCol];
    let rightResult = current.currentCol + 1 >= m ? 0 : mem[current.currentRow][current.currentCol + 1];

    // current result is sum of path from down + right
    mem[current.currentRow][current.currentCol] = downResult + rightResult;
    if (current.currentRow === 0 && current.currentCol === 0) {
      break;
    }

    // Go Up
    if (current.currentRow > 0) {
      stack.push({ currentCol: current.currentCol, currentRow: current.currentRow - 1 });
    }

    // Go left
    if (current.currentCol > 0) {
      stack.push({ currentCol: current.currentCol - 1, currentRow: current.currentRow });
    }
  }

  return mem[0][0];
};

function createMem(m, n) {
  let mem = [];
  for (let r = 0; r < n; r++) {
    let row = [];
    for (let c = 0; c < m; c++) {
      row.push(0);
    }
    mem.push(row);
  }
  return mem;
}

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Unique Paths");
console.log("---------------------------------------");
const input = 7;
console.log("input: " + input);

const input2 = 3;
console.log("input2: " + input2);

console.log(uniquePathsInverse(input, input2));
