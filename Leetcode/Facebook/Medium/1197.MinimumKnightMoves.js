// https://leetcode.com/problems/minimum-knight-moves/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function (x, y) {
  let queue = [{ x: 0, y: 0 }];
  let moves = 0;
  const directions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];
  const set = new Set();
  set.add("0,0");
  while (queue.length > 0) {
    let queueLength = queue.length,
      q = 0;
    while (q < queueLength) {
      const current = queue.shift();
      if (current.x === x && current.y === y) {
        return moves;
      }
      for (let direction of directions) {
        let newX = current.x + direction[0];
        let newY = current.y + direction[1];
        if (!set.has(newX + "," + newY)) {
          queue.push({ x: newX, y: newY });
          set.add(newX + "," + newY);
        }
      }
      q++;
    }
    moves++;
  }
};

console.log(minKnightMoves(2, 112));
