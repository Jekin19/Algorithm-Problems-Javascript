/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, N) {
  let previous = cells;
  if (cells.length < 2) {
    return cells;
  }

  while (N > 0) {
    let current = [];
    for (let i = 0; i < cells.length; i++) {
      if (i === 0) {
        current.push(previous[i + 1] === 1 ? previous[i] : 0);
      } else if (i === cells.length - 1) {
        current.push(previous[i - 1] === 0 ? 0 : previous[i]);
      } else {
        let leftCell = previous[i - 1];
        let rightCell = previous[i + 1];
        if (leftCell === rightCell) {
          current.push(1);
        } else {
          current.push(0);
        }
      }
    }
    previous = current;
    N--;
  }
  return previous;
};

console.log(JSON.stringify(prisonAfterNDays([1, 0, 0, 1, 0, 0, 1, 0], 1000000000)));
