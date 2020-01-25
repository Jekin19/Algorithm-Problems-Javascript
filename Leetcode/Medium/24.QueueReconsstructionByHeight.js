// https://leetcode.com/problems/queue-reconstruction-by-height/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort((array1, array2) => {
    if (array1[0] === array2[0]) {
      return array1[1] - array2[1];
    }
    return array2[0] - array1[0];
  });

  let result = [];
  for (let i = 0; i < people.length; i++) {
    let arr = people[i];
    result.splice(arr[1], 0, arr);
  }
  return result;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Queue by height");
console.log("---------------------------------------");

const input = [
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2]
];
console.log("input: " + JSON.stringify(input));
console.log(JSON.stringify(reconstructQueue(input)));
console.log("---------------------------------------");
