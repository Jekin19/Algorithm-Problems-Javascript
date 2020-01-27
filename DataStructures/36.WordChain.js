/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let result = [];
  if (!strs || strs.length === 0) {
    return result;
  }

  for (let i = 0; i < strs.length; i++) {
    let currrentStrs = [strs[i]];
    let newRemingStrs = strs.slice(0, i).concat(strs.slice(i + 1, strs.length));
    groupAnagrams_rec(newRemingStrs, result, currrentStrs);
  }
  return result;
};

function groupAnagrams_rec(remainingStrs = [], result, currentSts = []) {
  if (remainingStrs.length === 0 && currentSts.length > 1) {
    result.push(currentSts);
    return;
  }
  let newCurrentStrs = [];
  let newRemainingStrs = [];
  for (let i = 0; i < remainingStrs.length; i++) {
    let lastElement = currentSts[currentSts.length - 1];

    if (lastElement[lastElement.length - 1] === remainingStrs[i][0]) {
      let tempCurrentStrs = currentSts.concat([remainingStrs[i]]);
      let tempRemingStrs = remainingStrs.slice(0, i).concat(remainingStrs.slice(i + 1, remainingStrs.length));
      newCurrentStrs.push(tempCurrentStrs);
      newRemainingStrs.push(tempRemingStrs);
    }
  }
  if (newCurrentStrs.length > 0) {
    newCurrentStrs.forEach((curr, index) => groupAnagrams_rec(newRemainingStrs[index], result, curr));
  } else {
    if (currentSts.length > 0) {
      result.push(currentSts);
    }
  }
}

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Group Anagram");
console.log("---------------------------------------");

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("input: " + input);
console.log(JSON.stringify(groupAnagrams(input)));
console.log("---------------------------------------");
