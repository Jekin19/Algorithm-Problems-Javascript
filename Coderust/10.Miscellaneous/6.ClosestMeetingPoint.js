class point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  calculate_distance(p) {
    let distance = Math.sqrt((p.x - this.x) * (p.x - this.x) + (p.y - this.y) * (p.y - this.y));
    return distance;
  }

  calculate_sum_of_distances(points) {
    let distance_sum = 0;
    for (let i = 0; i < points.length; i++) {
      distance_sum += this.calculate_distance(points[i]);
    }
    return distance_sum;
  }
}

let shortest_distance_travelled_2 = function(m, points) {
  let min_pt = new point(0, 0);
  let x = 0;
  let y = 0;

  // calculate the centroid
  let centroid = new point(0, 0);
  for (let i = 0; i < points.length; i++) {
    x += points[i].x;
    y += points[i].y;
  }

  centroid.x = parseInt(Math.round(x / points.length));
  centroid.y = parseInt(Math.round(y / points.length));

  // initialize the min_pt to centroid
  min_pt.x = centroid.x;
  min_pt.y = centroid.y;

  let min_distance = min_pt.calculate_sum_of_distances(points);

  // checking points surrounding the potential centroid
  for (let i = min_pt.x - 1; i < min_pt.x + 2; i++) {
    for (let j = min_pt.y - 1; j < min_pt.y + 2; j++) {
      if (i < 1 || j > m) {
        continue;
      }

      let pt = new point(i, j);
      let distance = pt.calculate_sum_of_distances(points);
      if (distance < min_distance) {
        min_distance = distance;
        min_pt.x = pt.x;
        min_pt.y = pt.y;
      }
    }
  }
  return min_pt;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Shortest Distance Travelled");
console.log("---------------------------------------");

console.log("Testing grid 1...");
let m = 5; // size of the grid
let points = [];
points.push(new point(1, 2));
points.push(new point(3, 3));
points.push(new point(4, 2));

console.log("Solution 2:");
let pt = shortest_distance_travelled_2(m, points);
console.log("Shortest Distance Point = p(" + pt.x + ", " + pt.y + ")");

console.log("Testing grid 2...");
m = 10; // size of the grid
points = [];
points.push(new point(1, 1));
points.push(new point(3, 5));
points.push(new point(6, 2));
points.push(new point(7, 7));
points.push(new point(8, 4));

console.log("Solution 2:");
pt = shortest_distance_travelled_2(m, points);
console.log("Shortest Distance Point = p(" + pt.x + ", " + pt.y + ")");

console.log("Testing grid 3...");
m = 8; // size of the grid
points = [];
points.push(new point(4, 3));
points.push(new point(5, 5));
points.push(new point(2, 7));

console.log("Solution 2:");
pt = shortest_distance_travelled_2(m, points);
console.log("Shortest Distance Point = p(" + pt.x + ", " + pt.y + ")");
