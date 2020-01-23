let find_pythagorean_triplets = function(arr) {
  let triplets = [];
  if (!arr) {
    return triplets;
  }
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      continue;
    }

    let c2 = arr[i] * arr[i];

    let j = 0;
    let k = arr.length - 1;

    while (j < k) {
      if (j === i || arr[j] === 0) {
        j++;
        continue;
      }

      if (k === i || arr[k] === 0) {
        k--;
        continue;
      }

      let a2 = arr[j] * arr[j];
      let b2 = arr[k] * arr[k];

      if (a2 + b2 === c2) {
        triplets.push([arr[i], arr[j], arr[k]]);
        break;
      } else if (a2 + b2 + -c2 > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return triplets;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find Pythagorean Triplet Solution 2");
console.log("---------------------------------------");

let pythagorean = [4, 8, 19, 6, 3, 12, 18, 9, 5, 15, 10];
let pythagorean_result = find_pythagorean_triplets(pythagorean);
console.log(pythagorean);
console.log(pythagorean_result);
