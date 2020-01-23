let levenshtein_distance = function(str1, str2) {
  if (str2.length === 0) {
    return str1.length;
  }

  if (str1.length === 0) {
    return str2.length;
  }

  let result = [];
  for (let i = 0; i < str1.length + 1; i++) {
    result.push([]);
    for (let j = 0; j < str2.length + 1; j++) {
      result[i].push(0);
    }
  }
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      // cost
      let cost = str2[j] === str1[i] ? 0 : 1;

      if (i > 0 && j > 0) {
        result[i][j] = Math.min(result[i - 1][j] + 1, result[i][j - 1] + 1, result[i - 1][j - 1] + cost);
      } else if (i > 0) {
        result[i][j] = Math.min(result[i - 1][j] + 1, cost);
      } else if (j > 0) {
        result[i][j] = Math.min(result[i][j - 1] + 1, cost);
      } else {
        result[i][j] = cost;
      }
    }
  }
  return result[str1.length - 1][str2.length - 1];
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Levenshtein Distance");
console.log("---------------------------------------");

console.log("Testing Solution 1...");
let d = levenshtein_distance("", "");
console.log('("", "") = ' + d);

d = levenshtein_distance("kite", "");
console.log('("kite", "") = ' + d);

d = levenshtein_distance("", "kitten");
console.log('("", "kitten") = ' + d);

d = levenshtein_distance("computer", "computer");
console.log('("computer", "computer") = ' + d);

d = levenshtein_distance("test", "text");
console.log('("test", "text") = ' + d);

d = levenshtein_distance("kitten", "sitting");
console.log('("kitten", "sitting") = ' + d);

d = levenshtein_distance("this is a string", "This is a string");
console.log('("this is a string", "This is a string") = ' + d);

d = levenshtein_distance("this is a string", "thisisastring");
console.log('("this is a string", "thisisastring") = ' + d);

d = levenshtein_distance("appropriate meaning", "approximate matching");
console.log('("appropriate meaning", "approximate matching") = ' + d);

d = levenshtein_distance("intention", "execution");
console.log('("intention", "execution") = ' + d);

d = levenshtein_distance("min", "max");
console.log('("min", "max") = ' + d);

console.log("++++++ Test Done Successfully ++++++");
