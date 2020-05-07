let can_segment_string = function (s = "", dict = new Set()) {
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

let can_segment_string_with_memoization = function (s = "", dict = new Set()) {
  if (!s || !dict) {
    throw "Invalid Input.";
  }
  return can_segment_string_mem(s, dict, new Map());
};

let can_segment_string_mem = function (s = "", dict = new Set(), map) {
  for (let i = 0; i < s.length; i++) {
    const firstElement = s.substring(0, i + 1);
    if (dict.has(firstElement)) {
      const secondElement = s.substring(i + 1, s.length);
      if (secondElement.length === 0 || dict.has(secondElement)) {
        return true;
      } else {
        if (!map.has(secondElement)) {
          map.set(secondElement, can_segment_string_mem(secondElement, dict, map));
        }
        if (map.get(secondElement)) {
          return true;
        }
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

let s = "applepearpeachpiepeachpeargggpeach";
let dict = new Set(["pie", "pear", "apple", "peach"]);
if (can_segment_string(s, dict)) {
  console.log("String Can be Segmented");
} else {
  console.log("String Can NOT be Segmented");
}
