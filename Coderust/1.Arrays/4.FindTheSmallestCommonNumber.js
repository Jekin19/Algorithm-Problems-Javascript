let find_least_common_number = function(a, b, c) {
  if (!a || !b || !c) {
    throw "Invalid input.";
  }

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < a.length && j < b.length && k < c.length) {
    if (a[i] === b[j] && b[j] === c[k]) {
      return a[i];
    }

    if (a[i] < b[j]) {
      i++;
    } else if (b[j] < c[k]) {
      j++;
    } else {
      k++;
    }
  }
  //TODO: Write - Your - Code
  return -1;
};

let v1 = [1, 6, 10, 14];
let v2 = [-1, 4, 5, 6, 7, 8, 50];
let v3 = [0, 6, 7, 10, 25, 30, 40];
console.log("Least common number: " + find_least_common_number(v1, v2, v3));
