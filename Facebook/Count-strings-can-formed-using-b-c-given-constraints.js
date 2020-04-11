function getCount(n) {
  let result = new Set();
  getCount_rec(n, "", 0, 0, result);
  return result.size;
}

let input = ["a", "b", "c"];
function getCount_rec(n, current, bCount, cCount, result) {
  if (current.length > n) {
    return result;
  } else if (current.length === n) {
    console.log(current);
    result.add(current);
  }

  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "a": {
        getCount_rec(n, current + "a", bCount, cCount, result);
      }
      case "b": {
        if (bCount === 0) {
          getCount_rec(n, current + "b", bCount + 1, cCount, result);
        }
      }
      case "c": {
        if (cCount < 2) {
          getCount_rec(n, current + "c", bCount, cCount + 1, result);
        }
      }
    }
  }

  return result;
}

console.log(getCount(2));
