let get_fibonacci = function(n) {
  if (n < 0) {
    return -1;
  }

  let previous = 0;
  let current = 1;
  let i = 0;
  while (i < n) {
    let temp = current;
    current = current + previous;
    previous = temp;
    i++;
  }

  return previous;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Fibonacci");
console.log("---------------------------------------");
console.log("Fibonacci at 0th is ---> " + get_fibonacci(0));
console.log("Fibonacci at 1 is ---> " + get_fibonacci(1));
console.log("Fibonacci at 2 is ---> " + get_fibonacci(2));
console.log("Fibonacci at 3 is ---> " + get_fibonacci(3));
console.log("Fibonacci at 4 is ---> " + get_fibonacci(4));
console.log("Fibonacci at 5 is ---> " + get_fibonacci(5));
console.log("Fibonacci at 6 is ---> " + get_fibonacci(6));
console.log("Fibonacci at 7 is ---> " + get_fibonacci(7));
console.log("Fibonacci at 8 is ---> " + get_fibonacci(8));
console.log("Fibonacci at 9th is ---> " + get_fibonacci(9));
