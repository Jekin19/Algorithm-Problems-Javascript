// https://leetcode.com/problems/word-search/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (!board || !word) {
    return false;
  }

  let rowLength = board.length;
  let colLength = board[0].length;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (board[row][col] === word[0]) {
        let stack = [
          {
            currentString: word[0],
            currRow: row,
            currCol: col,
            wordIndex: 0,
            visitedNodes: markVisitedNodes(row, col, nonVisitedGrid(rowLength, colLength))
          }
        ];
        while (stack.length > 0) {
          const current = stack.pop();

          if (current.currentString == word) {
            return true;
          }
          if (current.wordIndex >= word.length - 1) {
            continue;
          }

          populateStack(stack, current, word, board);
        }
      }
    }
  }

  return false;
};

var exist2 = function(board, word) {
  if (!board || !word) {
    return false;
  }

  let rowLength = board.length;
  let colLength = board[0].length;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (board[row][col] === word[0]) {
        if (
          exist_rec(board, word, markVisitedNodes(row, col, nonVisitedGrid(rowLength, colLength)), row, col, word[0], 0)
        ) {
          return true;
        }
      }
    }
  }

  return false;
};

var exist_rec = function(board, word, visitedNodes, currRow, currCol, currentString, wordIndex) {
  if (currentString == word) {
    return true;
  }

  if (wordIndex >= word.length - 1) {
    return;
  }
  const currentChar = word[wordIndex + 1];
  let up = false;
  if (currRow - 1 >= 0 && board[currRow - 1][currCol] === currentChar && !visitedNodes[currRow - 1][currCol]) {
    up = exist_rec(
      board,
      word,
      markVisitedNodes(currRow - 1, currCol, visitedNodes),
      currRow - 1,
      currCol,
      currentString + currentChar,
      wordIndex + 1
    );
  }
  let down = false;
  // Down
  if (
    currRow + 1 < board.length &&
    board[currRow + 1][currCol] === currentChar &&
    !visitedNodes[currRow + 1][currCol]
  ) {
    down = exist_rec(
      board,
      word,
      markVisitedNodes(currRow + 1, currCol, visitedNodes),
      currRow + 1,
      currCol,
      currentString + currentChar,
      wordIndex + 1
    );
  }

  let left = false;
  // Left
  if (currCol - 1 >= 0 && board[currRow][currCol - 1] === currentChar && !visitedNodes[currRow][currCol - 1]) {
    left = exist_rec(
      board,
      word,
      markVisitedNodes(currRow, currCol - 1, visitedNodes),
      currRow,
      currCol - 1,
      currentString + currentChar,
      wordIndex + 1
    );
  }

  let right = false;
  // Right
  if (
    currCol + 1 < board[0].length &&
    board[currRow][currCol + 1] === currentChar &&
    !visitedNodes[currRow][currCol + 1]
  ) {
    right = exist_rec(
      board,
      word,
      markVisitedNodes(currRow, currCol + 1, visitedNodes),
      currRow,
      currCol + 1,
      currentString + currentChar,
      wordIndex + 1
    );
  }

  return up || down || left || right;
};

function populateStack(stack, current, word, board) {
  const currentChar = word[current.wordIndex + 1];
  // Up
  if (
    current.currRow - 1 >= 0 &&
    board[current.currRow - 1][current.currCol] === currentChar &&
    !current.visitedNodes[current.currRow - 1][current.currCol]
  ) {
    stack.push({
      currentString: current.currentString + currentChar,
      currRow: current.currRow - 1,
      currCol: current.currCol,
      wordIndex: current.wordIndex + 1,
      visitedNodes: markVisitedNodes(current.currRow - 1, current.currCol, current.visitedNodes)
    });
  }

  // Down
  if (
    current.currRow + 1 < board.length &&
    board[current.currRow + 1][current.currCol] === currentChar &&
    !current.visitedNodes[current.currRow + 1][current.currCol]
  ) {
    stack.push({
      currentString: current.currentString + currentChar,
      currRow: current.currRow + 1,
      currCol: current.currCol,
      wordIndex: current.wordIndex + 1,
      visitedNodes: markVisitedNodes(current.currRow + 1, current.currCol, current.visitedNodes)
    });
  }

  // Left
  if (
    current.currCol - 1 >= 0 &&
    board[current.currRow][current.currCol - 1] === currentChar &&
    !current.visitedNodes[current.currRow][current.currCol - 1]
  ) {
    stack.push({
      currentString: current.currentString + currentChar,
      currRow: current.currRow,
      currCol: current.currCol - 1,
      wordIndex: current.wordIndex + 1,
      visitedNodes: markVisitedNodes(current.currRow, current.currCol - 1, current.visitedNodes)
    });
  }

  // Right
  if (
    current.currCol + 1 < board[0].length &&
    board[current.currRow][current.currCol + 1] === currentChar &&
    !current.visitedNodes[current.currRow][current.currCol + 1]
  ) {
    stack.push({
      currentString: current.currentString + currentChar,
      currRow: current.currRow,
      currCol: current.currCol + 1,
      wordIndex: current.wordIndex + 1,
      visitedNodes: markVisitedNodes(current.currRow, current.currCol + 1, current.visitedNodes)
    });
  }
}

let nonVisitedGrid = function(rowLength, colLength) {
  const grid = [];
  for (let i = 0; i < rowLength; i++) {
    let temp = [];
    for (let j = 0; j < colLength; j++) {
      temp.push(false);
    }
    grid.push(temp);
  }
  return grid;
};

let markVisitedNodes = function(i, j, grid) {
  // making a clone of grid, you can use map or lodash clone function as well
  let newGrid = JSON.parse(JSON.stringify(grid));
  newGrid[i][j] = true;
  return newGrid;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Word Search");
console.log("---------------------------------------");
let matrix = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
];
console.log(exist(matrix, "ABCCED"));
console.log(exist(matrix, "ABCB"));
console.log(exist(matrix, "SEE"));
console.log(exist(matrix, "ABA"));

console.log(exist2(matrix, "ABCCED"));
console.log(exist2(matrix, "ABCB"));
console.log(exist2(matrix, "SEE"));
console.log(exist2(matrix, "ABA"));
