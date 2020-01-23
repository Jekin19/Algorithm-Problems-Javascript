let can_segment_string = function(s = "", dict = new Set()) {
  if (!s || !dict) {
    throw "Invalid Input.";
  }

  for (let i = 0; i < s.length; i++) {
    const firstElement = s.substring(0, i + 1);
    if (dict.has(firstElement)) {
      const secondElement = s.substring(i + 1, s.length);
      if (dict.has(secondElement)) {
        return true;
      } else {
        return can_segment_string(secondElement, dict);
      }
    }
  }
  return false;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("String Segmentation");
console.log("---------------------------------------");

let s = "applepie";
let dict = new Set(["pie", "pear", "apple", "peach"]);
if (can_segment_string(s, dict)) {
  console.log("String Can be Segmented");
} else {
  console.log("String Can NOT be Segmented");
}
