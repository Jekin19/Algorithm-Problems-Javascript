let square_root = function(n) {
  if (n <= 0) {
    throw "Invalid Input";
  }

  const TOLERANCE = 0.0000001;
  let end = n / 2 + 1;
  let start = 0.1;
  while (start <= end) {
    let mid = (start + end) / 2;
    let square = mid * mid;
    if (square <= n + TOLERANCE && square >= n - TOLERANCE) {
      return mid;
    } else if (square < n) {
      start = mid;
    } else {
      end = mid;
    }
  }
  re - 1;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find Square Root");
console.log("---------------------------------------");

let i = 0.01;
while (i <= 10) {
  let res = square_root(i);
  console.log("square_root(" + i + ") = " + res);
  i += 0.01;
}

console.log(square_root(9));
