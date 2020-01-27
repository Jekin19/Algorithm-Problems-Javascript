// https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  if (!candidates || candidates.length === 0 || !target) {
    return [];
  }

  let paths = [];
  for (let i = 0; i <= target; i++) {
    paths.push([]);
  }
  candidates.forEach(candidate => {
    for (let i = 1; i <= target; i++) {
      let diff = i - candidate;
      if (diff >= 0) {
        let pathOfDiff = paths[diff];
        if (pathOfDiff.length > 0) {
          pathOfDiff.forEach(p => {
            const newPath = p.concat([candidate]);
            paths[i].push(newPath);
          });
          // console.log("i: " + i + "  candidate: " + candidate + " paths[i]: " + paths[i]);
        } else if (diff === 0) {
          paths[i].push([candidate]);
          // console.log("i: " + i + "  candidate: " + candidate + " path[i]: " + paths[i]);
        }
      }
    }
  });
  return paths[target];
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Combination Sum");
console.log("---------------------------------------");

const input = [2, 3, 6, 7];
console.log("input: " + input);
const target = 7;
console.log("target: " + target);
console.log(JSON.stringify(combinationSum(input, target)));
console.log("---------------------------------------");
