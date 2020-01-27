// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let result = [];
  if (!strs || strs.length === 0) {
    return result;
  }

  let map = new Map();
  for (let str of strs) {
    let charCodes = getCharCode(str);
    if (map.has(charCodes)) {
      const val = map.get(charCodes);
      val.push(str);
      map.set(charCodes, val);
    } else {
      map.set(charCodes, [str]);
    }
  }

  for (let value of map.values()) {
    result.push(value);
  }
};

function getCharCode(str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    let charCode = str[i];
    if (map.has(charCode)) {
      let curr = map.get(charCode) + 1;
      map.set(charCode, curr);
    } else {
      map.set(charCode, 1);
    }
  }
  let result = "";
  let data = "abcdefghijklmnopqrstuvwxyz".split("");
  data.forEach(d => {
    if (map.has(d)) {
      result = result + map.get(d);
    } else {
      result = result + "0";
    }
  });
  return result;
}

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Group Anagram");
console.log("---------------------------------------");

const input = ["cab", "tin", "pew", "duh", "may", "ill", "buy", "bar", "max", "doc"];
console.log("input: " + input);
console.log(JSON.stringify(groupAnagrams(input)));
console.log("---------------------------------------");
