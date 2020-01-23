// Scoring options are 1, 2, 4
let scoring_options = function(n) {
  if (n < 1) {
    return -1;
  }

  let scoringOptions = [1, 2, 4];
  let result = [];
  // Initialize result array with 0's
  for (let i = 1; i <= n; i++) {
    result[i] = 0;
  }
  // result of 0 is 1.
  result[0] = 1;
  // looping with increments of smallest scoring option. 1,2,3,4,5 in this case
  for (let i = scoringOptions[0]; i <= n; i = i + scoringOptions[0]) {
    // looping through scoring options 1,2,4.
    for (let j = 0; j < scoringOptions.length; j++) {
      let diff = i - scoringOptions[j];
      let tempResult = 0;
      // if current score - score option = 0, then result is 1 else the value saved in result for that score index. i.e.
      // if i = 3, j=1 then scoringOption is 2, so diff is 1. hence value will be result[1].
      if (diff === 0) {
        tempResult = 1;
      } else if (diff > 0) {
        tempResult = result[diff];
      }
      // add result for current scoring option to already calc options for that score (i)
      result[i] = result[i] + tempResult;
    }
  }
  return result[n];
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Game Scoring");
console.log("---------------------------------------");
console.log("scoring_options 5 --> " + scoring_options(5));
console.log("++++++ Test Done Successfully ++++++");
