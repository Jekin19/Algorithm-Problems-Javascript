// https://leetcode.com/problems/unique-binary-search-trees/

// https://github.com/mission-peace/interview/blob/master/src/com/interview/dynamic/CountNumberOfTreesInBST.java

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  if (!n || n < 1) {
    return 0;
  }

  let T = [];
  T.push(1);
  T.push(1);
  for (let i = 2; i <= n; i++) {
    T.push(0);
    for (let j = 0; j < i; j++) {
      T[i] += T[j] * T[i - j - 1];
    }
  }
  return T[n];
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Unique BST");
console.log("---------------------------------------");

const input = 2;
console.log("input: " + input);
console.log(numTrees(input));
console.log("---------------------------------------");
