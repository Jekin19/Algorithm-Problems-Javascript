function minHours(rows, columns, grid) {
  if (rows <= 0 || columns <= 0 || !grid || grid.length <= 0) {
    return -1;
  }

  const queue = [];
  // Add all servers with a file to the queue
  grid.forEach((row, r) => {
    row.forEach((file, c) => {
      if (file === 1) {
        queue.push([r, c]);
      }
    });
  });

  let servers = rows * columns;
  // If all servers already have file
  if (queue.length === servers) {
    return 0;
  }

  // If no servers have file
  if (queue.length === 0) {
    return -1;
  }

  // Servers without files
  servers -= queue.length;
  let hours = 0;
  // We have servers with file, waiting to send file
  while (queue.length) {
    // If all servers have file, stop.
    if (!servers) {
      break;
    }

    // Increment hours
    ++hours;

    // All directions left, right, up, below
    const directions = [
      [1, 0],
      [0, 1],
      [0, -1],
      [-1, 0]
    ];
    // lop through all servers in the queue
    for (let i = queue.length; i > 0; --i) {
      const server = queue.pop();

      // Loop through all possible directions
      directions.forEach(dir => {
        const adjacentServer = [server[0] + dir[0], server[1] + dir[1]];

        // if adjacentServer is valid and doesn't have file
        if (
          adjacentServer[0] >= 0 &&
          adjacentServer[0] < rows &&
          adjacentServer[1] >= 0 &&
          adjacentServer[1] < columns &&
          grid[adjacentServer[0]][adjacentServer[1]] === 0
        ) {
          // Add adjacentServer to queue
          queue.push(adjacentServer);
          // Pass file to adjacentServer
          grid[adjacentServer[0]][adjacentServer[1]] = 1;
          // Decrease count of servers without files
          --servers;
        }
      });
    }
  }

  return hours;
}

const grid2 = [[0, 0, 0, 0, 0]];

console.log(minHours(1, 5, grid2));
const grid = [
  [0, 1, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0]
];

console.log(minHours(4, 5, grid));

const grid3 = [[]];

console.log(minHours(0, 0, grid));
