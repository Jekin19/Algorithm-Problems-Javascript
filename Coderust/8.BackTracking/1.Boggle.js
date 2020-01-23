let createDictionaryWithPrefix = function(dictionary = new Set()) {
  // creatinn a dictionary with all prefix combinations
  // e.g. if dictionary = ['hi', 'well'], output dictionary is ['h', 'hi', 'w', 'we', 'well']
  let set = new Set();

  dictionary.forEach(key => {
    for (let i = 0; i < key.length; i++) {
      set.add(key.substring(0, i + 1));
    }
  });
  return set;
};

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
  // making a clone of grid, you can use map or lodash clone function as well
  let newGrid = JSON.parse(JSON.stringify(grid));
  newGrid[i][j] = true;
  return newGrid;
};

let find_all_words = function(grid = [[]], dictionary) {
  if (!grid || !dictionary) {
    return null;
  }
  let prefixDictionary = createDictionaryWithPrefix(dictionary);
  let gridLength = grid.length;
  let result = new Set();

  // traversing through grid, starting from each character
  for (let i = 0; i < gridLength; i++) {
    for (let j = 0; j < gridLength; j++) {
      // check if any word in dictionary starts with current character
      if (prefixDictionary.has(grid[i][j])) {
        const stack = [
          { i: i, j: j, visitedNodes: markVisitedNodes(i, j, nonVisitedGrid(gridLength)), word: "".concat(grid[i][j]) }
        ];
        while (stack.length > 0) {
          const current = stack.pop();
          // you can add a character to current word from 1 place above/below or diagonal like a king in chess.
          let rowStart = current.i - 1 >= 0 ? current.i - 1 : 0;
          let rowEnd = current.i + 1 < gridLength ? current.i + 1 : gridLength - 1;
          let colStart = current.j - 1 >= 0 ? current.j - 1 : 0;
          let colEnd = current.j + 1 < gridLength ? current.j + 1 : gridLength - 1;

          // traversion all options of appending new character.
          for (let row = rowStart; row <= rowEnd; row++) {
            for (let col = colStart; col <= colEnd; col++) {
              const newWord = current.word.concat(grid[row][col]);
              // if node is not already visted and part of prefix dictionary
              if (!current.visitedNodes[row][col] && prefixDictionary.has(newWord)) {
                stack.push({
                  i: row,
                  j: col,
                  visitedNodes: markVisitedNodes(row, col, current.visitedNodes),
                  word: newWord
                });

                // if word is in dictionary add to final result.
                if (dictionary.has(newWord)) {
                  result.add(newWord);
                }
              }
            }
          }
        }
      }
    }
  }
  return result;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Boggle");
console.log("---------------------------------------");
let grid = [
  ["c", "a", "t"],
  ["r", "r", "e"],
  ["t", "o", "n"]
];

let dictionary = new Set(["cat", "cater", "cartoon", "toon", "moon", "not", "tone", "apple", "ton", "art"]);
let words = find_all_words(grid, dictionary);
words.forEach(function(value1) {
  console.log(value1);
});
console.log("++++++ Test Done Successfully ++++++");
