/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  let graphColor = [];
  for (let i = 0; i < graph.length; i++) {
    graphColor.push(-1);
  }

  for (let i = 0; i < graph.length; i++) {
    if (graphColor[i] === -1) {
      let stack = [];
      stack.push(i);
      graphColor[i] = 0;

      while (stack.length) {
        const index = stack.pop();
        for (j = 0; j < graph[index].length; j++) {
          const vertex = graph[index][j];
          if (graphColor[vertex] === -1) {
            stack.push(vertex);
            graphColor[vertex] = graphColor[i] === 0 ? 1 : 0;
          } else if (graphColor[vertex] === graphColor[index]) {
            return false;
          }
        }
      }
    }
  }
  return true;
};

console.log(
  isBipartite([
    [1, 2, 3],
    [0, 2],
    [0, 1, 3],
    [0, 2],
  ])
);
